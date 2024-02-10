function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:
   
    // Obtener el año actual
    var anioActual = new Date().getFullYear();
    
    // Obtener el año de nacimiento del objeto Date
    var anioNacimiento = new Date(fechaNacimiento).getFullYear();
    
    // Calcular la edad restando el año de nacimiento del año actual
    var edad = anioActual - anioNacimiento;
    
    // Verificar si la edad es mayor o igual a 18
    if (edad >= 18) {
      return true; // La persona es mayor de edad
    } else {
      return false; // La persona es menor de edad
    }
  }

  // Ejemplo de uso
  //var fechaDeNacimiento = "1981-01-01"; // Fecha de nacimiento en formato "AAAA-MM-DD"
  //console.log(esMayorDeEdad("1981-04-30")); // Devolverá true si la persona es mayor de edad
  


module.exports = esMayorDeEdad;