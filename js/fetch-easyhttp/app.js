document.getElementById('button-1').addEventListener('click',getText);
document.getElementById('button-2').addEventListener('click',getJSON);
document.getElementById('button-3').addEventListener('click',getExternal);

function getText(){
fetch('test.txt')
.then(response =>{
  if(!response.ok){
    throw new Error(`${response.status} ${response.statusText}`);
  }
return response.text();
})
.then(data =>document.getElementById('output').innerHTML =data)
.catch(err=>console.log(err));
}

function getJSON(){
  fetch('posts.json')
  .then(response=>response.json())
  .then(posts=>{
    let output ='';
    posts.forEach(post=>output+=`<li>${post.title}</li>`);
    document.getElementById('output').innerHTML = output;
  })
  .catch(function(err){
    console.log(err);
  });
}

function getExternal(){
  fetch('https://api.github.com/users')
  .then(response=>response.json())
  .then(users=>{
    let output ='';
    users.forEach(user=>output +=`<li>${user.login}</li>`);
    document.getElementById('output').innerHTML = output;
  });
}