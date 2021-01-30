const posts = [
  {title:"Post one",body:"THis is post one!"},
  {title:"Post two",body:"THis is post two!"}
];

function createPost(post){
  return new Promise(function(resolve,reject){
    setTimeout(function(){
      posts.push(post);
      const error = false;
      if(!error){
        resolve();
      } else{
        reject('Error: something went wrong');
      }
      
    },2000);
  });
}

function getPosts(){
  setTimeout(function(){
    let output = '';
    posts.forEach(function(post){
      output += `<li>${post.title}</li>`;
    });
    document.getElementById('output').innerHTML=output;
  },1000)
}

createPost({title:"Post three", body:"This is custom post"}).then(getPosts).catch(function(err){
  console.log(err);
});