const persona = {
    nombre: 'Laura',
    apellido: 'Blanco',
    tel: 666666555,
    edad: 39
}

console.log(persona)
console.log(persona.nombre)
//para llamar con un array es equivalente
console.log(persona["nombre"])
// actúa como una variable por lo que podemos reasignar el nombre
// dijimos que las constantes no se podian reasignar, pero aquí reasignamos una propiedad, no todo el objeto entero
persona.nombre = 'Laurita'
console.log(persona.nombre)

const IVA_GENERAL = 1.21;
const IVA_REDUCIDO = 1.10;

const item1 = {
    precio: 15,
    conatidad: 2,
    impuestos: IVA_GENERAL,
    //cuando estamos en js trabajando con objetos y necesitamos
    // hacer referencia los atributos del propio objeto debemos usar function
    //para utilizar this para hacer referencia al objeto. No se puede usar arrow en este caso
    calcularTotal: function () {
        return this.precio * this.conatidad * this.impuestos
    }
}

const item2 = {
    precio: 25,
    conatidad: 3,
    impuestos: IVA_REDUCIDO,
    calcularTotal: function () {
        return this.precio * this.conatidad * this.impuestos
    }
}

// Ahora queremos crear un tercer item. Copiamos la referencia, las dos apuntan al mismo objeto
// los tipos primitivos se almacenan como valor y los objetos como referencia
const item3 = item2;
item3.precio = 23;
console.log(item3)
//cuidado con esto porque irem2 ha cambiado a precio 23 porque la referencia apunta a item2 porque item2 e item 3 son el mismo objeto
console.log(item2)

//creamos el objeto factura, los nombres de las propiedades pueden ser distintos al valor
const factura ={
    primerItem: item1,
    segundoItem: item2
}
//pero si los nombres de las propiedades y del valor son iguales podemos omitor uno de ellos
const factura2 ={
    item1,
    item2,
    calcularTotal: (descuento) => {
        //estis item1 e item2 hacen referencia  a los objetos de las líneas
        // 20 y 32. porque para hacer ref a las propiedades de este objeto
        //habria que poner this y ya he dicho que con arrow function no se puede poner this
        return (item1.calcularTotal() + item2.calcularTotal()) * descuento;
    }
}
console.log(factura)
console.log(factura2.calcularTotal(0.8))

//Por último, el objeto padre de JS es window, eso ya está implementado en nuestro entorno