let currentInput = '';
let previousInput = '';
let operator = '';

const display = document.getElementById('display');

function appendNumber(number) {
  currentInput += number;
  display.value = currentInput;
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operator = '';
  display.value = '';
}

function setOperator(op) {
  if (currentInput === '') return;
  if (previousInput !== '') calculate();
  operator = op;
  previousInput = currentInput;
  currentInput = '';
}

function calculate() {
  if (currentInput === '' || previousInput === '') return;
  
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  
  switch (operator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      if (current === 0) {
        alert('Cannot divide by zero');
        return;
      }
      result = prev / current;
      break;
    default:
      return;
  }
  
  display.value = result;
  currentInput = result.toString();
  previousInput = '';
  operator = '';
}

window.onload = function() {
  display.value = '';
};
