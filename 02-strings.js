// var name = 'Alejandro';
// var surname = 'González'; //Siempre que se pueda usar comillas simples. Aunque las comillas dobles también funcionan
// var fullName = name + ' ' + surname;

// console.log(fullName);

var firstIngredient = 'leche';
var secondIngredient = 'arroz';
var thirdIngredient = 'limón';
var fourthIngredient = 'canela';

var recipe =
  'Lista de ingredientes: ' +
  firstIngredient +
  ', ' +
  secondIngredient +
  ' ,' +
  thirdIngredient +
  ' y ' +
  fourthIngredient;

console.log(recipe);

var recipeInterpolated = 
`Lista de ingredientes:
- ${firstIngredient}.
- ${secondIngredient}.
- ${thirdIngredient}.
- ${fourthIngredient}.
`
console.log(recipeInterpolated)
console.log('------------------------');

var car = 'Fiat'
var myCar = `My car is a ${car.toUpperCase()}` //todo en mayusculas

var dog = 'CARLINO'
var myDog = `Mi dog is a ${dog.toLowerCase()}`; //todo en minusculas

console.log(myCar)
console.log(myDog)

console.log('------------------------');

var computerDescription = '   Ordenador muy potente con mucha RAM. ';
console.log(computerDescription.trim()) //Elimina espacios al inicio y al final

console.log('------------------------');

var school = 'The PMBA';
var schoolName = school.slice(4); //Sirve para coger una sección del string. Puede establecerse un principio y un final.
console.log(schoolName);

