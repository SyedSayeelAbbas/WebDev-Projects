const params = new URLSearchParams(window.location.search);
const mode = params.get("mode") || "normal";

let guessedNumber;
let attempt = 0;
let maxAttempts = Infinity;
let range = 100;
let timeNum = 100;

const result = document.querySelector(".result");
const time = document.querySelector(".times");
const input = document.querySelector("input");
const guessBtn = document.querySelector(".Guess button");
const newGameBtn = document.querySelector(".newgame");
const modeDisplay = document.querySelector(".mode-name");
const timer = document.querySelector(".timer");
const highscore = document.querySelector(".highscore");

// Mode settings
if (mode === "easy") {
  timeNum = 60;
  range = 50;
  maxAttempts = 10;
  modeDisplay.textContent = "Easy";
} else if (mode === "hard") {
  timeNum = 30;
  range = 200;
  maxAttempts = 5;
  modeDisplay.textContent = "Hard";
} else {
  timeNum = 40;
  range = 100;
  maxAttempts = 7;
  modeDisplay.textContent = "Normal";
}

function generateNumber() {
  guessedNumber = Math.floor(Math.random() * range) + 1;
}
generateNumber();

let countdown = setInterval(() => {
  timeNum--;
  timer.textContent = `Time Remain: ${timeNum}`;

  if (timeNum <= 0) {
    result.textContent = `❌ Time's up! The number was ${guessedNumber}.`;
    time.textContent = `Total Attempts: ${attempt}`;
    input.disabled = true;
    guessBtn.disabled = true;
    clearInterval(countdown);
  }
}, 1000);

function checkGuess() {
  const userGuess = parseInt(input.value);

  if (isNaN(userGuess)) {
    result.textContent = "❗ Please enter a valid number!";
    return;
  }

  attempt++;

  if (userGuess === guessedNumber && attempt <= maxAttempts && timeNum > 0) {
    result.textContent = `🎉 Correct! ${guessedNumber} is the number.`;
    highscore.textContent=`High Score : ${attempt} Attempts`;
    time.textContent = `Guessed in ${attempt} tries.`;
    input.disabled = true;
    guessBtn.disabled = true;
    clearInterval(countdown);
  } else if (attempt >= maxAttempts && userGuess !== guessedNumber) {
    result.textContent = `❌ You've run out of attempts! Number was ${guessedNumber}.`;
    time.textContent = `Total Attempts: ${attempt}`;
    input.disabled = true;
    guessBtn.disabled = true;
    clearInterval(countdown);
  } else if (userGuess < guessedNumber) {
    result.textContent = "📉 Too low! Try again.";
    time.textContent = `Attempt: ${attempt} | Remaining: ${maxAttempts - attempt}`;
  } else if (userGuess > guessedNumber) {
    result.textContent = "📈 Too high! Try again.";
    time.textContent = `Attempt: ${attempt} | Remaining: ${maxAttempts - attempt}`;
  }

  input.value = "";
  input.focus();
}

function startNewGame() {
  attempt = 0;
  generateNumber();
  input.disabled = false;
  guessBtn.disabled = false;
  result.textContent = "Start guessing!";
  time.textContent = `Attempts: 0`;
  input.value = "";
  input.focus();

  clearInterval(countdown);
  if (mode === "easy") timeNum = 60;
  else if (mode === "hard") timeNum = 30;
  else timeNum = 40;
}

guessBtn.addEventListener("click", checkGuess);
newGameBtn.addEventListener("click", startNewGame);
