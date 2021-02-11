console.log('Задание 2:');

const compact = (array) => {
    const newArray = [];
    array.forEach((item)=>{
        if(item){
            newArray.push(item);
        }
    })
    return newArray;
}

const data2 = [0, 1, false, 2, undefined, '', 3, null];
console.log(compact(data2)) // [1, 2, 3]