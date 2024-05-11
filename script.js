function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskDate = document.getElementById("taskDate");
  var taskTime = document.getElementById("taskTime");
  var taskList = document.getElementById("taskList");

  if (taskInput.value.trim() === "") {
    alert("Please enter a task description.");
    return;
  }

  if (taskDate.value.trim() === "") {
    alert("Please select a date.");
    return;
  }

  if (taskTime.value.trim() === "") {
    alert("Please select a time.");
    return;
  }

  var newRow = document.createElement("tr");

  var taskDescription = document.createElement("td");
  taskDescription.textContent = taskInput.value;
  newRow.appendChild(taskDescription);

  var taskDateCell = document.createElement("td");
  taskDateCell.textContent = taskDate.value;
  newRow.appendChild(taskDateCell);

  var taskTimeCell = document.createElement("td");
  taskTimeCell.textContent = taskTime.value;
  newRow.appendChild(taskTimeCell);

  var checkboxCell = document.createElement("td");
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", function() {
    if (this.checked) {
      taskDescription.style.textDecoration = "line-through";
    } else {
      taskDescription.style.textDecoration = "none";
    }
  });
  checkboxCell.appendChild(checkbox);
  newRow.appendChild(checkboxCell);

  var deleteCell = document.createElement("td");
  var deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function() {
    if (confirm("Are you sure you want to delete this task?")) {
      newRow.remove();
    }
  });
  deleteCell.appendChild(deleteButton);
  newRow.appendChild(deleteCell);

  taskList.appendChild(newRow);
  taskInput.value = "";
  taskDate.value = "";
  taskTime.value = "";
}
