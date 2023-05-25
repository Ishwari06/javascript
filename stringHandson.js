
function stringHandson(){
string="   Hey you are doing good, keep it up   ";
console.log(string);}
stringHandson();

 
var string = "  Hey you are doing good, keep it up   ";
var stringLength = string.length;
console.log("Calculate len of string is: ", stringLength);

var trimmedstring = string.trim();
var lengthAfterTrim = trimmedstring.length;
console.log("remove leading and trailing extra spaces: ",trimmedstring.length );
console.log(" total spaces : ", stringLength-lengthAfterTrim);

var resultSplit = string.split(" ");
console.log(resultSplit);
console.log("Total number of words: ",resultSplit.length);


var charIndex = string.charAt(2);
var charAtLastIndex = string.charAt(string.length-4);
console.log("Char at starting index: ",charIndex,"and lastindex: ",charAtLastIndex);
 

// var charAtLastIndex = string.charAt(string.length-4);
// console.log("Char at last index: ",charAtLastIndex);

var indexOfGood = string.indexOf("good")
console.log("Index of(good) is: ", indexOfGood);

var sliceResult =string.slice(24);
console.log("Slice Result is: ", sliceResult);

var subStringResult = string.substring(24);
console.log("Substring result is: ", subStringResult);

string="Hey you are doing good, keep it up";

var result = string.startsWith("Hey");
console.log(` Is string starts with Hey ${result}`);

var result =string.endsWith("up");
console.log(` Is string ends with up: ${result}`);


var stringLength = string.length;
console.log("Calculate len of string is: ", stringLength);
