// actions.js

// Action types
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const TOGGLE_ALL_TASKS = 'TOGGLE_ALL_TASKS';

// Action creators
export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const deleteTask = (index) => ({
  type: DELETE_TASK,
  payload: index,
});

export const toggleTask = (index) => ({
  type: TOGGLE_TASK,
  payload: index,
});

export const toggleAllTasks = (completed) => ({
  type: TOGGLE_ALL_TASKS,
  payload: completed,
});
