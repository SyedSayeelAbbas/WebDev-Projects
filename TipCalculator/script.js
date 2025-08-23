// Get DOM elements
const billInput = document.getElementById("bill");
const peopleInput = document.getElementById("people");
const tipButtons = document.querySelectorAll(".tip_btn");
const customTipInput = document.querySelector(".customeTipInput");
const tipAmountDisplay = document.querySelector(".tipNum");
const totalAmountDisplay = document.querySelector(".totalNum");
const resetButton = document.querySelector(".reset");

let bill = 0;
let people = 1;
let tipPercent = 0;

// Utility function to calculate and display tip and total
function calculateTip() {
    if (people >= 1 && bill >= 0) {
        const tipAmount = (bill * tipPercent) / 100;
        const tipPerPerson = tipAmount / people;
        const totalPerPerson = (bill + tipAmount) / people;

        tipAmountDisplay.textContent = `$${tipPerPerson.toFixed(2)}`;
        totalAmountDisplay.textContent = `$${totalPerPerson.toFixed(2)}`;
    }
}

// Event: Tip button click
tipButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Remove active class from all buttons
        tipButtons.forEach(btn => btn.classList.remove("active"));
        // Add active to clicked button
        button.classList.add("active");

        // Clear custom input
        customTipInput.value = "";

        // Set tip percentage
        tipPercent = parseFloat(button.textContent.replace("%", ""));
        calculateTip();
    });
});

// Event: Custom tip input
customTipInput.addEventListener("input", () => {
    tipButtons.forEach(btn => btn.classList.remove("active"));
    tipPercent = parseFloat(customTipInput.value) || 0;
    calculateTip();
});

// Event: Bill input
billInput.addEventListener("input", () => {
    bill = parseFloat(billInput.value) || 0;
    calculateTip();
});

// Event: People input
peopleInput.addEventListener("input", () => {
    people = parseInt(peopleInput.value) || 1;
    calculateTip();
});

// Event: Reset button
resetButton.addEventListener("click", () => {
    billInput.value = "";
    peopleInput.value = "";
    customTipInput.value = "";
    tipAmountDisplay.textContent = "$0.00";
    totalAmountDisplay.textContent = "$0.00";
    tipButtons.forEach(btn => btn.classList.remove("active"));
    bill = 0;
    people = 1;
    tipPercent = 0;
});
