function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  //// Si el número es menor o igual a 0, no es una potencia de 2
 if (numero <= 0) {
    return false;
  } 
  //mientras numero sea mayor a 1 ejecutar el codigo
  while (numero > 1) {
    if (numero % 2 !== 0) {// verifica si el resultado de numero % 2 es distinto de 0, lo que significa que numero no es divisible por 2
      return false;
    }
    numero = numero / 2;
    //console.log(numero);
  }
  return true;
}

/* console.log(esPotenciaDeDos(8)); //true
console.log(esPotenciaDeDos(9)); //false
console.log(esPotenciaDeDos(-4)); //false */
module.exports = esPotenciaDeDos;
