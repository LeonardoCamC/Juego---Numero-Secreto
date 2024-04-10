
let numeroSecreto = generarNumeroSecreto();
let intentos = 0;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
//la condición si numeroDeUsuario es igual numeroSecreto    
    if (numeroDeUsuario === numeroSecreto) {
        //si acerto mostramos el texto a través de la función párrafo
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;

}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al 10`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();



/*
//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Juego del número secreto';
//al tener una función global o general a la cual podemos llamar ya no es necesaria la declaración de la variable parrafo y del texto
//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un número del 1 al 10';

//Se declara la variable numero secreto y se le asigna la función generarNumeroSecreto
let numeroSecreto = generarNumeroSecreto();
//Se declara la variable intentos para asignar un número determinado de intentos para adivinar el número secreto por parte del usuario
//se inicializa en 1, debido a que cuando menor una vez lo intentará el usuario adivininar
let intentos = 1;

//Se crea la función asignarTextoElemento y se le agrega la variable titulo con el texto coorespondiente
//Ahora dicha función asignaTextoElemento debe ser genérica o global, por lo que se le asigna o declaran parámetros: elemento y texto
//parámetros: h1 y el texto serán modificados por los parámetros: elemento y texto y se quitan las comillas simples porque ahora son parámetros

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    //ya que los tipos de datos comparados son distintos uno es string y el otro number utilizamos parseInt para que los tipo de datos sean iguales 
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    //para conocer el tipo de dato de nuestras variables utilizamos typeof dentro de console
    //console.log(typeof(numeroUsuario));
    //para conocer el tipo de dato de nuestras variables utilizamos typeof dentro de consola
    //console.log(typeof(numeroSecreto));

    //console.log (numeroSecreto);
    //console.log(numeroUsuario);

    //esta condición retorna un tipo de dato booleano, es decir compara A con B y puede regresar un True o False
    //console.log(numeroUsuario == numeroSecreto);

    //Podemos utilizar el triple igual, ya que es una validación para decir tiene que ser igual en valor y en tipo de dato
    //console.log(numeroUsuario === numeroSecreto);
    //Condición de numeroUsuario es mayor que numeroSecreto
        if (numeroUsuario === numeroSecreto) {
            //asignarTextoElemento('p', 'Acertaste el número secreto');
            //Utilización de Template String  dentro los parámetros de una función con el operador ternario y para resolver la palabra veces 
            //que es plural o singular de acuerdo al número de intentos se realizan los siguientes modificación
            asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
            //habilitamos el botón nuevo juego, para ello vemos que en html tiene el id de reiniciar y el atributo disabled
            //por lo que utilizaremos getElementById para llamar al id reiniciar pero también utilizaremos el atributo remove para quitar el atributo disabled
            //y se activará dicho botón de nuevo juego, después de que el usuario acierte
            document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        //Se coloca la variable intentos su incremento, para que contabilice el número de intentos que lleva el usuario
        intentos ++;
        //Llamamos la función limpiarCaja cuando el usuario no acierta en los intentos para adivinar el número secreto
        limpiarCaja();
    }
    return; 
        

    //alert('Click desde el botón');
    //return;
}

function limpiarCaja() {
    //ahora simplificaremos el código y reduciremos código de esta función limpiarCaja
    document.querySelector('#valorUsuario').value = '';
    //let valorCaja = document.querySelector('#valorUsuario');
    //la expresión de dos comillas '' significa vacío 
    //valorCaja.value ='';
}

//Se crea una función para generarNumeroSecreto aleatorio
function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}

//se manda a llamar a la función asignarTextoElemento
//ahora la funcioón al ser llamada debe enviar el elemento y el texto a emplear o a utilizar
asignarTextoElemento('h1', 'Juego del número secreto');
//al ser una función general, podemos seguir llamandola y asaignarle otro elemeto y texto a utilizar
asignarTextoElemento('p', 'Indica un número del 1 al 10');
*/


/*
//Se declara la variable numero secreto y se le asigna la función generarNumeroSecreto
//let numeroSecreto = generarNumeroSecreto();
//Se declara la variable intentos para asignar un número determinado de intentos para adivinar el número secreto por parte del usuario
//se inicializa en 1, debido a que cuando menor una vez lo intentará el usuario adivininar
//let intentos = 1;

//Se modifican nuestra variables iniciales globales, derivado de la función condiciones Iniciales que se implemento para encapsular todas las
//acciones a realiza, por lo que se inicializan las variables en valor de 0 
let numeroSecreto = 0;
let intentos = 0;

//Se crea la función asignarTextoElemento y se le agrega la variable titulo con el texto coorespondiente
//Ahora dicha función asignaTextoElemento debe ser genérica o global, por lo que se le asigna o declaran parámetros: elemento y texto
//parámetros: h1 y el texto serán modificados por los parámetros: elemento y texto y se quitan las comillas simples porque ahora son parámetros

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    //ya que los tipos de datos comparados son distintos uno es string y el otro number utilizamos parseInt para que los tipo de datos sean iguales 
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    //Podemos utilizar el triple igual, ya que es una validación para decir tiene que ser igual en valor y en tipo de dato
    //console.log(numeroUsuario === numeroSecreto);
    //Condición de numeroUsuario es mayor que numeroSecreto
    if (numeroUsuario === numeroSecreto) {
        //asignarTextoElemento('p', 'Acertaste el número secreto');
        //Utilización de Template String  dentro los parámetros de una función con el operador ternario y para resolver la palabra veces 
        //que es plural o singular de acuerdo al número de intentos se realizan los siguientes modificación
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        //habilitamos el botón nuevo juego, para ello vemos que en html tiene el id de reiniciar y el atributo disabled
        //por lo que utilizaremos getElementById para llamar al id reiniciar pero también utilizaremos el atributo remove para quitar el atributo disabled
        //y se activará dicho botón de nuevo juego, después de que el usuario acierte
        document.getElementById('reiniciar').removeAttribute('disabled');
} else {
    if (numeroUsuario > numeroSecreto) {
        asignarTextoElemento('p', 'El número secreto es menor');
    } else {
        asignarTextoElemento('p', 'El número secreto es mayor');
    }
    //Se coloca la variable intentos su incremento, para que contabilice el número de intentos que lleva el usuario
    intentos ++;
    //Llamamos la función limpiarCaja cuando el usuario no acierta en los intentos para adivinar el número secreto
    limpiarCaja();
    }
return;

}

function limpiarCaja() {
    //ahora simplificaremos el código y reduciremos código de esta función limpiarCaja
    document.querySelector('#valorUsuario').value = '';
    //let valorCaja = document.querySelector('#valorUsuario');
    //la expresión de dos comillas '' significa vacío 
    //valorCaja.value ='';
}

//Se crea una función para generarNumeroSecreto aleatorio
function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}

function condicionesIniciales() {
    //se manda a llamar a la función asignarTextoElemento
    //ahora la funcioón al ser llamada debe enviar el elemento y el texto a emplear o a utilizar
    asignarTextoElemento('h1', 'Juego del número secreto');
    //al ser una función general, podemos seguir llamandola y asaignarle otro elemeto y texto a utilizar
    asignarTextoElemento('p', 'Indica un número del 1 al 10');
    //Generar el número aleatorio
    numeroSecreto = generarNumeroSecreto();
    //Inicializar el número de intentos
    intentos = 1;
}

function reiniciarJuego() {
    //Acciones que necesita realizar la función reiniciarJuego
    //Limpiar Caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    //para no reiniciar el juego en todo momento, utilizamos querySelector y empleamos # para indicar el id en este caso
    //es reiniciar, luego utilizamos setAttribute (para agregar el atributo) y espera dos parámetros, es decir, coloca esto con tal valor
    //en este caso son disabled con true
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

//Llamamos la función mensajesInciales
condicionesIniciales();
*/


/*
//se manda a llamar a la función asignarTextoElemento
//ahora la funcioón al ser llamada debe enviar el elemento y el texto a emplear o a utilizar
asignarTextoElemento('h1', 'Juego del número secreto');
//al ser una función general, podemos seguir llamandola y asaignarle otro elemeto y texto a utilizar
asignarTextoElemento('p', 'Indica un número del 1 al 10');
*/


/*
//1. Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, 
//que se recibirán como parámetros.

function calculadoraIMC (altura, peso) {
    var masaCorporal = peso / (altura * altura);
    return masaCorporal;
}
calculadoraIMC();

console.log(`Su índice de Masa Corporal es: ${calculadoraIMC(1.56, 60)}`);
*/


/*
//2. Crea una función que calcule el valor del factorial de un número pasado como parámetro.

function calcularFactorial (numero) {
    if (numero === 0 || numero === 1){
        return 1;
    } else {
        return numero * calcularFactorial(numero -1);
    }
}

let numero = 5;
let resultado = calcularFactorial(numero);

console.log(`El factorial de ${numero} es ${resultado}`);
*/


/*
//3. Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente 
//en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). 
//Para esto, considera la cotización del dólar igual a R$4,80.

function convertirAPeso (dolar) {
    var cotizacionPeso = 20;
    var peso = dolar * cotizacionPeso;
    return peso;
}

let valorDolar = 10;
let valorPeso = convertirAPeso(valorDolar);

console.log(`${valorDolar} dólares es $ ${valorPeso}`);
*/


/*
//4. Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, 
//utilizando la altura y la anchura que se proporcionarán como parámetros.

function areaYPerimetro (altura, anchura) {
    var area = altura * anchura;
    var perimetro = 2 * (altura + anchura);

    console.log("Área: " +area);
    console.log("Perímetro:" +perimetro);
}

let altura = 4;
let anchura = 10;

areaYPerimetro(altura, anchura);
*/


/*
//5. Crea una función que muestre en pantalla el área y el perímetro de una sala circular, 
//utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

function areaPerimetroCircular (radio) {
    var pi = 3.14;
    var area = pi * radio * radio;
    var perimetro = 2 * pi * radio;
    
    console.log("Área: " +area);
    console.log("Perímetro: " +perimetro);
}

let radio = 4;

areaPerimetroCircular(radio);
*/


/*
//6. Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

function tablaMultiplicar (numero) {
    for (var i = 1; i <= 10; i++) {
        var resultado = numero * i;

        console.log(numero + "x" + i + "=" + resultado);
    }
}

let numero = 4;

tablaMultiplicar(numero);
*/
