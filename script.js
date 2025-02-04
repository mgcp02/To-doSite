function addTask() {
    var taskInputElement = document.getElementById("taskInput");
    var taskListElement = document.getElementById("taskList");
    var taskInput = taskInputElement.value.trim();
    if (taskInput !== "") {
        taskInput = taskInput.charAt(0).toUpperCase() + taskInput.slice(1);
        var taskDiv_1 = document.createElement("div");
        taskDiv_1.classList.add("task");
        taskDiv_1.textContent = taskInput;
        var deleteButton = document.createElement("span");
        deleteButton.classList.add("delete-btn");
        var icon = document.createElement("img");
        icon.src = "images/trash.png";
        icon.classList.add("delete-icon");
        deleteButton.appendChild(icon);
        taskDiv_1.appendChild(deleteButton);
        taskListElement.appendChild(taskDiv_1);
        deleteButton.onclick = function () {
            taskDiv_1.remove();
        };
        taskInputElement.value = "";
    }
    else {
        alert("Please enter a task.");
    }
}
