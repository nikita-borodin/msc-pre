// Решение я посмотрел, но задание было непонятным:
// 1. Я не знаю, что такое стандарт DNA и стандарт RNA, соответственно (пришлось сразу идти в решение, чтобы понять, что от меня хотят)
// 2. Я не понял, мы вводим что-то и оно должно трансформироваться?
// 3. Я не понимаю, как это работает.

var DnaTranscriber = function(){}; //тут объявили функцию

const rnaMap = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
}; // тут объявили правило трансформации

DnaTranscriber.prototype.toRna = function(dna){ //запустили функцию от переменной dna, но откуда тут prototype.toRna? Что это? Где вводится переменная dna?
  return dna.replace(/[GCTA]/g, l => { //возвращаем замененную при помощи replace переменную dna? Не понимаю все, что в круглых скобках
    return rnaMap[l];
  });
};

module.exports = DnaTranscriber;