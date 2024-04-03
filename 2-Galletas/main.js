// 2- Tenemos un objeto del super:

const galletas = {
    marca:"Artiach",
    nombre:"Chiquilín",
    descripción: "galletas de mantequilla",
    precio: 2.75,
    hayExistencias: true
};
console.log(galletas);

// Sobre este objeto:


// - Añadir una característica: oferta (Boolean) -C-

document.getElementById("ejercicio1").innerHTML = "<h1>- Añadir una característica: oferta (Boolean) -C-<h1>";
document.getElementById("ejercicio1").innerHTML += "<h5>Antes<h5>";
for (let x in galletas){
    document.getElementById("ejercicio1").innerHTML += x +": ";
    document.getElementById("ejercicio1").innerHTML += galletas[x]+", ";
}
galletas.oferta = true;
document.getElementById("ejercicio1").innerHTML += "<h5>Despues<h5>";
for (let x in galletas){
    document.getElementById("ejercicio1").innerHTML += x +": ";
    document.getElementById("ejercicio1").innerHTML += galletas[x]+", ";
}

// - Modificar una característica: descripción -U-

document.getElementById("ejercicio2").innerHTML = "<h1>- Modificar una característica: descripción -U-<h1>";
document.getElementById("ejercicio2").innerHTML += "<h5>Antes<h5>";
for (let x in galletas){
    document.getElementById("ejercicio2").innerHTML += x +": ";
    document.getElementById("ejercicio2").innerHTML += galletas[x]+", ";
}
document.getElementById("ejercicio2").innerHTML += "<h5>Despues<h5>";

galletas.descripción = "galletas con malta"

for (let x in galletas){
    document.getElementById("ejercicio2").innerHTML += x +": ";
    document.getElementById("ejercicio2").innerHTML += galletas[x]+", ";
}

// - Borrar una característica -D-
document.getElementById("ejercicio3").innerHTML = "<h1>- Borrar una característica -D-<h1>";
document.getElementById("ejercicio3").innerHTML += "<h5>Antes<h5>";
for (let x in galletas){
    document.getElementById("ejercicio3").innerHTML += x +": ";
    document.getElementById("ejercicio3").innerHTML += galletas[x]+", ";
}
document.getElementById("ejercicio3").innerHTML += "<h5>Despues<h5>";

delete galletas.descripción;

for (let x in galletas){
    document.getElementById("ejercicio3").innerHTML += x +": ";
    document.getElementById("ejercicio3").innerHTML += galletas[x]+", ";
}

// - Mostrar el objeto antes y después -R-
document.getElementById("ejercicio4").innerHTML = "<h1>- Mostrar el objeto antes y después -R-<h1>";
document.getElementById("ejercicio4").innerHTML += "<h5>Antes<h5>";
for (let x in galletas){
    document.getElementById("ejercicio4").innerHTML += x +": ";
    document.getElementById("ejercicio4").innerHTML += galletas[x]+", ";
}
document.getElementById("ejercicio4").innerHTML += "<h5>Despues<h5>";

for (let x in galletas){
    document.getElementById("ejercicio4").innerHTML += x +": ";
    document.getElementById("ejercicio4").innerHTML += galletas[x]+", ";
}

// - Probar a mostrar solo valores (values) y solo propiedades (keys)
document.getElementById("ejercicio5").innerHTML = "<h1>- Probar a mostrar solo valores (values) y solo propiedades (keys)<h1>";
document.getElementById("ejercicio5").innerHTML += "<h5>Solo Claves<h5>";

document.getElementById("ejercicio5").innerHTML += Object.keys(galletas)

document.getElementById("ejercicio5").innerHTML += "<h5>Solo Valores<h5>";

document.getElementById("ejercicio5").innerHTML += Object.values(galletas);