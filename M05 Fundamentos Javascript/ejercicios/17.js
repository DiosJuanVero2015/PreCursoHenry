function esPar(num) {
  // Retorna true si "num" es par.
  // De lo contrario, retorna false.
  // Tu código:
  //Si al numero ingresado por el usuario lo dividimos por 2, y su residuo da 0, entonces es par daria true
  if(num % 2 == 0) {
    return true;
}else{
    return false;
}
}
//console.log(esPar(7));//false
//console.log(esPar(12));//true
module.exports = esPar;
