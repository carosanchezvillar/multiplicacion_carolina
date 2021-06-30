//function factorial_numero(x){
    //if(x > 1){
       // return x * factorial_numero(x-1)
    //} else{
    //    return x
   // }
//}

//var num= prompt("Ingrese un número")

//document.write(`El factorial del número ${num}! es: ${factorial_numero(num)}`)

"Use strict";


//declaramos la función
function askForLimitNumber(){
    const numLimit = Number.parseInt(prompt("Ingrese el número"));
    if(numLimit >= 1 && numLimit <= 20){
        console.log("El número esta dentro del rango")
    return numLimit;
} else{console.log("El número esta fuera del rango")
    return null;
}
}

///////////////////////////////////

const limitNumber = askForLimitNumber();

for (let num1 = 1; num1 <= limitNumber; num1 ++){
    console.log(`${num1} * ${limitNumber} = ${num1 * limitNumber}` )
}

for(let factoryNumber = 1; factoryNumber <= limitNumber; factoryNumber++){
    let result = 1;
    for (let multiplier = 1; multiplier <= factoryNumber; multiplier++ ){
       result = result * multiplier;

    }
    console.log(`El factorial de ${factoryNumber} es: ${result}`);
}

