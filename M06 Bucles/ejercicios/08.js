function esPositivoOInferiorA10(a) {
  // La función recibe un número "a" por argumento.
  // Retorna true si es positivo o menor que 10.
  // Retorna false en caso contrario.
  // Tu código:
  if(a>0 && a<10) {
    return true;
  } else {
    return false;
  }
}
/* console.log(esPositivoOInferiorA10(-5)); // false;
console.log(esPositivoOInferiorA10(0)); // true;
console.log(esPositivoOInferiorA10(8)); // true */

module.exports = esPositivoOInferiorA10;