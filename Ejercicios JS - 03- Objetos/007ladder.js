"use strict"

/*Hay un objeto ladder o escalera que permite subir y bajar.

let ladder = {

  step: 0,

  up() {

    this.step++;

  },

  down() {

    this.step--;

  },

  showStep: function() { // muestra el peldaño actual

    alert( this.step );

  }

};

Ahora, si necesitamos hacer varias llamadas en secuencia podemos hacer algo como esto:

 

ladder.up();

ladder.up();

ladder.down();

ladder.showStep(); // 1

ladder.down();

ladder.showStep(); // 0

Modifica el código de “arriba” up, “abajo” down y “mostrar peldaño” showStep para hacer los 
encadenables como esto:

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0*/


let ladder = {

    step: 0,
  
    up() {
  
      this.step++;
        return this;
    },
  
    down() {
  
      this.step--;
        return this;
    },
  
    showStep: function() { // muestra el peldaño actual
  
      alert( this.step );
        return this;
    }
  
  };

  ladder.up().up().down().showStep().down().showStep();

  //poniendo return this al final de cada método devuelvo el objeto, y hago los métodos encadenables