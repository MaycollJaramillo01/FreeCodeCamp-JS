function reusableFunction() {
    console.log("Hi World");
}

  reusableFunction();



  /*Asignandole valores a las variables de funciones desde fuera de las funciones */

  function functionWithArgs(num1, num2){
    console.log(num1 + num2);
  }
  
  functionWithArgs(7,3);

  functionWithArgs(7,14);

  /*Otro Ejemplo*/

  function timesFive(num){
    return num * 5;
    console.log(num);
  }
  
  var answer = timesFive(5);
  
 console.log(answer);
  