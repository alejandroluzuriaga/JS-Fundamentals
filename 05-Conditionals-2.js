var price;
var city = 'Barcelona'

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

console.log(`El precio del metro para ${city} es ${price} euros`);

// Estructura: 
// switch(parametro){
//  case posibleValor1:
//      instrucciones1;
//      break;
//  case posibleValor2:
//      instrucciones1;
//      break;
//      .
//      .
//      .
//  case posibleValorN:
//      instruccionesN;
//      break;
//  default:
//      instruccionesN;
//      break;
//}