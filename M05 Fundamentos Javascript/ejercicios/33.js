function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
    // Verificar si el número es menor o igual a 1
  if(numero<=1){//si el numero ingresado es menor o igual a 1 no es primo, retorna false
    return false;
  }
  //iteramos desde i=2 hasta la raiz cuadrada (math.sqrt) del numero ingresado
  for(let i=2;i<=Math.sqrt(numero);i++){
    if(numero % 2 ==0){ // Si el modulo del numero ingresado es 0 no es primo, retorna false
      return false
    }
    
  }
  //si ninguna division es exacta el numero es primo.
  return true;
 }
  
//console.log(esNumeroPrimo(5));
//console.log(esNumeroPrimo(14));

module.exports = esNumeroPrimo;
