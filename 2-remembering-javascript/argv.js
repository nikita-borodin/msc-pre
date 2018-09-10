console.log(process.argv); //Выводим то, что получаем в процессе

const numbers = process.argv.slice(2); //Создаем константу, в которую записываем все значения аргументов со второго (минуя запрос запуска node и название файла)
console.log('Аргументы:', numbers); //Выводим аргументы в консоль

let sum = 0;//Задаем переменную, в которой будем суммировать значения аргументов

for (i = 0; i < numbers.length; i++) {//Задаем цикл, который перебирает массив аргументов
    
    sum = sum + parseInt(numbers[i], 10); //Приводим строчные значения аргументов массива к числовому виду в десятичной системе и суммируем с результатом предыдущего цикла
}
console.log('Sum:', sum); //Выводим сумму

let average = sum/numbers.length;//Считаем среднее

console.log('Avg:', average);//Выводим среднее