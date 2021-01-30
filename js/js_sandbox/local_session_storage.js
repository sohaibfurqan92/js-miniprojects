// local vs session storage: session storage will end when the browser is closed, local storage will stay

// set local storage item
// set session storage item
// sessionStorage.setItem('name','Sohaib');

// remove from storage
// localStorage.removeItem('name');
// get value from storage
// console.log(`Taken from local storage: ${localStorage.getItem('name')}`);

// clear local storage


// Add task to localstorage through form
document.querySelector('#task-form').addEventListener('submit',addTask);

// function addTask(e){
//   let inputField=document.querySelector('#task').value;
//   localStorage.setItem('task',inputField)
//   e.preventDefault();
// }


// Problem with localStorage and workaround - can only store one value, if we store multiple values, previous one will be overriden. WORKAROUND: Store values as an array.

function addTask(e){
  const inputVal=document.getElementById('task').value;
  //set input value to local storage

  let tasks;
  if(localStorage.getItem('tasks')===null){
    tasks=[];
  } else{
    tasks=JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(inputVal);
  localStorage.setItem('tasks',JSON.stringify(tasks));
  e.preventDefault();
   }

  //  pritn tasks to console

  JSON.parse(localStorage.getItem('tasks')).forEach(task=>console.log(task));

