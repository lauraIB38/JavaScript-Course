// funcion nominal. Se puede llamar a esta función antes de ser declarada
function decirHola (nombre){
    // ambito
    return `Hola ${nombre}, bienvenida`;
}
const resultado1 = decirHola("Laura");
console.log("despues de llamar", resultado1);

// funcion anónima. Se almacenan en una vbl y el nombre de la función ser´ña el nombre de la vbl
const obtenerSaludo = function (nombre){
    return `Hola ${nombre}, bienvenido`;
}
const resultado2 = obtenerSaludo("Miguel");
console.log("despues de llamar", resultado2)

// la funciones nominales y las anónimas no son del todo equivalentes
// a las anominas de le aplican las reglas de las constantes y por tanto no se puede ejecutar antes de declararlo
const imprimirSaludo = function (mensaje) {
    console.log(mensaje);
}

const alertSaludo = function (mensaje) {
    alert(mensaje);
}
const saludar = function (obtener, imprimir) {
    const saludo = obtener("Pablo");
    imprimir(saludo);
}

// una función puede llamar a una función o callback
saludar (obtenerSaludo, imprimirSaludo);

// Funciones flecha
//1. Son equivalentes que si hubieramos hecho lo mismo con funciones anónimas
//2. Se pueden quitar los paréntesis cuendo solo tengan un argumento de entrada
//3. Cuando sea una funcion que retorne directamente podemos eliminar las llaves y podemos hacer un return implicito
/*
const sumar = (a, b) => {
   return a + b
}
*/
const sumar = (a, b) => a + b
const multiplicarPorDos = numero => numero * 2

const suma = sumar(2, 3)
const multiplicado = multiplicarPorDos(suma)
console.log(multiplicado)