//Функция проверки длины строки
const fitsStringLength = (text, maxLength) => text.length <= maxLength;

//Тесты для проверки функции длины строки
fitsStringLength('проверяемая строка', 20);//true
fitsStringLength('проверяемая строка', 18);//true
fitsStringLength('проверяемая строка', 10);//false


//Функция для проверки, является ли строка палиндромом.
const isPalindrome = (sequence) => {
  const text = String(sequence).replaceAll(' ', '').toLowerCase();//приводим строку к нормализованному виду: без пробелов и в строчном регистре
  const reversedText = text.split('').reverse().join('');// Нужно перевернуть строку. Но такого метода у строк нет. Поэтому мы превращаем строку в массив (.split('')), переворачиваем ее (.reverse()), а потом обратно преобразуем в строку (.join(''))
  return text === reversedText;
};

//Тесты для проверки функции является ли строка палиндромом.
isPalindrome('топот');//true
isPalindrome('ДовОд');//true
isPalindrome('Кекс');//false

const parseDigits = (sequence) => {
  const digits = String(sequence).replace(/[^0-9]+/g, ''); // replace() - заменить что-то. // - разделители регулярного выражения. [] - группировка(диапозон цифр, группа). + - 1 или более совпадение (1 или более цифр). g - заменить все(greedy - жадный поиск). "" - на что мы хотим заменить. ^ - все кроме того, что мы указали в скобках. Все, что кроме цифр - убери
  return digits ? Number(digits) : NaN;
};

parseDigits('2023 год'); // 2023
parseDigits('ECMAScript 2022'); // 2022
parseDigits('1 кефир, 0.5 батона'); // 105
parseDigits('агент 007'); // 7
parseDigits('а я томат'); // NaN
