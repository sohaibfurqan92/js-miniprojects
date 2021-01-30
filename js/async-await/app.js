// async function sayHello(){
//   const promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve('Hello'),1000);
//   })

//   const error = true;
//   if(!error){
//     const result = await promise;
//     return result;
//   } else{
//     await Promise.reject(new Error(`Sin cos tan`));
//   }


// }

// sayHello().then(res=>console.log(res)).catch(err=>console.log(err));

async function getUsers(){
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return data; 
}

getUsers().then(res=>console.log(res));