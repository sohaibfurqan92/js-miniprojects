const http = new EasyHTTP();

// http.get('https://jsonplaceholder.typicode.com/users')
// .then(data=>console.log(data))
// .catch(error=>console.log(error));

const userData = {
  name:"Sohaib",
  username:"sohaibfurqan",
  email:"sohaibfurqan@hotmail.com"
};

// http.post('https://jsonplaceholder.typicode.com/users',userData)
// .then(data=>console.log(data))
// .catch(error=>console.log(error));


// http.put('https://jsonplaceholder.typicode.com/users/5',userData)
// .then(data=>console.log(data))
// .catch(error=>console.log(error));

http.delete('https://jsonplaceholder.typicode.com/users/5')
.then(message=>console.log(message))
.catch(error=>console.log(error));