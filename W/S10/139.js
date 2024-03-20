"use strict";
/* 
138: More on closures 
*/
// === import zone ===
import { mainHead, subHead, paraText } from "../../utils/text.js";
// ======
mainHead("138: More on closures ");

subHead("Closure Demo 1");

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

// If you dont call g() , then f() will return error
g();
f();
console.dir(f);

// Reassigned f
h();
f();
console.dir(f);

subHead("Closure Example 2");
const boardPass = function (n, wait) {
  const perGr = n / 3;

  setTimeout(function () {
    console.log(`Now Boarding a ${n}`);
    console.log(`Three groups each with ${perGr} passengers`);
  }, wait * 1000);

  console.log(`Start Boarding in ${wait} seconds`);
};

const perGr = 1000;
boardPass(180, 3);

// Timer Function
// setTimeout(function () {
//   console.log(`TIMER `);
// }, 2000);
