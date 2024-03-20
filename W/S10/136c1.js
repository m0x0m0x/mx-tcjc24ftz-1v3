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

    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;

    // console.log(this.answers);
    this.displayResults();
    this.displayResults("string");
  },

  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll are ${this.answers.join(", ")}`);
    }
  },
};

// poll.registerNewAnswer();

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResults.call(
  {
    answers: [5, 2, 3],
  },
  "string"
);

poll.displayResults.call(
  {
    answers: [1, 5, 3, 9, 6],
  },
  "string"
);
