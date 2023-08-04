'use strict';

let operandOne = '';
let operandTwo = '';
let sum = '';
const buttons = document.querySelectorAll('[btn-number]');
const display = document.getElementById('display');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    operandOne += btn.textContent;
    console.log(operandOne);
  });
});
