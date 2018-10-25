//***** написание модулей

  // index.js
 /* const utils = require('./utils.js'); //подключили файл с утилитами (приведен ниже)

  utils.average([1, 2, 3, 4, 5]);
      

  // utils.js
  function average(arr) { code... }

  присваиваем ключ = функция
  exports.average = average
  */

/*
// Еще вариант
  // index.js
  const average = require('./average');

  average([1, 2, 3, 4, 5]);
      

  // average.js
  function average(arr) { code... }

  module.exports = average;// - в данном случае экспортируется конкретное значение, то есть передается функция, а не объект как в прошлом случае

//   Как присвоить несколько ключей?
*/

// ***********Явное указание контекста
/*
function showFullName() {
    console.log(this.firstName + ' ' + this.lastName); //Функция задана вне контекста, но ее содержимое применяется к контексту, к которому применяется функция
  }

  const user = { firstName: 'Jaimes', lastName: 'Johnson' };

  showFullName.call(user); // "Jaimes Johnson" - метод call указывает на контекст, который применяется к функции (user), то есть this будет user

// ********
function greetUser(greeting) {
    console.log(greeting + this.firstName + ' ' + this.lastName);
  }

  const user = { firstName: 'Jaimes', lastName: 'Johnson' };

  greetUser.call(user, 'Hello, '); // "Hello, Jaimes Johnson" - call позволяет передавать больше параметров, чем может принять функция. Первым объявляется объект, который мы хотим использовать в качестве контекста.

  // ******************** Одалживание метода
  function printArgs() {
    // arr.slice() copies all arguments
    const args = [].slice.call(arguments); //функция не принимает явно никаких параметров, но используя arguments мы можем передать функции кучу параметров (то есть мы не знаем точно, сколько аргументов надо будет передать функции)
    // arguments при получении аргументов автоматически создает подобие массива всех аргументов и хранит его в себе до отработки функции
    // пустой массив с методом slice в контексте arguments создает массив аргументов, с которым удобно работать и на который работают любимые нами плюшки типа методов работы с массивами (join, map и т.д.)
    console.log(args.join(' '));
  }

  printArgs('Hello', 'whole', 'new', 'world');
  // Hello whole new world
*/

// ************** метод apply
/*
function greetUser(greeting) {
    console.log(greeting + this.firstName + ' ' + this.lastName);
  }

  const user = { firstName: 'Jaimes', lastName: 'Johnson' };

  greetUser.call(user, 'Hello, '); // "Hello, Jaimes Johnson" первым аргументом передали контекст, вторым еще один. Используется когда количество аргументов ограничено
  greetUser.apply(user, ['Hello, ']); // "Hello, Jaimes Johnson" первым аргументом - контекст, вторым - массив. Используется, когда количество аргументов неизвестно

// ************** метод max выбирает наибольшее значение из полученных
  Math.max.apply([1, 2, 3, 4, 5]); // 5, тут apply позволяет передать в качестве аргумента массив
*/
/*
  function average() {
    const args = [].slice.call(arguments); //Позаимствовали метод и создали массив переданных функции аргументов, присвоили его переменной agrs. arguments - ссылка на то, что мы передали в функцию в качестве аргументов и это добро
    console.log (arguments);
    return args.reduce((acc, x) => acc + x, 0)/args.length // Вернули посчитанное среднее  - методом reduce перебрали массив и посчитали его сумму, поделили на длину массива - вот тебе и среднее
  }

  console.log(average(1, 2, 3, 4, 5, 6, 7));
*/
  //********* метод bind
/*
  const user = {
    name: 'Marco',
    greet: function() {
      console.log(this.name); //Здесь контекстом будет setTimeout, потому не отработает
    }
  };

  setTimeout(user.greet, 1000); // undefined второй аргумент - через сколько выполнить эту функцию (миллисекунды)

//   чтобы работало нужен метод bind

function greet() {
    console.log(this); //выводим в консоль имеющийся контекст
  }

  const g = greet.bind('Hello!'); //присваиваем константе g функцию с привязанным контекстом, но не вызываем ее сразу
  g(); // "Hello!", вызываем функцию hello с присвоенным ранее контекстом


// bind принимает функцию, ее аргументы и контекст (работает через замыкание, хз как)


const user = {
    name: 'Marco',
    greet: function() {
      console.log(this.name);
    }
  };

  setTimeout(user.greet.bind(user), 1000); // Marco - четко указали контекст исполнения функции greet - user


//**********карринг - привязка аргумента, то есть аргумент а всегда будет равен двойке
function mul(a, b) {
    return a * b; //функция, которая увеличивает переданное ей значение в 2 раза
  }

  const double = mul.bind(null, 2); //в качестве контекста передаем null, потому что контекст не используется, соответственно а = 2, итого если передаем еще один аргумент (3), то b = 3
  double(3); // mul(2, 3); -> 6

*/
  
//   const user = {
//     name: 'Michael',
//     login: function() {
//         const u = this
//       setTimeout(function() {
//         console.log('User ' + u.name + ' logged!');
//       }, 1000);
//     }
//   };

//   еще вариант через бинд
// const user = {
//     name: 'Michael',
//     login: function() {
//       const greet = function() {
//         console.log('User ' + this.name + ' logged!');
//       };
  
//       const bindedGreet = greet.bind(this);
  
//       setTimeout(bindedGreet, 1000);
//     }
//   };
  
//   user.login(); // "User undefined logged!"

//   ********* Наследование

// function CoffeeMachine() {
//     let waterAmount = 0;

//     this.insertWater = function() {
//       waterAmount = waterAmount + 100;
//     };

//     this.getWaterAmount = function() {
//       return waterAmount;
//     }
//   }

//   const coffeeMachine = new CoffeeMachine(); //объект coffeeMachine с двумя методами - залить воду или узнать, сколько осталось воды

function Machine() {
    let enabled = false; //Переменная, которую мы можем изменить только методами (внутренний интерфейс)
    this.enable = function() { enabled = true; };
    this.disable = function() { enabled = false; };
    this.isEnabled = function() { return enabled; };
    // эти три метода - внешний интерфейс
  }

  function Car() { //Car наследует все методы и свойства machine
    Machine.apply(this, arguments); //контекст тут будет объект, создаваемый в Car, этой строкой мы наследуем весь внешний интерфейс Machine и можем использовать внешние функции
    this.type = 'BMW'; //расширяем класс machine, добавляя тип машины
  }

  const car = new Car();
  car.enable();
  console.log(car.isEnabled()); // true
  console.log(car.type); // "BMW"

//   **********instanceof

function Student(name) {
    this.name = name;
  }

  const student = new Student('Ron'); //Создали нового студента с именем Ron

// Можно проверить от каких классов наш новый класс наследовал свойства

  student instanceof Student; // true - наследник класса Студент
  student instanceof Object; // true - наследник класса Object
  student instanceof Number; // false - но не наследник числа (потому что объект)