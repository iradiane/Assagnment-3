function createToDoList() {
    let tasks = [];
    const categories = [];
  
    function addTask(taskName, categoryName) {
      const task = {
        name: taskName,
        category: categoryName,
        completed: false
      };
      tasks.push(task);
      if (!categories.includes(categoryName)) {
        categories.push(categoryName);
      }
    }
  
    function displayTasksByCategory() {
      categories.forEach(category => {
        console.log(`Category: ${category}`);
        tasks.forEach(task => {
          if (task.category === category) {
            console.log(`${task.name} - ${task.completed ? 'Completed' : 'Pending'}`);
          }
        });
        console.log('-----------------------');
      });
    }
  
    function markTaskCompleted(taskName) {
      tasks.forEach(task => {
        if (task.name === taskName) {
          task.completed = true;
        }
      });
    }
  
    function removeTask(taskName) {
      tasks = tasks.filter(task => task.name !== taskName);
    }
  
    return {
      addTask,
      displayTasksByCategory,
      markTaskCompleted,
      removeTask
    };
  }
  
  const ToDoList = createToDoList();
  
 
  ToDoList.addTask('Learn JavaScript', 'Study');
  ToDoList.addTask('Buy groceries', 'Shopping');
  ToDoList.addTask('Exercise', 'Health');
  
  // console.log("Tasks before marking as completed:");
  // ToDoList.displayTasksByCategory();
  
  // ToDoList.markTaskCompleted('Learn JavaScript');
  
  // console.log("Tasks after marking 'Learn JavaScript' as completed:");
  // ToDoList.displayTasksByCategory();
  
  ToDoList.removeTask('Buy groceries');
  
  console.log("Tasks after removing 'Buy groceries':");
  ToDoList.displayTasksByCategory();
  