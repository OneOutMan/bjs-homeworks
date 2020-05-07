"use strict";
function getResult(a, b, c) {
  let D = b ** 2 - 4 * a * c;

  if (D < 0) {
    return [];
  } else if (D == 0) {
    let x1 = (Math.sqrt(-b, 2) + D) / 2 * a;
    return [x1];
  } else if (D > 0) {
    let x1 = (Math.sqrt(-b, 2) - D) / 2 * a;
    let x2 = (Math.sqrt(-b, 2) + D) / 2 * a;
    return [x1, x2];
  }
}

function getAverageMark(marks) {
  let arr = marks;
  let q = 0;

  if (arr.length === 0) {
    return 0;

  } else if (arr.length > 5) {
    arr = marks.slice(0, 5);
  }

  for (q = 0; q < arr.length; q++) {
    let sum = 0;
    sum += arr[q];
  return sum / arr.length;
}
}

function askDrink(name, dateOfBirthday) {
  let now = new Date(),
    ageTwo = now.getFullYear() - dateOfBirthday.getFullYear();

  if (ageTwo < 18) {
    return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
  } else if (ageTwo >= 18) {
    return `Не желаете ли олд-фэшн, ${name} ?`;
  }
}
