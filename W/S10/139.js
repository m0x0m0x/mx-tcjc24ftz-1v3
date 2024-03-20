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

// If you dont call g() , then f() will return error
g();
f();
