function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  
    // Eliminar los espacios en blanco y convertir a minúsculas
    let textoProcesado = string.toLowerCase().replace(/\s/g, '');
    // Variable donde guardamos el texto invertido
    let textoInvertido = '';
    for (let i = textoProcesado.length - 1; i >= 0; i--) {
      textoInvertido += textoProcesado[i];
    }
    // Comparar el texto original con su versión invertida
    return textoProcesado === textoInvertido;
  }
  
/* console.log(esPalindromo("Por favor"));
console.log(esPalindromo("anilina")); */
module.exports = esPalindromo;
