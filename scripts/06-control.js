console.log("------------------------Condicional If------------------------")
var numero = getNumeroAletorioEnRango(20, 100)
if (numero % 2 == 0) {
    console.log("El numero " + numero + " es par")
} else {
    console.log("El numero " + numero + " es impar")
}

function getNumeroAletorioEnRango(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

console.log("------------------------Condicional If una sola linea------------------------")
numero = getNumeroAletorioEnRango(10, 100)
console.log(numero + " es")
console.log(numero % 2 == 0 ? 'par' : 'impar')

console.log("------------------------Sentencia switch------------------------")
numero = getNumeroAletorioEnRango(10, 15)
console.log(numero)
switch (numero) {
    case 10:
        console.log("El numero aleatorio es 10")
        break;
    case 11:
        console.log("El numero aleatorio es 11")
        break;
    case 12:
        console.log("El numero aleatorio es 12")
        break;
    case 13:
        console.log("El numero aleatorio es 13")
        break;
    case 14:
        console.log("El numero aleatorio es 14")
        break;
    default:
        console.log("El numero aleatorio es 15")
        break;
}

console.log("------------------------Ciclo while------------------------")
numero = 0
while (numero++ < 5) {
    console.log("el valor de numero es :" + numero)
}
console.log("------------------------Ciclo Do-while------------------------")
numero = 0
do {
    console.log("el valor de numero es :" + numero)
} while (numero++ < 0)

console.log("------------------------Ciclo for------------------------")
for (let i = 0; i < 5; i++) {
    console.log("el valor de i es :" + i)
}

console.log("------------------------Ciclo For-In------------------------")
const personas = [{nombre: 'Luis'}, {nombre: 'Juan'}, {nombre: 'Maria'}]
for (const indice in personas) {
    console.log(`El nombre es ${personas[indice].nombre}`)
}

console.log("------------------------Ciclo For-Of------------------------")
for (const persona of personas) {
    console.log(`El nombre es ${persona.nombre}`)
}
console.log("------------------------try catch------------------------")
try {
    eval('alert("error intencional, falta comillas)');
}
catch (error) {
    console.error(`CATCH ERROR: ${error.message}`);
}