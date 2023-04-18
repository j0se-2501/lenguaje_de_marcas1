"use strict"

/*¿Es posible crear las funciones A y B para que se cumpla new A() == new B()?

function A() { ... }

function B() { ... }

let a = new A();

let b = new B();

alert( a == b ); // true

Si es posible, entonces proporcione un ejemplo de código, no olvide explicar
el por qué.*/



  
//se puede hacer con un patrón singleton.

//según la wikipedia, "Su intención consiste en garantizar que una clase
//solo tenga una instancia y proporcionar un punto de acceso global a ella."

//chatGPT proporciona el siguiente ejemplo: 

let singleton = {
    instance: null,
    getInstance: function() {
      if (this.instance == null) {
        this.instance = this;
      }
      return this.instance;
    }
  }
  
  function A() {
    return singleton.getInstance();
  }
  
  function B() {
    return singleton.getInstance();
  }
  
  let a = new A();
  let b = new B();
  
  alert(a == b); // true
  