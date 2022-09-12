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

### Comparaciones

    #### Loose o ==,!= No discrimina el tipo por tanto trata de hacer la conversión

        const a = 1;    
        const b = 1;    
        console.log(a == b) resultado: true

        const a = "1";    
        const b = 1;    
        console.log(a == b) resultado: true

        const a = 1;    
        const b = true;    
        console.log(a == b) resultado: true

        const a = "a";    
        const b = true;    
        console.log(a == b) resultado: false

        Reglas: tienen que ver con los metodos toNumber y toPrimitive
        
        #### Strict 0 ===, !== Aqui lo que hace es compara primero el tipo

        const a = "1";    
        const b = 1; 
        console.log(a === b) resultado: false

        #### >, <, >=, <=

        const a = "2";    
        const b = "12"; 
        console.log(a <= b) resultado: false xq los strings son ordenados alfabeticamente y el 1 del 12 es menor que 2. Así que si queremos comparar alfabeticamente ysaremos string y si queremos ordenar numericamente con number.

        #### Comparaciones compuestas

        const a = 1;    
        const b = 2; 
        const c = 3; 
        console.log(a < b && b < c) resultado: true

        const a = 1;    
        const b = 2; 
        const c = 2; 
        console.log(a < b && b < c) resultado: false (deben cumplirse todas para que sea true)
        
        const a = 1;    
        const b = 2; 
        const c = 2; 
        console.log(a < b || b < c) resultado: true (con que una se cumple sera true)


### If else, valores truthy y falsy

    const numero = 4;

    // esto también se puwde poner con paréntesis pero al ser una sola cosa dentro del if se pueden quitar
    if ( numero === 0) console.log("Cero");
    else if ( numero === 0) console.log("Uno");
    else if ( numero === 0) console.log("Dos");
    else if ( numero === 0) console.log("Tres");
    else console.log("Es mayor que tres");

    **********

    const valor = 4;
     if ( valor ) console.log("Truthy"); 
     else console.log("Falsy"); resultado : Truthy

    const valor = 0;
     if ( valor ) console.log("Truthy"); 
     else console.log("Falsy"); resultado : Falsy

    const valor = "";
     if ( valor ) console.log("Truthy"); 
     else console.log("Falsy"); resultado : Falsy
    
    const valor = null;
     if ( valor ) console.log("Truthy"); 
     else console.log("Falsy"); resultado : Falsy

    const valor = undefined;
     if ( valor ) console.log("Truthy"); 
     else console.log("Falsy"); resultado : Falsy

    //los arrays aunque esten vacios son truthy. Si quieres saber si estan vacios o no .length
    const valor = [];
     if ( valor ) console.log("Truthy"); 
     else console.log("Falsy"); resultado : Truthy

    // todas las funciones si no son null o undefined son Truthy
    const valor = function () {};
     if ( valor ) console.log("Truthy"); 
     else console.log("Falsy"); resultado : Truthy