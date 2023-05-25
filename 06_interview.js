function expression(gradScore, hscScore, sscScore, name) {
  {
    var result =
      gradScore >= 70 || hscScore >= 80 || sscScore >= 90
        ? `Congrates, ${name} you are elligible  for TCS interview`
        : `Else Unfortunatly,  ${name} you are not elligible for interview`;
    return result;
  }
}
var returnVal = expression(80, 86, 90, "Ishwari");
console.log(`${returnVal}`);

var returnVal = expression(70, 65, 55, "Namrata");
console.log(`${returnVal}`);

var returnVal = expression(60, 79, 88, "Mina");
console.log(`${returnVal}`);
