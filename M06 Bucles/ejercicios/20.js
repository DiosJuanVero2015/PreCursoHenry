function sumarHastaNConBreak(n) {
  // La función recibe un numero n por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Si la suma supera a 100, detén el bucle usando break.
  // Tu código:
  let suma = 0;
  for(let i= 1; i<=n; i++) {
    suma = suma + i;
    if (suma > 100) {
      break;
    }
  }
  return suma;
}
/* console.log(sumarHastaNConBreak(5));
console.log(sumarHastaNConBreak(10));
console.log(sumarHastaNConBreak(15));
console.log(sumarHastaNConBreak(20));
console.log(sumarHastaNConBreak(50));
console.log(sumarHastaNConBreak(100));
console.log(sumarHastaNConBreak(200));  */
module.exports = sumarHastaNConBreak;