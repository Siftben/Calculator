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

const numberButton = document.querySelectorAll('.number-button');
const operandButton = document.querySelectorAll('.operation-button');
const resultButton = document.querySelector('.result-button');
const clearButton = document.querySelector('.clear-button');
const deleteButton = document.querySelector('.delete-button');
const screen = document.querySelector('.calculate');
var stack = new Stack();
var stack2 = new Stack();
let result;
let operand;

function sum(number1, number2) {
	return number1 + number2; 
};

function substract(number1, number2) {
	return number1 - number2; 
};

function multiply(number1, number2) {
  return number1 * number2;
};

function divide(number1, number2) {
  return number1 / number2;
};

function pressNumber() {
  addStack(this.value);
}

function pressOperand() {
  operand = this.value;
  stack2 = stack;
  document.getElementById('result').innerHTML = stack.printStack() + operand;

  refreshScreen();
  stack = new Stack();
}

function showResult() {
  if(stack.isEmpty() || stack2.isEmpty()) return;

  result = Math.round(operateFunction() * 10) / 10;
  console.log(result);
  document.getElementById('result').innerHTML = stack2.printStack() + operand + stack.printStack();
  document.getElementById('screen').innerHTML = result;

  stack = new Stack();
  stack2 = new Stack();
  operand = '';
}

function operateFunction() {
  let number1 = parseInt(stack2.printStack());
  let number2 = parseInt(stack.printStack());

  switch (operand) {

    case '+':
      return sum(number1, number2);
      break;

    case '-':
      return substract(number1, number2);
      break;

    case '×':
      return multiply(number1, number2);
      break;
    
    case '÷':
      return divide(number1, number2);
      break;
    
    default:
      break;
  }

}

function refreshScreen() {
  if(stack.isEmpty() && stack2.isEmpty){
    document.getElementById('result').innerHTML = '0';
  }
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
  stack2 = new Stack();
  refreshScreen();
}

function deleteStack(){
  stack.pop();
  refreshScreen();
}

numberButton.forEach(number => number.addEventListener('click' , pressNumber));
operandButton.forEach(operand => operand.addEventListener('click' , pressOperand));
resultButton.addEventListener('click', showResult);

clearButton.addEventListener('click', clearStack);
deleteButton.addEventListener('click', deleteStack);

window.addEventListener('keydown', function(e){

  const audio = document.querySelector(`audio[data-key="${e.code}"]`);
  const key = document.querySelector(`.key[data-key="${e.code}"]`);
  
});
