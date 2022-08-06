billAmount = prompt("How much is your bill?");
tip = [0.2, 0.18, 0.15];
final = [1.2, 1.18, 1.15];
console.log(billAmount);

document.getElementById("preTipBill").innerHTML =
  "Bill amount before tip: $" + billAmount;

console.log(billAmount);
document.getElementById("results20").innerHTML =
  "A tip of 20% is: $" +
  (billAmount * tip[0]).toFixed(2) +
  ". Your total bill amount will be $" +
  (billAmount * final[0]).toFixed(2);
document.getElementById("results18").innerHTML =
  "A tip of 18% is: $" +
  (billAmount * tip[1]).toFixed(2) +
  ". Your total bill amount will be $" +
  (billAmount * final[1]).toFixed(2);
document.getElementById("results15").innerHTML =
  "A tip of 15% is: $" +
  (billAmount * tip[2]).toFixed(2) +
  ". Your total bill amount will be $" +
  (billAmount * final[2]).toFixed(2);



/*
Future additions:
ratedService = prompt('How was the service?');
console.log(ratedService)
ratedFood = prompt('How was the food?');
console.log(ratedFood)
*/

