let contador = -5;

// uno de los bucles mas sencillos, como un if 
while (contador < 5) {
    contador++;
    console.log("While", contador);
    if (contador === 3) break;
}

// igual que while pero primero ejecutamos y luego evaluamos
do {
    if (contador === 7) contador = 0;
    contador++;
    console.log("do While", contador);
} while (contador < 5);

do {
    contador++;
    console.log("do While", 2 / contador);
} while (contador <= 5);


let contador2 = -5;
//do {
contador2++;
console.log("do While", 2 / contador2);
//} while (contador2 <= 5);

do {
    if (contador2 === 0) {
        contador2++;
        continue;
    }
    console.log("do While2", 10 / contador2);
    contador2++;
} while (contador2 <= 5);

// Bucles For

const cursoJS = ["Intro a JS", "Variables y tipos", "Conversión de tipos", "Funciones"];

// este es de los bucles ,ás eficientes.
for (let i = 0; i < cursoJS.length; i++) {
    console.log(` ${i+1}. ${cursoJS[i]}`)
}

for (let i = cursoJS.length-1; i >=0; i--) {
    console.log(` ${i+1}. ${cursoJS[i]}`)
}

// Bucle For of
// Esto es lo mismo que si hicieramos un foe normal, metieramos cada iten del array en la vbl leccion e imprimieramos leccion
// Desventaja: no tengo acceso al índice y si necesitas el indice es que no necesiytas un for of.
// Desventaja : no podemos cambiar el orden de ejecucion
for (const leccion of cursoJS) {
    console.log(leccion);
}

// Bucle for in
// parece que con esto nos imprime el indice pero en realidad es la clave del objeto
// un objeto es un conjunto de pares clave/valor y un array es igual
// Todos los fo in que estemos iterando sobre arrays se deberian convertir en for normal
// El for in es para cuando estemos buscando claves de un objeto (casos de depuracion)
// un array, al ser un objeto se le pueden añadir atributos x ejemplo:
cursoJS.profesor = 'Laura';
for (const i in cursoJS) {
    //aqui nos muestra que es un string
    console.log(typeof i);
    console.log(`${i}. ${cursoJS[i]}`);
}

