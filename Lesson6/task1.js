console.log("Домашнее задание 1:");

/**
 * Описание задачи: Напишите функцию, которая убирает повторяющиеся значения.
 * Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]
 * @param {Array<string | number>} array - Массив с примитивными значениями
 * @returns {Array}
 */

const dataTask1 = [1, 2, 3, 1, 2];

const sort = (dataArray) => {
  // Функция, которая сортирует массив

  console.log(`Исходный массив: [${dataArray}];`);

  for (let i = 0; i < dataArray.length; i++) {
    for (let j = 0; j < dataArray.length; j++) {
      if (dataArray[i] < dataArray[j]) {
        let dop = dataArray[i];
        dataArray[i] = dataArray[j];
        dataArray[j] = dop;
      }
    }
  }

  console.log(`Отсортиванный массив: [${dataArray}];`);
  return dataArray;
};

const filter = (dataArray) => {
  // Функция, которая убирает дубликаты
  const result = [];
  dataArray.filter((item, index) => {
    if (dataArray.indexOf(item) == index) {
      result.push(item);
    }
  });
  console.log(`[${dataArray}] => [${result}]`);
};

filter(sort(dataTask1));
console.log("_________________________");
