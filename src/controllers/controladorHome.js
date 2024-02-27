//trayendo datos de la memoria

//1. debo crear una variable para cada dato que quiero traer
let nombre=sessionStorage.getItem("nombre")
console.log(nombre)

//. traigo la etiqueta que quiero controlar
let etiquetaNombre=document.getElementById("nombreMenu")

//3. modifico el contenido de texto de una etiqueta
etiquetaNombre.textContent="Hola "+nombre