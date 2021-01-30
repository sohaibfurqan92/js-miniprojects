function Person(firstName,lastName){
  this.firstName=firstName;
  this.lastName=lastName;
}

Person.prototype.greeting=function(){
  return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1= new Person('Ammara','Khanum');
console.log(person1.greeting());

// custoemr consturctor
function Customer(firstName,lastName,phone,membership){
  Person.call(this,firstName,lastName);
  this.phone=phone;
  this.membership=membership;
}

Customer.prototype=Object.create(Person.prototype);
Customer.prototype.constructor=Customer;
Customer.prototype.greeting=function(){
  return `Hello ${this.firstName} ${this.lastName}. Welcome to our company`;
}


const customer = new Customer('Sohaib','Furqan','555-5555-5555','standard');
console.log(customer.greeting());