"use strict";
/* 
136: Coding Challenge 
- Files for the project are here 
https://github.com/m0x0m0x/mx-tcjc24ftz-1/blob/main/OLD/m-ujs-v1/prev/cursa/10-Functions/final/script.js

*/
// === import zone ===
import { mainHead, subHead, paraText } from "../../utils/text.js";
// ======
mainHead("136: Coding Challenge ");

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.questions}\n${this.options.join("\n")}\n(Write Option Number)`
      )
    );
    console.log(`ChoiceRape: ${choiceID(answer)}`);
  },
};
poll.registerNewAnswer();

// Writing your own functiont that will be called as a template literal
function choiceID(number) {
  switch (number) {
    case 0:
      console.log("0: Javascript");
      break;
    case 1:
      console.log("1: Python");
      break;
    case 2:
      console.log("2: Rust");
      break;
    case 3:
      console.log("3: C++");
      break;
  }
}
