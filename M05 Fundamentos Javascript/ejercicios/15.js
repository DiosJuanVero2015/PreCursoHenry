function menosQueNoventa(num) {
  // Retorna true si el argumento "num" es menor que noventa.
  // De lo contrario, retorna false.
  // Tu código:
// si el numero ingresado por el usuario es menor a 90 dara true, de lo contrario false
  if(num < 90){
    return true;
  }else{
    return false;
  }
}
//console.log(menosQueNoventa(85));
//console.log(menosQueNoventa(123));
module.exports = menosQueNoventa;