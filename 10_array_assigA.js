const arrayFruits = ["Banana", "Orange", " Apple", " MAngo", "Watermelon"];
console.log(
  "first element:",
  arrayFruits[0],
  "----last element: ",
  arrayFruits[4]
); //1

arrayFruits.unshift("Papaya"); //2
console.log(arrayFruits);

arrayFruits.splice(4, 1);
console.log(arrayFruits); //3

arrayFruits.push("Pineapple"); //4
console.log(arrayFruits);

arrayFruits.splice(4, 0, "Dragon Fruit"); //6
console.log(arrayFruits);

arrayFruits[2] = "Kiwi"; //7
console.log(arrayFruits);

let arrSpliced = arrayFruits.splice(1, 4);
// console.log(arrayFruits);
console.log(arrSpliced);

const lastElement = arrayFruits[arrayFruits.length - 1];
console.log(arrayFruits);
