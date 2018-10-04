let jsonString = '{"nombre":"Luis", "edad":90, "telefono":["8898998","767676"]}'

let personaJson = JSON.parse(jsonString);

let telefonos = ""

for (let index of personaJson.telefono) {
    telefonos += index + " - ";
}

let strPersona = " <p> " +
    "<h2 align='center'>PERSONA</h2>" +
    "<ul>" +
    "<li>Nombre: " + personaJson.nombre + "</li>" +
    "<li>Edad: " + personaJson.edad + "</li>" +
    "<li>Telefonos: " + telefonos + "</li>" +
    "</ul>" +
    "</p>";


document.getElementById("persona").innerHTML = strPersona

// Modificando el objeto persona
personaJson.edad = 18
document.getElementById("personaJSON").innerHTML = JSON.stringify(personaJson)