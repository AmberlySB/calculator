const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', populateDisplay), false;
});

let a = 10;
let b = 5;
let op = '/';

function operate(a, b, op) {
  if (op === '+') result = add(a, b);
  else if (op === '-') result = subtract(a, b);
  else if (op === '*') result = multiply(a, b);
  else if (op === '/') result = divide(a, b);
  return result;
}

console.log(operate(a, b, op));

let displayValue;
const digits = [];

function populateDisplay() {
  const display = document.getElementById('display');
  if (
    +this.textContent > -1 ||
    +this.textContent < 10 ||
    this.textContent === '.'
  ) {
    if (displayValue === undefined) {
      console.log('undefined: ', typeof displayValue);
      if (this.textContent === '.') {
        displayValue = '0' + this.textContent;
        digits.push('0');
        console.log('digits: ', digits);
      } else {
        displayValue = this.textContent;
        digits.push(this.textContent);
        console.log('digits: ', digits);
      }
    } else if (digits.length < 9) {
      const split = displayValue.split('');
      const checkDot = split.filter((dot) => dot === '.');
      if (checkDot.join('') === '.') {
        console.log('dot status', checkDot.join(''));
        if (this.textContent === '.') {
          console.log('test', this.textContent);
          displayValue = displayValue;
        } else {
          console.log('high mom');
          displayValue = displayValue + this.textContent;
          digits.push(this.textContent);
          console.log('digits: ', digits);
        }
      } else if (this.textContent === '.') {
        displayValue = displayValue + this.textContent;
      } else {
        console.log('hello world');
        displayValue = displayValue + this.textContent;
        digits.push(this.textContent);
        console.log('digits-end: ', digits);
      }
    }
    display.textContent = displayValue;
    console.log(displayValue);
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
