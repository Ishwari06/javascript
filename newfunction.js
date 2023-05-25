var greet = "Good Morning";
var includeResult = greet.includes("ing");
console.log("Is ing string available inside : ", includeResult);

var searchResult = greet.search("Mor");
console.log("Search result : ", searchResult);

var sliceResult = greet.slice(4, 6);
console.log("Slice Result is: ", sliceResult);

var subStringResult = greet.substring(4, 6);
console.log("Substring result is: ", subStringResult);

var greet = "Good Morning mate, How are you";
var resultSplit = greet.split(" ");
console.log(resultSplit);
console.log("Total number of words: ",resultSplit.length);

var resultSplit = greet.split(",");
console.log(resultSplit);
console.log("Total number parts: ",resultSplit.length);

var resultSplit = greet.split("");
console.log(resultSplit);
console.log("Total number of words: ",resultSplit.length);

var greet = "Good Morning mate, How are you";
var resultSplit = greet.split(" ");
console.log(resultSplit);
//console.log("After slipt words are:",resultSplit, "Total number of words: ",resultSplit.length);
console.log(`After slipt words are ${resultSplit} Total number of words ${resultSplit.length} `);

console.log(`Given string is: ${greet}`);

var myName = "Elon Musk";
var result = myName.startsWith("E");
console.log(` Is ${myName} starts with character E: ${result}`);

var result = myName.startsWith("Elon");
console.log(` Is ${myName} starts with character "Elon" : ${result}`);

var result = myName.startsWith("elon");
console.log(` Is ${myName} starts with character "elon" : ${result}`);


var myName = "Elon Musk";
var result = myName.endsWith("k");
console.log(` Is ${myName} ends with character "k" : ${result}`);

var myName = "Elon Musk";
var result = myName.endsWith("Musk");
console.log(` Is ${myName} ends with character "Musk" : ${result}`);

var myName = "Elon Musk";
var result = myName.endsWith("b");
console.log(` Is ${myName} ends with character "b" : ${result}`);
