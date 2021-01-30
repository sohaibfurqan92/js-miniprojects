// in a method, 'this' refers to the owner object
// in a function, 'this' refers to the global object
// in a function, in 'strict mode', 'this' is undefined
// Alone, 'this' refers to the global object
// In event handlers, 'this' refers to the element that received the event

// function ordinaryFunction(){
//   console.log(this); // will refer to the global object
// }

function ordinaryFunction(){
  "use strict";
  console.log(this); // will be undefined
}


console.log(this); //Alone, this refers to the global object
ordinaryFunction();

const obj ={
  name:"Sohaib Furqan",
  getName : function(){
    return this.name;   //In this method, 'this' will refer to the owner object i.e. obj
  }
};

console.log(obj.getName());

document.getElementById('button').addEventListener('click',function(){
  this.remove(); //the button will be removed since 'this' refers to the element that recieves the event
});

