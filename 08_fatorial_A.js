//5! = 5*4*3*2*1
let factorial = 1;
for (let index = 5; index >= 1; index--) {
  // index = 5 4 3 2 1 0
  factorial = factorial * index; // 5 * 4
}
console.log(`Factorial: ${factorial}`);

function factorialNum(num) {
  if (num == 0) {
    console.log(`Factorial of zero is 1`);
    return;
  }

  if (num == null) {
    console.log(`Factorial of null is 1`);
    return;
  }

  if (num == undefined) {
    console.log(`Factorial of undefined is 1`);
    return;
  }

  let factorial = 1;
  for (let index = num; index >= 1; index--) {
    factorial = factorial * index;
  }
  console.log(`Factorial: ${factorial}`);
}
factorialNum(5);
factorialNum(3);
factorialNum(null);
factorialNum(8);
factorialNum(undefined);
factorialNum(9);
factorialNum(0);
