"use strict"

/*Crea un objeto calculator con tres métodos:

read() pide dos valores y los almacena como propiedades de objeto con nombres a y b.

sum() devuelve la suma de los valores almacenados.

mul() multiplica los valores almacenados y devuelve el resultado.

let calculator = {

  // ... tu código ...

};

calculator.read();

alert( calculator.sum() );

alert( calculator.mul() );*/

let calculator = {

    read() {
        calculator.a = Number(prompt("Inserte el primer número: ", 0))
        calculator.b = Number(prompt("Inserte el segundo número: ", 0))
    },

    sum() {
        return this.a + " + " + this.b + " = " + (this.a + this.b)
    },

    mul() {
        return this.a + " * " + this.b + " = " + (this.a * this.b)
    }

};

calculator.read();

alert( calculator.sum() );

alert( calculator.mul() );

