//Useful In K-Shoot Mania Editor
#include <Keyboard.h>
int i;
int read_value[5] = {2, 3, 4, 5, 9};
uint8_t write_value[4] = {'h', 'j', 'k', 'l'};

void setup() {
  pinMode(2, INPUT_PULLUP);
  pinMode(3, INPUT_PULLUP);
  pinMode(4, INPUT_PULLUP);
  pinMode(5, INPUT_PULLUP);
  pinMode(9, INPUT_PULLUP);
  Keyboard.begin();
  Serial.begin(9600);
}

void loop() {
  for (i = 0; i < 4; i++) {
    if (digitalRead(read_value[i]) == HIGH) {
      uint8_t temp = write_value[i];
      Keyboard.press(temp);
      delay(50);
      Keyboard.releaseAll();
    }
  }
  if (digitalRead(read_value[5]) == HIGH) {
    Keyboard.press(KEY_LEFT_GUI);
    delay(30);
    Keyboard.press('s');
    delay(50);
    Keyboard.releaseAll();
  }
}
