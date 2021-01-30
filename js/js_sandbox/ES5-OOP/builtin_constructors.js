//String
const person='Sohaib';
console.log(person, typeof person);

const person2= new String('Sohaib');
console.log(person2, typeof person2);

if(person===person2){
  console.log('yes');
} else{
  console.log('No');
}
//Number
let val = 1;
console.log(val, typeof val);

let val2= new Number('2');
console.log(val2, typeof val2);
//Boolean

let foo=true;
console.log(foo, typeof foo);

let foo2= new Boolean('true');
console.log(foo2, typeof foo2);
//Function

let func = function(){
  return "function";
}

console.log(func());

let func2 = new Function(console.log('weird function'));
func2()
//Object
const obj1={
  name:'Sohaib'
};

console.log(obj1, typeof obj1);

const obj2= new Object({'name':'Sohaib'})
console.log(obj2, typeof obj2);
// Arrays

let arr1=[2,3,4,5,6];
console.log(arr1, typeof arr1);

let arr2= new Array(2,3,4,5,6);
console.log(arr2, typeof arr2);
// Regular Expressions

const regex1= /\w+/;
console.log(regex1, typeof regex1);

const regex2=new RegExp('\\w+');
console.log(regex2, typeof regex2);