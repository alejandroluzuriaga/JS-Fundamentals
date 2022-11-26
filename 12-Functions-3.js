//Scoping y Shadowing. Conceptos básicos.

//Scoping is what I like to call the enviroment of a variable or a function. Where are they capable of reaching to?
//Shadowing is when two variables of different scope (global and local (in a function) for example) are called the same. And in this 
// specific case, we say that the global variable is shadowed by the local variable in a function. Works for functions 
// and any other kind of methods. 

// var name = 'Cristian'
// console.log('1. name:', name)

// function changeName(newName){ //This is putting global values into the function. Not a good practice, never liked it. 
//     name = newName;
// }

// console.log('2. name:', name)

// changeName('John')
// console.log('3. name:', name)

function add(a, b){
    return a + b;
}

function substract(a, b){
    return a - b;
}

function doOperation(operation, a, b){
    if (operation === 'add'){
        return add(a, b);
    } else if (operation === 'substract'){
        return substract(a, b);
    } else{
        return 'No operation';
    }
}

const result = doOperation('add', 2, 5)

console.log(`Result is ${result}`);