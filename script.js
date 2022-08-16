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
const operators = document.querySelectorAll(".operator");

numberButtons.forEach((btn) => { //an event listener to call the handleNum function when a number is clicked
    btn.addEventListener("click", (e) => { 
        handleNum(e.target.textContent);
    });
});

function handleNum(number) {
    if(currentNum.length<=15){ // add a limit of 15 characters to number
        currentNum+=number;
        currentDisplayNumber.textContent=currentNum;
    }      
}

operators.forEach((btn) => { //an event listener to call the handleOperator function when a operator is clicked
    btn.addEventListener("click", (e) => { 
        handleOperator(e.target.textContent);
    });
});

function handleOperator(op){
    operator = op;
    previousNum=currentNum;
    previousDisplayNumber.textContent = previousNum + " " + operator;
    currentNum = "";
    currentDisplayNumber.textContent = "";
}




 function calculate(){
    previousNum = Number(previousNum);
    currentNum = Number(currentNum);
   switch(operator){ //switch statement to handle different opperators
    case "+":
        previousNum+=currentNum;
    case "x":
        previousNum*=currentNum;
   }
      previousDisplayNumber.textContent=""
      currentDisplayNumber.textContent=previousNum;
  }
