'use strict'

//Parametros REST y SPREAD

function listadoFrutas(fruta1, fruta2, ...resto_de_frutas){
    console.log("Fruta 1: "+fruta1);
    console.log("Fruta 2: "+fruta2);
    console.log("Frutas : "+resto_de_frutas);
}
var frutaspeque = ["TOMATE", "LECHUGA"];

var frutas = ["Melocoton", "Zanahoria", frutaspeque];

console.log(frutas);
listadoFrutas(frutas,"Manzana","Pera", "Melon", "Zandia", "Fresas");