//Promise represents an asynchronous operation
//Promises execute at the end of the synchronous default execution (at the end of the file)

const myName = 'Alex'
console.log(`My name is: ${myName}`)

const promise = new Promise((resolve, reject) => {
    console.log('Promise executing!')
    resolve('Solved');
    reject('Something went wrong')
})

promise.then((value) => { //.then and .catch attaches callbacks for the resolution and/or rejection of the Promise. 
                            //Executes AT THE END OF CODE for being asynchronous
    console.log(`Promise is solved with value ${value}`)
})
promise.catch((error) => {
    console.log(error)
})

console.log(`This code is executing before Promise`);

const getAmountInBank = () => { //I like this little bit more. Create promise, and return ok or not-ok in a variable. 
                                //Later we'll use it in .then and .catch to show the messages.
    const promise = new Promise((resolve, reject) =>{
        resolve(1000000)
        reject('El servidor no está disponible')
    });
    return promise;
};

getAmountInBank() 
    .then((amount) =>{
        console.log(`The amount I have in bank is: ${amount}`)
    })
    .then ((amount) =>{
        console.log('Second then') //Is possible to add more than 1 .then and .catch too
    })
    .catch((error) =>{
        console.log(error);
    })