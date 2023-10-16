//Функция проверки длины строки
const fitsStringLength = (text, maxLength) => text.length <= maxLength;

//Тесты для проверки функции длины строки
fitsStringLength('проверяемая строка', 20);
fitsStringLength('проверяемая строка', 18);
fitsStringLength('проверяемая строка', 10);


//Функция для проверки, является ли строка палиндромом.
const isPalindrome = (sequence) => {
  const text = String(sequence).replaceAll(' ', '').toLowerCase();//приводим строку к нормализованному виду: без пробелов и в строчном регистре
  const reversedText = text.split('').reverse().join('');// Нужно перевернуть строку. Но такого метода у строк нет. Поэтому мы превращаем строку в массив (.split('')), переворачиваем ее (.reverse()), а потом обратно преобразуем в строку (.join(''))
  return text === reversedText;
};

//Тесты для проверки функции длины строки
isPalindrome('топот');//true
isPalindrome('ДовОд');//true
isPalindrome('Кекс');//false
