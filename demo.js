//EJERCICIOS CHALLENGE
// 1---- > var my_var = 4>3&&2<5;
//console.log(my_var); //true

//2 ----> ¿cual es el valor de una variable no asignada en JavaScript?
//undefined

//3 ----> 
/*
SE DECLARA LA FUNCION CON PARAMETROS
function foo(numeros){
    SE DECLARA UNA VARIABLE Y SE ASIGNA UN VALOR
    var my_var =0;
    MIENTRAS EL ITERADOR i SEA MENOR A LA CANTIDAD DE NUMEROS INGRESADOS COMO ARGUMENTOS SE EJECUTARA EL BUCLE, E i SE IRA INCREMENTANDO EN CADA VUELTA
    for (i=0 ; i < numeros.length ; i++){
        SI LOS NUMEROS EN LA POSICION i SON MAYOR AL VALOR DE LA VARIABLE my_var, SE IRA GUARDANDO  EL NUEVO VALOR EN my_var numeros[3,7,2,9,4]
        if (numeros[i] >my_var) {
            my_var= numeros[i];
}
}
//AL FINAL RETORNA EL VALOR MAS ALTO GUARDADO EN LA VARIABLE my_var
return my_var;
}
var resultado = foo([3,7,2,9,4]); SE LLAMA A LA FUNCION foo Y SE PASA LOS ARGUMENTOS
console.log("El numero mas grande es: "+resultado); // El numero mas grande es  9*/

//4 ----> 
/* SE DECLARA LA FUNCION CON PARAMETROS
function foo(arreglo){
    SE DECLARA UNA VARIABLE Y SE LE ASIGNA VALOR
    var my_var = 0;
    MIENTRAS EL ITERADOR i SEA MENOR A LA CANTIDAD DE NUMEROS INGRESADOS COMO ARGUMENTOS SE EJECUTARA EL BUCLE, E i SE IRA INCREMENTANDO EN CADA VUELTA
    for(var i= 0; i<arreglo.length; i++){
        SI EL NUMERO EN LA POSICION i ES MULTIPLO DE 3, SE VA GUARDANDO SUMANDO EN EL ACUMULADOR (my_var +=arreglo[i];)
        if(arreglo[i]%3 === 0){
            OTRA FORMA DE ESCRIBIRLO ES my_var = my_var + arreglo[i];
            my_var += arreglo[i];
        }
}
RETORNA LA SUMA DE TODOS LOS NUMEROS DIVISIBLES POR 3 
return my_var;
}
var resultado = foo([3,5,6,8,9]);
console.log("La suma de los numeros que son multiplos de 3 es:"+resultado); // 18 */

//6 ---->
// console.log(!!'texto'); TRUE

//7 ----> <img src='imagen.jpg' alt='descripcion'> MUESTRA UNA IMAGEN, O TEXTO ALTERNATIVO SI ESTA NO CARGA
//8 --> 
/*
SE INICIA EL ITERADOR i CON EL VALOR DE 10, MIENTRAS i SEA MAYOR A 5, DECREMENTAR EL VALOR DE i
for(var i=10; i>5;i--){
    MUESTRA LOS VALOR DE i
    console.log(i);
}*/
//¿ CUAL ES EL PRIMER VALOR QUE SE IMPRIME? // 10
//9 -->
/* SE DECLARA UNA FUNCION Y SE AGREGA UN PARAMETRO
function foo(objeto){
    SE DECLARA UNA VARIABLE QUE CONTENDRA OBJETOS, POR ESO EL USO DE LLAVES
    var nuevoObjeto ={};
clave  se utiliza para representar cada propiedad del objeto en cada iteración. 'a' primera vuelta, 'b' segunda u 'c' tercera vuelta
Objeto en este caso seria los numeros ingresados como valores de cada objeto
para cada iteracion del bucle se agregara un valor a nuestro nuevoObjeto
    for(var clave  in objeto) {
nuevoObjeto: Es un objeto que se está construyendo o actualizando dentro de la función foo. Este objeto se inicializa al principio de la función y se va llenando con nuevas propiedades durante el bucle for...in.
[clave]: La variable clave es la variable de iteración del bucle for...in. En cada iteración, toma el valor de una de las claves del objeto que está siendo recorrido. La notación de corchetes ([]) se utiliza para acceder a una propiedad del objeto utilizando el valor de clave como nombre de la propiedad.
objeto[clave]: Accede al valor asociado con la clave actual del objeto original que se está recorriendo.
* 2: Multiplica el valor obtenido del objeto original por 2.
nuevoObjeto[clave] = ...: Asigna el resultado de la multiplicación al objeto nuevoObjeto utilizando la clave actual del bucle como nombre de propiedad. En otras palabras, esta línea está duplicando el valor de cada propiedad del objeto original y asignándolo a una nueva propiedad en nuevoObjeto.
En resumen, la línea de código nuevoObjeto[clave] = objeto[clave] * 2; está construyendo un nuevo objeto (nuevoObjeto) donde cada valor de propiedad es el doble del valor correspondiente en el objeto original (objeto). Este proceso ocurre durante cada iteración del bucle for...in donde se recorren las propiedades del objeto original.    
        nuevoObjeto[clave]=objeto[clave]*2;
        console.log(nuevoObjeto[clave]);
    }
    return nuevoObjeto;
}
var resultado = foo({a:1,b:2,c:3});
console.log('Los valores doblados son:'+JSON.stringify(resultado)); // RESPUESTA CORRECTA {"a":2,"b":4,"c":6}*/
//10 ----> ¿En flexbox cual propiedad alinea los elementos en el eje principal? //respuesta justify-content
//11 ----> ¿que comando se utiliza para descargar un repositorio existente?// Respuesta git clone
//12 ----> 
/*function foo(obj1,obj2){
    var resultado = {};
    for (var clave in obj1) {
        resultado[clave]=obj1[clave];
         }
    for(var clave in obj2) {
        resultado[clave]=obj2[clave];
    }
    return resultado;
}
var resultado = foo({a:1},{b: 2});
console.log(resultado); // Respuesta correcta { a: 1, b: 2 }*/
//13 ---->
/*function foo(texto){
    let contador =0;
    for(let letra of texto){
        if('aeiou'.includes(letra.toLowerCase)){
            contador++;
        }
    }
    return contador;
}
let my_var = foo('Hola mundo');
console.log(my_var); //Respuesta Correcta 3*/
//14 ----> ¿cual selector se utiliza para seleccionar un elemento que es el segundo hijo de su contenedor?// respuesta :nth-child(2)
//15----> ¿que selector css se utiliza para aplicar estilos solo al texto seleccionado por el usuario? // respuesta ::selection
//16 ----> 
/*Definición de la función foo que toma un arreglo como parámetro
function foo(arreglo) {
    Utiliza la función slice() para devolver los últimos tres elementos del arreglo
    return arreglo.slice(-3);
}
Llamada a la función foo con un arreglo como argumento
var resultado = foo([1, 2, 3, 4, 5, 6, 7]);// respuesta [5,6,7]*/
//17 ----> 
/*let frutas =['manzana','banana'];
frutas.slice(1,0,'kiwi');
console.log(frutas); // Respuesta Correcta [ 'manzana', 'banana' ]*/
//18 ---->
/*function foo(a,b){
    return a+b;
}
var my_var = foo('hola','mundo');
console.log(my_var); // Respuesta Correcta holamundo*/
//19 ----> ¿que hace la palabra return en una funcion de JavaScript? Termina la ejecucion de la funcion y especifica un valor para ser devuelto a quien llama la funcion
//20 ----> ¿que palabra clave se usa para declarar una variable cuyo valor no puede ser reasignado? //respuesta const
//21 ----> ¿que metodo se utiliza para añadir elementos al final de un arreglo en javascript? //respuesta push
//22 ---->
//console.log(5+3*2); // respuesta 11
//23 ----> ¿que selector css se usa para seleccionar todos los elementos que estab inmediatamente precedidos por un elemento especifico? // +(hermanos adyacente)
//24 ---->
/*function greet(name){
    return 'Hola '+name;
}
var resultado = greet('Mundo');
console.log(resultado); // Respuesta Correcta Hola Mundo;*/
//25 ---->
/*var x =10;
if(x<10){
    console.log('Hola, Mundo');
}else{
    console.log('Hello, world');
} // respuesta correcta Hello, world*/
//26 ----> 
/*cadena.split(''): Convierte la cadena en un array de caracteres. Cada caracter se convierte en un elemento del array.
.reverse(): Invierte el orden de los elementos en el array.
.join(''): Convierte el array invertido de nuevo en una cadena, uniendo los caracteres.
En resumen, la función foo invierte la cadena que se le pasa como argumento. 

function foo(cadena){
    return cadena.split('').reverse().join('');
}
var my_var = foo('JavaScript');
console.log(my_var); // Respuesta Correcta tpircSavaJ*/
//27 ----> ¿cual es la propiedad CSS que permite a los elementos superponerse unos sobre otros?// respuesta z-index
//28 ----> 
/*
En este caso, la función foo intenta acceder al valor asociado con la clave "clave" en el objeto que recibe como argumento. Sin embargo, en el objeto proporcionado {nombre: 'Henry'}, no existe una clave llamada "clave". Debido a que intentas acceder a una propiedad que no existe en el objeto, el resultado de la función será undefined. Por lo tanto, el código imprimirá undefined en la consola.

function foo(objeto){
    return objeto.clave;
}
var my_var = foo({nombre: 'Henry'});
console.log(my_var); // Respuesta Correcta undefined*/

//29 ----> ¿Que hace este CSS?
/* #id{
    margin: 10px
}*/ // respuesta correcta Añade un margen de 10px al elemento con ID "id"
//30 ----> 
/*var comparacion = 1=='1'&& 2 ==='2';
console.log(comparacion); // respuesta False*/
//31 ----> 
/*var x = 5;
do{
    x--;
}while(x>2);// respuesta 2*/

//32 ----> 
/*var num = 5;
while(num>0){
    console.log(num);
    num--;
}// imprime 5,4,3,2,1,0*/
//33 ---->¿cual de los siguientes comandos agrega archivos para ser incluidos en un commit? Respuesta git add
//34 ----> 
/*
body{
    background-color: blue;
} cambia el color de fondo del cuerpo del documento a azul
*/
//35 ----> 
/*function foo(arreglo){
    var nuevo_arreglo = arreglo.join('').split('');
    var resultado ='';
    for(var elemento of nuevo_arreglo){
        if(elemento.length >resultado.length){
            resultado=elemento;
        }
    }
    return resultado;
} Esta funcion Encuentra y devuelve la palabra mas larga entre todas las frase en el arreglo*/
//36 ---->
//console.log(true && false); respuesta FALSE
//37 ----->
/*function foo(objeto,prop){
    delete objeto[prop];
    return objeto;
}
var resultado= foo({a: 1, b: 2},'b');
console.log(resultado); imprime {a: 1}*/
//38 -----> ¿cual de las siguientes etiquetas es utilizada para crear hipervinculos en HTML? respuesta <a>
//39 ----->
//var resultado = 1+2-3*4/5; imprime 0.6
//40 ---->
/*function foo(arreglo){
    return arreglo.filter(function(n){return n%2===0});
}
var resultado = foo([1,2,3,4,5,6]); respuesta [ 2, 4, 6 ]*/



