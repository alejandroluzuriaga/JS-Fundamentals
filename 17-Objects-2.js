const vehicles = [
    {
        model: 'Seat Ibiza',
        capacity: 5,
        favorite: false,
    },
    {
        model: 'Mercedes Vito',
        capacity: 8,
        favorite: false,
    },
    {
        model: 'Kawasaki Ninja',
        capacity: 2,
        favorite: true,
    }
]
const person = {
    name: 'Alex'
}

function getMaxCapacityVehicle(vehiclesArray){
    let maxCapacity = 0;
    for(let i = 0; i < vehiclesArray.length; ++i){
        if (vehiclesArray[i].capacity > maxCapacity){
            maxCapacity = vehiclesArray[i].capacity
        }
    }
    return maxCapacity;
}

function getFavoriteVehicle(vehiclesArray){
    let favorite = [];
    for(let i = 0; i < vehiclesArray.length; ++i){
        if (vehiclesArray[i].favorite === true){
            favorite = vehiclesArray[i];
        }
    }
    return favorite;
}

const maxCap = getMaxCapacityVehicle(vehicles)
const favorite = getFavoriteVehicle(vehicles)

person['vehicle'] = favorite

console.log(person)

const copy = Object.assign({}, person) //Copy the values of all own properties from object source (2nd parameter) to a target object. 
                                        //(first parameter). Returns the target object.
console.log(copy)