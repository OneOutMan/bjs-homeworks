"use strict";
function calculateTotalMortgage(percent = 0, contribution, amount = 0, date) {
  let mounth = (Date.parse(date) - Date.now()) / 2592000000;

  if (
    typeof percent === "number" &&
    typeof contribution === "number" &&
    typeof amount === "number"
  ) {
    let S = amount - contribution;
    let P = Math.round(percent / 12);
    let totalAmount = S * (P + P / (((1 + P) ^ mounth) - 1));
    console.log(totalAmount);
    return totalAmount.toFixed(2);
  } else {
    console.log("Введённые данные не верны!");
  }
}
calculateTotalMortgage();

function getGreeting(name) {
  if (name == "Пётр") {
    console.log("Привет, мир! Меня зовут Пётр.");
  } else if (name == "") {
    name = "Аноним";
    console.log("Привет, мир! Меня зовут Аноним");
  } else if (name == null) {
    name = "Аноним";
    console.log("Привет, мир! Меня зовут Аноним");
  }
}
