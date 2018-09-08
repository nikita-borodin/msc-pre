const letters = ["e","t","a","o","i","n","s","h","r","d","l","c","u","m","w","f","g","y","p","b","v","k","x","j","q","z"]; //Алфавит приведен в порядке частоты использования букв
let lettersRvrs = letters.reverse()

let message = prompt ('Введите проверяемое предложение без точки');
let breaker = true

message = message.toLowerCase(); //Приводим к нижнему регистру

messageSplit = message.split(''); //Разбиваем сообщение на отдельные символы, получаем массив

for (let i = 0; i < lettersRvrs.length; i++) {//Начинаем перебирать алфавит с наименее используемой буквы, поскольку большинство предложений не являются панграммами
    console.log('Алфавит: ' + lettersRvrs[i]);
    if (breaker == true) { //Если с брейкером все в порядке, продолжаем циклы
        for (let j = 0; j < message.length; j++) { //Прогоняем букву по предложению
            console.log('Текст: ' + messageSplit[j])
            if(lettersRvrs[i] == messageSplit[j]){//Если данная буква в предложении есть, тормозим цикл
                break;
            }
            else if (j == message.length-1) {
                breaker = false; //Возвращаем false, если цикл перебрал предложение и данная буква алфавита не встречается
            }
        }
    }  
    else {//Если брейкер поломался, тогда показываем, какую букву не нашли, и тормозим цикл
        alert('Предложение не является панграммой, мы запоролись на букве ' + '"' + lettersRvrs[i-1] + '".')
        break
    }
}

if (breaker == true) {
    alert('Панграмма!')
}