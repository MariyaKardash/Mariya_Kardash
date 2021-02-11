const zooData = [ { // Наш массив с животными
        animal: 'Жираф',
        animalName: 'Мелман',
        age: 13,
        status: 'Здоров'
    }, {
        animal: 'Бегемот',
        animalName: 'Глория',
        age: 7,
        status: 'Болен'
    }, {
        animal: 'Лев',
        animalName: 'Алекс',
        age: 10,
        status: 'Здоров'
    }, {
        animal: 'Зебра',
        animalName: 'Марти',
        age: 12,
        status: 'Болен'
    }, {
        animal: 'Лемур',
        animalName: 'Джулиан',
        age: 8,
        status: 'Здоров'
    }
]

const mainMenu = () =>{ // Функция главного меню
    let choice = prompt(`Добро пожаловать в главное меню.
    1. Посмотреть список животных нашего зоопарка;
    2. Найти животное по параметру;
    3. Удалить животное из списка;
    4. Добавить животное;
    5. Изменить данные животного;`);
    switch(choice){
        case '1': showZoo(zooData);
        alert('Результат смотрите в консоли.')
        break;
        case '2': searchZoo(zooData);
        break;
        case '3': deleteZoo(zooData);
        break;
        case '4': addZoo(zooData);
        break;
        case '5': changeZoo(zooData);
        break;
        default: alert('Были введены некорректные данные!');
        break;
    }
}

const showZoo = dataArray => { // Функция для просмотра всех животных
    console.log('Список наших животных:')
    for (let i = 0; i < dataArray.length; i++) {
        console.log(`Животное: ${dataArray[i].animal};
        Имя животного(кличка): ${dataArray[i].animalName};
        Возраст животного(в годах): ${dataArray[i].age};
        Статус животного: ${dataArray[i].status}`)
    }
}

const searchZoo = dataArray => { // Функция поиска всех животных
    let count = 0;//Переменная для проверки
    let searchName = prompt('Введите имя животного, которого хотите найти:');
    for (let i = 0; i < dataArray.length; i++) {
        if (dataArray[i].animalName.toLowerCase() == searchName.toLowerCase()){//Идём по массиву и проверяем совпадения
            //Выводим информацию о животное, если такое нашлось
            console.log(`Вы произвели поиск животного с именем ${searchName}.
            Его данные:
            Животное: ${dataArray[i].animal};
            Имя животного(кличка): ${dataArray[i].animalName};
            Возраст животного(в годах): ${dataArray[i].age};
            Статус животного: ${dataArray[i].status}`)
            alert(`Животное: ${dataArray[i].animal};
            Имя животного(кличка): ${dataArray[i].animalName};
            Возраст животного(в годах): ${dataArray[i].age};
            Статус животного: ${dataArray[i].status}`)
            count = 1;
        }
    }

    if(count == 0){//Если животного с таким именем нет, выводим сообщение об ошибке
        console.log(`Был произведён поиск:
        Животное с именем ${searchName} не найдено!`);
        alert(`Животное с именем ${searchName} не найдено!`);
    }
}

const deleteZoo = dataArray => { // Функция удаления животного
    let count = 0;//Переменная для проверки
    let deleteName = prompt('Введите имя животного, которого хотите удалить:');
    for(let i = 0; i < dataArray.length; i++){
        if (dataArray[i].animalName.toLowerCase() == deleteName.toLowerCase()){//Идём по массиву и проверяем совпадения
            let deleteAnimal = dataArray.splice(i, 1);//Если есть совпадения, удаляем нужное животное
            console.log(`Животное с именем ${deleteName} было съедено!`)
            count = 1;
        }
    }

    if(count == 0){//Если животного с таким именем нет, выводим сообщение об ошибке
        console.log(`Был произведян поиск:
        Животное с именем ${deleteName} не найдено!`);
        alert(`Животное с именем ${deleteName} не найдено!`);
    }
}

const addZoo = dataArray =>{ // Функция добавления животного
    let count = 0;//Переменная для проверки
    let newName = prompt('Введите имя(кличку) животного:');
    for(let i = 0; i < dataArray.length; i++){
        if (dataArray[i].animalName.toLowerCase() == newName.toLowerCase()){//Идём по массиву и проверяем совпадения
            count = 1;//Если у нас уже есть животное с таким именем
            alert(`Ой-ой. У нас в зоопарке уже есть животное с именем ${newName}`)
            console.log(`Ой-ой. К нам хотели привезти зверушку по имени ${newName}, но у нас уже есть такой...`)
        }
    }
    if(count == 0){//Если животного с таким именем нет, добавляем его
    let newAnimal = prompt('Введите название животного:');
    let newAge = prompt('Введите возраст животного:');
    let newStatus = prompt('Введите статус животного(здоров/болен):')
    dataArray = dataArray.push({
        animal: newAnimal,
        animalName: newName,
        age: newAge,
        status: newStatus
    });
    console.log(`У нас прибавление! Привезли новое животное:
            Животное: ${newAnimal};
            Имя животного(кличка): ${newName};
            Возраст животного(в годах): ${newAge};
            Статус животного: ${newStatus}`)
    }
}

const changeZoo = dataArray =>{// Функция изменения данных о животном
    let count = 0;// Переменная для проверки
    let changeName = prompt('Введите имя животного, информацию о котором хотите изменить:');
    for (let i = 0; i < dataArray.length; i++) {
        if (dataArray[i].animalName.toLowerCase() == changeName.toLowerCase()){//Идём по массиву и проверяем совпадения
            count = 1;//Изменяем данные животного, если оно найдено
            let choice = prompt(`Выберите, какие данные хотите изменить:
            1. Название животного;
            2. Имя животного;
            3. Возраст;
            4. Статус;`)
            switch(choice){
                case '1': let changeAnimal = prompt('Введите новое название животного:');
                dataArray[i].animal = changeAnimal;
                break;
                case '2': let changeAnimalName = prompt('Введите новое имя животного:');
                dataArray[i].animalName = changeAnimalName;
                break;
                case '3': let changeAge = prompt('Введите новый возраст животного:');
                dataArray[i].age = changeAge;
                break;
                case '4': let changeStatus = prompt('Введите новый статус животного:');
                dataArray[i].status = changeStatus;
                break;
            }
            console.log(`У животного с именем ${changeName} новые данные!`);
        }
    }
    if(count == 0){//Если совпадений не найдено
        console.log(`Был произведён поиск:
        Животное с именем ${changeName} не найдено!`);
        alert(`Животное с именем ${changeName} не найдено!`);
    }
}

let repeat = "да";
while(repeat.toLowerCase() == "да"){ // Для повторения программы, пока пользователь этого хочет
    mainMenu();
    repeat = prompt('Хотите продолжить(да, если хотите, или что-то другое для выхода)?');
    if(repeat.toLowerCase() != "да"){
        alert('До встречи!!!');
    }
}
