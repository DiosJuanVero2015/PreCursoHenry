// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevar(num, exponent) {
  // Retorna el valor de "num" elevado al exponente "exponent".
  // Tu código:
  //usamos el objeto Math.pow donde el usuario tiene la posibilidad de ingresar el numero y el exponente de la potencia
  return Math.pow(num,exponent);
}
//console.log(elevar(3,3));
module.exports = elevar;