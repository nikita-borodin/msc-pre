console.log(process.argv);

const numbers = process.argv.slice(2);
console.log('Аргументы:', numbers);

let sum = 0;

for (i = 0; i < numbers.length; i++) {
    
    sum = sum + parseInt(numbers[i], 10);
}
console.log('Sum:', sum);

let average = sum/numbers.length;

console.log('Avg:', average);