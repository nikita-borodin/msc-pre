// // ****** Классы, объекты, модули в node.js, методы объектов, преобразования объектов, вся фигня

// // **Модули в node.js
// // const path = require ('path') - работа с папками


// // __dirname - глобальная переменная, которая обозначает путь к текущему файлу

// // fs - модуль, который используется для записи и чтения файлов (работы с файловой системой)

// const path = require ('path'); //Подключили модуль и присвоили его константе
// const fs = require ('fs'); //Подключили модуль работы с файловой системой

// const pathToFile = path.resolve(__dirname, 'index.txt'); // Путь к текущему файлу и название файла
// // __dirname - автоматически определяется

// const content = fs.readFileSync(pathToFile, 'utf8'); //Читаем файл и записываем его содержимое в константу в соответствующей кодировке

// console.log(content);

// // Обратный метод - запись файла:
// const path = require ('path'); //Подключили модуль и присвоили его константе
// const fs = require ('fs'); //Подключили модуль работы с файловой системой

// const pathToFile = path.resolve(__dirname, 'index2.txt'); // Путь к записываемому файлу и название файла

// const content = 'somecontent';

// fs.writeFileSync(pathToFile, content, 'utf8'); //Записали контент в файл (содержимое файла перезаписывается полностью)

// // ***** process.argv - сейчас не объясняем, было дз, можно посмотреть ранее

// ******* Создать JSON и записывающую .csv файл с именами пользователей
/*
const path = require('path');
const fs = require('fs');

const pathToJSON = path.resolve(__dirname, 'index.json'); //Задали путь к JSON

const source = fs.readFileSync(pathToJSON, 'utf8'); //Прочитали JSON в нужной кодировке

const data = JSON.parse(source); //Строку JSON переделали в массив, с которым можно работать

const names = data.map(key => key.name); // Отобрали имена пользователей и сделали новый массив с ними

const users = names.join(', '); // Объединили массив в строку

pathToFile = path.resolve(__dirname, 'users.csv') // Указали путь к записываемому файлу

fs.writeFileSync(pathToFile, users, 'utf8'); // Записали файл users.csv (файл создается, а при повторном запуске перезаписывается)

// Запустить через терминал node lecture.js
*/

// ****************** Методы объектов

// Создание метода у объекта

// const user = {
//     name: 'Michael',
//     greet: function() {
//       console.log('Hello');
//     }
//   };

// // еще вариант

// const user = {};
// user.name = 'Michael';
// user.greet = function() {
//   console.log('Hello!');
// };

// // Контекст (this)
// const user = {
//     name: 'Michael',
//     greet: function() {
//       console.log('Hello, ' + this.name + '!');
//     }
// };

// // Еще вариант
// const user = {
//     name: 'Michael',
//     greet: function() {
//       console.log('Hello, ' + user.name + '!');
//     }
// };

// // В подобных случаях лучше вместо user в теле использовать this

// let user = {
//     name: 'Michael',
//     greet: function() {
//       console.log('Hello, ' + user.name + '!');
//     }
//   };

//   const admin = user;
//   user = null;
//   admin.greet(); // Error


// // Рабочий вариант (функции можно определять и писать this до определения контекста, который может быть определен позже)
// const user = {firstName: 'John'};

// function greet() {
//   console.log('Hello, ' + this.firstName + '!'); //Определили функцию, но this не определен контекст
// }

// user.greet = greet; 
// user.greet(); // "Hello, John!" - здесь определили контекст user, то есть this = user

// Создать объект калькулятор
/*
const calc = {
    firstValue: 0,
    SecondValue: 0,
    read: function (a, b){
        this.firstValue = a;
        this.secondValue = b;
    },
    sum: function(){
        return this.firstValue + this.secondValue;
    },
    mul: function(){
        return this.firstValue * this.secondValue;
    },
}

calc.read (10, 5);

console.log(calc.sum());
console.log(calc.mul());
*/
//

// **************Преобразование объектов
/*
const user = {
    name: 'Andy Warhol',
  };

  console.log(String(user)); // [object Object] - это не очень информативно, сначала надо объект преобразовать к строке

// 

const user = {
    name: 'Andy Warhol',
    toString: function() {
      return 'Andy Warhol'; // При помощи функции преобразуем объект к строке, можно также написать this.name
    }
  };

  console.log(String(user)); // 'Andy Warhol'

//   

  const user = {
    name: 'Andy Warhol',
    valueOf: function() { //Приводит к числу
      return 1;
    }
  };

  console.log(Number(user)); // 1

  */

// Создать объект count
/*
const count = {
    value: 0,
    inc: function() {
      this.value++ //Увеличили value на 1 при однократном вызове метода
      return this //вернули this, в данном контексте это будет весь объект count с value, увеличенным на 1
    },
    valueOf: function() {
      return this.value //вернули value в виде числа, а не строки (как по умолчанию для объекта)
    }
  };

// inc мы прописали сами
// valueOf - стандартный метод в node

  count.inc().inc(); //дважды вызвали функцию inc (явно)
  console.log(count + 100); // 102, метод valueOf отрабатывает неявно и вызывается сам собой при сложении, преобразуя объект к числу, чтобы можно было складывать именно как числа
  */

// *************** Создание объектов

// используется директива new
/*
function Student(name) {
//Можно так добавлять всякие методы и т.д.
    this.name = name; //добавляет ключ name c содержимым name
    this.isExcellent = true; //еще один ключ со своим значением, что то же самое Student.prototype.isExcellent = true;, написанное вне тела функции. prototype отрабатывает для создание ключа
  }

  const student = new Student('Johnny');
// При использовании new:
// Создаётся новый пустой объект
// Ключевое слово this получает ссылку на этот объект
// Функция выполняется. Как правило, она модифицирует this (т.е. этот новый объект), добавляет методы, свойства
// Возвращается this

  console.log(student);
  */

//******************************************

  // Написать программу, считывающую
  // .csv файл с именами и ценами товаров
  // и преобразующую их в объекты

const path = require ('path'); //Подключили модуль и присвоили его константе
const fs = require ('fs'); //Подключили модуль работы с файловой системой

const pathToFile = path.resolve(__dirname, 'price.csv'); // Путь к текущему файлу и название файла
// __dirname - автоматически определяется
const content = fs.readFileSync(pathToFile, 'utf8');
console.log (content);

const items = content.split(', '); // перевели в массив, указав разделитель, который уже есть в нашей строке из файла .csv [100 Milk] - один элемент
console.log(items);

const Item = function(str) { //создаем функцию, которая будет обрабатывать массив
    const value = str.split(' '); //проходимся по массиву, который закинули в функцию в качестве аргумента и разделяем каждый элемент на два через пробел, получаем подмассив с двумя элементами (первый - число, второй - текст), другими словами, взяли элемент 100 Milk и разбили его на два элемента пробелом

    //Далее работаем уже с созданным подмассивом value

    console.log (value);

    this.price = Number(value[0]); //создаем ключ price в контексте функции Item и присваиваем ему числовое значение первого элемента подмассива
    this.title = value[1]; //создаем ключ title в контексте функции Item и присваиваем ему тектовое значение второго элемента подмассива
  };

const products = items.map(item => new Item(item)); //проходимся по массиву items, применяя к каждому его элементу функцию Item, создавая новый объект с ключами из функции и элементами массива items

  console.log(products); // [{title: 'Ball', price: 100}]