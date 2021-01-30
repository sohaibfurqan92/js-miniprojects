const personPrototypes={
  greeting:function(){
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried:function(newLastName){
    this.lastName= newLastName;
  }
}

const mary = Object.create(personPrototypes);
mary.firstName='Mary';
mary.lastName='Johnson';

console.log(mary.greeting());
mary.getsMarried('Riaz');
console.log(mary.greeting());

// Alternate Syntax

const brad= Object.create(personPrototypes,{
  firstName:{value: 'Brad'},
  lastName:{value:'Traversy'}
});


console.log(brad.greeting());
