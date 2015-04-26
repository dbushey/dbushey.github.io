---
layout: post
title: The Sandstorm Box Code Plan
---
### Explanation:
When the sensor detects the prsence of an object, DC motors are activated. 
Motors will stay on until the sensor can no longer detect the presence of an object.

The idea is to first design the proof of concept with one motor.
Later on, I will add more dc motors (4 total) and have them working in sequence.

### Componentes:
* PIR Sensor
* Arduino UNO
* DC motor + blades
* 9V Battery
* Breadboard
* Transistor
* Diode
* Resistors

### Pseudocode:
1. If the sensor captures motion
2. Its state is set to HIGH
3. Then that signal is sent to run the motors subroutine.
4. Delay
5. If the sensor no loger captures motion
6. Its state is set to LOW
4. Then a signal is sent to turn off the motors.

### Example Code:

This [code](http://www.instructables.com/id/Motion-Activated-LEDs/step5/Arduino-Code/) is actually for a motion sensor and LEDs. 
I will try to customize it to work with motors.

