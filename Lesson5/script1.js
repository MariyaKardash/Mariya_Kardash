console.log('Задание 1:');

const data = 3;
const valueToFill = 'a';

const fill = (arraySize, value) => {
    let array = [];
    for(let i = 0; i < arraySize; i++){
        array.push(value);
    }
    return array;
}

console.log(fill(data, valueToFill)) // ['a', 'a', 'a']