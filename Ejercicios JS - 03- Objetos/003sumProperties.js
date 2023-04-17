"use strict"

/*Tenemos un objeto que almacena los salarios de nuestro equipo:

let salaries = {

  Harry: 100,

  Ron: 160,

  Hermione: 130

}

Escribe el código para sumar todos los salarios y almacenar el 
resultado en la variable sum. En el ejemplo de arriba nos debería 
dar 390. Si salaries está vacío entonces el resultado será 0.*/

let salaries = {

    Harry: 100,
  
    Ron: 160,
  
    Hermione: 130
  
  };

  function sumarSalarios (objeto) {

    let totalSalarios=0; //variable para acumular el total de los salarios
    let listaAsalariados=""; //variable para ir concatenando los nombres de los asalariados

    for (let key in objeto) { //for each para recorrer cada propiedad del objeto

        listaAsalariados += key + ": " + objeto[key] +"€\n"; //concateno el nombre de cada asalariado junto con su salario
        
        totalSalarios += objeto[key]; //Acumulo los salarios; pongo objeto[key] porque si solo pongo key me concatena el nombre de sus propiedades y no sus valores

    }

    return listaAsalariados+ "\nTotal: " + totalSalarios + "€."; //hago el return final. Pongo aquí el String de "Total: " porque arriba en el for each solo voy sumando los salarios.

  };

  alert(sumarSalarios(salaries));

