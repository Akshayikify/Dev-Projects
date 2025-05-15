let currentNumber = '0';
let currentOperator = null;
let previousNumber = '';

function appendNumber(num) {
  if (currentNumber === '0' || currentNumber === 'null') {
    currentNumber = num;
  } else {
    currentNumber += num;
  }
  updateDisplay();
}

function appendOperator(op) {
  if (currentOperator !== null) calculate();
  previousNumber = currentNumber;
  currentOperator = op;
  currentNumber = '0'; // Reset for next number input
}

function calculate() {
  let result;
  const prev = parseFloat(previousNumber);
  const current = parseFloat(currentNumber);

  switch (currentOperator) {
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
      result = prev / current;
      break;
    default:
      return;
  }

  currentNumber = result.toString();
  currentOperator = null;
  updateDisplay();
}

function clearInput() {
  currentNumber = '0';
  previousNumber = '';
  currentOperator = null;
  updateDisplay();
}

function updateDisplay() {
  document.querySelector(".input").innerText = currentNumber;
}