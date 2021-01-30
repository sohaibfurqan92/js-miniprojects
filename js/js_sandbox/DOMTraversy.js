// DOM Traversing
let val;
const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item');


// Get children
// Child Nodes  --get first, get node name, get node type, understand node type numbering
val=list.childNodes;
val=list.childNodes[0];
val=list.nodeName;
val=list.nodeType;
// Actual Child Elements -- get specific elwent, do things textcontent
val=list.children;
val=list.children[0];
list.children[0].style.color='green';
list.children[0].style.fontWeight='900';
list.children[0].style.fontSize='2rem';
// Children of children
val=list.children[2].children[0];
val=list.children[2].children[0].classList[0];

// First child, First Element Child
val=list.firstChild;
val=list.firstElementChild;
// // Last child, Last Element Child
val=list.lastChild;
val=list.lastElementChild;
// // Child count
val=list.childElementCount;
// // Get parent nodes
val=listItem.parentNode;
// // Parent of parent
val=listItem.parentNode.parentNode;

// // Siblings :next,prev
val=listItem.nextSibling;
val=listItem.nextElementSibling;
val=listItem.previousSibling;
val=listItem.previousElementSibling;

console.log(val);