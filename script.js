let displayValue;
let operandA;
let operandB;
let operandTemp;
let operator;
//this array is used to check if the display has reached it's max capacity for characters (9)
let digits = [];

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', calcButtons);
});
const addId = document.getElementById('add');
const subtractId = document.getElementById('subtract');
const multiplyId = document.getElementById('multiply');
const divideId = document.getElementById('divide');

function operate(a, b, op) {
  console.log('opA: ', a, 'opB: ', b, 'op: ', op, 'dV: ', displayValue);
  if (op === '+') result = add(+a, +b).toString();
  else if (op === '-') result = subtract(a, b).toString();
  else if (op === '*') result = multiply(a, b).toString();
  else if (op === '/') result = divide(a, b).toString();
  return result;
}

function populateDisplay() {
  display = document.getElementById('display');
  if (displayValue > 999999999) {
    display.textContent = 'ERROR';
  } else {
    console.log('pD()', displayValue);
    display.textContent = displayValue;
  }
}

function calcButtons() {
  const thisValue = this.value;
  if (this.value === '0') {
    removeReverse();
    zeroBtn(thisValue);
  } else if (this.value === '1') {
    removeReverse();
    oneBtn(thisValue);
  } else if (this.value === '2') {
    removeReverse();
    twoBtn(thisValue);
  } else if (this.value === '3') {
    removeReverse();
    threeBtn(thisValue);
  } else if (this.value === '4') {
    removeReverse();
    fourBtn(thisValue);
  } else if (this.value === '5') {
    removeReverse();
    fiveBtn(thisValue);
  } else if (this.value === '6') {
    removeReverse();
    sixBtn(thisValue);
  } else if (this.value === '7') {
    removeReverse();
    sevenBtn(thisValue);
  } else if (this.value === '8') {
    removeReverse();
    eightBtn(thisValue);
  } else if (this.value === '9') {
    removeReverse();
    nineBtn(thisValue);
  } else if (this.value === '.') {
    removeReverse();
    decimalBtn(thisValue);
  } else if (this.value === '+') {
    removeReverse();
    this.classList.add('reverse');
    addBtn(thisValue);
  } else if (this.value === '-') {
    removeReverse();
    this.classList.add('reverse');
    subtractBtn(thisValue);
  } else if (this.value === '*') {
    removeReverse();
    this.classList.add('reverse');
    multiplyBtn(thisValue);
  } else if (this.value === '/') {
    removeReverse();
    this.classList.add('reverse');
    divideBtn(thisValue);
  } else if (this.value === '=') {
    removeReverse();
    equalsBtn();
  }
}

function equalsBtn() {
  if (displayValue === undefined) {
    return;
  } else if (operandA === undefined) {
    return;
  } else if (operandB === undefined) {
    if (displayValue === '') {
      operandB = operandA;
    } else {
      operandB = displayValue;
    }
    displayValue = operate(operandA, operandB, operator);
    populateDisplay();
    operandA = displayValue;
    digits = [];
    displayValue = '';
    console.log(
      'opA: ',
      operandA,
      'opB: ',
      operandB,
      'op: ',
      operator,
      'dV: ',
      displayValue
    );
  } else if (displayValue === '') {
    console.log('error');
    displayValue = operate(operandA, operandB, operator);
    populateDisplay();
    operandA = displayValue;
    digits = [];
    displayValue = '';
  } else {
    displayValue = operate(displayValue, operandB, operator);
    populateDisplay();
    operandA = displayValue;
    digits = [];
    displayValue = '';
  }
}

function divideBtn(divide) {
  if (displayValue === undefined) {
    displayValue = '0';
    operator = divide;
  } else if (displayValue === '') {
    operator = divide;
    operandB = undefined;
    return;
  } else if (operandA === undefined) {
    operandA = displayValue;
    operator = divide;
    digits = [];
    displayValue = '';
  } else if (operandA != undefined && operandB === undefined) {
    displayValue = operate(operandA, displayValue, operator);
    operandA = displayValue;
    populateDisplay();
    operator = divide;
    digits = [];
    displayValue = '';
  } else {
    operandB = undefined;
    displayValue = operate(operandA, displayValue, operator);
    operandA = displayValue;
    populateDisplay();
    operator = divide;
    digits = [];
    displayValue = '';
  }
}

function multiplyBtn(multiply) {
  if (displayValue === undefined) {
    displayValue = '0';
    operator = multiply;
  } else if (displayValue === '') {
    operator = multiply;
    operandB = undefined;
    return;
  } else if (operandA === undefined) {
    console.log('opA: ', operandA, 'op: ', operator);
    operandA = displayValue;
    operator = multiply;
    digits = [];
    displayValue = '';
    console.log('opA: ', operandA, 'op: ', operator);
  } else if (operandA != undefined && operandB === undefined) {
    displayValue = operate(operandA, displayValue, operator);
    operandA = displayValue;
    populateDisplay();
    operator = multiply;
    digits = [];
    displayValue = '';
  } else {
    operandB = undefined;
    displayValue = operate(operandA, displayValue, operator);
    operandA = displayValue;
    populateDisplay();
    operator = multiply;
    digits = [];
    displayValue = '';
  }
}

function subtractBtn(subtract) {
  if (displayValue === undefined) {
    displayValue = '0';
    operator = subtract;
  } else if (displayValue === '') {
    operator = subtract;
    operandB = undefined;
    return;
  } else if (operandA === undefined) {
    operandA = displayValue;
    operator = subtract;
    digits = [];
    displayValue = '';
  } else if (operandA != undefined && operandB === undefined) {
    displayValue = operate(operandA, displayValue, operator);
    operandA = displayValue;
    populateDisplay();
    operator = subtract;
    digits = [];
    displayValue = '';
  } else {
    operandB = undefined;
    displayValue = operate(operandA, displayValue, operator);
    operandA = displayValue;
    populateDisplay();
    operator = subtract;
    digits = [];
    displayValue = '';
  }
}

function addBtn(add) {
  if (displayValue === undefined) {
    displayValue = '0';
    operator = add;
  } else if (displayValue === '') {
    operator = add;
    operandB = undefined;
    return;
  } else if (operandA === undefined) {
    operandA = displayValue;
    operator = add;
    digits = [];
    displayValue = '';
  } else if (operandA != undefined && operandB === undefined) {
    displayValue = operate(operandA, displayValue, operator);
    operandA = displayValue;
    populateDisplay();
    operator = add;
    digits = [];
    displayValue = '';
  } else {
    console.log('+else');
    operandB = undefined;
    displayValue = operate(operandA, displayValue, operator);
    operandA = displayValue;
    populateDisplay();
    operator = add;
    digits = [];
    displayValue = '';
  }
}

function decimalBtn(decimal) {
  if (displayValue === undefined || displayValue === '') {
    displayValue = '0' + decimal;
    populateDisplay();
  } else if (displayValue.includes('.')) {
    return;
  } else {
    console.log('decimal');
    displayValue = displayValue + decimal;
    populateDisplay();
  }
}

function nineBtn(nine) {
  if (displayValue === undefined) {
    displayValue = nine;
    digits.push(nine);
    populateDisplay();
  } else if (digits.length < 9) {
    if (displayValue === '0') {
      displayValue = nine;
      digits.pop();
      digits.push(nine);
      populateDisplay();
    } else {
      displayValue = displayValue + nine;
      digits.push(nine);
      populateDisplay();
    }
  }
}

function eightBtn(eight) {
  if (displayValue === undefined) {
    displayValue = eight;
    digits.push(eight);
    populateDisplay();
  } else if (digits.length < 9) {
    if (displayValue === '0') {
      displayValue = eight;
      digits.pop();
      digits.push(eight);
      populateDisplay();
    } else {
      displayValue = displayValue + eight;
      digits.push(eight);
      populateDisplay();
    }
  }
}

function sevenBtn(seven) {
  if (displayValue === undefined) {
    displayValue = seven;
    digits.push(seven);
    populateDisplay();
  } else if (digits.length < 9) {
    if (displayValue === '0') {
      displayValue = seven;
      digits.pop();
      digits.push(seven);
      populateDisplay();
    } else {
      displayValue = displayValue + seven;
      digits.push(seven);
      populateDisplay();
    }
  }
}

function sixBtn(six) {
  if (displayValue === undefined) {
    displayValue = six;
    digits.push(six);
    populateDisplay();
  } else if (digits.length < 9) {
    if (displayValue === '0') {
      displayValue = six;
      digits.pop();
      digits.push(six);
      populateDisplay();
    } else {
      displayValue = displayValue + six;
      digits.push(six);
      populateDisplay();
    }
  }
}

function fiveBtn(five) {
  if (displayValue === undefined) {
    displayValue = five;
    digits.push(five);
    populateDisplay();
  } else if (digits.length < 9) {
    if (displayValue === '0') {
      displayValue = five;
      digits.pop();
      digits.push(five);
      populateDisplay();
    } else {
      displayValue = displayValue + five;
      digits.push(five);
      populateDisplay();
    }
  }
}

function fourBtn(four) {
  if (displayValue === undefined) {
    displayValue = four;
    digits.push(four);
    populateDisplay();
  } else if (digits.length < 9) {
    if (displayValue === '0') {
      displayValue = four;
      digits.pop();
      digits.push(four);
      populateDisplay();
    } else {
      displayValue = displayValue + four;
      digits.push(four);
      populateDisplay();
    }
  }
}

function threeBtn(three) {
  if (displayValue === undefined) {
    displayValue = three;
    digits.push(three);
    populateDisplay();
  } else if (digits.length < 9) {
    if (displayValue === '0') {
      displayValue = three;
      digits.pop();
      digits.push(three);
      populateDisplay();
    } else {
      displayValue = displayValue + three;
      digits.push(three);
      populateDisplay();
    }
  }
}

function twoBtn(two) {
  if (displayValue === undefined) {
    displayValue = two;
    digits.push(two);
    populateDisplay();
  } else if (digits.length < 9) {
    if (displayValue === '0') {
      displayValue = two;
      digits.pop();
      digits.push(two);
      populateDisplay();
    } else {
      displayValue = displayValue + two;
      digits.push(two);
      populateDisplay();
    }
  }
}

function oneBtn(one) {
  if (displayValue === undefined) {
    displayValue = one;
    digits.push(one);
    populateDisplay();
  } else if (digits.length < 9) {
    if (displayValue === '0') {
      displayValue = one;
      digits.pop();
      digits.push(one);
      populateDisplay();
    } else {
      displayValue = displayValue + one;
      digits.push(one);
      populateDisplay();
    }
  }
}

function zeroBtn(zero) {
  if (displayValue === undefined) {
    displayValue = zero;
    digits.push(zero);
    populateDisplay();
  } else if (digits.length < 9) {
    if (displayValue === '0') {
      return;
    } else {
      displayValue = displayValue + zero;
      digits.push(zero);
      populateDisplay();
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

function removeReverse() {
  if (
    addId.classList.contains('reverse') ||
    subtractId.classList.contains('reverse') ||
    multiplyId.classList.contains('reverse') ||
    divideId.classList.contains('reverse')
  ) {
    addId.classList.remove('reverse');
    subtractId.classList.remove('reverse');
    multiplyId.classList.remove('reverse');
    divideId.classList.remove('reverse');
  }
}
