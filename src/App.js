import React from 'react';
import './App.css';

function App(props) {
  const helloworld = 'Bonjour';
  return (
    <div className="App">
      <h2>{helloworld} {props.user}</h2>
    </div>
  );
}

export default App;
