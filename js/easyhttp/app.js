const http = new EasyHTTP();

// http.get('https://jsonplaceholder.typicode.com/posts',function(err,response){
//   if(err){
//     console.log(err);
//   } else{
//     console.log(response);
//   }
// });

// Get single post
// http.get('https://jsonplaceholder.typicode.com/posts/100',function(err,response){
//   if(err){
//     console.log(err);
//   } else{
//     console.log(response);
//   }
// });

// POST request
//create data
// const post ={title:"Custom Post", body:"This is a custom post"};

// http.post('https://jsonplaceholder.typicode.com/posts/',post,function(post){
//   console.log(post);

// });

//PUT request

// const post ={title:"Custom Post", body:"This is the updated content"};

// http.put('https://jsonplaceholder.typicode.com/posts/1',post,function(post){
// console.log(post);
// });

//Delete request
http.delete('https://jsonplaceholder.typicode.com/posts/1',function(response){
  console.log(response);
})
