// var trueValue = true;
// var falseValue = false;

// console.log(trueValue )

// console.log(2 > 3)

console.log('Juan'.toLowerCase() == 'juan');

//Igualdades en JS
// Comparación débil == compara la igualdad de dos valores después de convertir ambos valores a un tipo de datos común. 
            //Ejemplo: ('5' == 5) es true.
// Comparación estricta === compara la igualdad de dos valores sin convertirlos a otro tipo de dato. 
            //Ejemplo: ('5' === 5) es false.

console.log('Es 2 truthy?' + Boolean(2)); //all values are truthy except false, 0, -0, 0n, "", null, undefined, and NaN.
console.log('Es 0 falsy? ' + Boolean(0));
console.log('Es un string vacío falsy? ' + Boolean(''));
console.log('Es un undefined falsy? ' + Boolean(undefined));
console.log('Es un null falsy? ' + Boolean(null));