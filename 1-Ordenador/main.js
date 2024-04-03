// 1- Tienes el siguiente objeto:
const ordenador1 = {
marca: "HP",
procesador: "i7",
ram: "16Gb",
HD: "1Tb",
precio: 1500,
extras: ["cámara HD", "microfono stereo", "disco de acceso rápido"],
maletin: true
}
// - Escribe una frase que diga "mi ordenador es un HP, con procesador i7 y 16Gb de RAM"
// - Recorre todos los valores con un bucle for in
// - Muestra el tercer extra del ordenador
document.getElementById("ejercicio1").innerHTML = "Este es mi ordenador: <br><br>";

document.getElementById("ejercicio1").innerHTML += `Mi ordenador es un ${ordenador1.marca}, con procesador ${ordenador1.procesador} y ${ordenador1.ram} de RAM`;

document.getElementById("ejercicio2").innerHTML = "<br>Todas las propiedades: <br><br>";

for (let x in ordenador1){
    document.getElementById("ejercicio2").innerHTML += x +":";
    document.getElementById("ejercicio2").innerHTML += ordenador1[x];
}

document.getElementById("ejercicio3").innerHTML = `<br>El tercer extra de mi ordenador es: ${ordenador1.extras[2]}`;
