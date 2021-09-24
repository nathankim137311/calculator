console.log('hello world!');
// variables 
const clearBtn = document.getElementById('clear'); 
const numberBtns = Array.from(document.querySelectorAll('.numbers')); 
const operatorBtns = Array.from(document.querySelectorAll('.operators'));
const equalsBtn = document.getElementById('equals');
const decimalBtn = document.getElementById('decimal');  
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
  if (divide(num1, num2) === Infinity) {
    display.textContent = 'ERROR'; 
  } else {
    display.textContent = Math.round(1000 * operate(operator, num1, num2))/1000; 
  }
});

// decimal button 
decimalBtn.addEventListener('click', (e) => {
  if (display.textContent.includes('.')) {
    decimalBtn.removeEventListener('click', (e)); 
  } else {
    display.textContent += e.target.textContent;
  }
});

// calculator functions 
function add (num1, num2) {
return Number(num1) + Number(num2); 
}

function subtract (num1, num2) {
return Number(num1) - Number(num2); 
}

function multiply (num1, num2) {
return Number(num1) * Number(num2);  
}

function divide (num1, num2) {
  return Number(num1) / Number(num2);
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
