function esVocal(letra) {
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  // Si el usuario ingresa un string de más de un caracter, debes retornar el mensaje: "Dato incorrecto".
  // Si no es vocal, tambien debe retornar "Dato incorrecto".
  // Tu código:
  // Verificar si la entrada es un string de un solo caracter
    if (typeof letra !== "string" || letra.length !== 1) {
      return "Dato incorrecto";
    }
  
    // Convertir la letra a minúscula para hacer la comparación más fácil
    letra = letra.toLowerCase();
  
    // Verificar si la letra es una vocal
    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
      return "Es vocal";
    } else {
      return "Dato incorrecto";
    }
  }
  
  // Ejemplo de uso
 // console.log(esVocal("a")); // Salida esperada: "Es vocal"
 // console.log(esVocal("b")); // Salida esperada: "Dato incorrecto"
 // console.log(esVocal("")); // Salida esperada: "Dato incorrecto"
 // console.log(esVocal("ae")); // Salida esperada: "Dato incorrecto"
  
 
module.exports = esVocal;
