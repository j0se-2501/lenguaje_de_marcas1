"use strict"

/*¿Puedo agregar una propiedad a un string?: Considera el siguiente código:

let str = "Peter";

str.test = 5;

alert(str.test);

Qué piensas: ¿funcionará? ¿Qué mostrará? ¿Por qué?*/

let str = "Peter";

str.test = 5;

alert(str.test);

//no se puede añadir una propiedad a un dato primitivo como es un string
//el alert no salta, y en consola muestra undefined