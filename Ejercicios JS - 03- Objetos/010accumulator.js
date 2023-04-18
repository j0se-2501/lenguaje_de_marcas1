"use strict"

/*Crear una función constructor Accumulator(startingValue).

El objeto que crea debería:  Almacenar el “valor actual” en la propiedad value.
El valor inicial se establece en el argumento del constructor startingValue.

El método read() debe usar prompt para leer un nuevo número y agregarlo a value.

En otras palabras, la propiedad value es la suma de todos los valores ingresados
por el usuario con el valor inicial startingValue.

 

let accumulator = new Accumulator(1); // valor inicial 1

accumulator.read(); // agrega el valor introducido por el usuario

accumulator.read(); // agrega el valor introducido por el usuario

alert(accumulator.value); // muestra la suma de estos valores*/

function Accumulator(startingValue){

this.value = Number(startingValue);

this.read = function(){
    this.value+= Number(prompt("Ingrese un nuevo valor para sumar a 'value'", 0));
}

} //pongo siempre Number para que sume y no para que concatene

let accumulator = new Accumulator(1); //se crea el objeto y value vale 1

accumulator.read();

accumulator.read(); //sumamos a value un valor en cada llamada al metodo read

alert(accumulator.value); //

