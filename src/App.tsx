import { useState } from 'react';
import './App.css';
import NameInput from './components/NameInput';
import RandomNameDisplay from './components/RandomNameDisplay';
import { addName, pickRandomName, removeName } from './hooks/useNames';

function App() {
  const [names, setNames] = useState<string[]>([]);
  const [randomName, setRandomName] = useState<string>('');
  
  const handleRemoveName = (index: number) => {
    const updatedNames = names.filter((_, i) => i !== index);
    setNames(updatedNames);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Random Name Picker</h1>
        <h2 className="App-subtitle">JAD Suite EH</h2>
      </header>
      <div className="App-content">
      <NameInput
        names={names}
        onAddName={(name) => setNames(addName(names, name))}
        onRemoveName={handleRemoveName}
      />

      <RandomNameDisplay
        randomName={randomName}
        onPickRandomName={() => setRandomName(pickRandomName(names))}
        names={names}
      />
      </div>
    </div>
  );
}

export default App;
