function addUser() {
  // Вывод модального окна с формой
  let modal = document.querySelector(".modal");
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
    alert(`Thank you for your application! Data entered:
        First Name: ${form[0].value}
        Last Name: ${form[1].value}
        Age: ${form[2].value}`);
    closeModal(); // Закрываем окно
    deleteInform(); // Удаляем информацию
  }
}
