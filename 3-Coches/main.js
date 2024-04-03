// 3- Crear objetos que sean coches con sus características: marca, modelo, potencia, precio, etc

const coche1 = {
    marca: "Volvo",
    modelo: "XC90",
    carroceria: "SUV XXL",
    precio: "66900",
    puertas: 5,
    plazas: 7,
    potencia: "250CV",
    consumo: 8.4,
    imagen: "https://www.diariomotor.com/imagenes/picscache/1440x655c/volvo-xc90-2015-25_1440x655c.jpg"
}
const coche2 = {
    marca: "BMW",
    modelo: "X1",
    carroceria: "Compacto",
    precio: "33000",
    puertas: 5,
    plazas: 5,
    potencia: "116CV",
    consumo: 4.5,
    imagen: "https://www.diariomotor.com/imagenes/picscache/1440x655c/bmw-serie-1-2020-0519-002_1440x655c.jpg"
}
const coche3 = {
    marca: "Bentley",
    modelo: "Continental GT",
    carroceria: "Coupé",
    precio: "268175",
    puertas: 2,
    plazas: 4,
    potencia: "550CV",
    consumo: 14.1,
    imagen: "https://www.diariomotor.com/imagenes/2012/10/bentley-continental-gt-2018-ficha-002-950x536.webp"
}

const coche4 = {
    marca: "Fiat",
    modelo: "500",
    carroceria: "Urbano",
    precio: "11570",
    puertas: 3,
    plazas: 4,
    potencia: "70CV",
    consumo: 5.3,
    imagen: "https://www.diariomotor.com/imagenes/2012/10/portada-ficha-fiat-500-950x611.webp"
}
const coche5 = {
    marca: "Audi",
    modelo: "Q4 e-tron",
    carroceria: "SUV Mediano",
    precio: "46860",
    puertas: 5,
    plazas: 5,
    potencia: "286CV",
    consumo: 0,
    imagen: "https://www.diariomotor.com/imagenes/2021/04/audi-q4-e-tron-2021-azul-frontal-006-950x713.webp"
}
// - Con esos objetos, crear un array de objetos
const cochesArray = [coche1,coche2,coche3,coche4,coche5];

const cochesObjeto = {coche1,coche2,coche3,coche4,coche5};

// - Con ese array de objetos, mostrar por ejemplo, todos los modelos. (opción preguntar al usuario qué quiere mostrar).
let i = 0;
for(let x in cochesArray){
    document.getElementById("prueba1").innerHTML += `<option value="${i}">${cochesArray[x].marca}</option>` 
    i++;
}

function datosModelo () {
    let index = document.getElementById("prueba1").value;
    
    // document.getElementById("prueba2").innerHTML = `<option value="1">${cochesArray[index].modelo}</option>` 

    document.getElementById("img").innerHTML = cochesArray[index].modelo;
    document.getElementById("carroceria").innerText = cochesArray[index].carroceria;
    document.getElementById("puertas").innerText = cochesArray[index].puertas;
    document.getElementById("plazas").innerText = cochesArray[index].plazas;
    document.getElementById("consumo").innerText = cochesArray[index].consumo;
    document.getElementById("potencia").innerText = cochesArray[index].potencia;
    document.getElementById("precio").innerText = `${cochesArray[index].precio} €`;
    document.getElementById("img").style.backgroundImage = `url(${cochesArray[index].imagen})`;

}

document.getElementById("prueba1").addEventListener("change", datosModelo);
// Haz todas las pruebas que desees en estos tres labs!
