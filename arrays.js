const miArray = ['hola', 5, true, undefined, null, {a:2,b:3}, () => 'Hola', [1,2,3]]
//accedemos al elemnto del array por el indice
console.log(miArray[0])
// al igual que en los objetos, se puede reasignar un valor. Los arrays son objetos
miArray[4]= 'Laura'
console.log(miArray)

//como JS tiene un tipado dinámico, los arrays se pueden hacer de mezcla de cosas
//se suele recomendar que los arrays sean del mismo tipo para porder realizar las mismas operaciones
//El array, al setr un objeto tiene sus propios métodos.
console.log(miArray.length)

const miArray2 = [1, 2, 3, 4, 5, 6]
//para añadir un elemento al final
miArray2.push(7)
console.log(miArray2)
//si queremos extraer el ultimo elemento y que nos devuelva el valor
const ultimoElemento = miArray2.pop()
console.log(ultimoElemento, miArray2)
//si queremos extraer el primer elemento y que nos lo devuelva
const primerElemento = miArray2.shift()
console.log(primerElemento, miArray2)
//si queremos añasid el primer elemento
miArray2.unshift(1)
console.log(primerElemento, miArray2)
//si queremos añadir un elemento intermedio (donde, numero de elementos a eliminar, que añades)
//ojo que si lo que añades es un array no se te insertan elementos sueltos sino el array
miArray2.splice(3, 0, 4, 4)
console.log(miArray2)


const miArray3 = ['1', '2', '3', '4']
//Método forEach para hacer operaciones con casa uno de los elementos del array
//podemos crear una vbl que guarde la funcion pero aqui no ghace falta
/*
const foreachFunction = (elemento, indice, array) => {

}*/

miArray3.forEach((elem, index, array)=> {
    console.log(elem * index)
})


//Método MAP para mapear tb tiene elemento, indice, array que devuelve un array resultado
let miArray4 = [1, 2, 3, 4]

//las siguentes funciones son equivalentes como ya hemos dicho
miArray4 = miArray4.map(i => i+3)
console.log(miArray4)
miArray4 = miArray4.map(function (i) {return i+3})
//el nuevo array tiene los mismos elementosya que coge uno y lo devuelve modificado
console.log(miArray4)


const facturas = [
    {
        precio: 23,
        cantidad: 1
    },
    {
        precio: 19,
        cantidad: 2
    },
    {
        precio: 14,
        cantidad: 4
    },
    {
        precio: 22,
        cantidad: 1
    }
]

const IVA = 1.21;
const totalFactura = facturas.map(i => i.precio * i.cantidad * IVA)

console.log(totalFactura);
totalFactura.forEach((i, index) => console.log("Elemento", index, i))

// el metodo reduce transforma todo un array en un solo valor a través de distintas operaciones
const total = totalFactura.reduce((a,b) => a+b)
//y te suma literalmente todos los elementos del array primero el cero y el uno, ese resultado
console.log(total)
//se suele utilizar con un map de por medio. No se puede poner el reduce directamente desde los objetos porque tiene que ser valores simples siempre

const total2 = facturas.map(i => i.precio * i.cantidad).reduce((a,b) => {
    console.log(a, b)
    return a + b
})

//metodo filter extraer elementos en funcion de un filtro
//filter tiene la misma estructura que map y foreach (elemento, indice y array)
const total3 = facturas.map(i => i.precio * i.cantidad).filter(i => i > 30)
//y te saca un nuevo array con los elementos filtrados
console.log(total3)