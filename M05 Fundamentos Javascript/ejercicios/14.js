function tienenMismaLongitud(str1, str2) {
  // La función recibe dos argumentos "str1" e "str2" que son strings.
  // Retorna true si los dos strings tienen la misma longitud.
  // De lo contrario, retorna false.
  // Tu código:
  //si la palabra ingresada por el usuario tiene la misma cantidad de caracteres, devuelve true, de lo contrario  false
  if(str1.length === str2.length){
    return true;
  }else{
    return false;
  }
}
//Probamos el codigo
//console.log(tienenMismaLongitud("Hola", "A"));
module.exports = tienenMismaLongitud;