import React from 'react';
import './App.css';
import TennisGame from './components/TennisGame'; 
import { Constants } from './constants/Constants';

function App() {
  return (
    <div className="App">
      <h1>{Constants.HEADERq}</h1>
      <TennisGame />
    </div>
  );
}

export default App;
