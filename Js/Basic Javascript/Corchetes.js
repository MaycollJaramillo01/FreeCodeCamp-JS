var firstName = "Maycoll";
var firstLetter = firstName[0];
firstName[0]="h";      /*Un String una vez creado es inmutable Ergo no puede ser cambiado letra por letra
debe ser modificado totalmete*/
console.log(firstLetter);
firstName = "Jesús";
console.log(firstName);
var firstLetter = firstName[0];
console.log(firstLetter);

var lastLetter = firstName[firstName.length - 1];
console.log(lastLetter);
