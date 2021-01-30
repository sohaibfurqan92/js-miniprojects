// // Iterators and Generators

// function namesIterator(names){
//   let nextIndex = 0;

//   return{
//     next: function(){
//       return nextIndex < names.length ?
//       {value: names[nextIndex++], done:false} :
//       {done: true}
//     }
//   };
// }

// const namesArr =['Ali','Ahsan','Irfan'];
// const names = namesIterator(namesArr);

// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);


// Generator
// function* sayNames(){
//   yield 'Ali',
//   yield 'Ahsan',
//   yield 'Irfan'
// }

// const names = sayNames();
// console.log(names.next());
// console.log(names.next());
// console.log(names.next());
// console.log(names.next());

// ID creator
function* createIDs(){
  let id =0;
  while(true){
    yield id++;
  }
}

const ids = createIDs();
console.log(ids.next());
console.log(ids.next());
console.log(ids.next());
console.log(ids.next());
console.log(ids.next());
console.log(ids.next());
console.log(ids.next());
console.log(ids.next());
console.log(ids.next());
console.log(ids.next());

