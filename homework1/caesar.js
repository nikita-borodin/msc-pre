const letters = ["e","t","a","o","i","n","s","h","r","d","l","c","u","m","w","f","g","y","p","b","v","k","x","j","q","z"]; //Алфавит приведен в порядке частоты использования букв, чтобы уменьшить количество циклов

let message = prompt ('Введите шифруемую фразу');

message = message.toLowerCase(); //Приводим к нижнему регистру, чтобы уменьшить количество циклов (сущность шифра при этом не меняется)

messageSplit = message.split(''); //Разбиваем сообщение на отдельные символы

for (let i = 0; i < message.length; i++) {
    if (messageSplit[i] == letters[letters.length-1]){ //Проверяем, не идет ли сейчас в сообщении последняя буква из шифрового массива, если идет, то присваиваем ей нулевую букву из него
        messageSplit[i] = letters[0]
        console.log(i)
        console.log(messageSplit[i])
        break
    }
    else {
        for (let j = 0; j < letters.length || letters[j] == messageSplit[i]; j++) { //Перебираем шифровой массив, пока буква из сообщения не будет такой же
            if(letters[j] == messageSplit[i]){
                messageSplit[i] = letters [j+1] // И присваиваем ей иное значение
                break
            }
            else if(j == letters.length){
                break
            }
        console.log(messageSplit[i])
        console.log(j)
        }
    }
}

let messageScript = messageSplit.join('');
alert('Зашифрованное сообещение: '+ messageScript);


