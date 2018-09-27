//buscar element por id  y modificar
let elemento = document.getElementById("titulo").innerHTML = "<b><h1 align='center'>SIERRA NEVADA DE SANTA MARTA</h1></b>";

//Buscar elementos by tag
let elementos = document.getElementsByTagName("p")
for (const el in elementos) {
    console.log(`-------------------------------Parrafo ${el} ---------------------------------------------`)
    console.log(elementos[el].innerHTML)
}

//Buscar elemento por css
console.log(`-------------------------------Buscar by css ---------------------------------------------`)
let parrafo = document.getElementsByClassName("parrafo")
console.log(`Elemento parrafo ${parrafo[0].innerHTML}`)


//Escribir en el document
console.log(`-------------------------------Escribir en el document ---------------------------------------------`)
document.write(`<br>${new Date()}`)

//Modificar css
document.getElementById("p_001").style.color = "BLUE"


//Modificar evento
let boton = document.getElementById("b_001")
boton.addEventListener("click", function () {
    alert("Hello World!");
});

//insertar un nodo
let para = document.createElement("P")
let nodo = document.createTextNode("Este es un nuevo Nodo add por JavaScript--------------------------------------------------------")
para.appendChild(nodo)

let element = document.getElementById("titulo").appendChild(para)