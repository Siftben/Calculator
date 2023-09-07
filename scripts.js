// Stack class
class Stack {
 
  // Array is used to implement stack
  constructor()
  {
      this.items = [];
  }

  // push(item)
  push(element)
  {
      // push element into the items
      if(this.items.length > 12) return;
      this.items.push(element);
  }
  // pop()
  pop()
  {
      // return top most element in the stack
      // and removes it from the stack
      // Underflow if stack is empty
      if (this.items.length == 0)
          return "Underflow";
      return this.items.pop();
  }
  // peek()
  peek()
  {
      // return the top most element from the stack
      // but does'nt delete it.
      return this.items[this.items.length - 1];
  }
  // isEmpty()
  isEmpty()
  {
      // return true if stack is empty
      return this.items.length == 0;
  }
  // printStack()
  printStack()
  {
      var str = "";
      for (var i = 0; i < this.items.length; i++)
          str += this.items[i];
      return str;
  }
}

const number = document.querySelectorAll('.number-button');
const clearButton = document.querySelector('.clear-button');
const deleteButton = document.querySelector('.delete-button');
const screen = document.querySelector('.calculate');
var stack = new Stack();

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
  //document.getElementById('screen').innerHTML = this.value;
  addStack(this.value);
}

function refreshScreen() {

  if(stack.isEmpty()) {
    document.getElementById('screen').innerHTML = '0';
  } else
  document.getElementById('screen').innerHTML = stack.printStack();

}

function addStack(value) {
  stack.push(value);
  refreshScreen();
}

function clearStack() {
  stack = new Stack();
  refreshScreen();
}

function deleteStack(){
  stack.pop();
  refreshScreen();
}

number.forEach(number => number.addEventListener('click' , pressNumber));

clearButton.addEventListener('click', clearStack);
deleteButton.addEventListener('click', deleteStack);
