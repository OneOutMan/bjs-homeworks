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
getSolutions();

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

function getPersonData(secretData) {
  function getDecodedValue(secret) {
    if (secret == 0) {
      return "Радриго";
    } else if (secret == 1) {
      return "Эмильо";
    }
  }
  return {
    firstname: getDecodedValue(secretData.aaa),
    lastname: getDecodedValue(secretData.bbb),
  };
}

console.log(getPersonData({ aaa: 0, bbb: 1 }));
