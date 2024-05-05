// TaskList.js

import React from 'react';
import { connect } from 'react-redux';
import { deleteTask, toggleTask, toggleAllTasks } from './actions';

// TaskList component displays the list of tasks
const TaskList = ({ tasks, deleteTask, toggleTask, toggleAllTasks }) => {
  // Check if all tasks are completed
  const allCompleted = tasks.every(task => task.completed);

  // Render the task list and "Complete All" button
  return (
    <div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`task-item ${task.completed ? 'completed' : ''}`}
            onClick={() => toggleTask(index)}
          >
            {task.text}
            <button className="delete" onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      {tasks.length > 0 && ( // Render "Complete All" button if there are tasks
        <button className="complete-all" onClick={() => toggleAllTasks(!allCompleted)}>
          {allCompleted ? 'Mark All Incomplete' : 'Mark All Complete'}
        </button>
      )}
    </div>
  );
};

// Connect TaskList component to Redux store and map state and actions
const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps, { deleteTask, toggleTask, toggleAllTasks })(TaskList);
