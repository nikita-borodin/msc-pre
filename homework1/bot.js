let message = prompt('Итак, начинаем проходить тест Тьюринга. На другой стороне находится мальчик с дислексией. Напиши ему что-нибудь')
let msgSplit = message.split('')

bob()

function bob(){
    if (msgSplit[msgSplit.length - 1] == '!' && msgSplit[msgSplit.length - 2] == '?'){
        alert ('Думаю, на этот вопрос можно не отвечать, потому что он риторический.')
    }

    else if (msgSplit[msgSplit.length - 1] == '!'){
        alert ('Когда я вижу столько эмоций, у меня включается какой-то блок и я совсем не понимаю, что мне говорят.')
    }

    else if (msgSplit[msgSplit.length-1] == '?') {
        alert ('Странный вопрос, я не хочу на него отвечать.')
    }

    else if (msgSplit[msgSplit.length - 1] == '.') {
        alert ('И что с того?')
    }

    else {
    alert ('У меня дислексия, я могу ориентироваться только по знакам препинания в твоем предложении.')
    }
    message = prompt ('Напиши еще что-нибудь, чтобы продолжить тест. Чтобы остановить его напиши "астанавитес"')
    msgSplit = message.split('')
    if (message == 'астанавитес') {
        alert ('Сорян, у меня получился рекурсивный код, который можно остановить только таким способом')
    }
    else{
        bob()
    }
}

//Я знаю, что написал *****код с рекурсией и функцией, которая вызывает саму себя) Но я пока не придумал более изящного решения, потому что не знаю нужного синтаксиса (помню вот в бэйсике можно было вернуться на строку кода через "GOTO", есть ли тут что-то подобное? Нагуглить не удалось.).