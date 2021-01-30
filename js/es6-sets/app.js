//Sets - unique values of any type/primitive or reference

//create set
const set1 = new Set();

//add val - num,str,obj,bool
set1.add(100);
set1.add('A string');
set1.add({a:1,b:2});
set1.add(true);

console.log(set1);
const value1 =set1.values().next().value;
console.log(value1);
const values =set1.values();
console.log(values.next());
console.log(values.next());
console.log(values.next());
console.log(values.next());

//try to add duplicate
set1.add(100);
console.log(set1);
//bulk add
// const set2= new Set([100,'Majid',{a:1}]);
// console.log(set2);

//size/count
const numItems = set1.size;
console.log(numItems);
//check for vals, use expressions, check for objects using has
console.log(set1.has(100));
console.log(set1.has('Majid'));
console.log(set1.has({a:1,b:2})); //will get false - reference type

//Delete
// set1.delete(100);
console.log(set1);
//Iterate through.. .for-of .values .keys, check .entries
for(let item of set1){
  console.log(item);
}
for(let item of set1.values()){
  console.log(item);
}
for(let item of set1.keys()){
  console.log(item);
}

//Iterate through.. .forEach .values .keys, check .entries
set1.forEach(item=>console.log(item));
set1.forEach(item=>console.log(item));
//convert to arr
console.log(Array.from(set1));