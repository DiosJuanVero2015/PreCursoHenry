function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
  var dateObject = new Date(fecha);
  var esFechaCorrecta = dateObject instanceof Date && !isNaN(dateObject);

  if (esFechaCorrecta) {
    // Formatear la fecha en formato YYYY-MM-DD para comparación
    var fechaFormateada = dateObject.toISOString().split('T')[0];
    return fecha === fechaFormateada;
  }

  return false;
}

console.log(esFechaValida("2024-04-30"));
module.exports = esFechaValida;