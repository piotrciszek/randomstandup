import React, { useState } from 'react';
import Button from '../ui/Button';
import styles from './NameInput.module.css'
import { NameInputProps } from '../types/types';
import { removeName } from '../hooks/useNames';


const NameInput: React.FC<NameInputProps> = ({ names, onAddName }) => {
  const [name, setName] = useState('');
  const [currentNames, setCurrentNames] = useState(names);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleAddClick = () => {
    if (name.trim() !== '') {
      onAddName(name);
      setCurrentNames([...currentNames, name]);
      setName('');
    }
  };

//   const handleRemoveClick = (index: number) => {
//     const updatedNames = currentNames.filter((_, i) => i !== index);
//     setCurrentNames(updatedNames);
//     onAddName(updatedNames[index]); // Update the names prop
//   };
const handleRemoveClick = (index: number) => {
    const updatedNames = currentNames.filter((_, i) => i !== index);
    setCurrentNames(updatedNames);
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter a name"
        className={styles.input}
      />
      <Button onClick={handleAddClick}>
        Add Name
      </Button>
      <ul className={styles.nameList}>
        {currentNames.map((nameItem, index) => (
          <li key={index} className={styles.nameItem}>
            {nameItem}
            <Button onClick={() => handleRemoveClick(index)} type="remove">
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
  
  export default NameInput;

// import React, { useState } from 'react';
// import styles from './NameInput.module.css';
// import { NameInputProps } from '../types/types';

// const NameInput: React.FC<NameInputProps> = ({ names, onAddName }) => {
//   const [name, setName] = useState('');

//   const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setName(event.target.value);
//   };

//   const handleAddClick = () => {
//     if (name.trim() !== '') {
//       onAddName(name);
//       setName('');
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <input
//         type="text"
//         value={name}
//         onChange={handleNameChange}
//         placeholder="Enter a name"
//         className={styles.input}
//       />
//       <button onClick={handleAddClick} className={styles.addButton}>
//         Add Name
//       </button>
//       <ul className={styles.nameList}>
//         {names.map((nameItem, index) => (
//           <li key={index} className={styles.nameItem}>
//             {nameItem}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default NameInput;