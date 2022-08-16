let currentNum = ""; //empty by default 
let previousNum = ""; //empty by default
let operator = ""; //empty by default
// query for the display counters 
const currentDisplayNumber = document.querySelector(".currentNumber");
const previousDisplayNumber = document.querySelector(".previousNumber");
// query all the buttons and such
const equal = document.querySelector(".equal");
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

operators.forEach((btn) => { //an event listener to call the handleOper function when a operator is clicked
    btn.addEventListener("click", (e) => { 
        handleOperator(e.target.textContent);
    });
});

function handleOperator(op){
    operator=op;
    previousNum=currentNum;
    previousDisplayNumber.textContent = previousNum + operator;
    currentNum="";
    currentDisplayNumber.textContent="";
}


    clear.addEventListener("click", (e) => { 
       clearCalculator();
    });


function calculate(){

}

function clearCalculator(){
    currentNum = ""; //empty  
    previousNum = ""; //empty 
    operator = ""; //empty 
}