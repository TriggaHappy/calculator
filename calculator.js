'use strict';

//save as strings
let currentOperand = '';
let previousOperand = '';
let operator = '';
let result = '';
const buttons = document.querySelectorAll('[btn-number]');
const operators = document.querySelectorAll('[operator]');
const display = document.getElementById('display');

//first number
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    currentOperand += btn.textContent;
    operator = '';
  });
});

//operator
operators.forEach(btn => {
  btn.addEventListener('click', () => {
    operator += btn.textContent;
    previousOperand += operator;
    previousOperand += currentOperand;
    currentOperand = '';
    //console.log(previousOperand);
  });
});

//solve function
document.querySelector('[solve]').addEventListener('click', function () {
  previousOperand += currentOperand;
  console.log(previousOperand);
});

//clear function
document.querySelector('[reset]').addEventListener('click', function () {
  currentOperand = '';
  previousOperand = '';
  operator = '';
});
