/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}
//console.log(devolverPrimerElemento([1,2,3,4,5]));

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length -1];
}
//console.log(devolverUltimoElemento([1,2,3,4,5]));

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}
//console.log(obtenerLargoDelArray([1,2,3,4,5]));

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   return array.map(myFunction);

   function myFunction(value, index, array){
      return value + 1;
   }
}
//console.log(incrementarPorUno([1,2,3,4,5]));

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}
//console.log(agregarItemAlFinalDelArray([1,2,3,4,5],7));

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}
//console.log(agregarItemAlComienzoDelArray([1,2,3,4,5],0));

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   let words = palabras.join(' ');
   return words;
}
//console.log(dePalabrasAFrase(["Hello","Baby"]));

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   return array.includes(elemento);
}
//console.log(arrayContiene(["Hello","Baby"], "Hello"));

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   let sum = arrayOfNums.reduce(myFunction);
   function myFunction(total, value, index, array){
      return total + value;
   }
   return sum;
}
//console.log(agregarNumeros([1,2,3,4,5]));

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   let sum = resultadosTest.reduce(myFunction);
   function myFunction(total, value, index, array){
      return total + value;
   }
   let avg = (sum / resultadosTest.length);
   return avg;
}
//console.log(promedioResultadosTest([1,2,3,4,5]));

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   let order = arrayOfNums.sort(function(a,b){return a - b});
   return order[order.length-1];
}
//console.log(numeroMasGrande([1,5,3,20,4]));

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if (arguments.length === 0)
   {
      return 0;
   }
   else if (arguments.length === 1)
   {
      return arguments[0];
   }
   else
   {
      //return arguments.reduce((resultado, elemento) => resultado * elemento, 1);
      let resultado = 1;
      for (let i = 0; i < arguments.length; i++) {
         resultado *= arguments[i];
      }
      return resultado;
   }
}
console.log(multiplicarArgumentos(1,2,3));

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   array.sort(function(a,b){return a - b});
   let over18 = array.filter(myFunction);

   function myFunction(value, index, array) {
      return value > 18;
   }
   return over18.length;
}
//console.log(cuentoElementos([1,5,23,20,4]));

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if(numeroDeDia === 0 || numeroDeDia >= 8)
   {
      return "Ingrese un número de día entre 1 y 7"
   }
   else if(numeroDeDia > 1 && numeroDeDia <= 6)
   {
      return "Es dia laboral";
   }
   else
   {
      return "Es fin de semana";
   }
}
//console.log(diaDeLaSemana(1));

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   let arr = num.toString().split("");
   if (arr[0] === '9')
   {
      return true;
   }
   else
   {
      return false;
   }
}
console.log(empiezaConNueve(999));

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   return array.every(function(elemento){
      return elemento === array[0];
   });
}
//console.log(todosIguales([1, 1, 1, 1, 1])); // Devuelve true
//console.log(todosIguales([1, 1, 1, 4, 5])); // Devuelve false

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   array.sort(function(a,b){return a - b});
   let meses = array.filter(function(elemento){
                              switch(elemento){
                                 case "Enero":
                                    return elemento;
                                 case "Marzo":
                                    return elemento;
                                 case "Noviembre":
                                    return elemento;
                              }
   });
   if (meses.length === 3){
      return meses;
   }
   else
   {
      return "No se encontraron los meses pedidos";
   }
}
//console.log(mesesDelAño(["Diciembre", "Enero", "Junio", "Marzo", "Julio", "Noviembre"]));

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   let tabla6 = [];
   for(i=0;i<11;i++){
      tabla6.push(6*i);
   }
   return tabla6;
}
//console.log(tablaDelSeis());

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   //array.sort(function(a,b){return a - b});
   let over100 = array.filter(function(elemento){
      return elemento > 100;
   });
   return over100;
}
//console.log(mayorACien([20, 101, 100, 200, 105])); 

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   let error = false;
   let sumArr = [];
   let suma = num;
   for (i=1; i<11; i++){
      if (suma === i){error = true; break;}
      suma += 2;
      sumArr.push(suma);
   }
   if(error){
      return "Se interrumpió la ejecución";
   }
   else
   {
      return sumArr;
   }
}
console.log(breakStatement(1)); 

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   let suma = [];
   for (i=1; i<11; i++){
      if (i == 5){continue;}
      num += 2;
      suma.push(num);
   }
   return suma;
}
console.log(continueStatement(2)); 

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
