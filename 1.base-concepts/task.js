"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  if (d === 0) {
    arr.push(-b / (2 * a));
  } else if (d > 0) {
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d)) / (2 * a));
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    return false
  }
  Number(percent, contribution, amount, countMonths);
  let monthlyPercent = percent / 100 / countMonths;
  let loanBody = amount - contribution;
  let monthlyPayment = loanBody * (monthlyPercent + (monthlyPercent / (Math.pow((1 + monthlyPercent), countMonths) - 1)));
  let fullPayment = monthlyPayment * countMonths;
  return fullPayment.toFixed(2);
}