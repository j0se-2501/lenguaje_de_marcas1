"use strict"

/*002verifyIfIsEmpty.js/.html: Escribe la función isEmpty(obj) que devuelva el valor true si el objeto no tiene propiedades, en caso contrario false. Debería funcionar así:

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["11:15"] = "Hora del desayunito en Ilerna";

alert( isEmpty(schedule) ); // false*/

let schedule = {}; //la funcion schedule no tiene propiedades

function isEmpty(objeto){

for (let key in objeto) {  //con este for each recorremos todas las propiedades de los objetos
    return false //cuando encuentra una, retorna false
}
return true; //si no encuentra, retorna true

};

alert( isEmpty(schedule) );

schedule["11:15"] = "Hora del desayunito en Ilerna" //Desayunar? Qué es eso

alert( isEmpty(schedule) ); //pruebo el objeto ahora con una propiedad para ver que en efecto funciona correctamente isEmpty