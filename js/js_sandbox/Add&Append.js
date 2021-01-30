// Create New DOM Element from scratch

const newLi = document.createElement('li');
newLi.className='collection-item';
newLi.appendChild(document.createTextNode('HelloWorld'));
const link = document.createElement('a');
link.setAttribute('href','#')
link.className='delete-item secondary-content';
link.innerHTML='<i class="fa fa-remove"></i>';

newLi.appendChild(link);

document.querySelector('ul').appendChild(newLi);

// Remove Elements
// const listItem= document.querySelector('li.collection-item');
// console.log(listItem);
// listItem.remove();

// const list = document.querySelector('ul');
// list.removeChild(list.children[2]);

// REPLACE

const newHeading = document.createElement('h2');
newHeading.textContent='New Heading';
// Get old heading
const oldHeading = document.getElementById('task-title');
const parent = oldHeading.parentElement;
parent.replaceChild(newHeading,oldHeading);
console.log(newHeading);