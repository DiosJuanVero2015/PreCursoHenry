// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function numeroRandom() {
  // Genera un número al azar entre 0 y 1 y retórnalo.
  // Tu código:
  //genera un numero aleatorio entre 0 y 1
  return Math.random();
}
/*
NUMERO ALEATORIO ENTRE 0 Y 10
var numeroAleatorio = Math.random() * 11; // Multiplicamos por 11 para incluir el 10
numeroAleatorio = Math.floor(numeroAleatorio); // Redondeamos hacia abajo para obtener un número entero
console.log(numeroAleatorio);

*/
//console.log(numeroRandom());
module.exports = numeroRandom;
