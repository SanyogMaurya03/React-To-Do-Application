// App.js

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import './App.css';

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Todo List</h1>
        <TaskInput />
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;
