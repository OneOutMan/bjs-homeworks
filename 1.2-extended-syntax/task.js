"use strict";
function getResult(a, b, c) {
  let D = b ** 2 - 4 * a * c;

  if (D < 0) {
    return [];
  } else if (D == 0) {
    let x1 = ((Math.pow(-b, 2) + D) / 2) * a;
    return [x1];
  } else if (D > 0) {
    let x1 = ((Math.pow(-b, 2) - D) / 2) * a;
    let x2 = ((Math.pow(-b, 2) + D) / 2) * a;
    return [x1, x2];
  }
}

function getAverageMark(marks) {
  let arr = marks;

  if (marks.length === 0) {
    return 0;
  } else if (marks.length > 5) {
    arr = marks.slice(0, 5);
  }

  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
}

function askDrink(name, dateOfBirthday) {
  let now = new Date(),
    ageTwo = now.getFullYear() - dateOfBirthday.getFullYear();

  if (ageTwo < 18) {
    let verOne = alert(
      "Сожалею, " +
        name +
        " но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!"
    );
    return verOne;
  } else if (ageTwo >= 18) {
    let verTwo = alert("Не желаете ли олд-фэшн, " + name + "?");
    return verTwo;
  }
}
