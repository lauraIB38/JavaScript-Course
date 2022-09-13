const numero = 2;

switch (numero) {
    case 0: // if (numero === 0)
        console.log("Cero");
        break; // si no ponemos el break imprimirá todos hasta que encuente un break
    case 1: // else if (numero === 1)
        console.log("Uno");
        break;
    case 2: // else if (numero === 2)
        console.log("Dos");
        break;
    case 3: // else if (numero === 3)
        console.log("Tres");
        break;
    default: // else
        console.log("Otro");
}

switch (numero) {
    case 0: 
    case 1: 
    case 2: 
        console.log("Cero"); // si es 0, 1 o 2 imprimira "Cero"
        break;
    case 3:
    case 4:
    case 5:
        console.log("Tres");
        break;
    default: 
        console.log("Otro");
}

// No se deberia utilizar xq se creo para copiar a otros lenguajes y no esta adaptado, no es eficiente aunque se usa bastante