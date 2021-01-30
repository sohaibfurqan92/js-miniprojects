// function sayHello(){
//   console.log('Hello');
// }
// const sayHello = ()=>{
//   console.log('Hello');
// }

// const sayHello = () => console.log('Hello');
// const sayHello = () => 'Hello';

// const sayHello = ()=>({name:"KyleJenner"});

// const sayHello = name =>console.log(name);
const sayHello = (firstName,lastName="Rashid") =>console.log(firstName,lastName);
sayHello('Sohaib','Furqan');

const users=['Rashid','Saqib','Minhas'];
let userlengths = users.map(user=>user.length);
console.log(userlengths);