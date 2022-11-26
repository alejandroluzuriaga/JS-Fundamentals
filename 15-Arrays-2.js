//Average of the values of an array
const grades = [10, 8 , 4 , 6 , 8 , 9 , 3.2];
const arrayOnlyOdds = [1, 3, 5, 7, 9, 11];
const getAverage = (array) =>{
    let add = 0;
    for (let i = 0; i < array.length; ++i){
        add += array[i];
    }
    return (add/array.length)
}

const average = getAverage(grades) 
    console.log(`The entire class has a ${average} on average`)
//------------------------------------------------------

//Function that returns an array2 of all even numbers of the original array

const getEven = (array) =>{
    const arrayEven = [];
    for(let i = 0; i < array.length; ++i){
        if (array[i] % 2 === 0){
            arrayEven.push(array[i]);
        }
    }
    return arrayEven;
}

const array2 = getEven(grades);
console.log(array2)

const array3 = getEven(arrayOnlyOdds);
console.log(array3)