/*Comment Your JavaScript Code
Comments are lines of code that JavaScript will intentionally ignore. Comments are a great way to leave notes to yourself and to other people who will later need to figure out what that code does.

There are two ways to write comments in JavaScript:

Using // will tell JavaScript to ignore the remainder of the text on the current line. This is an in-line comment: */



//  this is  a comment


/* This is a
multi-line comment */


/*Las comillas no son los únicos caracteres que pueden ser escapados dentro de una cadena. Hay dos razones para usar caracteres de escape:

Para permitir el uso de caracteres que de otra manera no te sería posible escribir, como un retorno de carro.
Para permitirte representar múltiples comillas en una cadena sin que JavaScript malinterprete lo que quieres decir.
Esto lo aprendimos en el desafío anterior.

Código	Resultado
\'	comilla simple
\"	comilla doble
\\	barra invertida
\n	línea nueva
\r	retorno de carro
\t	tabulación
\b	límite de palabra
\f	fuente de formulario
Ten en cuenta que la barra invertida en sí debe ser escapada para poder mostrarla como una barra invertida.

Asigna las siguientes tres líneas de texto en la variable única myStr usando secuencias de escape.

FirstLine
    \SecondLine
ThirdLine
Necesitarás usar secuencias de escape para insertar correctamente los caracteres especiales. También necesitarás seguir el espaciado tal y como se ve arriba, sin espacios entre secuencias de escape o palabras. */
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";