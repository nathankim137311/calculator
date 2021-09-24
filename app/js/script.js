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
let timesClicked = 0; 

// event listeners 
// display converts to empty string 
clearBtn.addEventListener('click', () => {
  display.textContent = ''; 
});

// all number buttons display text content 
numberBtns.forEach((currentBtn) => {
  currentBtn.addEventListener('click', (e) => {
    if (timesClicked === 0) {
      display.textContent += e.target.textContent; 
    } else {
      display.textContent = e.target.textContent; 
    }
  });
});

// operators 
operatorBtns.forEach((currentBtn) => {
  currentBtn.addEventListener('click', (e) => {
    num1 = display.textContent; 
    display.textContent = '';
      if (e.target.textContent === '+') {
        operator = '+';  
        operate(operator, num1);
      } else if (e.target.textContent === '-') {
        operator = '-'; 
        operate(operator, num1); 
      } else if (e.target.textContent === 'x') {
        operator = 'x'; 
        operate(operator, num1); 
      } else if (e.target.textContent === '/') {
        operator = '/'; 
        operate(operator, num1); 
      }
  });
});

// equals button 
equalsBtn.addEventListener('click', () => {
  num2 = display.textContent; 
  console.log(num2); 
  console.log(operator);
  console.log(num1); 
  display.textContent = operate(operator, num1, num2);
});


// calculator functions 
function add (num1, num2) {
return Number(num1) + Number(num2); 
}

function subtract (num1, num2) {
return Number(num1) - Number(num2); ; 
}

function multiply (num1, num2) {
return Number(num1) * Number(num2); ; 
}

function divide (num1, num2) {
return Number(num1) / Number(num2); ; 
}

function operate (operator, num1, num2) {
  if (operator == '+') {
    return add(num1, num2); 
  } else if (operator == '-') {
    return subtract(num1, num2); 
  } else if (operator == 'x') {
    return multiply(num1, num2); 
  } else if (operator == '/') {
    return divide(num1, num2); 
  }
}
