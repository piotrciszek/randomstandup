import { useState } from 'react';
import './App.css';
import NameInput from './components/NameInput';
import RandomNameDisplay from './components/RandomNameDisplay';
import { addName, pickRandomName, removeName } from './hooks/useNames';

function App() {
  const [names, setNames] = useState<string[]>([]);
  const [randomName, setRandomName] = useState<string>('');
  
  const handleRemoveName = (index: number) => {
    removeName(names, setNames, index);
  };

  return (
    <div className="App">
      <h1>Random Name Picker</h1>
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
  );
}

export default App;
