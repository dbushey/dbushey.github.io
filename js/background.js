var width = window.innerWidth,
    height = window.innerHeight;



var iOS = (navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false);

function drawBackground() {

  xStepsBig = d3.range(0, width, 40), // adjust the grid
  yStepsBig = d3.range(0, height, 40),
  xStepsSmall = d3.range(0, width + 6, 6),
  yStepsSmall = d3.range(0, height + 6, 6);

  var fisheye = d3.fisheye.circular()
      .focus([360, 90])
      .radius(80); // adjust the size of the ball, distortion

  var line = d3.svg.line();

  var svg = d3.select("#main").append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("fill", "#d3d3d3") /* Controls the background color of SVG, which fills entire page */
      .append("g")
      .attr("transform", "translate(-.5,-.5)");

  svg.append("rect")
      .attr("class", "background")
      .attr("width", width)
      .attr("height", height);

  svg.selectAll(".x")
      .data(xStepsBig)
    .enter().append("path")
      .attr("class", "x")
      .datum(function(x) { return yStepsSmall.map(function(y) { return [x, y]; }); });

  svg.selectAll(".y")
      .data(yStepsBig)
    .enter().append("path")
      .attr("class", "y")
      .datum(function(y) { return xStepsSmall.map(function(x) { return [x, y]; }); });

  var path = svg.selectAll("path")
      .attr("d", fishline);

  svg.on("mousemove", function() {
    fisheye.focus(d3.mouse(this));
    path.attr("d", fishline);
  });

  function fishline(d) {
    return line(d.map(function(d) {
      d = fisheye({x: d[0], y: d[1]});
      return [d.x, d.y];
    }));
  }

}//)();



$(window).resize(function(){
  width = window.innerWidth,
  height = window.innerHeight;
  $("svg").remove();
  drawBackground();
});

drawBackground();
