const person = {
    name: 'Alex',
    surname: 'Propit'
};
console.log(`Person's name is ${person.name} ${person.surname} `)

person['age'] = 30; //Allows you to create a new attribute to the class person
console.log(`Person's age is ${person.age}`);

person['city'] = 'Madrid';
delete person['age']; //Allows you to delete a certain attribute
console.log(`Person's age is ${person.age} and lives in ${person.city}`);

//example of how to check if a certain attribute exists in the object, and if it does, return it 
function getAttribute(object, attribute){
    
    return object[attribute]
}

const personName = getAttribute(person, 'name')
const personSurname = getAttribute(person, 'surname')
console.log(`"name" attribute on the object is`, personName, `and "surname" attribute is`, personSurname)
