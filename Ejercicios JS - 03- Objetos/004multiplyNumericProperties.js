"use strict"

/*004multiplyNumericProperties.html/.js: Crea una función 
multiplyNumeric(obj) que multiplique todas las propiedades 
numéricas de obj por 2,5. Por ejemplo:

// Antes de la llamada

let menu = {

  width: 200,

  height: 300,

  title: "Mi menú"

};

multiplyNumeric(menu);

// Después de la llamada

multiplyNumeric(menu);

Nota que multiplyNumeric no necesita devolver nada. Debe modificar el objeto en su lugar.

P.D. Usa typeof para verificar si hay un número aquí.*/

let menu = {

    width: 200,
  
    height: 300,
  
    title: "Mi menú"
  
  };

  function toStringHechoPorMiPorqueNoMeSale(obj){ //hago este "toString" para los alerts porque he estado dando vueltas al toString normal y no comprendo su funcionamiento
  let toStringpocho = "MENÚ:\n\n"
    for (let key in obj) {
        toStringpocho+=key+": "+obj[key]+"\n";
  }
  return toStringpocho
}



  alert (toStringHechoPorMiPorqueNoMeSale(menu)); //en un primer alert muestro las propiedades y sus valores originales

  function multiplyNumeric(obj) {

    for (let key in obj) //hago el for in para ver las propiedades del objeto
        
        if (typeof obj[key]==="number") { //si el tipo de la propiedad es "number", entra en el bucle

        obj[key]*=2.5; //multiplico el valor de la propiedad por 2.5

        }

    };
      
alert("Hacemos la llamada a la funcion 'multiplyNumeric(obj)'")

  multiplyNumeric(menu); //hago la llamada a la funcion con el objeto "menu"

  alert (toStringHechoPorMiPorqueNoMeSale(menu)); //hago un segundo alert para ver que los valores han cambiado
 

 