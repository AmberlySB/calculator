const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', populateDisplay);
});

const addBtn = document.getElementById('add');
const subtractBtn = document.getElementById('subtract');
const multiplyBtn = document.getElementById('multiply');
const divideBtn = document.getElementById('divide');

// let a = 10;
// let b = 5;
// let op = '/';

function operate(a, b, op) {
  if (op === '+') result = add(+a, +b).toString();
  else if (op === '-') result = subtract(a, b).toString();
  else if (op === '*') result = multiply(a, b).toString();
  else if (op === '/') result = divide(a, b).toString();
  return result;
}

// console.log(operate(a, b, op));

let displayValue;
let operandA;
let operandB;
let operandTemp;
let operator;
//this array is used to check if the display has reached it's max capacity for characters (9)
const digits = [];

function populateDisplay() {
  const display = document.getElementById('display');
  if (+this.value > -1 || +this.value < 10 || this.value === '.') {
    // displayValue starts undefined, this logic initializes it based on user input
    if (displayValue === undefined) {
      if (this.value === '.') {
        displayValue = '0' + this.value;
        digits.push('0');
      } else {
        displayValue = this.value;
        digits.push(this.value);
      }
    } else if (digits.length < 9) {
      const split = displayValue.split('');
      const checkDot = split.filter((dot) => dot === '.');
      if (checkDot.join('') === '.') {
        if (this.value === '.') {
          displayValue = displayValue;
        } else {
          displayValue = displayValue + this.value;
          digits.push(this.value);
        }
      } else if (this.value === '.') {
        displayValue = displayValue + this.value;
      } else {
        console.log('you are here');
        if (
          addBtn.classList.contains('reverse') ||
          subtractBtn.classList.contains('reverse') ||
          multiplyBtn.classList.contains('reverse') ||
          divideBtn.classList.contains('reverse')
        ) {
          addBtn.classList.remove('reverse');
          subtractBtn.classList.remove('reverse');
          multiplyBtn.classList.remove('reverse');
          divideBtn.classList.remove('reverse');
        }
        displayValue = displayValue + this.value;
        digits.push(this.value);
      }
    }
    display.textContent = displayValue;
    console.log('display value: ', displayValue);
  } else if (
    this.value === '+' ||
    this.value === '-' ||
    this.value === '*' ||
    this.value === '/'
  ) {
    if (operandA === undefined && operandB != undefined) {
      if (addBtn.classList.contains('reverse')) {
        addBtn.classList.remove('reverse');
      }
      operandA = operandTemp;
      const opBtn = document.getElementsByName('operator-button');
      operandB = displayValue;
      displayValue = operate(operandA, operandB, operator);
      display.textContent = displayValue;
      console.log('&& A: ', operandA, 'operator: ', operator, 'B: ', operandB);
      operator = this.value;
      this.classList.add('reverse');
      operandTemp = displayValue;
      displayValue = '';
      digits.length = 0;
      operandA = undefined;
      console.log('&& this value: ', this.value, 'digits: ', digits);
      // console.log('&& A: ', operandA, 'operator: ', operator, 'B: ', operandB);
    } else if (operandA === undefined) {
      operandA = displayValue;
      operator = this.value;
      displayValue = '';
      digits.length = 0;
      operandB = undefined;
      console.log('this value: ', this.value, 'digits: ', digits);
      console.log('A: ', operandA, 'operator: ', operator);
    } else if (operandB === undefined) {
      console.log('hello world');
      operandB = displayValue;
      console.log('A: ', operandA, 'B: ', operandB, 'operator: ', operator);
      console.log('operate()', operate(operandA, operandB, operator));
      displayValue = operate(operandA, operandB, operator);
      display.textContent = displayValue;
      operandTemp = displayValue;
      displayValue = '';
      digits.length = 0;
      operandA = undefined;
      console.log('A: ', operandA, 'B: ', operandB, 'operator: ', operator);
    }
  }
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
