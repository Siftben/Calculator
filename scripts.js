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

    // Javascript program to evaluate value of a postfix
    // expression having multiple digit operands
     
    // Method to evaluate value of
    // a postfix expression
    function evaluatePostfix(exp)
    {
        // create a stack
        let stack = [];
 
        // Scan all characters one by one
        for (let i = 0; i < exp.length; i++)
        {
            let c = exp[i];
 
            if (c == ' ')
            {
                continue;
            }
 
            // If the scanned character is an
            // operand (number here),extract
            // the number. Push it to the stack.
            else if (c >= '0' && c <= '9')
            {
                let n = 0;
 
                // extract the characters and
                // store it in num
                while (c >= '0' && c <= '9')
                {
                    n = n * 10 + (c - '0');
                    i++;
                    c = exp[i];
                }
                i--;
 
                // push the number in stack
                stack.push(n);
            }
 
            // If the scanned character is
            // an operator, pop two elements
            // from stack apply the operator
            else
            {
                let val1 = stack.pop();
                let val2 = stack.pop();
 
                switch (c)
                {
                    case '+':
                    stack.push(val2 + val1);
                    break;
 
                    case '-':
                    stack.push(val2 - val1);
                    break;
 
                    case '/':
                    stack.push(parseInt(val2 / val1, 10));
                    break;
 
                    case '*':
                    stack.push(val2 * val1);
                    break;
                }
            }
        }
        return stack.pop();
    }
     
    let exp = "100 200 + 2 / 5 * 7 +";
    console.log(evaluatePostfix(exp));

const numberButton = document.querySelectorAll('.number-button');
const operandButton = document.querySelectorAll('.operation-button');
const resultButton = document.querySelector('.result-button');
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

function showResult() {
  let exp = stack.printStack();
  console.log(exp);
  console.log(evaluatePostfix(stack.printStack()));
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

numberButton.forEach(number => number.addEventListener('click' , pressNumber));
operandButton.forEach(operand => operand.addEventListener('click' , pressNumber));
resultButton.addEventListener('click', showResult);

clearButton.addEventListener('click', clearStack);
deleteButton.addEventListener('click', deleteStack);
