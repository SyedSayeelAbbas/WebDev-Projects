let dark = localStorage.getItem("dark");
const themeSwitch = document.getElementsByClassName("theme-switch")[0];

// On load, apply dark mode if saved
if (dark === "active") {
    document.body.classList.add("dark");
}

const enableDarkMode = () => {
    document.body.classList.add("dark");
    localStorage.setItem('dark', 'active');
}

const disableDarkMode = () => {
    document.body.classList.remove("dark");
    localStorage.setItem('dark', 'inactive');
}

themeSwitch.addEventListener("click", () => {
    dark = localStorage.getItem("dark"); // update value
    if (dark !== "active") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});
