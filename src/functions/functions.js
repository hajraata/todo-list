// Marks a task as complete
export const taskComplete = (todoList, setTodoList, item) => {
  let newTodoList = todoList.map((obj) => {
    if (obj.id === item.id) {
      return { ...obj, completed: true };
    }
    return obj;
  });
  setTodoList(newTodoList);
};

// Marks a task as incomplete
export const taskIncomplete = (todoList, setTodoList, item) => {
  let newTodoList = todoList.map((obj) => {
    if (obj.id === item.id) {
      return { ...obj, completed: false };
    }
    return obj;
  });
  setTodoList(newTodoList);
};

// Updates the value for new task on every key press (onChange)
export const handleNewTaskValueChange = (e, setNewTask) => {
  setNewTask(e.target.value);
};

// Adds a new task to the existing todo list (array of objects)
export const addTask = (e, todoList, newTaskValue, setTodoList, setNewTask) => {
  e.preventDefault();
  let id;
  if (todoList.length === 0) {
    id = 1;
  } else {
    id = todoList.at(-1).id + 1;
  }
  let task = newTaskValue;
  let completed = false;
  let newTask = { id: id, task: task, completed: completed };

  setTodoList([...todoList, newTask]);
  setNewTask("");
};

// Deletes a task
export const deleteTask = (todoList, setTodoList, item) => {
  let newTodoList = todoList.filter((obj) => obj.id !== item.id);
  setTodoList(newTodoList);
};

// Displays the form to edit the value of a specific todo item
export const editTask = (
  setEditing,
  setEditedTask,
  todoList,
  setTodoEdit,
  item
) => {
  setEditing(true);
  setEditedTask(item.task);
  const newTodoList = todoList.filter((obj) => obj.id === item.id);
  setTodoEdit(newTodoList);
};

// Updates the value for the task being edited on every key press (onChange)
export const handleTaskValueChange = (e, setEditedTask) => {
  setEditedTask(e.target.value);
};

// Updates the todo object in the todo list (array of objects)
export const submitEdit = (
  e,
  item,
  todoList,
  editedTask,
  setTodoList,
  setEditing
) => {
  e.preventDefault();
  let newTodoList = todoList.map((obj) => {
    //   console.log(obj.id, item.id);
    if (obj.id === item.id) {
      return { ...obj, task: editedTask };
    }
    return obj;
  });
  setTodoList(newTodoList);
  setEditing(false);
};

// Closes edit form without any changes being saved
export const closeEdit = (setEditing) => {
  setEditing(false);
};
