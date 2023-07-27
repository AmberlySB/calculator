const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', calcButtons);
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
let previousOperator;
//this array is used to check if the display has reached it's max capacity for characters (9)
const digits = [];

function calcButtons() {
  const thisValue = this.value;
  if (this.value === '0') {
    btnZero(thisValue);
  } else if (this.value === '1') {
    btnOne(thisValue);
  } else if (this.value === '2') {
    btnTwo(thisValue);
  } else if (this.value === '3') {
    btnThree(thisValue);
  } else if (this.value === '4') {
    btnFour(thisValue);
  } else if (this.value === '5') {
    btnFive(thisValue);
  } else if (this.value === '6') {
    btnSix(thisValue);
  } else if (this.value === '7') {
    btnSeven(thisValue);
  } else if (this.value === '8') {
    btnEight(thisValue);
  } else if (this.value === '9') {
    btnNine(thisValue);
  }
}

function btnNine(nine) {
  if (displayValue === undefined) {
    displayValue = nine;
    digits.push(nine);
    populateDisplay();
    console.log('display: ', displayValue);
  } else if (digits.length < 9) {
    if (displayValue === '0') {
      displayValue = nine;
      digits.pop();
      digits.push(nine);
      populateDisplay();
      console.log('display: ', displayValue);
    } else {
      displayValue = displayValue + nine;
      digits.push(nine);
      populateDisplay();
      console.log('display: ', displayValue);
    }
  }
}

function btnEight(eight) {
  if (displayValue === undefined) {
    displayValue = eight;
    digits.push(eight);
    populateDisplay();
    console.log('display: ', displayValue);
  } else if (digits.length < 9) {
    if (displayValue === '0') {
      displayValue = eight;
      digits.pop();
      digits.push(eight);
      populateDisplay();
      console.log('display: ', displayValue);
    } else {
      displayValue = displayValue + eight;
      digits.push(eight);
      populateDisplay();
      console.log('display: ', displayValue);
    }
  }
}

function btnSeven(seven) {
  if (displayValue === undefined) {
    displayValue = seven;
    digits.push(seven);
    populateDisplay();
    console.log('display: ', displayValue);
  } else if (digits.length < 9) {
    if (displayValue === '0') {
      displayValue = seven;
      digits.pop();
      digits.push(seven);
      populateDisplay();
      console.log('display: ', displayValue);
    } else {
      displayValue = displayValue + seven;
      digits.push(seven);
      populateDisplay();
      console.log('display: ', displayValue);
    }
  }
}

function btnSix(six) {
  if (displayValue === undefined) {
    displayValue = six;
    digits.push(six);
    populateDisplay();
    console.log('display: ', displayValue);
  } else if (digits.length < 9) {
    if (displayValue === '0') {
      displayValue = six;
      digits.pop();
      digits.push(six);
      populateDisplay();
      console.log('display: ', displayValue);
    } else {
      displayValue = displayValue + six;
      digits.push(six);
      populateDisplay();
      console.log('display: ', displayValue);
    }
  }
}

function btnFive(five) {
  if (displayValue === undefined) {
    displayValue = five;
    digits.push(five);
    populateDisplay();
    console.log('display: ', displayValue);
  } else if (digits.length < 9) {
    if (displayValue === '0') {
      displayValue = five;
      digits.pop();
      digits.push(five);
      populateDisplay();
      console.log('display: ', displayValue);
    } else {
      displayValue = displayValue + five;
      digits.push(five);
      populateDisplay();
      console.log('display: ', displayValue);
    }
  }
}

function btnFour(four) {
  if (displayValue === undefined) {
    displayValue = four;
    digits.push(four);
    populateDisplay();
    console.log('display: ', displayValue);
  } else if (digits.length < 9) {
    if (displayValue === '0') {
      displayValue = four;
      digits.pop();
      digits.push(four);
      populateDisplay();
      console.log('display: ', displayValue);
    } else {
      displayValue = displayValue + four;
      digits.push(four);
      populateDisplay();
      console.log('display: ', displayValue);
    }
  }
}

function btnThree(three) {
  if (displayValue === undefined) {
    displayValue = three;
    digits.push(three);
    populateDisplay();
    console.log('display: ', displayValue);
  } else if (digits.length < 9) {
    if (displayValue === '0') {
      displayValue = three;
      digits.pop();
      digits.push(three);
      populateDisplay();
      console.log('display: ', displayValue);
    } else {
      displayValue = displayValue + three;
      digits.push(three);
      populateDisplay();
      console.log('display: ', displayValue);
    }
  }
}

function btnTwo(two) {
  if (displayValue === undefined) {
    displayValue = two;
    digits.push(two);
    populateDisplay();
    console.log('display: ', displayValue);
  } else if (digits.length < 9) {
    if (displayValue === '0') {
      displayValue = two;
      digits.pop();
      digits.push(two);
      populateDisplay();
      console.log('display: ', displayValue);
    } else {
      displayValue = displayValue + two;
      digits.push(two);
      populateDisplay();
      console.log('display: ', displayValue);
    }
  }
}

function btnOne(one) {
  if (displayValue === undefined) {
    displayValue = one;
    digits.push(one);
    populateDisplay();
    console.log('display: ', displayValue);
  } else if (digits.length < 9) {
    if (displayValue === '0') {
      displayValue = one;
      digits.pop();
      digits.push(one);
      populateDisplay();
      console.log('display: ', displayValue);
    } else {
      displayValue = displayValue + one;
      digits.push(one);
      populateDisplay();
      console.log('display: ', displayValue);
    }
  }
}

function btnZero(zero) {
  if (displayValue === undefined) {
    displayValue = zero;
    digits.push(zero);
    populateDisplay();
    console.log('display: ', displayValue, 'digits: ', digits);
  } else if (digits.length < 9) {
    const zeroFilter = digits.filter((element) => element === '0');
    if (displayValue === '0') {
      console.log('if zero', zeroFilter);
      return;
    } else {
      displayValue = displayValue + zero;
      digits.push(zero);
      populateDisplay();
      console.log('display: ', displayValue);
    }
  }
}

function populateDisplay() {
  display = document.getElementById('display');
  display.textContent = displayValue;
}

// function populateDisplay() {
//   const display = document.getElementById('display');
//   if (+this.value > -1 || +this.value < 10 || this.value === '.') {
//     // displayValue starts undefined, this logic initializes it based on user input
//     if (displayValue === undefined) {
//       if (this.value === '.') {
//         displayValue = '0' + this.value;
//         digits.push('0');
//       } else {
//         displayValue = this.value;
//         digits.push(this.value);
//       }
//     } else if (digits.length < 9) {
//       const split = displayValue.split('');
//       const checkDot = split.filter((dot) => dot === '.');
//       //checks to see if a decimal is present and prevents additional decimals from being added
//       if (checkDot.join('') === '.') {
//         if (this.value === '.') {
//           displayValue = displayValue;
//         } else {
//           displayValue = displayValue + this.value;
//           digits.push(this.value);
//         }
//       } else if (this.value === '.') {
//         displayValue = displayValue + this.value;
//       } else {
//         if (checkReverse()) {
//           removeReverse();
//         }
//         displayValue = displayValue + this.value;
//         digits.push(this.value);
//       }
//     }
//     display.textContent = displayValue;
//     console.log('A: ', operandA, 'B: ', operandB, 'operator: ', operator);
//   } else if (
//     this.value === '+' ||
//     this.value === '-' ||
//     this.value === '*' ||
//     this.value === '/'
//   ) {
//     if (operandA === undefined && operandB != undefined) {
//       if (previousOperator === '=') {
//         displayValue = '';
//       }
//       console.log('&&');
//       operandA = operandTemp;
//       operandB = displayValue;
//       displayValue = operate(operandA, operandB, operator);
//       display.textContent = displayValue;
//       console.log(
//         'Start |A: ',
//         operandA,
//         'operator: ',
//         operator,
//         'B: ',
//         operandB
//       );
//       operator = this.value;
//       this.classList.add('reverse');
//       operandTemp = displayValue;
//       displayValue = '';
//       digits.length = 0;
//       operandA = undefined;
//     } else if (operandA === undefined) {
//       console.log('A is undefined');
//       operandA = displayValue;
//       operator = this.value;
//       this.classList.add('reverse');
//       displayValue = '';
//       digits.length = 0;
//       operandB = undefined;
//       console.log('this value: ', this.value, 'digits: ', digits);
//       console.log('A: ', operandA, 'operator: ', operator);
//     } else if (operandB === undefined) {
//       console.log(' B is Undefined');
//       console.log('A: ', operandA, 'B: ', operandB, 'operator: ', operator);
//       operandB = displayValue;
//       displayValue = operate(operandA, operandB, operator);
//       display.textContent = displayValue;
//       operator = this.value;
//       this.classList.add('reverse');
//       operandTemp = displayValue;
//       displayValue = '';
//       digits.length = 0;
//       operandA = undefined;
//       console.log('A: ', operandA, 'B: ', operandB, 'operator: ', operator);
//     }
//   } else if (this.value === '=') {
//     console.log('A: ', operandA, 'B: ', operandB, 'operator: ', operator);
//     if (operandA === undefined && operandB === undefined) {
//       return;
//     } else if (operandA === undefined) {
//       previousOperator = '=';
//       let tempDisplayValue = displayValue;
//       displayValue = operate(tempDisplayValue, operandB, operator);
//       display.textContent = displayValue;
//       operandTemp = displayValue;
//     } else if (operandB === undefined) {
//       previousOperator = '=';
//       operandB = displayValue;
//       displayValue = operate(operandA, operandB, operator);
//       display.textContent = displayValue;
//       operandA = undefined;
//     }
//   }
// }

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

function checkReverse() {
  if (
    addBtn.classList.contains('reverse') ||
    subtractBtn.classList.contains('reverse') ||
    multiplyBtn.classList.contains('reverse') ||
    divideBtn.classList.contains('reverse')
  ) {
    return true;
  } else {
    return false;
  }
}

function removeReverse() {
  addBtn.classList.remove('reverse');
  subtractBtn.classList.remove('reverse');
  multiplyBtn.classList.remove('reverse');
  divideBtn.classList.remove('reverse');
}
