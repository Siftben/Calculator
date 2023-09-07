


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