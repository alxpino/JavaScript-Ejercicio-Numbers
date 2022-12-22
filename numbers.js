/*
 Crea un archivo JS que contenga las siguientes líneas
*/
//- Una variable que contenga tu altura en centímetros (entero)
let altura = 172;

//- Una variable que contenga tu altura en metros (número de coma flotante)
let alturaFloat = altura / 100;

// Una variable que contenga tu peso en kilogramos (número de coma flotante)
let peso = 68.4;
// - Una variable que contenga tu altura en metros redondeada hacia arriba
let alturaRedondeadaArriba = parseInt(alturaFloat) + 1;

//- Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let pesoRedondeadoAbajo = parseInt(peso);

//- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" 
//es igual al máximo valor que se puede obtener en Javascript 

let maximoNumero = Number.MAX_VALUE + 1 == Number.MAX_VALUE;

console.log(maximoNumero); //true
