const myName = 'Alex'; 

//Cristian says that is better to use "const" as much as we can, and in other cases, use "let" (works the same as "var")

let name = 'Alex';
function getNameInUpperCase(newName){
    return newName.toUpperCase();
}
console.log('El nombre en mayúsuculas es', getNameInUpperCase('alex'));

//"var" can use things from outside his scope. But the problem is that if we use "var" inside loops or functions, and
// those variable names for any reason are being used outside our scope, we can modify them. So its better to just keep using
// "let" to get a more clear code, and don't use global variables inside functions

