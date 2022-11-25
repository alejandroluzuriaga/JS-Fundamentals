var two = 2;
var twoWithDecimals = 2.5;
var negative = -2;

//Add
var sum = 3 + 2;
console.log(sum);

//Multiply
var mult = 3 * 2;
console.log(mult);

//Divide
var div = 10 / 3;
console.log(div);

//Resto
var rest = 25 %  4;
console.log(rest)

//Power 
var power = 5**2;
console.log(power)

var complexCalculus = 2 + (2 * 4) + (5 / 5) + 6 //Debe tener el orden normal de paréntesis para calcular de la forma que quieres
console.log(complexCalculus)

console.log('-------------------------------');

const numberAsNumber = Number('30'); // Number(Variable String) para convertir string en tipo number. También ParseInt, o ParseFlow
                                    // Si se intenta convertir un string que NO es un numero, el console.log devolverá NaN
console.log(2 + numberAsNumber); 

var esNaN = Number.isNaN(numberAsNumber); // Funciones del objeto Number. Esta en concreto omprueba si es NaN, pero hay muchas más.
console.log(esNaN); 