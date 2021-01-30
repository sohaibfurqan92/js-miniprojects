//for in will loop through property names
//for of will loop through property values

//for-in loops through innumerable properties
//for-of loops through iterable objects

let person = {
  firstname:"Sohaib",
  lastName:"Furqan",
  arms:2
}

for(let x in  person){
  console.log(x);
}

let arr =[3,5,7];

for(let x in arr){
  console.log(x); //will give the indices
}

for(let x of arr){
  console.log(x); //will give the values
}