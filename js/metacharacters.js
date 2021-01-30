let re;
re=/hello/;
re=/hello/i;

// Metacharacter symbols
//Must start with
re=/^h/i;
//Must end with
re = / World$/i
//must begin and end with
re=/^bello$/i
//matches any one character
re=/h.llo/i;
//Matches any character 0 or more times
re=/h*llo/i;

//Optional character
re=/h?llo/;
//escape character
re=/h?llo\?/;

// Brackets [] - character sets
//Must be an A or E
re=/gr[ae]y/;
//Must start with a G or F
re=/[GF]ray/i;

//Match anything except a G or F
re=/[^GF]ray/i;

//Match any uppercase letter
re=/[A-Z]ray/;
//Match any lowercase letter
re=/[a-z]ray/;

//Match any letter
re=/[a-zA-Z]ray/;

//Match any digit
re=/[0-9]ray/;


//Braces {} - Quantifiers
re=/he{4}llo/; //Exactly 4 es
re=/he{2,4}/; // 2 to 4 es
re=/he{2,}/; // At least 2 es


// Braces () - Grouping

re=/([0-9][a-z]){3}/;

// SHorthand character classes
// word character - alphanumeric or _
re=/\w/;
// One or more
re=/\w+/;
// Non word character
re=/\W/;
// Match nay digit
re=/\d/;
// Match nay digit 1 or more times
re=/\d+/;
// Mathc any non digit
re=/\D/;
// Martch whitespace char
re=/\s/;
// Match non-whitespace char
re=/\S/;
// Match word boundary
re=/hell\b/i;

// Assertions
//match x only if followed by y
re=/x(?=\w)/;
//match x only if not followed by y
re=/x(?!y)/;

// String to match
const str='sexd!';

const result = re.exec(str);
console.log(result);
reTest(re,str);
function reTest(re,str){
  if(re.test(str)){
    console.log(`${str} matches ${re.source}`);
  } else{
    console.log(`${str} does not match ${re.source}`);
  }
}