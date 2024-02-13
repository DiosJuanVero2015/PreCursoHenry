function esEntero(num) {
  // Retorna true si "num" es un entero, ya sea positivo, negativo o cero.
  // Ejemplo: 0.8   ---> false
  // Ejemplo: 1     ---> true
  // Ejemplo: (-10) ---> true
  // De lo contrario, retorna false.
if(Number.isInteger(num)){
  return true;
}else{
  return false;
}
}  

/* console.log(esEntero(-5));//true
console.log(esEntero(0));//true
console.log(esEntero(3.7));//false
console.log(esEntero("hola"));//false */
module.exports = esEntero;
