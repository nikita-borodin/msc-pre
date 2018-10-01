const user = require("./user.class.js"); //Подключаем модуль с описанием класса user
const admin = require("./admin.class.js"); //Подключаем модуль с описанием класса admin

let newUser = new user("Vault", "Dweller"); //стучимся в файл user.class.js, передаем туда два аргумента, файл отрабатывает и выдает нам сконструированного юзера с соответствующим именем
let newAdmin = new admin ("The", "One");

newUser.login(); //Запускаем процесс логина, описанный в файле класса
newAdmin.login();

console.log(newUser); //Выводим, что получилось
console.log(newAdmin);