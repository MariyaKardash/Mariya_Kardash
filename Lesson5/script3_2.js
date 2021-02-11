console.log('Задание 4(дополнительное):');

let usersRating = {
    ivanov: '3',
    petrov: '7',
    sidorov: '10'
}

let rating = [];
let keysRating = Object.keys(usersRating);
keysRating.forEach((item) => {
    if(usersRating[item] < 4){
        rating.push({Имя: item, Оценка: usersRating[item], Успеваемость: 'двоечник'});
    }
    else if(usersRating[item] < 8 && usersRating[item] > 4){
        rating.push({Имя: item, Оценка: usersRating[item], Успеваемость: 'хорошист'});
    }
    else{
        rating.push({Имя: item, Оценка: usersRating[item], Успеваемость: 'отличник'});
    }
})

console.log('Успеваемость учащихся:');
console.log(rating);