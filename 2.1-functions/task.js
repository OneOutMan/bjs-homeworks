function getSolutions(a, b, c) {
  let D = b ** 2 - 4 * a * c;

  if (D < 0) {
    return { D, roots: [] };
  } else if (D === 0) {
    let x1 = (-b / 2) * a;
    return { D, roots: [x1] };
  } else if (D > 0) {
    let x1 = (-b + Math.sqrt(D)) / (2 * a);
    let x2 = (-b - Math.sqrt(D)) / (2 * a);
    return { D, roots: [x1, x2] };
  }
}

function showSolutionsMessage(a, b, c) {
  let result = getSolutions(a, b, c);
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: D + ${result.D}`);
  if (result.D < 0) {
    console.log("Уравнение не имеет вещественных корней");
  } else if (result.D === 0) {
    console.log(`Уравнение имеет один корень X₁ = ${result.x1}`);
  } else if (result.D > 0) {
    console.log(
      `Уравнение имеет два корня. X₁ = ${result.x1}, X₂ = ${result.x2}`
    );
  }
}

getSolutions();
showSolutionsMessage();

function getAverageMark(marks) {
  if (marks.length == 0) {
    return 0;
  }

  let sum = 0;

  for (let i = 0; i < marks.length; i++) {
    sum = sum + marks[i];
  }
  return sum / marks.length;
}

function getAverageScore(data) {
  let accumulate = 0,
    len = 0;

  for (let average in data) {
    data[average] = getAverageMark(data[average]);
    accumulate += data[average];
    len++;
  }

  data.average = accumulate / len;

  if (len === 0) {
    data.average = 0;
  }

  return data;
}

getAverageScore({
  algebra: [3, 2, 4, 5, 3, 4],
  physics: [4, 4],
  geometry: [4, 3, 3],
  russian: [4, 4, 4, 4],
  music: [2, 5, 2],
  english: [4, 4, 3],
  poetry: [4, 3, 5],
  chemistry: [3],
  french: [5, 5],
});

function getDecodedValue(secret) {
  if (secret == 0) {
    return "Родриго";
  } else if (secret == 1) {
    return "Эмильо";
  }
}

function getPersonData(secretData) {
  return {
    firstName: getDecodedValue(secretData.aaa),
    lastName: getDecodedValue(secretData.bbb),
  };
}

console.log(getPersonData({ aaa: 0, bbb: 1 }));
