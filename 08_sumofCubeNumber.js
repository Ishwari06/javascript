// 1*1*1   +2*2*2  + 3*3*3  + 4*4*4  + 5*5*5

var sumofCube=function(num){
    var sum=0;
    for(let index=1; index<=num; index++)
    {
        sum=sum+index*index*index
    }
    console.log(`sum of cube of no. is${sum}`);
}

sumofCube(5);
sumofCube(9);
sumofCube(12);

function oddPositionedChars(givenString){
    var str="";
    for(var index=0; index<givenString.length; index++)
    {
        var char=givenString.charAt(index);
        if(index%2!=0 && char!=""){
            str=str+char;
        }
    }
console.log(`${str}`);
}
oddPositionedChars("hardwork always pays back")