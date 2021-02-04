console.log('Задание 3:');

let usersAge = {
    ivanov: '19',
    petrov: '17',
    sidorov: '21'
}

let usersMore18 = [];
let usersUnder18 = [];

let keys = Object.keys(usersAge);
keys.forEach((item) => {
    if(usersAge[item] < 18){
        usersUnder18.push({userName: item, userAge: usersAge[item]});
    }
    else{
        usersMore18.push({userName: item, userAge: usersAge[item]});
    }
})

console.log('Несовершеннолетние пользователи:');
console.log(usersUnder18);

console.log('Совершеннолетние пользователи:');
console.log(usersMore18);