// add event listener with anonymous function
// document.querySelector('.clear-tasks').addEventListener('click',function(e){
//   console.log('clicked');
//   e.preventDefault();
// });
// Add event listener with named function

document.querySelector('.clear-tasks').addEventListener('click',onClick);

// function onClick(e){
//   console.log('Named function button clicked');

// }

/* Prevent Default - why?
Some elements have default behaviours. If we dont use e.preventDefault(); those default behaviours will be executed 
// What if we dont prevent default?
*/

// Closer look at event object
// examine the event object
function onClick(e){
  let val;
  val=e.clientX; // coordinates of the element relative to the window
  val=e.clientY;
  val=e.timeStamp;
  val=e.target.className;
  val=e.target.classList;
  val=e.offsetX;
  val=e.offsetY;
  console.log(val);

}

//clientX, clientY, shiftKey,timeStamp,target

// Examine target
// get stuff from target - class classList, change content

// event type
// timeStamp
//coordinates relative to the window X and Y
//coordinates relative to the element X and Y

