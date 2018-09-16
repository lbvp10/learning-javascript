class Persona {

    constructor() {
        this.nombre = ''
        this.apellidos = ''
    }

    get getNombreCompleto() {
        return `-- ${this.nombre} ${this.apellidos}`
    }
}

let cPersona = new Persona();
cPersona.nombre = 'Luis'
cPersona.apellidos = 'XX VV'
console.log(`El nombre completo es:   ${cPersona.getNombreCompleto}`)
console.log("Una clase es :" + cPersona)