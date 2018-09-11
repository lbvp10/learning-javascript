/**
 *
 En este script vamos a declarar variables, leer desde el Prompt y hacer uso de los comentarios

 **/

// variable de alcance local
var name = prompt("Escribe tu nombre", "")


//concatenar string
alert("Bienvenid@: " + name)

//Variable de alcance global
NAME = name

//concatenar string
console.log("Bienvenid@: ".concat(NAME))