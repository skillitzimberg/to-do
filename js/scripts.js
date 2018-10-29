// BUSINESS LOGIC
function TaskList() {
  this.tasks = [];
}

function Task(taskName) {
  this.taskName = taskName
};

TaskList.prototype.addTask = function(task) {
  this.tasks.push(task);
};

function createTask(inputTask) {
  var task = new Task(inputTask);

  return task;
};


// USER INTERFACE LOGIC
$(document).ready(function() {
  $("form#taskList").submit(function(event) {
    event.preventDefault();
    var remove = $("#remove").val();
    var inputTask =  $("input#addTask").val();
    var task = new Task(inputTask);

    $("ul#showTaskList").append("<li>" + task.taskName + "</li>");

    $("ul#showTaskList li").addClass("clickable");

    $("ul#showTaskList li").click(function() {
      $("ul#showTaskList li").addClass("line");
    });

  });


});
