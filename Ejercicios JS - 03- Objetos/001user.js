"use strict"

/*Escribe el código, una línea para cada acción:

Crea un objeto user vacío.

Agrega la propiedad name con el valor Konan.

Agrega la propiedad surname con el valor Detective.

Cambia el valor de name a Gadget.

Y el de surname a Inspector.

Quita la propiedad name del objeto*/

let user = {}; //con las comillas vacías creo un objeto vacío
               //esto es igual que let user = new Object {}
               //este tipo de declaración de objetos se llama objeto literal

user.name = "Conan"; //uso la notación de punto

user.surname = "Detective";

alert(user.surname + " " + user.name); //alert para comprobar el valor de las variables
                                       //sale "Detective Conan"

user.name = "Gadget";

user.surname = "Inspector";

alert(user.surname + " " + user.name); //ahora sale Inspector Gadget, han cambiado los valores

delete user.surname; //con delete se borra la propiedad completa

alert(user.surname + " " + user.name); //ahora sale undefined Gadget, al ser name una propiedad no existente

