// Replace element
// create h2
const newHeading = document.createElement('h2');
newHeading.id='task-title';
// add text to heading
newHeading.appendChild(document.createTextNode('Task List'));

// Get old heading
const oldHeading = document.getElementById('task-title');

// Get Parent
const parent= document.querySelector('.card-action');

parent.replaceChild(newHeading,oldHeading);

// Remove Element
const lis = document.querySelectorAll('li');
lis[0].remove();
const list = document.querySelector('ul.collection');
list.removeChild(lis[3]);

// Classes and attributes
const firstLI=document.querySelector('li.collection-item');
const link= firstLI.children[0];
console.log(link.className);
console.log(link.classList);
console.log(link.classList[1]);
link.classList.add('test');
console.log(link.classList);
link.classList.remove('test');
console.log(link.classList);

// Attr
console.log(link.getAttribute('href'));
link.setAttribute('href','https://google.com');
link.setAttribute('title','Google');
console.log(link.hasAttribute('title'));
link.removeAttribute('title');
console.log(link);