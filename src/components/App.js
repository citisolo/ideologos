import React from 'react';
import './App.css';
import { IdeaBoard } from './IdeaBoard';
import './App.css';

const App = () => {
  console.log("FIXME: 'timestamp' parsed into 'String' from localStorage should be 'Date' ");
  const list = JSON.parse(localStorage.getItem("idea-list"));//FIXME: timestamp parsed into string should be date
  return (
    <div className="App">
      <IdeaBoard list={list} />
    </div>
  );
}

export default App;
