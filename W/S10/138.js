"use strict";
/* 
138: Closures
*/
// === import zone ===
import { mainHead, subHead, paraText } from "../../utils/text.js";
// ======
mainHead("138: Closures");

subHead("Closures testing");

//closures here
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengersz`);
  };
};

const booker = secureBooking();
console.log(booker);

paraText("Calling Function");
booker();
booker();
booker();
