let sec = document.getElementsByClassName("second")[0];
let min = document.getElementsByClassName("minute")[0];
let h = document.getElementsByClassName("hour")[0];
let d = document.getElementsByClassName("day")[0];
let ampm = document.getElementsByClassName("ampm")[0];

setInterval(() => {
    let now = new Date();

    let currentSeconds = now.getSeconds();
    let currentMinutes = now.getMinutes();
    let originalHours = now.getHours(); // for AM/PM check
    let currentHours = originalHours % 12 || 12; // convert 0 to 12
    let currentDay = now.getDay();

    //Correct AM/PM check
    ampm.textContent = originalHours >= 12 ? "PM" : "AM";

    // Pad with leading zeros
    currentSeconds = currentSeconds < 10 ? "0" + currentSeconds : currentSeconds;
    currentMinutes = currentMinutes < 10 ? "0" + currentMinutes : currentMinutes;
    currentHours = currentHours < 10 ? "0" + currentHours : currentHours;

    // Set values in HTML
    sec.textContent = currentSeconds;
    min.textContent = currentMinutes;
    h.textContent = currentHours;

    // Day mapping
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    d.textContent = days[currentDay];
}, 1000);
