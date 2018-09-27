//Funcion que suma dos numeros
console.log("------------------------Funcion que suma dos numeros------------------------")

function suma(a, b) {
    return a + b;
}

console.log("Suma de dos numeros 6 + 9 : " + suma(6, 9))

//Paso de parametros primitivos por valor
console.log("------------------------Paso de parametros por valores------------------------")
var nombre = 'Luis'

function modificarParametro(_nombre) {
    _nombre = 'Carlos'
    console.log("El nombre dentro de la funcion es: " + _nombre)
}

modificarParametro(nombre)
console.log("El nombre fuera de la funcion es: " + nombre)

//Paso de parametros objetos por referencia
console.log("------------------------Paso de parametros por referencias------------------------")
var persona = {
    nombre: 'Luis'
}

function modificarParametro(persona) {
    persona.nombre = 'Carlos'
    console.log("El nombre dentro de la funcion es: " + persona.nombre)
}

modificarParametro(persona)
console.log("El nombre fuera de la funcion es: " + persona.nombre)

//Otra forma de declara funciones (Expresiones de funciones) funcion anonima(no tiene nombre)
console.log("------------------------Expresiones de funciones------------------------")
var functionAnonimaSuma = function (a, b) {
    return a + b
}
console.log("Suma de dos numeros 6 + 3 : " + functionAnonimaSuma(6, 3))

//Funciones anidadas
console.log("------------------------Funciones anidadas------------------------")

function calcularPromedio() {
    var numero1 = 5, numero2 = 3, numero3 = 6

    function calcularSumar(a, b, c) {
        return a + b + c
    }

    return calcularSumar(numero1, numero2, numero3) / 3
}

console.log("El promedio de (5,3,6) es : " + calcularPromedio())

//Funciones de flecha
console.log("------------------------Funciones de flecha------------------------")
console.log(["1", "Luis", "Maria"].map(element => element.length))

//Invocar una funcion dentro de otra funcion
console.log("------------------------Invocar una funcion dentro de otra funcion------------------------")

function outside(x) {
    function inside(y) {

        return x + y;
    }

    return inside;
}

console.log("outside function:" + outside(1))
console.log("inside function:" + outside(1)(2))

console.log("------------------------La variable arguments------------------------")

function fnSum() {
    for (var i = 0, result = 0, j = arguments.length; i < j; i++) {
        result += arguments[i];
    }
    return result;
}

console.log(fnSum(1, 4, 6, 3, 5, 6, 3)); // 28