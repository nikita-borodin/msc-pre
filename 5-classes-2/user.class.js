function user(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.hasAccess = false;
    this.isLoggedIn = false;

    this.login = function(){
        this.isLoggedIn = this.hasAccess; 
    };

    this.logOut = function(){
        this.isLoggedIn = false;
    };
};

module.exports = user; //Когда файл отрабатывает, передается функция user