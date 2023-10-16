const fitsStringLength = (text, maxLength) => text.length <= maxLength;

fitsStringLength('проверяемая строка', 20);
fitsStringLength('проверяемая строка', 18);
fitsStringLength('проверяемая строка', 10);
