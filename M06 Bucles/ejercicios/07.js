function esParYDivisiblePorTres(a) {
  // La función recibe un número "a" por argumento.
  // Retorna true si este es par y divisible por tres a la vez.
  // Retorna false si no lo es.
  // Tu código:
  // Verificar si el número es par y divisible por tres
  //Si el resultado de la operación a %(modulo) divisor(3) es igual a 0, entonces el número es divisible por el divisor.
  //Si el resultado de la operación a %(modulo) divisor(2) es igual a 0, entonces el número es par
  if (a % 2 === 0 && a % 3 === 0) {
      return true;
    } else {
      return false;
    }
  }
  /* console.log(esParYDivisiblePorTres(6));//true 
  console.log(esParYDivisiblePorTres(9));//false */
  module.exports = esParYDivisiblePorTres;