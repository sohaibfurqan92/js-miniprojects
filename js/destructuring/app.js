// destructuring assignment
// const [a,b] = [100,200];
// console.log(a);
// console.log(b);
// destructuring assignment with rest pattern / spread operator
// const [a,b,c,...rest] =[100,200,300,400,500];
// console.log(a);
// console.log(b);
// console.log(rest);

//with objects

// ({a,b} ={a:1,b:2,c:3});
// console.log(a);
// console.log(b);
// rest with objects
({a,b,...rest} ={a:1,b:2,c:3,d:4,e:5,f:6,g:7});
 console.log(a);
console.log(b);
 console.log(rest);

//array destructing names array
// const namesArr =['Ali','Sufyan','Wasif'];
// const [person1,person2,person3] = namesArr;
// console.log(person1);
// console.log(person2);
// console.log(person3);
//destruct array from func
// function getPeople(){
//   return ['Ali','Sufiyan','Wasif'];
// }

// const [person1,person2,person3] = getPeople();
// console.log(person1);
// console.log(person2);
// console.log(person3);


//obj destruct -old es5,new es6
const obj ={
  name:"Sohaib",
  age:28,
  city:"London",
  gender:"Male",
  sayHello: ()=>'Hello'
};

const {name,age,city,gender,sayHello} = obj;
console.log(name,age,city,gender,sayHello());

