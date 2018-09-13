//crear array
var arrayNumeros = [2, 4, 6, 8]
console.log("Mi primer array es: " + arrayNumeros)

//insertar registro al final [2, 4, 6, 8,10]
arrayNumeros.push(10)
console.log("El ultmino numero es 10: " + arrayNumeros[arrayNumeros.length - 1])

//insertar registro al inicio [0,2, 4, 6, 8,10]
arrayNumeros.unshift(0)
console.log("El primer numero es 0: " + arrayNumeros[0])

//eliminar el ultimo registro del array[0,2, 4, 6, 8]
arrayNumeros.pop()
console.log("Elminando el ultimo elemento: " + arrayNumeros)

//eliminar el primer registro del array[2, 4, 6, 8]
arrayNumeros.shift()
console.log("Elminando el primer elemento: " + arrayNumeros)

//Buscar dentro del array
var indice = arrayNumeros.indexOf(4)
console.log("En la pos 1 el valor es 4: " + arrayNumeros[indice])

//Moficicar un elmento del array [2, 5, 6, 8]
arrayNumeros[2] = 5
console.log("Array modificado es: " + arrayNumeros)

//Eliminar elemento 5 = [2, 6, 8]
indice = arrayNumeros.indexOf(5)
arrayNumeros.splice(indice, 1)
console.log("Eliminando el numero 5 :" + arrayNumeros)

//copiando
console.log("La copia de mi array es :" + [...arrayNumeros])

document.writeln("<h3> Inspeccionar la consola</h3>")