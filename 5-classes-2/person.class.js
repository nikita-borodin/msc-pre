module.exports = function(firstName, lastName) { //Функция, которая принимает аргументы имени и фамилии
    this.firstName = firstName;
    this.lastName = lastName;

    this.getFullName = function(){ //Функция, которая собирает из имени и фамилии одну строку
        return this.firstName + ' ' + this.lastName;
    }
};