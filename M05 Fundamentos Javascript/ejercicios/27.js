function combinarNombres(nombre, apellido) {
  // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
  // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
  // Tu código:
  //concatenamos texto con espacio y otro texto
  return nombre + ' '+ apellido;
}
//console.log(combinarNombres("Soy","Henry"));
module.exports = combinarNombres;
