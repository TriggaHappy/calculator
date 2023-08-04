'use strict';
'strict mode';

//save as strings
let currentOperand = '';
let previousOperand = '';
let opertator = '';
let sum = '';
const buttons = document.querySelectorAll('[btn-number]');
const display = document.getElementById('display');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    currentOperand += btn.textContent;
    console.log(currentOperand);
  });
});

//first number

//operation

//solve function
