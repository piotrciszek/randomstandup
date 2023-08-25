import { useState } from 'react';
import './App.css';
import Main from './layout/Main';
import NameInput from './components/NameInput';
import RandomNameDisplay from './components/RandomNameDisplay';
import { addName, pickRandomName, removeName } from './hooks/useNames';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Random Name Picker</h1>
        <h2 className="App-subtitle">JAD Suite EH</h2>
      </header>
      <div className="App-content">
        <Main/>
      </div>
    </div>
  );
}

export default App;
