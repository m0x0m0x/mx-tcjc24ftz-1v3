/* 
t1.j : Testing some fuck functions
*/
//=== Import Zone
import { mainHead, subHead } from "../utils/text.js";
// ===
mainHead("t1.js: Tezting 1");

subHead("Testing Prompt Choice");

const choiceFunctionValue = function (number) {
  const prompt1 = Number(prompt("Choose ker"));
  console.log(`Bastard u chose ${choiceType(prompt1)}`);
};

const choiceType = function (number) {
  switch (number) {
    case 0:
      console.log("Chosen - ssy");
      break;
    case 1:
      console.log("Chosen - 2ss");
      break;
    default:
      console.log("Invalid choice"); // Add a default case to handle invalid inputs
  }
};

choiceFunctionValue();
