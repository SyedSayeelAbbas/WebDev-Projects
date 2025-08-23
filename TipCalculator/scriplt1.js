//Variable Decleration is done here
let billInput = document.querySelector(".billInput");
let tip_btn1 = document.querySelector(".tip_btn1");
let tip_btn2 = document.querySelector(".tip_btn2");
let tip_btn3 = document.querySelector(".tip_btn3");
let tip_btn4 = document.querySelector(".tip_btn4");
let tip_btn5 = document.querySelector(".tip_btn5");
let customeTipInput = document.querySelector(".customeTipInput");
let noOfPeople = document.querySelector(".noOfPeople");
let tipNum = document.querySelector(".tipNum");
let totalNum = document.querySelector(".totalNum");
let reset = document.querySelector(".reset");

//Initialization of important variable
let tip =0;
tipNum.textContent=`$${0.00.toFixed(2)}`;
totalNum.textContent=`$${0.00.toFixed(2)}`;

//Giving Variables The Input
let bill = parseFloat(billInput.value) || 0;
let numberOfPeople=parseInt(noOfPeople.value) || 1;


function calculateTip(tipPercent) {
    let bill = parseFloat(billInput.value) || 0;
    let numberOfPeople = parseInt(noOfPeople.value) || 1;

    let tipAmount = (bill * tipPercent / 100) / numberOfPeople;
    let totalAmount = (bill + (bill * tipPercent / 100)) / numberOfPeople;

    tipNum.textContent =`$ ${tipAmount.toFixed(2)}`;
    totalNum.textContent = `$${totalAmount.toFixed(2)}`;
}

tip_btn1.addEventListener("click", () => calculateTip(5));
tip_btn2.addEventListener("click", () => calculateTip(10));
tip_btn3.addEventListener("click", () => calculateTip(15));
tip_btn4.addEventListener("click", () => calculateTip(25));
tip_btn5.addEventListener("click", () => calculateTip(50));
customeTipInput.addEventListener("input", () => {
    calculateTip(parseFloat(customeTipInput.value) || 0);
});
reset.addEventListener("click", () => {
    tip = 0;
    tipNum.textContent = "0.00";
    totalNum.textContent = "0.00";
    billInput.value = "";
    noOfPeople.value = "";
    customeTipInput.value = "";
});