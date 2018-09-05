// Нечто подобное у нас было на курсе, я понимаю, как это работает

var name = prompt ('Введите имя');

if (!name) {
        name = 'you'
}

function oneForX (){
        alert ('One for ' + name + ', one for me');
}

oneForX (name)