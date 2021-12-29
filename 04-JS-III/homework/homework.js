// No cambies los nombres de las funciones.

const { obtenerAreaRectangulo } = require("../../02-JS-I/homework/homework");

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length-1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (let f=0; f<array.length;f++){
    for (let c=0; c<array[f].length;c++){
      array[f][c]+=1
    }
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var cadena="";
  for (let i=0; i<palabras.length;i++){
    cadena+=palabras[i];
    if (i!= palabras.length-1){
      cadena+=" ";
    }
  }
  return cadena
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (let f=0; f<array.length;f++){
    for (let c=0; c<array[f].length;c++){
      if (array[f][c]==elemento){
        return true
      }
    }
  }
  return false
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma=0;
  for (let f=0;f<numero.length;f++){
    for (let c=0;c<numero[f].length;c++){
      suma+=numeros[f][c];
    }
  }
  return suma
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let suma=0;
  let elementos=0;
  for (let f=0;f<resultadosTest.length;f++){
    for (let c=0; c<resultadosTest[f].length;c++){
      suma+=resultadosTest[f][c];
      elementos++
    }
  }
  return suma/elementos;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let candidato=numeros[0][0];
  for (let f=0;f<numeros.length;f++){
    for (let c=0;c<numero[0].length;c++){
      if (numeros[f][c]>candidato){
        candidato=numeros[f][c];
      }
    }
  }
  return candidato;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  
  if (arguments.length===0){
    return 0;
  } else {
    var result=arguments[0]:
    for (let f=1; f<arguments.length;f++){
      result*=arguments[f]
    }
    return result;
  }
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let conteo=0;
  for (let f=0; f<arreglo.length;f++){
    for (let c=0; c<arreglo[f].length;c++){
      if (arreglo[f][c]>18){
        conteo++;
      }
    }
  }
  return conteo;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (numeroDeDia>=1 && numeroDeDia<=5){
    return “Es dia Laboral”;
  } else {
    return "Es fin de semana"
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  num=n+""
  if (num[0]==9){
    return true
  }
  return false
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  for (let f=0; f<arreglo.length;f++){
    for (let c=0; c<arreglo[f].length-1;c++){
      if (arreglo[f][c]!=arreglo[f][c+1]){
        return false;
      }
    }
  }
  return true
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:¨
  var narray=[];
  for (let f=0; f<array.length;f++){
    switch (array[f]){
      case "Enero":
        narray.push("Enero");
        break;
      case "Marzo":
        narray.push("Marzo");
        break;
      case "Noviembre":
        narray.push("Noviembre");
        break;
    }
  }
  return narray;
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let narray=[];
  for (let f=0; f<array.length;f++){
    if (array[f]>100){
      narray.push(array[f])
    }
  }
  return narray;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let narray=[];
  let conteo=0;
  do {
    numero+=2;
    narray.push(numero);
    conteo++;
  } while (conteo<10 && numero!=conteo)
  return narray;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let ar=[]
  for (let i=0; i<10;i++){
    if (i==4){
      continue;
    }
    numero+=2;
    ar.push(numero);
  }
  return ar;
}


// No modificar nada debajo de esta línea
// --------------------------------

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
  mayorACien,
  breakStatement,
  continueStatement
};
