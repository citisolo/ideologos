import React from 'react';
import './App.css';
import { IdeaBoard } from './IdeaBoard';



const App = () => {
  console.log("FIXME: 'timestamp' parsed into 'String' from localStorage should be converted to  'Date' ");
  const list = JSON.parse(localStorage.getItem("idea-list"));//FIXME: timestamp parsed into string should be date
  return (
    <div className="App">
      <IdeaBoard list={list ? list : []} />
    </div>
  );
}

export default App;
