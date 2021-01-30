const form=document.querySelector('form');
const heading = document.querySelector('h5');
const inputField = document.getElementById('task');


// Submit event, get value, preventDefault, clear input field
// form.addEventListener('submit',runEvent);
inputField.value='';

//keydown
// inputField.addEventListener('keydown',function(e){
//   //log the input from each keydown to the console
//   console.log(e.target.value);
//   // Output to heading
//   heading.innerText=e.target.value;
// });

// keyup
// inputField.addEventListener('keyup',runEvent);
// Keypress
// inputField.addEventListener('keypress',runEvent);
//focus
// inputField.addEventListener('focus',runEvent);
// Blur
// inputField.addEventListener('blur',runEvent);
// Cut
// inputField.addEventListener('cut',runEvent);
// Paste
// inputField.addEventListener('paste',runEvent);
// Input
inputField.addEventListener('input',runEvent); // any kind of input 
// change - used on select lists
document.querySelector('select').addEventListener('change',runEvent);

function runEvent(e){
  console.log(e.type+" "+e.target.value);
  e.preventDefault();
}