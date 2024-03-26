// read analogy voltage

const PIN_ADC = 28;
const PIN_LED1 = 21;
const PIN_LED2 = 20;
const PIN_LED3 = 19;

const MAX = 0.5;
const MIN = 0;
const NUM_OF_LEDS = 3;
const TOLERANCE_1 = (MAX - MIN) / NUM_OF_LEDS;
const TOLERANCE_2 = TOLERANCE_1 * 2;

function main() {
  pinMode(PIN_LED1, OUTPUT);
  pinMode(PIN_LED2, OUTPUT);
  pinMode(PIN_LED3, OUTPUT);

  digitalWrite(PIN_LED1, HIGH);
  digitalWrite(PIN_LED2, HIGH);
  digitalWrite(PIN_LED3, HIGH);

  setInterval(() => {
    const voltage = analogRead(PIN_ADC);

    digitalWrite(
      PIN_LED1,
      voltage >= MIN && voltage <= TOLERANCE_1 ? HIGH : LOW,
    );
    digitalWrite(
      PIN_LED2,
      voltage > TOLERANCE_1 && voltage <= TOLERANCE_2 ? HIGH : LOW,
    );
    digitalWrite(
      PIN_LED3,
      voltage > TOLERANCE_2 && voltage <= MAX ? HIGH : LOW,
    );
  }, 100);
}

main();
