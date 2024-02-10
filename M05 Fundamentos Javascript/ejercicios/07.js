function esTipoDato(valor) {
  // La función recibe un argumento "valor".
  // Retorna el tipo de dato de este valor.
  // Por ejemplo: "string", "number", "boolean", "object", etc.
  // Tu código:
  //creamos la variable que contendra el tipo de dato que ira ingresando el usuario en la funcion
  var tipoDeDato = typeof valor;
return tipoDeDato
}
//Probamos el codigo
/* console.log(esTipoDato("Hola"));
console.log(esTipoDato(5));
console.log(esTipoDato(true));
console.log(esTipoDato({})); */

module.exports = esTipoDato;

