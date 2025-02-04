function addTask(): void {
    const taskInputElement = document.getElementById("taskInput") as HTMLInputElement;
    const taskListElement = document.getElementById("taskList") as HTMLDivElement;
    
    let taskInput: string = taskInputElement.value.trim();

    if (taskInput !== "") {
        taskInput = taskInput.charAt(0).toUpperCase() + taskInput.slice(1);

        const taskDiv: HTMLDivElement = document.createElement("div");
        taskDiv.classList.add("task");
        taskDiv.textContent = taskInput;

        const deleteButton: HTMLSpanElement = document.createElement("span");
        deleteButton.classList.add("delete-btn");

        const icon: HTMLImageElement = document.createElement("img");
        icon.src = "images/trash.png";
        icon.classList.add("delete-icon");

        deleteButton.appendChild(icon);
        taskDiv.appendChild(deleteButton);
        taskListElement.appendChild(taskDiv);

        deleteButton.onclick = () => {
            taskDiv.remove();
        };

        taskInputElement.value = "";
    } else {
        alert("Please enter a task.");
    }
}
