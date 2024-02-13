function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let resultado = 1;
  //Determinamos cual de los numeros ingresados es menor
  let menor = Math.min(a, b);
  //determinamos cual de los numeros ingresados es mayor
  let mayor = Math.max(a, b);
  //console.log(mayor);

  //Desde el menor de los numeros hasta el mayor inclusive, se guardara en resultado la multiplicacion entre todos los numeros que estan entre 5 y 8 en este caso.
  for (let i = menor; i <= mayor; i++) {
    //console.log(i );//5 -- 6 -- 7 -- 8
    resultado= resultado * i;//5*1-- 25*6 -- 30 * 7 -- 210 * 8
    //console.log(resultado); 5 -- 30 -- 210 -- 1680
  }
  return resultado;
}
//console.log(productoEntreNúmeros(5, 8));

module.exports = productoEntreNúmeros;