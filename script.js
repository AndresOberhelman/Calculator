let currentNum = ""; //empty by default 
let previousNum = ""; //empty by default
let operator = ""; //empty by default
// query for the display counters 
const currentDisplayNumber = document.querySelector(".currentNumber");
const previousDisplayNumber = document.querySelector(".previousNumber");
// query all the buttons and such
const equal = document.querySelector(".equal");
equal.addEventListener("click",calculate); // event listener to call calculate
const numberButtons= document.querySelectorAll(".number");
const clear = document.querySelector(".clear")
clear.addEventListener("click",clearDisplay); // event listener to clear calculator
const operators = document.querySelectorAll(".operator");

numberButtons.forEach((btn) => { //an event listener to call the handleNum function when a number is clicked
    btn.addEventListener("click", (e) => { 
        handleNum(e.target.textContent);
    });
});

function handleNum(number) {
    if (previousNum !== "" && currentNum !== "" && operator === "") {
        previousNum = "";
        currentDisplayNumber.textContent = currentNum;
      }
      if (currentNum.length <= 11) {
        currentNum += number;
        currentDisplayNumber.textContent = currentNum;
      }
}

operators.forEach((btn) => { //an event listener to call the handleOperator function when a operator is clicked
    btn.addEventListener("click", (e) => { 
        handleOperator(e.target.textContent);
    });
});

function handleOperator(op){ // function accepts operator input and changes currentNum to previousNum and currentNum to blank
    if (previousNum === "") {
        previousNum = currentNum;
        operatorCheck(op);
      } else if (currentNum === "") {
        operatorCheck(op);
      } else {
        compute();
        operator = op;
        currentDisplayNumber.textContent = "0";
        previousDisplayNumber.textContent = previousNum + " " + operator;
      }
}

function operatorCheck(text) { // allows for operations on previous numbers
    operator = text;
    previousDisplayNumber.textContent = previousNum + " " + operator;
    currentDisplayNumber.textContent = "0";
    currentNum = "";
  }

 function calculate(){
    previousNum = Number(previousNum);
    currentNum = Number(currentNum);
    if (operator === "+") {
        previousNum += currentNum;
      } else if (operator === "-") {
        previousNum -= currentNum;
      } else if (operator === "x") {
        previousNum *= currentNum;
      } else if (operator === "/") {
        if (currentNum <= 0) {
          previousNum = "Error";
          displayResults();
          return;
        }
        previousNum /= currentNum;
      }
//    switch(operator){ //switch statement to handle different opperators
//     case "+":
//         previousNum += currentNum;
//     case "x":
//         previousNum *= currentNum;
//     case "-":
//         previousNum -= currentNum;
//     case "/":
//         previousNum /= currentNum;
//    }
    previousNum = roundNumber(previousNum);
    previousNum = previousNum.toString();
    displayResults();
  }

  function roundNumber (num) { // rounds to 6th decimal
    return Math.round(num*100000) / 100000;
   }

  function displayResults() { // allows larger numbers to be displayed up to 11 also display results
    if (previousNum.length <= 11) {
      currentDisplayNumber.textContent = previousNum;
    } else {
      currentDisplayNumber.textContent = previousNum.slice(0, 11) + "...";
    }
    previousDisplayNumber.textContent = "";
    operator = "";
    currentNum = "";
  }

  function clearDisplay(){
    currentNum="";
    previousNum="";
    operator="";
    currentDisplayNumber.textContent="0";
    previousDisplayNumber.textContent="";
  }

