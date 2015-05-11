---
layout: post
title: DC Motors Tutorial
---

### Fans/ DC Motors
For the Sandstorm Box project, I need 4 fans to blow the sand in the bottom of the box, simulating a sendstorm inside of the box.
For that purpose, I am using these DC 3.7V 40000RPM 100mA Motors with Helicopter Propellers. 


![Pair DC 3.7V 40000RPM 100mA 7 x 16mm Motors with Helicopter Propellers](../images/quadcopter.jpg)


![DC Motor Wiring Diagram](../images/wiring_dcmotor.png)

This diagram only shows the wiring for one dc motor but for this project four motors will be connected, each one with a PN2222 
Transistor,a 1N4001 diode and a 270 Ω Resistor, same way as the one shown in the diagram.

### Works with the Sensor
A passive PIR motion sensor changes its state from LOW to HIGH everytime the sensor detects motion. Once the HIGH state signal is
sent, the motors are activated and the motors will stay on until the sensor changes its state to LOW, that is, when the sensor no 
longer captures motion.

### Code

Using Arduino analog outputs (PWM), it's possible to control the speed of each motor by sending a
number between 0 and 255.

```
int motorsArray[] = {5, 6, 9, 10};           // Motors array for PWM 5,6,9 and 10
int numOfMotorss = 4;                       // Motor's of index 0-3
int pirState = LOW;
int pirVal = 0;
int pirPin = 12;


void setup()  {
 
  Serial.begin(9600);
  pinMode(pirPin, INPUT);
 
  int i;
  for(i = 0; i < numOfMotors; i++) {
    pinMode(motorsArray[i], OUTPUT);
  }
}

void loop()  {
  pirVal = digitalRead(pirPin);
  int i;
  //if motion is captured, start the motor's subroutine
  if (pirVal == HIGH) {
  for (i= 0; i < numOfMotors; i++) {
    analogWrite(motorsArray[i], 255);
    delay (1000);
  }
  delay (1000);
   for (i= 0; i < numOfMotors; i++) {
    analogWrite(motorsArray[i], 0);
    delay (1000);
  }
  if (pirState == LOW) {
      pirState = HIGH;
    }
  }
  //else, set all motors' values to zero
  else {
    analogWrite(motorsArray[0], 0);
    analogWrite(motorsArray[1], 0);
    analogWrite(motorsArray[2], 0);
    analogWrite(motorsArray[3], 0);
    if (pirState == HIGH) {
      pirState = LOW;
  }
}
}
```
### Results
I followed a tutorial for one 6V dc motor even though my motors are 3.7V. So far I was only able to run two motors on a Arduino Uno. 
I had uploaded the code to run one motor and that was enough to run two, I don't understand why.
I wired four motors but only the same two motors that was working before kept working - the two motors that are wired on the side of the power rail that is connected to the arduino.
I uploaded the code above and again only the two motors that were working before kept working.
I connected PN2222 transistors, 1N4001 diodes and 2.2K Ω Resistors (much higher resistor than the tutorial 270 Ω). These parts worked for two motors, but I am not positive they are appropriate for four.
The other obvious issue is that four motors require more power and I might need an external power supply. 
I stopped testing becuase the arduino motherboard was getting hot, I was concern it would burn.






