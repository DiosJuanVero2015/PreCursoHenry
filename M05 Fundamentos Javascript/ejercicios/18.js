function esImpar(num) {
  // Retorna true si "num" es impar.
  // De lo contrario, retorna false.
  // Tu código:
  //si el numero ingresado por el usuario es distinto de 0 entonces es impar, daria true
  if(num % 2 != 0) {
    return true;
}else{
  return false;
}
}
//console.log(esImpar(7)); //true
//console.log(esImpar(10));//false
module.exports = esImpar;