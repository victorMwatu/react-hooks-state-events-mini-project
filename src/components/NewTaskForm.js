import React, { useState } from "react";

function NewTaskForm({onTaskFormSubmit}) {
  const [task, setTask] = useState({
    text: "",
    category: ""
  });

  function handleChange(e) {
    
    const newTask = {...task, [e.target.name]: e.target.value};
    setTask(newTask);
  }
  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit(task);

  }
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={task.text} onChange={handleChange}/>
      </label>
      <label>
        Category
        <select name="category" value={task.category} onChange={handleChange}>
          <option value='Code'>Code</option>
          <option value='Food'>Food</option>
          <option value='Money'>Money</option>
          <option value='Misc'>Misc</option>
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
