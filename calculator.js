'use strict';

//save as strings
let currentOperand = '';
let previousOperand = '';
let operator = '';
let result = '';
const numbers = document.querySelectorAll('[btn-number]');
const operators = document.querySelectorAll('[operator]');
const display = document.getElementById('display');

function clickNumber(number) {
  currentOperand += number;
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
  } else if (operator === '-') {
    result = Number(previousOperand) - Number(currentOperand);
    keepCalculating();
  } else if (operator === '/') {
    if (currentOperand > 0) {
      result = Number(previousOperand) / Number(currentOperand);
      keepCalculating();
    } else {
      display.textContent = 'You Idiot!';
    }
  } else if (operator === '*') {
    result = Number(previousOperand) * Number(currentOperand);
    keepCalculating();
  } else if (operator === 'x²') {
    result = Number(previousOperand) ** 2;
    keepCalculating();
  }
  console.log(result);
  //console.log(previousOperand, currentOperand);
});

//clear function
document.querySelector('[reset]').addEventListener('click', function () {
  reset();
});
