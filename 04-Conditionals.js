var age = 25;
if (age >= 25){
    console.log(`Perfecto. Puedes participar en el concurso`);
} else{
    console.log(`Lo sentimos. Tienes menos de 25 años`);
}

var yearsToRenew = 0;
var driverAge = 54  ;

// 18 o más, y 50 o menos => 10
// más de 50 y menos o igual a 75 => 5
// más de 75 años => 1
if (driverAge >= 18 && driverAge<=50){
    yearsToRenew = 10;
} else if (driverAge>50 && driverAge<=75){
    yearsToRenew = 5;
} else if (driverAge > 75){
    yearsToRenew = 1;
}

console.log(`Debes renovar cada ${yearsToRenew} años :)`)
