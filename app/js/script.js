console.log('hello world!');

function add (a, b) {
return a + b; 
}

function subtract (a, b) {
return a - b; 
}

function multiply (a, b) {
return a * b; 
}

function divide (a, b) {
return a / b; 
}

console.log(add(1, 2)); 
console.log(subtract(1, 2)); 
console.log(multiply(1, 2)); 
console.log(divide(1, 2)); 

function operate (operator, num1, num2) {
  if (operator == '+') {
    return add(num1, num2); 
  }
}

console.log(operate('+', 1, 2)); 