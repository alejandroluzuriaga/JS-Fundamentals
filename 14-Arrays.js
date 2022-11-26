const grades = [10, 8 , 4 , 6 , 8 , 9 , 3.2];
const lenght = grades.length;

function showArray(array){
    for(let i = 0; i < array.length; ++i){
        console.log(array[i])
    }
    console.log('------------------------')
}


//we can modify elements in the array despite we're using CONST for declaring the array. So its a good practice to declare
//them that way
showArray(grades)
grades[0] = 4;
showArray(grades)

//to add an element at the start of the array we use array.unshift(element)

grades.unshift(11)
showArray(grades)

//to delete first element of the array we use array.shift()

grades.shift(11)
showArray(grades)

//to add an element at the end of the array we use array.push(element)

grades.push(6)
showArray(grades)

//to delete last element of the array we use array.pop()

grades.po(6)
showArray(grades)

//we can get 1 or more elements of the array with the .slice function 

const testArray = grades.slice(0,2) //from 0 to 2 without including the second
console.log(testArray)

//we can copy an array by using the same .slice function without arguments 

const ArrayCopy = grades.slice();
ArrayCopy.push(55)
showArray(ArrayCopy)

//IMPORTANT: as we know, in JS is not the same to copy an array into another, and using the '=' to assign it. One
// creates a different copy of the same object, and the other just references to the memory adress of the original array 
// and modifying our "copy", will modify the original.

