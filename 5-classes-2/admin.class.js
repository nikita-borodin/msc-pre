const user = require("./user.class.js"); //Подключаем модуль с описанием класса user

function admin (){
    user.apply(this, arguments); //Наследуем от юзера его функционал
    this.hasAccess = true;
}

module.exports = admin; //Когда файл отрабатывает при вызове, мы передаем функцию admin