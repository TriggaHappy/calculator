'use strict';

//save as strings
let currentOperand = '';
let previousOperand = '';
let operator = '';
let result = '';
const numbers = document.querySelectorAll('[btn-number]');
const operators = document.querySelectorAll('[operator]');
const display = document.getElementById('display');
const deleteButton = document.querySelector('[delete]');

function clickNumber(number) {
  currentOperand += number;
  display.textContent = number;
}

function clickOperator(operatorInput) {
  operator += operatorInput;
}

function reset() {
  currentOperand = '';
  previousOperand = '';
  operator = '';
  result = '';
}

function keepCalculating() {
  currentOperand = '';
  operator = '';
  previousOperand = result;
}

//first number
numbers.forEach(btn => {
  btn.addEventListener('click', () => {
    clickNumber(btn.textContent);
  });
});

//operator
operators.forEach(btn => {
  btn.addEventListener('click', () => {
    clickOperator(btn.textContent);
    previousOperand += currentOperand;
    currentOperand = '';
    //console.log(previousOperand);
  });
});

//solve function
document.querySelector('[solve]').addEventListener('click', function () {
  if (operator === '+') {
    result = Number(previousOperand) + Number(currentOperand);
    keepCalculating();
    display.textContent = result;
  } else if (operator === '-') {
    result = Number(previousOperand) - Number(currentOperand);
    keepCalculating();
    display.textContent = result;
  } else if (operator === '/') {
    if (currentOperand > 0) {
      let intermediateResult = Number(previousOperand) / Number(currentOperand);
      result = intermediateResult.toFixed(2);
      keepCalculating();
      display.textContent = result;
    } else {
      display.textContent = 'You Idiot!';
      reset();
    }
  } else if (operator === '*') {
    result = Number(previousOperand) * Number(currentOperand);
    keepCalculating();
    display.textContent = result;
  } else if (operator === 'x²') {
    result = Number(previousOperand) ** 2;
    keepCalculating();
    display.textContent = result;
  }
  console.log(result);
  //console.log(previousOperand, currentOperand);
});

//clear function
document.querySelector('[reset]').addEventListener('click', function () {
  reset();
  display.textContent = '0';
});
