console.log("------------------------Operadores numericos------------------------")
console.log("Suma 1+2: " + (1 + 2))
console.log("Resta 1-2: " + (1 - 2))
console.log("Multiplicacion 1*2: " + (1 * 2))
console.log("Divicion 1/2: " + (1 / 2))
console.log("Residuo 1%2: " + (1 % 2))
console.log("Potencia 2 a la 3: " + (2 ** 3))
var numero = 2
console.log("Incremento ++2: " + (++numero))
console.log("Decremento 3--: " + (--numero))
console.log("Unario + '3': " + (+3))
console.log("Unario + true: " + (+true))

console.log("------------------------Operadores de asignacion------------------------")
numero = 9
numero += 3;
console.log("operador de asignacion 9+=3: " + numero)
console.log("Aplica tambien para -=,/=, *=")

console.log("------------------------Operadores bit------------------------")
console.log("true & true " + (true & true))
console.log("true & false " + (true & false))
console.log("true | true " + (true | true))
console.log("true | false " + (true | false))
console.log("~2 (-(x + 1)): " + (-3))


console.log("------------------------Operadores comparacion------------------------")
console.log("1 == 1: " + (1 == 1));
console.log("\"1\" == 1: " + ("1" == 1));
console.log("1 === 1: " + (1 === 1));
console.log("'1'===1: " + ("1" === 1));
var object1 = {'a': 'b'}, object2 = {'a': 'b'};
console.log("object1 = {'a': 'b'} == object2 = {'a': 'b'}: " + (object1 == object2));
console.log("1 !=   2: " + (1 != 2))
console.log("1 <  2: " + (1 < 2))
console.log("1 >  2: " + (1 > 2))