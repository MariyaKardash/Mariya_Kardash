function check() {
  let array = [];
  return function arrayPush() {
    let number = getRandomNumber();
    if (!array.includes(number)) {
      array.push(number);
      console.log(number);
    }
    console.log(array);
  };
}

function getRandomNumber() {
  let number = Math.round(Math.random() * 100);
  return number;
}

let array = check();
array();
array();
array();
array();
array();