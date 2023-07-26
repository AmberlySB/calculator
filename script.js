let a = 10;
let b = 5;
let op = "/";

function operate(a, b, op) {
  if (op === "+") result = add(a, b);
  else if (op === "-") result = subtract(a, b);
  else if (op === "*") result = multiply(a, b);
  else if (op === "/") result = divide(a, b);
  return result;
}

console.log(operate(a, b, op));

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
