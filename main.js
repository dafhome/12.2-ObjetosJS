// OBJETOS JS
// ordenan la info mediante pares clave-valor
// se separan entre ellos por comas, y de clave a valor con dos puntos
// CRUD CREATE READ UPDATE DELETE

//CREATE
const perro1 = {
    nombre: "Toby",
    edad: 5,
    raza: "dobermann",
    idiomas: {
        perruno : "nativo",
        gatuno : ["angora", "siamés", "egipcio"],
        pajaril: "inicial" //perro1.idiomas.pajaril
    }
}

//añadir uno:
perro1.talla = "grande";

//READ
console.log(perro1); // todo
console.log(perro1.nombre); //solo nombre
console.log("mi perro se llama " + perro1.nombre + " y tiene " + perro1.edad + " años");
console.log(perro1.idiomas); //todos los idiomas
console.log(perro1.idiomas.gatuno[1]); //valor del segundo gatuno
console.log("con corchete:");

//con corchetes:
console.log(perro1['idiomas']);

//con bucle FOR IN
for (let propiedad in perro1){
    console.log(propiedad + ":"); //propiedad (indice)
    console.log(perro1[propiedad]); //valor [de ese indice]
}

// mostrar directamente todas las propiedades(keys) o valores(values)
console.log(Object.keys(perro1));
console.log(Object.values(perro1));
// UPDATE
perro1.raza = "pastor alemán";

console.log(perro1);

// DELETE
delete perro1.raza;
console.log(perro1);


//array de perros:
const perro2 = {
    nombre: "Pepe",
    edad: 3,
    raza: "chiuaua",
    idiomas: {
        perruno : "nativo"
    }
}
const perro3 = {
    nombre: "Fifi",
    edad: 2,
    raza: "fox-terrier",
    idiomas: {
        perruno : "nativo"
    }
}

const perrera = [
    {
        nombre: "Toby",
        edad: 5,
        raza: "dobermann",
        idiomas: {
            perruno : "nativo",
            gatuno : ["angora", "siamés", "egipcio"],
            pajaril: "inicial"
        }
    },
    {
        nombre: "Pepe",
        edad: 3,
        raza: "chiuaua",
        idiomas: {
            perruno : "nativo"
        }
    },
    {
        nombre: "Fifi",
        edad: 2,
        raza: "fox-terrier",
        idiomas: {
            perruno : "nativo"
        }
    }
]

console.log(perrera); // toda la lista
console.log(perrera[1].raza) // te da chiuaua
console.log("todas las razas de la perrera:");
for( let x in perrera){
    console.log(perrera[x].raza);
}