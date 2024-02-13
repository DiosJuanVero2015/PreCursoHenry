function diasEnMes(mes) {
  // La función recibe un mes(número) por argumento.
  // Determine cúantos días tiene el mes correspondiente a ese número.
  // PISTA: Usa un bucle do-while para validar que el mes ingresado sea válido.
  // Tu código:
do {
  switch (mes) {
    case 1:
      return "Enero tiene 31 dias";
      break;
      case 2:
      return "Febrero tiene 28 dias";
      break;
      case 3:
      return "Marzo tiene 31 dias";
      break;
      case 4:
      return "Abril tiene 30 dias";
      break;
      case 5:
      return "Mayo tiene 31 dias";
      break;
      case 6:
      return "Junio tiene 30 dias";
      break;
      case 7:
      return "Julio tiene 31 dias";
      break;
      case 8:
      return "Agosto tiene 31 dias";
      break;
      case 9:
      return "Septiembre tiene 30 dias";
      break;
      case 10:
      return "Octubre tiene 31 dias";
      break;
      case 11:
      return "Noviembre tiene 30 dias";
      break;
      case 12:
      return "Diciembre tiene 31 dias";
      break;
      default:
      return "Error, el mes debe ser entre 1 y 12";
      break;
 }
} while (mes<1 || mes>12); // mientras sea falsa la condicion se ejecutara el codigo

}
//console.log(diasEnMes(10));
module.exports = diasEnMes;
