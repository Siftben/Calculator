const number = document.querySelectorAll('.number-button');
const screen = document.querySelector('.calculate');
console.log(number);

const add = function(number1, number2) {
	return number1 + number2; 
};

const subtract = function(number1, number2) {
	return number1 - number2; 
};

const multiply = function(array) {
  let result = array.reduce(multiple);

  function multiple(total, num) {
    return total * num;
  }

  return result;
};

const divide = function(array) {
  let result = array.reduce(multiple);

  function multiple(total, num) {
    return total * num;
  }

  return result;
};

function pressNumber() {
  console.log(this.value);
  document.getElementById('screen').innerHTML = this.value;
}

number.forEach(number => number.addEventListener('click' , pressNumber));