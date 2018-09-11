//*Функции и прочее добро

//Если функция изменяет внешнюю переменную, то переменная такой и останется
//Однако, нельзя извне запросить переменную, объявленную в теле функции

//Функция, которая принимает два параметра:
//function hello(username, message) {

//}

//message = message || 'hello' - если message == 0, налл или не обозначено, то тогда будет hello. эквивалент (следующий слайд в презентации, 16)

//*return
//function sum (a,b){
//    return a + b
//}

//Если не передавать return никакое значение, то это прекращает выполнение функции с результатом undefined

//////////////Может ли функция вернуть prompt или что-то подобное?
//////////////Разобраться с терминалом

//Функция на проверку чет-нечет

// let number

// function isOdd (number){
//    if (typeof number !== 'number') {
//        return alert('Not a number')
//    }
   
//    else if (number % 2 === 0) {
//        return true
//    }
//    else {
//        return false
//    }
// }

//Функция, которая считает количество вызовов себя

// let county = 0;

// function counter (){
//     county++
//     return console.log ('Вызовов:' + county)

// }


// Аналогичное решение с одним каунти на любой счетчик
// function initCounter(){
//     let county = 0 //таким образом, county - не глобальная переменная, и доступ к ней мы можем получить только через функцию, что дает нам возможность присвоить функцию какой-то переменной(ым) и сократить количество кода плюс случайно не перезаписать счетчик

//     return function(){
//         return county++
//     }
// }

// const counter = initCounter(); // две разные независимые функции счетчиков, обе начинают с нуля
// const counter2 = initCounter();

// console.log(counter());

//************Методы массивов

let numbers = [1, 2, 3, 4, 5];
numbers = numbers.map((number) => number +1);
console.log (numbers); //[2, 3, 4, 5, 6]

//map - эквивалентно циклу, который проходится по всему массиву и при помощи функции что-то с ним делает

// ***********метод filter
let numbers = [1, 2, 3, 4, 5];
numbers = numbers.filter((number) => 
    number % 2 === 0
) //возвращает те значения, которые true (по функции - четные числа)

console.log (numbers); //[2, 4]

// *************find - для поиска единичных элементов

let numbers = [1, 2, 3, 4, 5];
let result = numbers.find((number) => 
    number === 1
) //возвращает то значение, которое === 1 (первое найденное)

console.log (numbers); //1

// ********** includes - то же самое, что и find, только возвращает true или false
// При первом найденном элементе возвращает true и останавливается

// *************reduce

let numbers = [1, 2, 3, 4, 5];
let result = numbers.reduce((acc, number) => 
    acc + number, 0);

let result = numbers.reduce (function (acc, number) {
    return acc + number;
}, 0)
    //так и не понял, что делает - спросить
console.log (numbers);


// Пишем функцию, которая суммирует только четные числа

let numbers = [1, 2, 3, 4, 5, 6];
let odds = numbers.filter((n) => 
    n % 2 === 0); //фильтруем массив numbers по вложенной функции, забирая только те значения, которые без остатка делятся на 2

let result2 = odds.reduce (function (acc, number) {
    return acc + number; //проходимся по массиву odds и для каждого элемента массива мы вызываем функцию с параметром acc = 0 (второе значение в скобках внизу (такой синтаксис)) и элементом массива по порядку. acc суммируется с каждым отфильтрованным ранее элементом массива и сохраняется, передаваясь в качестве аргумента в следующий цикл суммирования
}, 0)

console.log (result2);

// Аналогичная запись

let numbers = [1, 2, 3, 4, 5, 6];
function sumOdd (arr){
    let odds = arr.filter((n) => n % 2 === 0);
    return odds
    .filter ((n) => n % 2 === 0)    
    .reduce ((acc, n) => acc + n, 0);
}

console.log(sumOdd(numbers));

// **************JSON
// JSON.stringify(массив) - преобразует в строку содержимое массива
// JSON.parse(массив) - преобразует в число содержимое массива, если там что-то невалидное - все поломается


