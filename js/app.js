// regular expressions
//exec,test,match,replace,search
let re;
re = /hello/i;
// re=/hello/i; //case insensitive
// re=/hello/g; //global search

console.log(re);
console.log(re.source);

//exec() - retuns result in an array or null
let result = re.exec(' hello world');
console.log(result);
console.log(result[0]);
console.log(result.index);
console.log(result.input);

// test() - returns true or false 
result = re.test('hello');
console.log(result);

//match() - similar to exec but works differently -returns array or null
let str = 'hello world';
result = str.match(re);
console.log(result);

// search() - returns index of first match if not found returns -1
str= 'Brad Hello there';
console.log(str.search(re));
 
// replace() - return new string with some or all matches of a pattern
let newStr= str.replace(re, 'hi');
console.log(newStr);
