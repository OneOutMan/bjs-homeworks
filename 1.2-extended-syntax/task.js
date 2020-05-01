function getResult(a, b, c) {
  "use strict";
  Math.pow(a, b, c);
  let array = ["-3", "-9"];

  return array;
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

  const average = sum / arr.length;
  return average;
}

function askDrink(name, dateOfBirthday) {
  let dateOfBirthday = Date.parse('2002/02/02');
  let trasSec = new Date(31536000);
  
  if (dateOfBirthday < new Date) {
    name += " мисье";
    alert(
      "Сожалею, " +
        name +
        " но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!"
    );
  } else if (dateOfBirthday >= new Date)) {
    name += " мисье";
    alert("Не желаете ли олд-фэшн, " + name + "?");
  }
}
// return result
