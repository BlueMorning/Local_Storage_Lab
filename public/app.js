var init = function () {
  var add_button = document.querySelector('#add-tasks-button');
  add_button.addEventListener('click', handleButtonClick);

  var remove_button = document.querySelector('#remove-tasks-button');
  remove_button.addEventListener('click', handleRemoveTaskButtonClick);

  var todosArray = JSON.parse(localStorage.getItem('tasks')) || [];
  populate(todosArray);
}

var populate = function (todos) {
  // this function needs to:
  // - loop through the array of todos, invoking addItem() for each todo item
  for(task of todos) {
    addItem(task);
  }

  addItemsToSelect(todos);

}

var addItem = function (item) {
  var ul = document.querySelector('#todo-list');
  var li = document.createElement('li');
  li.innerText = item;
  ul.appendChild(li);
}

var addItemsToSelect = function(tasks) {
  var select = document.querySelector('#select-tasks');
  tasks.forEach(function(task){
    var option = document.createElement('option');
    option.innerText = task;
    select.appendChild(option);
  });

}

var handleButtonClick = function () {
  // this function needs to:
  // - get hold of the input box's value
  // - append it to the "todo-list" ul by invoking addItem()
  // - add it to local storage by invoking save()
  let newTask = document.querySelector('#new-item');
  addItem(newTask.value);
  save(newTask.value);
}

var handleRemoveTaskButtonClick = function() {
  let currentTask = document.getElementById('select-tasks').value;
  var todosArray = JSON.parse(localStorage.getItem('tasks')) || [];
  todosArray.splice(currentTask.indexOf(currentTask));
  populate(todosArray);
}

var save = function (newItem) {
  // this function needs to:
  // - get the data back from local storage and parse to an array
  // - add the newItem to the array
  // - stringify the updated array
  // - save it back to localstoage
  var jsonTaskArray = localStorage.getItem('tasks');
  var taskArray = JSON.parse(jsonTaskArray);

  if(taskArray == null){
    taskArray = [];
  }

  //var jsonTask = JSON.stringify(newItem);
  taskArray.push(newItem);
  jsonArray = JSON.stringify(taskArray);
  localStorage.setItem('tasks', jsonArray);
}

var remove = function (item) {
  // this function needs to:
  // - get the data back from local storage and parse to an array
  // - add the newItem to the array
  // - stringify the updated array
  // - save it back to localstoage
  var jsonTaskArray = localStorage.getItem('tasks');
  var taskArray = JSON.parse(jsonTaskArray);

  if(taskArray == null){
    taskArray = [];
  }

  //var jsonTask = JSON.stringify(newItem);
  taskArray.remove(item);
  jsonArray = JSON.stringify(taskArray);
  localStorage.setItem('tasks', jsonArray);
}


window.addEventListener('load', init);
