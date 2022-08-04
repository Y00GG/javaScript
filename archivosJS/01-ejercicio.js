'use strict'

var numero1 = prompt("Digita el primer numero",0);
var numero2 = prompt("Digita el segundo numero",0);

numero1 = Number(numero1);
numero2 = Number(numero2);

if(numero1 == numero2){
    alert("los numeros que digito son iguales");
}else if(numero1 > numero2){
    alert("El numero uno es mayor al numero dos");
}else(
    alert("El numero dos es mayor al numero uno")
)