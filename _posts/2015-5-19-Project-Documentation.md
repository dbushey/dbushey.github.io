---
layout: post
title: Project Documentation
---

### Sandstorm Box: Project Documentation

#### Design
The first design was a single box with a false top separating the hardware from the "stage" where the sand is blown.

<img src="../images/sandstorm_box1.png" width="300">

I ended up laser cutting two boxes and stacking one on top of the other. 

<img src="../images/box.jpg" width="300" height="300">

The bottom of the top box and the top of the bottom box have 4 holes on the corners and the motors with blades are positioned directly on top of these holes so air is blown downwards.
To hold the motors in place, I 3d printed 4 cubes that fit the motors and blades.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Bgkv-HUuV8s" frameborder="0" allowfullscreen></iframe>

<img src="../images/motorsbase.jpg" width="300">


#### Code:
```
#include <AFMotor.h>

AF_DCMotor Motor1(1);
AF_DCMotor Motor2(2);
AF_DCMotor Motor3(3);
AF_DCMotor Motor4(4);


int pirState = LOW;
int pirVal = 0;
int pirPin = 12;

void setup() {
   
  Serial.begin(9600);
  pinMode(pirPin, INPUT);
  
}

void loop() {
  pirVal = digitalRead(pirPin);

  //if motion is captured, start the motors
  if (pirVal == HIGH) {
    Motor1.setSpeed(255);
    Motor2.setSpeed(255);
    Motor3.setSpeed(255);
    Motor4.setSpeed(255);
    Motor1.run(FORWARD);
    Motor2.run(FORWARD);
    Motor3.run(FORWARD);
    Motor4.run(FORWARD);
    delay(2000);
  }
  ```

  
}


