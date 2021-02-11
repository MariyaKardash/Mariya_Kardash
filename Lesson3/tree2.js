console.log('Вторая (перевёрнутая) половина ёлочки:')

for(let i = 0; i < 1; i++){
    for(let j = 8; j > 0; j-=1){
        console.log('*'.repeat(j));
    }
}