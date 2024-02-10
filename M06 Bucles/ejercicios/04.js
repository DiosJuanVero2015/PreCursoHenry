function mayoriaDeEdad(edad) {
  // Determinar si la persona puede ingresar al evento según su edad.
  // Si tiene 18 años o más, retorna el string: "Allowed".
  // Caso contrario: "Not allowed".
  // Tu código:
  if(edad>=18){
    return "Allowed";
  }else{
    return "Not allowed";
  }
}
//console.log(mayoriaDeEdad(20));//Retornará "Allowed" porque es mayor de 18 años.
//console.log(mayoriaDeEdad(17));//Retornará "Not allowed" porque no cumple con los 18 años.
module.exports = mayoriaDeEdad;
