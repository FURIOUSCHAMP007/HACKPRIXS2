#include <Wire.h>
#include <MPU6050.h>
#include <Servo.h>

MPU6050 mpu;
Servo myServo;

const int servoPin = 9;
const float threshold = 60.0;  // Trigger threshold in degrees/sec

void setup() {
  Serial.begin(9600);
  Wire.begin();

  mpu.initialize();
  if (!mpu.testConnection()) {
    Serial.println("MPU6050 connection failed!");
    while (1);
  }

  myServo.attach(servoPin);
  myServo.write(90);  // Neutral position

  Serial.println("MPU6050 connected. Ready to detect motion.");
}

void loop() {
  int16_t gx, gy, gz;
  mpu.getRotation(&gx, &gy, &gz);

  float gyroX = gx / 131.0;
  float gyroY = gy / 131.0;

  Serial.print("Gyro X rate: ");
  Serial.print(gyroX, 2);
  Serial.print(" °/s | Gyro Y rate: ");
  Serial.println(gyroY, 2);

  // Trigger servo if rotation exceeds threshold on X or Y axis
  if (abs(gyroX) > threshold || abs(gyroY) > threshold) {
    myServo.write(0);  // Move to 0°
    delay(1000);       // Stay there for a second
    myServo.write(90); // Return to neutral
  }

  delay(100);  // Read every 100ms
}