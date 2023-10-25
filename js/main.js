const getRandomItem = (items) => {
  const fraction = items.length * Math.random();
  const index = Math.floor(fraction);
  return items[index];
};

const getRandomInteger = (min, max) => {
  const fraction = (max - min) * Math.random() + min;
  return Math.round(fraction);
};

const createCommentsData = (itemCount) => {
  const messages = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
  const names = ['Маша', 'Паша', 'Саша', 'Марина', 'Оля', 'Катя', 'Иван', 'Даниил', 'Костя', 'Таня', 'Сергей', 'Лера', 'Соня'];

  return new Array (itemCount).fill(1).map((start, index) => ({
    id: start + index,
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: getRandomItem(messages),
    name: getRandomItem(names),
  }));
};

const createPicturesData = (itemCount = 25) => {
  const descriptions = ['Зарядитесь нашим теплом.', 'Я хочу быть с тобой до последней страницы.', 'Ты – причина моего счастья.', 'Это я в Дубае и я щас отдыхаю.'];

  return new Array (itemCount).fill(1).map((start, index) => ({
    id: start + index,
    url: `photos/${start + index}.jpg`,
    description: getRandomItem(descriptions),
    likes: getRandomInteger(15, 200),
    comments: createCommentsData(getRandomInteger(0, 30))
  }));
};

void(getRandomItem, getRandomInteger, createPicturesData);

