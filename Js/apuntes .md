## No Olvidar Que

- Así que a diferencia de var, al usar let, una variable con el mismo nombre solo puede declararse una vez.

- const tiene todas las características increíbles que tiene let, con el bono añadido de que las variables declaradas usando const son de solo lectura. Son un valor constante, lo que significa que una vez que una variable es asignada con const, no se puede reasignar

- Let : una Vez Cambiarlo
- Const solo de Lectura
- var: se puede realizar n cambios



# Push

-Una forma fácil de añadir datos al final de un arreglo es a través de la función push().

.push() toma uno o más parámetros y los "empuja" al final del arreglo.

# .Pop

* se utiliza para sacar un valor del final de un arreglo. Podemos almacenar este valor sacado asignándolo a una variable. En otras palabras, .pop() elimina el último elemento de un arreglo y devuelve ese elemento.

* Cualquier tipo de entrada puede ser sacada de un arreglo: números, cadenas, incluso arreglos anidados.


# Shift

* pop() siempre elimina el último elemento de un arreglo. ¿Qué tal si quieres eliminar el primero?

* Ahí es donde entra .shift(). Funciona igual que .pop(), excepto que elimina el primer elemento en lugar del último.



# UnShift

* No solo puedes desplazar (shift) elementos del comienzo de un arreglo, también puedes des-desplazar (unshift) elementos al comienzo de un arreglo. Por ejemplo añadir elementos delante del arreglo.

* .unshift() funciona exactamente como .push(), pero en lugar de añadir el elemento al final del arreglo, unshift() añade el elemento al principio del arreglo.


# Ámbito global y funciones
* En JavaScript, el ámbito se refiere a la visibilidad de las variables. Las variables definidas fuera de un bloque de función tienen un ámbito Global. Esto significa que pueden ser observadas desde cualquier lugar en tu código JavaScript.

* Las variables que se declaran sin las palabras clave let o const se crean automáticamente en el ámbito global. Esto puede crear consecuencias no intencionadas en cualquier lugar de tu código o al volver a ejecutar una función. Siempre debes declarar tus variables con let o const.

