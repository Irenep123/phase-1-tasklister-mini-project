document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const taskDescription = document.getElementById(
      "new-task-description"
    ).value;

    if (taskDescription.trim() === "") return;

    const taskItem = document.createElement("li");

    const taskText = document.createElement("span");
    taskText.textContent = taskDescription;
    taskItem.appendChild(taskText);

    //edit button function
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.style.marginLeft = "10px";
    editButton.addEventListener("click", () => {
      const newText = prompt("Edit your task:", taskText.textContent);
      if (newText !== null && newText.trim() !== "") {
        taskText.textContent = newText;
      }
    });
    taskItem.appendChild(editButton);

    //delete button function
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.style.marginLeft = "10px";
    deleteButton.addEventListener("click", () => {
      taskItem.remove();
    });
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);
    form.reset();
  });
});

