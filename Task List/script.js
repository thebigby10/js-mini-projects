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

  //find an empty spot in task array and insert
  let inserted = false;
  let i = 0;
  for (i = 0; i < taskList.length; i++) {
    if (taskList[i] == "") {
      inserted = true;
      taskList[i] = task_title;
    }
  }
  if (!inserted) taskList.push(task_title);
  //find an empty spot in task array and insert

  let task_list_ol = document.getElementById("task-list-ol");
  let task_list_li = document.createElement("li");
  task_list_li.id = `task-li-${i}`;
  task_list_li.innerHTML = `${task_title} <button onclick = "removeTask(${i})">Remove task</button>`;
  task_list_ol.appendChild(task_list_li);
}
function filterTask() {
  console.log("filter-task?");
}
function clearTask() {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i] != "-1") {
      let list_item = document.getElementById(`task-li-${i}`);
      taskList[i] = "-1";
      list_item.parentNode.removeChild(list_item);
    }
  }
}

function removeTask(taskNumber) {
  let list_item = document.getElementById(`task-li-${taskNumber}`);
  taskList[taskNumber] = "-1";
  list_item.parentNode.removeChild(list_item);
}
