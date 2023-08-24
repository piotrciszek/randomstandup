import React, { useState } from 'react';
import Button from '../ui/Button';
import styles from './NameInput.module.css'
import { NameInputProps } from '../types/types';


const NameInput: React.FC<NameInputProps> = ({ names, onAddName, onRemoveName }) => {
  const [name, setName] = useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleAddClick = () => {
    if (name.trim() !== '') {
        onAddName(name);
        setName('');
    }
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleAddClick();
  };

const handleRemoveClick = (index: number) => {
    onRemoveName(index);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleFormSubmit}>
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
        {names.map((nameItem, index) => (
          <li key={index} className={styles.nameItem}>
            {nameItem}
            <Button onClick={() => handleRemoveClick(index)} type="remove">
            </Button>
          </li>
        ))}
      </ul>
      </form>
    </div>
  );
};
  
  export default NameInput;
