const arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11];

let lengthOfArray = arrayNumbers.length;
console.log(`Length of array is : ${lengthOfArray}`);

const firstElement=arrayNumbers[1];
console.log("first element is",firstElement);  //31


const lastElement=arrayNumbers[10];
console.log("last element is",lastElement);  //11


let arrayLength =arrayNumbers.length;
const thirdLastElement = arrayNumbers[arrayLength-3];
console.log(`Last element: ${thirdLastElement}`);

for (let index = 2; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];

    

    if(arrayNumbers%2==0){
        console.log("even",arrayNumbers);
    }

    if(arrayNumbers%2!==0){
        console.log("even",arrayNumbers);
    }
    
}











arrayNumbers.splice(2, 0, 56, 66) //after 2nd position add 666,444.  o means not change
console.log(arrayNumbers);

const arraySpliced = arrayNumbers.splice(6,10);
console.log(arrayNumbers);
console.log(arraySpliced);