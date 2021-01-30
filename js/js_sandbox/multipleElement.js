// getElementsByClassName
// Get list items
// console.log(document.getElementsByClassName('collection-item'));
// // get first list item - change color
// console.log(document.getElementsByClassName('collection-item')[0]);
// document.getElementsByClassName('collection-item')[0].style.color='red';
// // get third list item - change text content
// document.getElementsByClassName('collection-item')[2].textContent='content changed JS';


// use getElementsByClassName in combination with querySelector and a variable, log to console
// console.log('This statement');
// console.log(document.querySelector('ul.collection').getElementsByClassName('collection-item'));

// GetElementByTagName
// console.log(document.getElementsByTagName('ul'));
// Perform array operations, reverse + foreach
// let list=document.getElementsByClassName('collection-item');
//  Array.from(list).forEach(item=>console.log(item.textContent));

// QuerySelectorAll - returns a NodeList
// A nodeList counts not just elements but other things such as textNodes, also allows us to do some array operations without having to convert it
// Get li  - do foreach,for
let list = document.querySelectorAll('li');
list.forEach((item,index)=>console.log(`Item: ${index}`));

let liEven=document.querySelectorAll('li.collection-item:nth-child(even)');
let liOdd=document.querySelectorAll('li.collection-item:nth-child(odd)');

liEven.forEach(item=>item.style.background='#ccc');
liOdd.forEach(item=>item.style.background='#f4f4f4');

// Change color of odd and even
// Select odd and even



