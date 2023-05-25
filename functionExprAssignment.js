var multiplication = function (one, two) {
    var result = one*two;
    return `square is: ${result}`;
}
var result = multiplication(5,5);
console.log(result);

var result = multiplication(6,6);
console.log(result);

var result = multiplication(25,25);
console.log(result);


var result = multiplication(100,100);
console.log(result);

console.log("type",typeof (result));

var length=499;
var width=917;
console.log("area of rect",length*width);

num1="Virat";
num2="Anushka";
console.log("beforeswap--",num1,num2);
var temp=num1;
num1=num2;
num2=temp;
console.log("after swap",num1,num2);

n1=1000;
n2=2000;
console.log("beforeswap--",n1,n2);
var temp=n1;
n1=n2;
n2=temp;
console.log("after swap--",n1,n2);

console.log("------------(qu.no.5)----------------");

var string="JS the most popular languauge of internet";
{
var length=string.length;
console.log("total char available in str--->",length);
charAt=string.charAt(7);
console.log("char at 6 last index--->",charAt);
char=string.charAt(12);
console.log("char at 11  last index--->",char);

result=string.charAt(string.length-1);
console.log("find last character using length property-->",result);

char0=string.charAt(0);
console.log("char at zero index--->",char0);

result=string.split("");
console.log("total no. of words--->",result.length);
a=41;
console.log("square of total no. of characters--->",a*a);
}
