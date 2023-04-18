"use strict"

/*Crear una clase de Cats. En lugar de crear la clase 
desde cero, indicando de nuevo las propiedades del name, 
age o la especie, heredaría esas propiedades de la clase 
padre Animals.

Animals tendrá un constructor con name y age. Y los métodos
sings() y dances() que mostrarán "el nombre del animal puede
cantar/bailar "en función del método al que se llame.

Esta clase Cats va a contener propiedades adicionales como
moustacheColor que será el atributo para el color del bigote
y debe inicializarse en el constructor. También tendrá el
método moustache que mostrará "Tengo los bigotes color
moustacheColor".

Para crear un gato nuevo podríamos usar:
let gardfield= new Cats("Gardfield", 7, "naranja");*/

class Animals{

constructor(name, age) {

this.name = name;
this.age = age;

}

sings = function(){
    return this.name+" puede cantar";
}
dances = function(){
    return this.name+" puede bailar";
}

}

class Cats extends Animals {

    constructor(name, age, moustacheColor) {
    super(name, age),
    this.moustacheColor = moustacheColor;

    }

}

let gardfield= new Cats("Gardfield", 7, "naranja");
