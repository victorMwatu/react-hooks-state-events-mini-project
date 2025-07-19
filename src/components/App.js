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
  setTaskList( taskList.filter(t => t.text != text))
 }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      <TaskList tasks={taskList} onDelete={handleDelete} />
    </div>
  );
}

export default App;
