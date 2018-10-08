let promise1 = new Promise((resolve, reject) => {

    let httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(`Pudo leer bien el file`)
            document.getElementById("texto").innerHTML = this.responseText;
            resolve("finalizo la promise")
        } else if (this.readyState == 4 && this.status == 404) {
            reject("Fail,")
        }

    };

    httpRequest.open("GET", "../files/html.txt", true);
    httpRequest.send();

}).then((successMessage) => {
    console.log("¡Sí, " + successMessage);
}).catch((errorMessage) => {
    console.log(errorMessage, "Ocurrio un error!!")
});

console.log("Finalizando el script")

