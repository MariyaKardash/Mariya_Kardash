console.log("Домашнее задание 2:");

/**
 * Описание задачи: Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны.
 * Ожидаемый результат: ([1, 2, 3], [1, 2, 3]) => true
 * @param {Array} firstArray - Массив с примитивными значениями
 * @param {Array} secondArray - Массив с примитивными значениями
 * @returns {boolean}
 */
const array1 = [1, 2, 3];
const array2 = [1, 2, 3, 4];
const array3 = [2, 3, 4];

const checkForSimilarity = (dataArray1, dataArray2) => {
  check = false;
  number = 0;

  dataArray1.forEach((item, index) => {
    if (item == dataArray2[index]) {
      number++;
    }
  });
  if (dataArray1.length == dataArray2.length && number == dataArray1.length) {
    check = true;
  }

  console.log(`([${dataArray1}], [${dataArray2}]) => ${check}`);
};

checkForSimilarity(array1, array1);
checkForSimilarity(array1, array2);
checkForSimilarity(array1, array3);
console.log("_________________________");
