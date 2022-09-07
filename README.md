# JavaScript-Course
## Tipos de Datos
    const cadena = "5";
    const numero = 5;
    const condicion = false;
    const nulo = null;
    let indefinido;
### Conversión implícita
    Reglas: String es el tipo más fuerte así que todo lo que concatenemos con string pasará a string (mientras sea suma)
                console.log(cadena + numero) = 55
                console.log(numero - cadena) = 0
            Number es el segundo tipo más fuerte de manera que  
                console.log(numero + true) = 6
                console.log(numero + nulo) = 5

### Conversión explícita
    String ()
    Number ()
    Boolean ()
    ParseInt ()
    ParseFloat ()

        console.log(Number (numero)) = 5
        console.log(Number (cadena)) = NaN
        console.log(Boolean (cadena)) = True // Es true mientras tenga algún caracter y false si está vacío si es cero o si son null o indefinido
        console.log(Boolean (cadena)) = NaN