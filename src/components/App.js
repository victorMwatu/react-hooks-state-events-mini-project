import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [taskList, setTaskList] = useState(TASKS);


  function handleDelete(text) {
  setTaskList( taskList.filter(t => t.text !== text))
 }

 function handleCategory(category) {
  const tasksSelected = category === 'All'? TASKS : TASKS.filter( task => task.category === category);
  console.log(tasksSelected);
  console.log(category)
  setTaskList(tasksSelected);
 }

 function handleAddTask (task) {
  const newTasklist = [...TASKS, task];
  setTaskList(newTasklist);
 }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onCategory={handleCategory} />
      <NewTaskForm onTaskFormSubmit={handleAddTask} />
      <TaskList tasks={taskList} onDelete={handleDelete} />
    </div>
  );
}

export default App;
