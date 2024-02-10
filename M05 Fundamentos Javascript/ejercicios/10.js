function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
  // Intentar crear un objeto Date a partir de la cadena "fecha"
    var fechaObj = new Date(fecha);
  
    // Verificar si el objeto Date creado es válido
    // Si la cadena de fecha es válida, el objeto Date devolverá una fecha válida
    // Si la cadena de fecha es inválida, el objeto Date devolverá "Invalid Date"
    if (isNaN(fechaObj.getTime())) {
      // Si getTime() devuelve NaN, significa que la fecha es inválida
      return false;
    } else {
      // Si getTime() devuelve un valor válido, significa que la fecha es válida
      return true;
    }
  }
//  console.log(esFechaValida("2017-15-35"));//Fecha invalida año, mes, dia
//  console.log(esFechaValida("1981/04/30"));//fecha valida año, mes, dia
module.exports = esFechaValida;

/*
CAMBIAR FORMATO DE FECHA

function cambiarFormatoFecha(fecha) {
  // Convertir la cadena de fecha en un objeto Date
  var fechaObj = new Date(fecha);

  // Verificar si la fecha es válida
  if (isNaN(fechaObj.getTime())) {
    return "Fecha inválida";
  } else {
    // Obtener los componentes de la fecha
    var dia = fechaObj.getDate();
    var mes = fechaObj.getMonth() + 1; // Los meses van de 0 a 11, por lo que se suma 1
    var anio = fechaObj.getFullYear();

    // Formatear la cadena de fecha en el formato deseado (por ejemplo, "DD/MM/AAAA")
    var formatoFecha = dia + "/" + mes + "/" + anio;

    return formatoFecha;
  }
}

// Ejemplo de uso
var fechaOriginal = "2024-02-08";
var fechaFormateada = cambiarFormatoFecha(fechaOriginal);
console.log(fechaFormateada); // Salida esperada: "8/2/2024"

*/