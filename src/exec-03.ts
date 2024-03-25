// read analogy voltage

import { ADC } from "adc";

const PIN28 = 28;

const adc = new ADC(PIN28);

function read() {
  const voltage = adc.read();
  console.log(voltage);
}

function main() {
  setInterval(() => read(), 10);
}

main();
