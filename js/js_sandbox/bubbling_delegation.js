/* Event Bubbling: Bubbling up of events through the DOM.

When an event happens on a particular element, it will bubble up through tis parent  

Event Delegation: We put the event handler on the parent and use logic inside the event handler to target the element we want the event to execute for. 
*/

//add event listener to card title and its parents upto col
// document.querySelector('.card-title').addEventListener('click',function(e){
//   console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click',function(e){
//   console.log('card content');
// });

// document.querySelector('.card').addEventListener('click',function(e){
//   console.log('card');
// });

// document.querySelector('.col').addEventListener('click',function(e){
//   console.log('col');
// });

// Event Delegation: When to use
// Without event delegation
// document.querySelector('.delete-item').addEventListener('click', deleteItem);

//add event to body, spot what is wrong
document.querySelector('body').addEventListener('click',deleteItem); //deleteItem will execute any where in the body
// fix it with className and classList of icon and parent element
//spot why its not good
//use contains

// add delete functionality

function deleteItem(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    e.target.parentElement.parentElement.remove();
  }
}
