/*En informática, los datos son cualquier cosa que tenga sentido para la computadora. JavaScript proporciona ocho tipos de datos diferentes, los cuales son undefined, null, boolean, string, symbol, bigint, number, y object.

Por ejemplo, las computadoras distinguen entre números, como el número 12 y cadenas (strings), tales como "12", "dog", o "123 cats", que son colecciones de caracteres. Las computadoras pueden realizar operaciones matemáticas en un número, pero no en una cadena.

Las variables permiten a los ordenadores almacenar y manipular datos de forma dinámica. Hacen esto usando una "etiqueta" para apuntar a los datos en lugar de usar los datos en sí. Cualquiera de los ocho tipos de datos puede almacenarse en una variable.

Las variables son similares a las variables x, e y que usan en matemáticas, lo que significa que son un nombre simple para representar los datos a los que queremos hacer referencia. Las variables de computadora difieren de las variables matemáticas en que pueden almacenar diferentes valores en diferentes momentos.

Le decimos a JavaScript que cree o declare una variable poniendo la palabra clave var delante de ella, así: */


var maycollAge = 21;
a=maycollAge;


var MyFirstName= "Maycoll";
var MyLastName = "Jaramillo";



/*Una palabra clave llamada let fue introducida en ES6, una actualización importante para JavaScript, para resolver este problema potencial con la palabra clave var. Aprenderás sobre otras características de ES6 en desafíos posteriores.

Si reemplazas var por let en el código anterior, resultará en un error: */


let catName = "Oliver";
let catSound = "Meow!";

console.log(catName);




/**La palabra clave let no es la única manera nueva de declarar variables. En ES6, tú también puedes declarar variables usando la palabra clave const.

const tiene todas las características increíbles que tiene let, con el bono añadido de que las variables declaradas usando const son de solo lectura. Son un valor constante, lo que significa que una vez que una variable es asignada con const, no se puede reasignar: */

const fCC = "freeCodeCamp"; // Cambia esta línea
let fact = "is cool!"; // Cambia esta línea
fact = "is awesome!";
console.log(fCC, fact); // Cambia esta línea

const mySum = 16+5;
const myProduct = 16*5;
const myRest = 16-5;
const myDivide = 16/5;


let count = 23;
count++;

const myDecimal = 2.3;

const counts = 3;
counts-=3;
counts+=3;
counts*=3;
