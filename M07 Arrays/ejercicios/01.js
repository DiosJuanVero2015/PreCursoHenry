function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:
  let arrayInvertido = [];
  for(i = array.length - 1; i >= 0; i--) {
    arrayInvertido = arrayInvertido + array[i];
  }
  return arrayInvertido;
}
//console.log(invertirArray([1, 2, 3]));
module.exports = invertirArray;
