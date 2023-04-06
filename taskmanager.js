let taskManager = (function () {
    let tasks = [];

    function addTask (taskDescription) {
        tasks.push(taskDescription);
    }

    function displayTasks () {
        console.log(tasks);

    }

    return {
        addTask: addTask,
        displayTasks: displayTasks
    };
})();

taskManager.addTask("go eat");
taskManager.addTask("nap at noon");
taskManager.addTask("grocery shop");

taskManager.displayTasks();