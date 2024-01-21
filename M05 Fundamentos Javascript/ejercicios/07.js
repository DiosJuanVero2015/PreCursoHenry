function esTipoDato(valor) {
  // La función recibe un argumento "valor".
  // Retorna el tipo de dato de este valor.
  // Por ejemplo: "string", "number", "boolean", "object", etc.
  // Tu código:
  var tipoDeDato=typeof valor;
  return tipoDeDato
};
console.log(esTipoDato("Hola"));
console.log(esTipoDato(42)); 
console.log(esTipoDato(true)); 
console.log(esTipoDato({}));
console.log(esTipoDato(undefined));

module.exports = esTipoDato;

