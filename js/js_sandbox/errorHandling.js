try{
myFunction();
}
catch(e){
  console.log(e.name);
  console.log(e.message);
console.log(e instanceof ReferenceError);
}
finally{
  console.log('Finally runs always');
}

console.log('continue');