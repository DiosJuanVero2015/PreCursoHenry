function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  if(num.toString().length === 3){
    return true;
  } else{
    return false;
  }
}
//console.log(tieneTresDigitos("25")); //false
//console.log(tieneTresDigitos(123)); //true
//console.log(tieneTresDigitos("1234")); //false
module.exports = tieneTresDigitos;
