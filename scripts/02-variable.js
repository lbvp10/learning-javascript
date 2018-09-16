/**
 *
 En este script vamos a declarar variables, leer desde el Prompt y hacer uso de los comentarios

 **/

// variable
var name = prompt("Escribe tu nombre", "")


//concatenar string
console.log("Bienvenid@: ".concat(name))

//Variable de alcance global
NAME = name

console.log("Bienvenid@: ".concat(NAME))

//constante numericas
const numero1 = 1;
//variable numerica dos
var numero2 = 3;

console.log("La suma de " + numero1 + " + " + numero2 + " = " + (numero1 + numero2))

//Arrays
const miArray = ["Luis", "Juan", "Pedro"]
console.log("miArray[0]= " + miArray[0])
console.log("miArray[1]= " + miArray[1])
console.log("miArray[2]= " + miArray[2])

//Booleans
const valTrue = true;
console.log("Esto es true: " + (valTrue === true))

//decimales
const valDecimal = 20.5;
console.log("Esto es un decimal: " + (valDecimal))

// undefined
var miUndefined;
document.writeln("<h2> Modificando el DOM con un" + miUndefined + "</h2>");

//Objects

const miObjetoPerona = {
    nombre: "Juan",
    apellido: "Fernandez"
}

console.log("Nombre de la persona: " + miObjetoPerona.nombre)

// NaN
console.log("el nan es " + (1 / "a"));