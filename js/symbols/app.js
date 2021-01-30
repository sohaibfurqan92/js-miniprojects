//create symbols - sym2 on right side is an identifier
// const sym1 = new Symbol(); //ERRROR
// const sym1 = Symbol();
// const sym2 = Symbol('sym2'); // Sym2 is an identifier 
// console.log(sym1);
// console.log(sym2);


// symbols are unique
console.log(Symbol('123') === Symbol('123'));

//convert symbols to string
console.log(`Hello ${String(Symbol())}`);


// Unique object keys
const obj = {};
const sym1 = Symbol('sym1');
const sym2 = Symbol('sym2');

obj[sym1] = "prop1";
obj[sym2] = "prop2";
obj.key3 = "prop3";
obj.key4 = "prop4";

console.log(obj);
// Symbols are not enumerable in for...in
for(let x in obj){
  console.log(x);
}
// Symbols are ignored by JSON.stringify
obj[JSON.stringify(Symbol())] === "prop5";
console.log(obj);