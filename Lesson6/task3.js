console.log("Домашнее задание 3:");

/**
 * Описание задачи: Напишите функцию, которая разворачивает массив в обратном порядке.
 * Ожидаемый результат: [1, 2, 3] => [3, 2, 1]
 * Сложность задачи: 1 of 5
 * @param {Array} array - Массив любых элементов
 * @returns {Array}
 */

const dataTask3 = [1, 2, 3, 4, 5];

const sortReverse = (dataArray) => {
  // Функция, которая сортирует массив

  console.log(`Исходный массив: [${dataArray}];`);
  for (let i = 0; i < Math.floor(dataArray.length / 2); i++) {
    let dop = dataArray[i];
    dataArray[i] = dataArray[dataArray.length - 1 - i];
    dataArray[dataArray.length - 1 - i] = dop;
  }
  console.log(`Преобразованный массив: [${dataArray}];`);
};

sortReverse(dataTask3);
console.log("_________________________");
