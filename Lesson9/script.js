function addUser() {
  // Вывод модального окна с формой
  let modal = document.querySelector(".modal");
  document.getElementById("tableID").innerText = ''
  addList(people);
  modal.style.display = "block";
}

function closeModal() {
  // Закрытие модального окна с формой
  let modal = document.querySelector(".modal");
  modal.style.display = "none";
  deleteInform();
  document.getElementById("error_first_name").innerText = "";
  document.getElementById("error_last_name").innerText = "";
  document.getElementById("error_age").innerText = "";
}

function deleteInform() {
  // Очистка полей формы
  document.getElementById("cleanForm").reset();
}

function checkForm() {
  // Проверка формы на заполненность полей
  let form = document.getElementById("cleanForm");
  valid = true;
  if (form[0].value == false) {
    // Если первое поле формы не заполнено
    document.getElementById("error_first_name").innerText =
      "Please, fill in the field 'First Name'.";
    valid = false;
  }
  if (form[1].value == false) {
    // Если второе поле формы не заполнено
    document.getElementById("error_last_name").innerText =
      "Please, fill in the field 'Last Name'.";
    valid = false;
  }
  if (form[2].value == false) {
    // Если третье поле формы не заполнено
    document.getElementById("error_age").innerText =
      "Please, fill in the field 'Age'.";
    valid = false;
  }
  return valid;
}

function checkValidData() {
  // Проверка на правильность введённых данных
  let form = document.getElementById("cleanForm");
  valid = true;
  if (form[0].value.length > 10 || isNaN(form[0].value) == false) {
    document.getElementById("error_first_name").innerText =
      "Please, change the field 'First Name'.";
    valid = false;
  } else {
    document.getElementById("error_first_name").innerText = "";
  }
  if (form[1].value.length > 10 || isNaN(form[1].value) == false) {
    document.getElementById("error_last_name").innerText =
      "Please, change the field 'Last Name'.";
    valid = false;
  } else {
    document.getElementById("error_last_name").innerText = "";
  }
  if (
    isNaN(form[2].value) == true ||
    form[2].value > 135 ||
    form[2].value < 0
  ) {
    document.getElementById("error_age").innerText =
      "Please, change the field 'Age'.";
    valid = false;
  } else {
    document.getElementById("error_age").innerText = "";
  }
  return valid;
}

function okButton() {
  // Работа кнопки ОК
  if (checkForm() && checkValidData()) {
    // Если все поля заполнены и данные прошли все проверки
    let form = document.getElementById("cleanForm");
    // Выводим сообщение с данными
    pushPerson(people, form[0].value, form[1].value, form[2].value);
    closeModal(); // Закрываем окно
    deleteInform(); // Удаляем информацию
  }
}

function pushPerson(dataArray, first, last, ageData) {
  let table = document.getElementById("tableID");
  let person = { firstName: first, lastName: last, age: ageData };
  dataArray.push(person);
  let dataString = document.createElement("tr");
  let firstName = document.createElement("td");
  let lastName = document.createElement("td");
  let age = document.createElement("td");
  firstName.innerText = first;
  lastName.innerText = last;
  age.innerText = ageData;
  table.appendChild(dataString)
  dataString.append(firstName);
  dataString.append(lastName);
  dataString.append(age);

}

const people = [
  {
    firstName: "Ashton",
    lastName: "Kutcher",
    age: 40,
  },
  {
    firstName: "Bradley",
    lastName: "Pitt",
    age: 54,
  },
  {
    firstName: "Hannah",
    lastName: "Dakota",
    age: 24,
  },
  {
    firstName: "Peter",
    lastName: "Petrov",
    age: 17,
  },
  {
    firstName: "Ivan",
    lastName: "Ivanov",
    age: 12,
  },
  {
    firstName: "Vasya",
    lastName: "Seleznev",
    age: 32,
  },
  {
    firstName: "Ekaterina",
    lastName: "Ivanova",
    age: 40,
  },
  {
    firstName: "Elena",
    lastName: "Vasileva",
    age: 16,
  },
];

function addList(dataArray) {
  for (let i = 0; i < dataArray.length; i++) {
    const table = document.getElementById("tableID");
    let dataString = document.createElement("tr");
    let firstName = document.createElement("td");
    let lastName = document.createElement("td");
    let age = document.createElement("td");
    firstName.innerText = dataArray[i].firstName;
    lastName.innerText = dataArray[i].lastName;
    age.innerText = dataArray[i].age;
    dataString.appendChild(firstName);
    dataString.appendChild(lastName);
    dataString.appendChild(age);
    table.appendChild(dataString);
  }
}