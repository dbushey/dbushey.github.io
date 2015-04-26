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

This code is actually for a motion sensor and LEDs. 
I will try to customize it to work with motors.

`/*
January 28, 2014
[author] Mark Graziano
[email] mark.graziano.13@gmail.com
[instructables profile] http://www.instructables.com/member/GraziCNU/
*/


int LEDArray[] = {5, 6, 9, 10};           // LED array for PWM 5,6,9 and 10
int numOfLEDs = 4;                       // LEDs of index 0-3
int pirState = LOW;
int pirVal = 0;
int pirPin = 12;


void setup()  {
 
  Serial.begin(9600);
  pinMode(pirPin, INPUT);
 
  int i;
  for(i = 0; i < numOfLEDs; i++) {
    pinMode(LEDArray[i], OUTPUT);
  }
}

void loop()  {
  pirVal = digitalRead(pirPin);
  int i;
  //if motion is captured, light the LEDs in sequence
  if (pirVal == HIGH) {
  for (i= 0; i < numOfLEDs; i++) {
    analogWrite(LEDArray[i], 255);
    delay (1000);
  }
  delay (1000);
   for (i= 0; i < numOfLEDs; i++) {
    analogWrite(LEDArray[i], 0);
    delay (1000);
  }
  if (pirState == LOW) {
      pirState = HIGH;
    }
  }
  //else, set all LED values to zero
  else {
    analogWrite(LEDArray[0], 0);
    analogWrite(LEDArray[1], 0);
    analogWrite(LEDArray[2], 0);
    analogWrite(LEDArray[3], 0);
    if (pirState == HIGH) {
      pirState = LOW;
  }
}
`
