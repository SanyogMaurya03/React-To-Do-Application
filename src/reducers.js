// reducers.js

import { ADD_TASK, DELETE_TASK, TOGGLE_TASK, TOGGLE_ALL_TASKS } from './actions';

// Load tasks from local storage
const loadTasksFromLocalStorage = () => {
  try {
    const serializedTasks = localStorage.getItem('tasks');
    if (serializedTasks === null) {
      return [];
    }
    return JSON.parse(serializedTasks);
  } catch (error) {
    console.error('Error loading tasks from local storage:', error);
    return [];
  }
};

// Initial state
const initialState = {
  tasks: loadTasksFromLocalStorage(),
};

// Reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTask = { text: action.payload, completed: false };
      const updatedTasks = [...state.tasks, newTask];
      localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Save tasks to local storage
      return {
        ...state,
        tasks: updatedTasks,
      };
    case DELETE_TASK:
      const filteredTasks = state.tasks.filter((_, index) => index !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(filteredTasks)); // Save tasks to local storage
      return {
        ...state,
        tasks: filteredTasks,
      };
    case TOGGLE_TASK:
      const toggledTasks = state.tasks.map((task, index) =>
        index === action.payload ? { ...task, completed: !task.completed } : task
      );
      localStorage.setItem('tasks', JSON.stringify(toggledTasks)); // Save tasks to local storage
      return {
        ...state,
        tasks: toggledTasks,
      };
    case TOGGLE_ALL_TASKS:
      const updatedAllTasks = state.tasks.map(task => ({ ...task, completed: action.payload }));
      localStorage.setItem('tasks', JSON.stringify(updatedAllTasks)); // Save tasks to local storage
      return {
        ...state,
        tasks: updatedAllTasks,
      };
    default:
      return state;
  }
};

export default reducer;
