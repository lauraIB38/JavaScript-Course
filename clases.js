// Haremos una plantilla del este objeto curso
class Curso {
    constructor(titulo, dificultad){
        this.titulo = titulo;
        this._dificultad = dificultad;
        this.lecciones = [];
    }

    //Getters y Setters: hay una serie de atributos que se pueden modificar de una forma especial
   // Al hacer el getter, si se llama igual que la vbl dificultar se elecuta la linea  12 y la 13 en bucle
   //Para que esto no pase hay una convencion entre los desarrolladores que es poner _dificultad para indicar que esa vbl no hay que tocarla
    get dificultad() {
        console.log("GETTER");
        return this._dificultad;
    }
    // Si yo no pongo este metodo set e intrentamos modificar dificultad no vamos a poder, no nos va a dejar
    // Lo que si podemos modificar es _dificultad, pero eso ya hemos dicho que no se debe hacer porque el _ significa que es "privada"
    set dificultad(nuevaDificultad) {
        if (nuevaDificultad >=0 && nuevaDificultad <=5) {
            this._dificultad = nuevaDificultad;
        }else {
           console.log("No hago nada");
        }
        
    }

    // Las clases pueden tener ademas atributos y metodos estaticos que hace referencia a que son de la propia clase
    // son metodos que sirven para todos los cursos (ejemplo tartas)
    static BASE_URL = 'desarrolloUtil.com/cursos';
    static saludar() { // esto lo llamo abajo
        console.log('Hola'); 
    }

    agregarLeccion(leccion) {
        this.lecciones.push(leccion);
    }

    eliminarUltimaLeccion() {
        this.lecciones.pop();
    }

    
}


// Ahora instanciaremos la clase
const cursoJS = new Curso('javaScript', 1);
const cursoTS = new Curso('tipeScript', 3);
cursoJS.agregarLeccion('cosas');
// Mejor no sobrecargar el consyructor porque al no definirlo y crear el objeto saldria undefined
// Aunque hemos creado un constructor nada nos impide modificarlo en cualqiuier momento: 
cursoJS.loquequiera = 'loque me de la gana'
// o incluso: 
//cursoJS.eliminarUltimaLeccion = () => console.log('No hago nada')
// JS es un lenguaje que permite todas estas cosas pero eso no significa que no haya límites, esto no se debe hacer porque al ejercutar eliminarUltimaLeccion no hara nada
console.log(cursoJS)

cursoJS.dificultad = 3;
cursoJS.dificultad = 7;
console.log(cursoJS.dificultad);

console.log(Curso.BASE_URL); // esto se imprime y no haría falta ni instanciar un objeto
Curso.saludar();

console.log(cursoJS)
