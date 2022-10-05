let myGlobal = 10;
function fun1() {
  // Asigna 5 a oopsGlobal aquí
   oopsGlobal = 5;
}

// Cambia solo el código encima de esta línea

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}


const outerWear = "T-Shirt";

function myOutfit() {
  // Cambia solo el código debajo de esta línea
   const outerWear = "Pants";
   console.log(outerWear);
  // Cambia solo el código encima de esta línea
  return outerWear;

}

const test = myOutfit(outerWear);
console.log(test);
myOutfit();





/*Alteraciones de Variables Gobales por funciones  y calculos externos */


// Configuración
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Cambia solo el código debajo de esta línea
processed = processArg(7);


/** */



/*Escribe una función nextInLine que tome un arreglo (arr) y un número (item) como argumentos.

Agrega el número al final del arreglo, luego elimina el primer elemento del arreglo.

La función nextInLine debe entonces devolver el elemento que fue removido. */


function nextInLine(arr, item) {
    // Cambia solo el código debajo de esta línea
    arr.push(item);
    const removed = arr.shift();
    return removed;
    return item;
    // Cambia solo el código encima de esta línea
  }
  
  // Configuración
  const testArr = [1, 2, 3, 4, 5];
  
  // Muestra el código
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));