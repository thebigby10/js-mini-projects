let taskList = [];

document.getElementById("add-task-button").addEventListener("click", addTask);
document
  .getElementById("task-filter-input")
  .addEventListener("keydown", filterTask);
document
  .getElementById("task-filter-input")
  .addEventListener("keyup", filterTask);
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
  //store locally
  localStorage.setItem("taskList_data", JSON.stringify(taskList));
}
function filterTask() {
  let task_name = document.getElementById("task-filter-input").value;
  // console.log(task_name.length);
  let filteredTask = [...taskList];
  // console.log(filteredTask[0].includes(task_name));
  if (task_name.length != 0) {
    //filter tasks
    for (let i = 0; i < filteredTask.length; i++) {
      if (!filteredTask[i].includes(task_name)) {
        filteredTask[i] = "-1";
        // console.log(filteredTask[i]);
      }
    }
  }
  //show filteredTask list
  //remove all tasks from ol
  let task_list_ol = document.getElementById("task-list-ol");
  for (let i = task_list_ol.childNodes.length - 1; i >= 0; i--) {
    task_list_ol.removeChild(task_list_ol.childNodes[i]);
  }
  //add filteredTask to ol
  // console.log(filteredTask);
  for (let i = 0; i < filteredTask.length; i++) {
    if (filteredTask[i] != "-1") {
      let task_list_li = document.createElement("li");
      task_list_li.id = `task-li-${i}`;
      task_list_li.innerHTML = `${filteredTask[i]} <button onclick = "removeTask(${i})">Remove task</button>`;
      task_list_ol.appendChild(task_list_li);
    }
  }
}
function clearTask() {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i] != "-1") {
      let list_item = document.getElementById(`task-li-${i}`);
      taskList[i] = "-1";
      list_item.parentNode.removeChild(list_item);
    }
  }
  localStorage.setItem("taskList_data", null);
}

function removeTask(taskNumber) {
  let list_item = document.getElementById(`task-li-${taskNumber}`);
  taskList[taskNumber] = "-1";
  list_item.parentNode.removeChild(list_item);
  localStorage.setItem("taskList_data", JSON.stringify(taskList));
}

//get taskList from local bucket
if (localStorage.getItem("taskList_data") === "null") {
  taskList = [];
} else {
  taskList = JSON.parse(localStorage.getItem("taskList_data"));
  // console.log(localStorage.getItem("taskList_data"));
  let task_list_ol = document.getElementById("task-list-ol");
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i] != "-1") {
      let task_list_li = document.createElement("li");
      task_list_li.id = `task-li-${i}`;
      task_list_li.innerHTML = `${taskList[i]} <button onclick = "removeTask(${i})">Remove task</button>`;
      task_list_ol.appendChild(task_list_li);
    }
  }
}
