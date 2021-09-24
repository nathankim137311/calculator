console.log('hello world!');
// variables 
const clearBtn = document.getElementById('clear'); 
const numberBtns = Array.from(document.querySelectorAll('.numbers')); 
const operatorBtns = Array.from(document.querySelectorAll('.operators'));
const equalsBtn = document.getElementById('equals');
const display = document.getElementById('display');

let num1 = 0; 
let num2 = 0; 
let operator = 0; 

// event listeners 
// display converts to empty string 
clearBtn.addEventListener('click', () => {
  display.textContent = ''; 
});

// all number buttons display text content 
numberBtns.forEach((currentBtn) => {
  currentBtn.addEventListener('click', (e) => {
    display.textContent += e.target.textContent; 
    num1 = display.textContent; 
  });
});

// operators 
operatorBtns.forEach((currentBtn) => {
  currentBtn.addEventListener('click', (e) => {
      if (e.target.textContent === '+') {
        console.log('addition');
      } else if (e.target.textContent === '-') {
        console.log('subtraction');
      } else if (e.target.textContent === 'X') {
        console.log('multiplication');
      } else if (e.target.textContent === '/') {
        console.log('division'); 
      }
  });
});

// equals button 
equalsBtn.addEventListener('click', () => {
  operate(operator, num1, num2);
});


// calculator functions 
function add (num1, num2) {
return num1 + num2; 
}

function subtract (num1, num2) {
return num1 - num2; 
}

function multiply (num1, num2) {
return num1 * num2; 
}

function divide (num1, num2) {
return num1 / num2; 
}

console.log(add(1, 2));  

function operate (operator, num1, num2) {
  if (operator == '+') {
    return add(num1, num2); 
  }
}

console.log(operate('+', 1, 2)); 