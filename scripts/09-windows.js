document.writeln("<br>")
document.writeln("Screen Width: " + screen.width)
document.writeln("<br>")
document.writeln("Screen height: " + screen.height)
document.writeln("<br>")
document.writeln("Screen colorDepth: " + screen.colorDepth)
document.writeln("<br>")
document.writeln("Screen pixelDepth: " + screen.pixelDepth)
document.writeln("<br>")
document.writeln("Location: " + window.location.href)
document.writeln("<br>")
document.writeln("Path: " +  window.location.pathname)

function cargarNuevaPagina() {
    window.location.assign("https://www.gmail.com")
}