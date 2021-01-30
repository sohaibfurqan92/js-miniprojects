// Jquery is not recommended for DOM Manipulation since Vanilla JS can do it 
// JQuery is good for quick scripts/ plugins only


/* Two main types of selectors - Single element,multiple element
Single element- return one (first) element
Multiple element - returns an HTML collection or nodeList with multiple elements

*/

// getElementById task-title
console.log(document.getElementById('task-title'));
// get ID of element selected
console.log(document.getElementById('task-title').id);
// get Class of element selected
console.log(document.getElementById('task-title').className);

// change style - background, color, padding, display 
document.getElementById('task-title').style.color='#fff';
document.getElementById('task-title').style.background='#ccc';
document.getElementById('task-title').style.padding='2rem';
// document.getElementById('task-title').style.display='none';

// Change content - innerText, textContent
document.getElementById('task-title').innerText='My Task List';
document.getElementById('task-title').textContent='Tasks to DO';

// Insert HTML - innerHTML
document.getElementById('task-title').innerHTML='<span style="color:red;">That\'s my boy</span>';



// querySelector - can select elements using any css selector - id task-title class card-title h5

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

// turn first LI red, select last item, select third item,change content of 4th, try odd or even
document.querySelector('li').style.color='red';
document.querySelector('li:last-child').style.color='blue';
document.querySelector('li:nth-child(3)').style.color='green';
document.querySelector('li:nth-child(4)').innerText='Content changed by innerText';
document.querySelector('li:nth-child(4)').textContent='Content changed by textContent';
document.querySelector('li:nth-child(even)').textContent='Only first even selected';