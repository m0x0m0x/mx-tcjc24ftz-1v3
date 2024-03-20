"use strict";
/* 
137: Immediately Invoked Function Expressions - IIFE
*/
// === import zone ===
import { mainHead, subHead, paraText } from "../../utils/text.js";
// ======
mainHead("137: Immediately Invoked Function Expressions - IIFE");

subHead(`
IIFE - Functions that are invoked only once 
`);

// Example of running it once
const runOnce = function () {
  console.log("Run One Ony");
};
// runOnce();

// This is being called immediately
(function () {
  console.log("Run One Ony");
})();

// Running an arrow function
(() => console.log("Run once"))();
