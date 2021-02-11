console.log('Первая половина ёлочки:')

for(let i = 0; i < 1; i++){ // В данном случае этот цикл можно не использовать
    for(let j = 1; j < 9; j+=1){
        console.log('*'.repeat(j));
    }
}