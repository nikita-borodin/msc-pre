const Person = require('./person.class'); //Подключаем модуль, который написали

const person = new Person('Tim', 'Heidecker'); //Отправляем в модуль данные на обработку, модуль возвращает обработанные данные

console.log(person.getFullName()); //Вызываем функцию из модуля

// Зачем экспортировать функцию, если мы можем вызвать ее?