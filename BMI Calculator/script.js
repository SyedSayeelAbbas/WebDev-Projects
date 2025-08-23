const ageInput = document.querySelector('.ageInput');
const weightInput = document.querySelector('.weightInput');
const heightInput = document.querySelector('.heightInput');
const genderButtons = document.querySelectorAll('.genderBox button');
const calculateBtn = document.querySelector('.calculateBtn button');

const bmiValueEl = document.querySelector('.bmi2');
const resultTextEl = document.querySelector('.result2');

let selectedGender = null;

// Highlight selected gender
genderButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        genderButtons.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedGender = btn.textContent;
    });
});

calculateBtn.addEventListener('click', () => {
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    if (isNaN(weight) || isNaN(height)) {
        alert("Please enter valid weight and height.");
        return;
    }

    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters ** 2)).toFixed(1);

    bmiValueEl.textContent = bmi;

    let result = "";

    if (bmi < 18.5) {
        result = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        result = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        result = "Overweight";
    } else {
        result = "Obese";
    }

    resultTextEl.textContent = result;
});
