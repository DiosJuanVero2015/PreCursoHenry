function esPositivo(num) {
  // La función recibe un entero. Devuelve como resultado un string que indica si el número
  // es positivo o negativo.
  // Si el número es positivo ---> "Es positivo".
  // Si el número es negativo ---> "Es negativo".
  // Si el número es 0, devuelve false.
  // Tu código:
  //si el numero ingresado por el usuario es mayor a cero, es positivo, menor es negativo, y sino es falso
if(num>0) {
  return "Es positivo";
}else if(num<0){
  return "Es negativo";
}else{
  return false;
}
}
/* console.log(esPositivo(5)); // Es positivo
console.log(esPositivo(-3)); // Es negativo
console.log(esPositivo(0)); // false
 */
module.exports = esPositivo;