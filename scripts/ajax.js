function loadFileTxt() {
    let httpRequest = new XMLHttpRequest();

    //httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    httpRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(`Pudo leer bien el file`)
            document.getElementById("demo").innerHTML = this.responseText;
        } else if (this.readyState == 4 && this.status == 404) {
            document.getElementById("demo2").innerHTML = "Peticion fallida 400";
        }
    };

    httpRequest.open("GET", "../files/html.txt", true);
    httpRequest.send();


}