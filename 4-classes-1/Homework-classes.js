const path = require ('path'); //Подключили модуль и присвоили его константе
const fs = require ('fs'); //Подключили модуль работы с файловой системой

const pathToFile = path.resolve(__dirname, 'products.csv'); // Путь к текущему файлу и название файла
// __dirname - автоматически определяется
const content = fs.readFileSync(pathToFile, 'utf8');

const items = content.split(', '); // перевели в массив, указав разделитель, который уже есть в нашей строке из файла .csv [100 Milk] - один элемент

const Item = function(str) { //создаем функцию, которая будет обрабатывать массив
    const value = str.split(' '); //проходимся по массиву, который закинули в функцию в качестве аргумента и разделяем каждый элемент на два через пробел, получаем подмассив с двумя элементами (первый - число, второй - текст), другими словами, взяли элемент 100 Milk и разбили его на два элемента пробелом

    //Далее работаем уже с созданным подмассивом value

    this.price = {//создаем ключ price в контексте функции Item и присваиваем ему числовое значение первого элемента подмассива
        RUB:Number(value[0]), //Добавляем в люч price два подключа RUB и USD
        USD:Number(value[0]/60),
    }
         
    this.title = value[1]; //создаем ключ title в контексте функции Item и присваиваем ему тектовое значение второго элемента подмассива
  };

const products = items.map(item => new Item(item)); //проходимся по массиву items, применяя к каждому его элементу функцию Item, создавая новый объект с ключами из функции и элементами массива items

const pathToJSON = path.resolve (__dirname, 'result.JSON');
fs.writeFileSync(pathToJSON, JSON.stringify(products), 'utf8');