//Нечто подобное мы делали на прошлом курсе

var kruchu = prompt ('Введите строку, которую будем оборачивать')

function naperstochnik (kruchu){
    if (!kruchu) {
        return alert('На что играем-то?')
    }

    else {
        return alert (kruchu.split('').reverse().join(''))
    }

}

alert (naperstochnik (kruchu))