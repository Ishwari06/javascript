function countCharA(string1) {
  //  string1="I AM Learning Javascript, The Language of internet";
  //  string2="My favourite movie is LAggAn";
  var count = 0;
  for (let index = 0; index < string1.length; index++) {
    var char = string1.charAt(index);

    if (char == "a" || char == "A") {
      console.log(`${char}`);

      count++;
    }
  }
  console.log(`count total A,a--> ${count}`);
}

countCharA("I AM Learning Javascript, The Language of internet");
countCharA("My favourite movie is LAggAn");
