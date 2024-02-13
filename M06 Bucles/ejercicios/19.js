function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  let sumar = 0;
  for (let i = 1; i <= n; i++) {
    //va sumando en cada vuelta los valores almacenados en sumar con los valores que i adquiere en cada vuelta
    sumar = sumar + i;// 0+1 -- 1+2 -- 3+3 -- 6+4 -- 10+5
  }
  return sumar; // muestra el resultado final almacenado en sumar despues de terminar el ciclo
}
//console.log(sumarHastaN(5));
module.exports = sumarHastaN;
