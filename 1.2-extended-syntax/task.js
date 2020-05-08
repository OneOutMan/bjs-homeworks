"use strict";
function getResult(a, b, c) {
  let d = b ** 2 - 4 * a * c;

  if (d < 0) {
    return [];
  } else if (d == 0) {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    return [x1];
  } else if (d > 0) {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    return [x1, x2];
  }
}

function getAverageMark(marks) {
  let arr = marks;

  if (arr.length === 0) {
    return 0;
  } else if (arr.length > 5) {
    arr = marks.slice(0, 5);
  }

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
}

function askDrink(name, dateOfBirthday) {
  let now = new Date(),
    ageTwo = now.getFullYear() - dateOfBirthday.getFullYear();

  if (ageTwo < 18) {
    return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
  } else if (ageTwo >= 18) {
    return `Не желаете ли олд-фэшн, ${name}?`;
  }
}
