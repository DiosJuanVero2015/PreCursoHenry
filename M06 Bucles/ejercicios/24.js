function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  let invertiTexto = " "; //creamos la variable donde se va guardar el texto invertido
  for (let i = texto.length-1; i >=0; i--){ // iniciamos el contador desde el ultimo caracter del texto ingresado, hasta la posicion 0, y decrementamos i, de ese modo empieza desde el final al principio
    invertiTexto += texto[i];//iremos guardando cada caracter en la variable creada.

  }
  return invertiTexto; // mostramos el texto invertido
}
//console.log(invertirTexto("Hola"));//aloH
module.exrtirTexto;