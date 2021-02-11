console.log('Целая ёлочка:')

for(let i = 0; i < 1; i++){
    for(let j = 1; j < 8; j+=2){
        console.log(' '.repeat(Math.floor((7-j)/2)),'*'.repeat(j));
    }
}