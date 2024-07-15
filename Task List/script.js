let taskList = [];

document.getElementById("add-task-button").addEventListener("click", addTask);
document
  .getElementById("task-filter-input")
  .addEventListener("keydown", filterTask);
document
  .getElementById("clear-task-button")
  .addEventListener("click", clearTask);

function addTask() {
  let task_title = document.getElementById("task-input").value;
  taskList.push(task_title);
  let task_list_ol = document.getElementById("task-list-ol");
  let task_list_li = document.createElement("li");
  task_list_li.innerHTML = `${task_title}`;
  task_list_ol.appendChild(task_list_li);
}
function filterTask() {
  console.log("filter-task?");
}
function clearTask() {
  console.log("clear-task?");
}
