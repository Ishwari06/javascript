// 1-monday
// 2-tuesday
// 3-wednesday
// 4-thursday
// 5-friday
// 6-saturday
// 7-sunday

function weekDayName(dayNumber) {
  if (dayNumber == 1) {
    console.log(`day is: monday number is $(dayNumber}`);
  } else {
    if (dayNumber == 2) {
      console.log(`day is: tuesday number is $(dayNumber}`);
    } else {
      if (dayNumber == 3) {
        console.log(`day is: wednesday number is $(dayNumber}`);
      } else {
        console.log(`day is: thursday number is $(dayNumber}`);
      }
    }
  }
}

weekDayName(1);
weekDayName(2);
weekDayName(3);

function weekDay(dayNumber) {
  switch (dayNumber) {
    case 1:
      console.log(`day is: monday, number is ${dayNumber}`);
      break;

    case 2:
      console.log(`day is: tuesday, number is ${dayNumber}`);
      break;
    case 3:
      console.log(`day is:wednesday, number is ${dayNumber}`);
      break;

    case 4:
      console.log(`day is:thursday, number is ${dayNumber}`);
      break;

    case 5:
      console.log(`day is: friday, number is ${dayNumber}`);
      break;

    case 6:
      console.log(`day is: saturday, number is ${dayNumber}`);
      break;
    case 7:
      console.log(`day is: sunday, number is ${dayNumber}`);

    default:
      console.log(`default us, ${dayNumber}`);
      break;
  }
}

weekDay(1);
weekDay(2);
weekDay(3);
weekDay(4);
weekDay(5);
weekDay(6);
weekDay(7);
