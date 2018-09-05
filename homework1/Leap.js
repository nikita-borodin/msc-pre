// Это мы проходили на прошлом курсе, я понимаю, как этот код работает

var year = prompt ("Введите год")

function isLeapYear (year) {

    if (year % 400 == 0) {
        return true;
    }
    else if (year % 100 == 0) {
        return false;
    }

    else if (year % 4 == 0) {
        return true;
    }
}

if (isLeapYear (year) == true){
    alert ('Високосный')
}

else {
    alert ('Не високосный')
}