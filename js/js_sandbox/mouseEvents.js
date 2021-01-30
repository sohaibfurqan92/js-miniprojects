// Get elements - clearBtn, card,heading
const clearBtn = document.querySelector('.clear-tasks'); 
const card = document.querySelector('.card'); 
const heading = document.querySelector('h5'); 
// Create event handler
function runEvent(e){
  console.log(e.type);
}
// test different events:
// click
// clearBtn.addEventListener('click',runEvent);
//  double click
// clearBtn.addEventListener('dblclick', runEvent);
//  Mouse Down
// clearBtn.addEventListener('mousedown', runEvent);
//  Mouse up
// clearBtn.addEventListener('mouseup', runEvent);
//  Mouse Enter
// card.addEventListener('mouseenter', runEvent);
//  Mouse Leave
// card.addEventListener('mouseleave', runEvent);

// //  Mouse Over
// card.addEventListener('mouseover', runEvent);

//  Mouse Out
// card.addEventListener('mouseout', runEvent);

//  Mouse Move
card.addEventListener('mousemove', runEvent);

//  Make heading display coordiantes of mouse
card.addEventListener('mousemove',function(e){
  heading.textContent=`X:${e.offsetX} Y: ${e.offsetY}`;
  // change bg according to offsets
  document.querySelector('body').style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},${Math.random()*255})`;
})
// Understand difference between mouseenter and mouseover and mouseleave and mouseout

// mouseover will fire for all inner elements too.Can undesirably lead to multiple calls. Hence mouseenter and mouseleave are more efficient.