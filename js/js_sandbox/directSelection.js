let val;


// Entire document

// When working with the DOM, we have different structures that we can get eg html collection which is like an array but not like an array - cant use array methods, also nodeList
// Get an HTML collection from the entire document
val=document.all;
// Can access certain indices from this collection
val=document.all[2];
// Length of html colection
val=document.all.length;
// Access the head alone
val=document.head;
// Access the body alone
val=document.body;
// doctype
val=document.doctype;

// domain
val=document.domain;

// url
val=document.URL;

// character set
val=document.characterSet;

// content type
val=document.contentType;
// Get all forms on a page
val=document.forms;

// Access one form
val=document.forms[0];

// get id from form, method, action
val=document.forms[0].id;

// Links
val=document.links;
// Get specific links
val=document.links[0];
// Get id from links
val=document.links[0].id;

//Get classesfrom links
val=document.links[0].className;

// Collection of classes
val=document.links[0].classList;


// Access specific item from collection of classes
val=document.links[0].classList[1];
// Access Images
val=document.images;

// Access Scripts
val=document.scripts;


// Get src attribute from scripts
val=document.scripts[0].src;
// Turn collection to array - ARRAY FROM
let scripts=document.scripts;
let scriptsArr= Array.from(scripts);
scriptsArr.forEach(script=>console.log(script.src));
 

console.log(val);