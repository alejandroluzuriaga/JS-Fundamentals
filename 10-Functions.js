function getPriceByCity(city){
    var price = 0
    
    switch(city){
        case 'Valencia': 
            price = 10;
            break;
        case 'Madrid':
            price = 15;
            break;
        case 'Barcelona':
            price = 20;
            break;
        default:
            price = 1;
    }
    return price;
}
var cityToCheck = 'Barcelona'
var priceByCity = getPriceByCity(cityToCheck)
console.log(`Your price for the metro card in ${cityToCheck} is ${priceByCity} euros`)


  // Basic structure Functions
// function name(parameter1, parameter2, parameter3) {
//  *code to be executed*
// return value;
//}