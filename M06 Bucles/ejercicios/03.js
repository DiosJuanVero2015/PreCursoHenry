function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
  //si x es mayor o igual a y retorna x, sino retorna y
 if(x>=y){
  return x;
 }else{
  return y;
 }
}
//console.log(obtenerMayor(40,40));
module.exports = obtenerMayor;
