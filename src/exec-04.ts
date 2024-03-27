// read analogy voltage with fast blinking LEDs

const PIN_ADC = 28;
const PIN_LED1 = 21;
const PIN_LED2 = 20;
const PIN_LED3 = 19;

const MAX = 0.5;
const MIN = 0;
const NUM_OF_LEDS = 3;

function getVoltages(analogValue: number) {
  const scale = 4;
  const matched = Math.floor((analogValue / MAX) * 100) % (NUM_OF_LEDS * scale);

  return [
    matched >= MIN && matched <= scale ? HIGH : LOW,
    matched >= scale && matched <= scale * 2 ? HIGH : LOW,
    matched >= scale * 2 && matched <= scale * 3 ? HIGH : LOW,
  ];
}

function main() {
  pinMode(PIN_LED1, OUTPUT);
  pinMode(PIN_LED2, OUTPUT);
  pinMode(PIN_LED3, OUTPUT);

  digitalWrite(PIN_LED1, HIGH);
  digitalWrite(PIN_LED2, HIGH);
  digitalWrite(PIN_LED3, HIGH);

  setInterval(() => {
    const analogValue = analogRead(PIN_ADC);
    const [voltage1, voltage2, voltage3] = getVoltages(analogValue);

    digitalWrite(PIN_LED1, voltage1);
    digitalWrite(PIN_LED2, voltage2);
    digitalWrite(PIN_LED3, voltage3);
  }, 100);
}

main();

export {}