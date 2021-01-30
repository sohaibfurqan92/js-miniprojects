// Object Literal

// const person = {
//   name: 'Sohaib',
//   age:29
// };

// console.log(person);
// console.log(person.name);
// console.log(person.age);

// constructor
function Person(name,dob){
  this.name=name;
  this.dob=new Date(dob);
  this.calculateAge = function(){
    const diff = Date.now()-this.dob.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear()-1970);
  }

}


// Global scope this - pertains to the window object

 const Brad = new Person('Brad','14 November 1992');
console.log(Brad.calculateAge());