// TaskInput.js

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from './actions';

// TaskInput component allows users to input new tasks
const TaskInput = ({ addTask }) => {
  // State to store the task input value
  const [task, setTask] = useState('');

  // Event handler to update the task input value
  const handleChange = (e) => {
    setTask(e.target.value);
  };

  // Event handler to add a new task when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return; // If task input is empty, do nothing
    addTask(task); // Dispatch addTask action to add new task
    setTask(''); // Clear task input
  };

  // Render the task input form
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new task"
        value={task}
        onChange={handleChange}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

// Connect TaskInput component to Redux store and map addTask action
export default connect(null, { addTask })(TaskInput);
