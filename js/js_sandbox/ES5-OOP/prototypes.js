// All objects in JS have a prototype
// A prototype is an object itself
// All objects inherit their properties and methods from the prototype
// When dealing with object literals, you are dealing with a prototype called Object.prototype
// When dealing with custom objects, the prototype will be person.prototype
// Prototype chain

//make the person consturctor again
function Person(firstName, lastName, dob){
  this.firstName=firstName;
  this.lastName=lastName;
  this.birthday=new Date(dob);
}

// create two person objects and examine
const John = new Person('John','Smith','8-12-90');
const Mary = new Person('Mary','Johnson','20-5-95');

console.log(John);
// Add calculateAge to prototype
Person.prototype.calculateAge =  function(){
  const diff = Date.now()-this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear()-1970);
}
// use it
console.log(John.calculateAge());
//get full name
Person.prototype.getFullName=function(){
  return `${this.firstName} ${this.lastName}`;
}

console.log(John.getFullName());
//gets married

Person.prototype.getsMarried = function(newLastName){
  this.lastName=newLastName;
}

John.getsMarried('Rabada');
console.log(John.getFullName());

//hasOwnProperty

console.log(John.hasOwnProperty('birthday'));
