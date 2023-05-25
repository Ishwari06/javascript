
var greaterNumber = function(num1 , num2) {
var result= num1>=num2 ? `${num1} is greater` : `${num2}  is greater`;
console.log(result);}
greaterNumber(10, -10);
greaterNumber(800,899);
console.log("");


var isEvenOrOdd= function(num){


var result=isEvenOrOdd(29);
var res =(result==true) ? "29 is even" : "29 is odd";
console.log(res); 

var result=isEvenOrOdd(44);
var res =(result==true) ? "44 is even" : "44 is odd";
console.log(res); 

var result=isEvenOrOdd(0);
var res =(result==true) ? "0 is even" : "0 is odd";
console.log(res); 

var result=isEvenOrOdd(101);
var res =(result==true) ? "101 is even" : "101 is odd";
console.log(res); }

 var wordLength=function (word){
    var length= word.length;
    var result=length%2==0 ? "Even" : "Odd";
    return( result);
 }

    var returnValue=wordLength("Javascript")
    return (`Javascript :${ returnValue}`);

    var returnValue = wordLength("Developer");
console.log(`Developer : ${returnValue}`);

var returnValue = wordLength("Google");
console.log(`Google : ${returnValue}`);

