// create map
const map = new Map();

// set key
const key1 = 'A simple string';
const key2 ={}; //an object
const key3 = function(){};

// Set map values by key - string, object,func
map.set(key1,'Value of key1');
map.set(key2,'Value of key2');
map.set(key3,'Value of key3');

// Get values by key
console.log(map.get(key1));
console.log(map.get(key2));
console.log(map.get(key3));

// count values inside map - size
const numItems = map.size;
console.log(numItems);

// Iterating - for...of -- get keys and values, keys, values
for(let [key,value] of map){console.log(`${key}:${value}`);}

//get keys only
for(let key of map.keys()){console.log(`${key}`);}
for(let value of map.values()){console.log(`${value}`);}


// Iterating - forEach -- get keys and values, keys, values
map.forEach((value,key) => console.log(`Key: ${key} Value: ${value}`) );
map.forEach((value,key) => console.log(`Key: ${key}`) );
map.forEach((value,key) => console.log(`value: ${value}`) );

// Convert to array key/val, val,keys

const arrMap = Array.from(map);
console.log(arrMap);
const arrKeyMap = Array.from(map.keys());
console.log(arrKeyMap);
const arrValMap = Array.from(map.values());
console.log(arrValMap);


