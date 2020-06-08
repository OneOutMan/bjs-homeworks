"use strict";
function calculateTotalMortgage(percent = 0, contribution, amount = 0, date) {
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
    return `Привет, мир! Меня зовут ${name || "Аноним"}`;
  }
}
