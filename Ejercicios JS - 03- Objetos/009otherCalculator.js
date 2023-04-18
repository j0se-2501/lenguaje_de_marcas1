"use strict"

/*Crear una función constructora Calculator que crea objetos con 3 métodos:

read() pide dos valores usando prompt y los guarda en las propiedades del 
objeto con los nombres a y b.

sum() devuelve la suma de estas propiedades.

mul() devuelve el producto de la multiplicación de estas propiedades.

Por ejemplo:

let calculator = new Calculator();

calculator.read();

alert( "Sum=" + calculator.sum() );

alert( "Mul=" + calculator.mul() );*/

function calculator() {

    this.read = function () {
        this.a = Number(prompt("Inserte el primer número: ", 0))
        this.b = Number(prompt("Inserte el segundo número: ", 0))
    },

    this.sum = function() {
        return this.a + " + " + this.b + " = " + (this.a + this.b)
    },

    this.mul = function() {
        return this.a + " * " + this.b + " = " + (this.a * this.b)
    }

};

let Calculator = new calculator();

Calculator.read();

alert( "Sum=" + Calculator.sum() );

alert( "Mul=" + Calculator.mul() );

//hago igual que en el ejercicio 006
//simplemente adapto las funciones de un objeto a un constructor
//y luego creo un objeto que contiene esas funciones