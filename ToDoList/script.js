let input = document.querySelector(".input input");
let submit = document.querySelector(".submit");
let listtodo = document.querySelector(".listtodo");
let pending = document.querySelector(".pending");
let clearAll = document.querySelector(".clearall");

function addTask() {
    const userInput = input.value.trim();

    if (userInput === "") {
        alert("❗ Please enter a task.");
        return;
    }

    const taskContainer = document.createElement("div");
    taskContainer.classList.add("contentContainer");

    const taskContent = document.createElement("div");
    taskContent.classList.add("content");
    taskContent.textContent = userInput;

    const removeBtn = document.createElement("div");
    removeBtn.classList.add("remove");
    removeBtn.textContent = "X";
    removeBtn.onclick = () => {
        taskContainer.remove();
        updatePendingCount();
    };

    taskContainer.appendChild(taskContent);
    taskContainer.appendChild(removeBtn);
    listtodo.appendChild(taskContainer);

    input.value = "";
    updatePendingCount();
}

function updatePendingCount() {
    const count = document.querySelectorAll(".contentContainer").length;
    pending.textContent = `You have ${count} task${count !== 1 ? "s" : ""} pending`;
}

clearAll.addEventListener("click", () => {
    listtodo.innerHTML = "";
    updatePendingCount();
});

submit.addEventListener("click", addTask);

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addTask();
});

updatePendingCount();
