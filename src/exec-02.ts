const led0 = 0;
const led1 = 1;
const led2 = 2;
const led3 = 3;

pinMode(led0, OUTPUT);
pinMode(led1, OUTPUT);
pinMode(led2, OUTPUT);
pinMode(led3, OUTPUT);

function run() {
    for (let i = 0; i < 16; i += 1) {
        const binary = i.toString(2).padStart(4, '0');
    
        const [l0, l1, l2, l3] = binary.split('')
    
        digitalWrite(led0, l0 === '1' ? 1 : 0)
        digitalWrite(led1, l1 === '1' ? 1 : 0)
        digitalWrite(led2, l2 === '1' ? 1 : 0)
        digitalWrite(led3, l3 === '1' ? 1 : 0)
    
        delay(50)
    }
    
    digitalWrite(led0, 0)
    digitalWrite(led1, 0)
    digitalWrite(led2, 0)
    digitalWrite(led3, 0)

    delay(100)
}

function main() {
    Array.from({ length: 10 }).forEach(run)
}

main()