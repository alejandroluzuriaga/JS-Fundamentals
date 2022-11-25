//Anonymous functions and how to use them

var anonymous = function (){
    return "Hello anonymous function! I have no name, and I can only work if I'm assigned to a variable :)"
}
console.log(anonymous())

var substract = function (num1, num2){
    return num1 - num2
}
console.log(substract(5, 12))

//Regular functions

function sum(num1, num2){
    return num1+num2;
}
console.log(sum(2, 3))

//Arrow functions

var multiply = (a, b) => {
    return a * b;
}
console.log(multiply(5, 6))

//Implicit return function

var divide = (a, b) => a / b;
console.log(divide(20, 6));