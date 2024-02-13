function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
let contador = 0; //iniciamos un contador en 0 que sera utilizado en el bucle para aumentar en cada vuelta el valor del numero ingresado
do {//el codigo se ejecuta por lo menos una vez
  num = num +5; // aumentamos en 5 el valor del numero ingresado, sumamos a 3, 5... unas 8 veces que es el limite
  contador = contador + 1; // en cada vuelta se incrementa el contador
} while (contador<8);//mientras contador sea menor a 8 se ejecutara el codigo
return num;
}
//console.log(doWhile(7));
module.exports = doWhile;