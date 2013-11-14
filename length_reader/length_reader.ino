int ledPin = A3;

void setup() {
  pinMode(ledPin, OUTPUT);
  // initialize serial:
  Serial.begin(9600);
}

void loop() {
  if (Serial.available()) {
    int inVal = Serial.parseInt();
    int outVal = inVal/140 * 255;
    analogWrite(ledPin, outVal);
    Serial.println(outVal);
  }
}
