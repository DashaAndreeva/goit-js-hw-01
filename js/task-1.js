"use strict";
let quantity = 5;
let pricePerDroid = 3000;
const totalPrice = quantity * pricePerDroid;

quantity = 3;
pricePerDroid = 1000;

quantity = 10;
pricePerDroid = 500;

function makeTransaction(quantity, pricePerDroid) {
  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"
