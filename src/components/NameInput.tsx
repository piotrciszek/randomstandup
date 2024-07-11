import React, { useState } from 'react';
// import Button from '../ui/Button';
import { Button, Grid, IconButton, Paper, TextField, Typography } from '@mui/material';
import styles from './NameInput.module.css'
import { NameInputProps } from '../types/types';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CloseIcon from '@mui/icons-material/Close'; 
import DropArea from '../ui/DropArea';

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

  const handleDragStart = (event: any, index: number) => {
    event.dataTransfer.setData('index', index.toString());
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    const fromIndex = Number(event.dataTransfer.getData('index'));
    onRemoveName(fromIndex);
  };
  
  return (
    <div className={styles.container}>
      <form onSubmit={handleFormSubmit}>
        <div className={styles.addName}>
          <TextField
            type="text"
            size="small"
            placeholder="Enter a name"
            label="Name"
            value={name}
            onChange={handleNameChange}
          />
          <Button 
            onClick={handleAddClick}
            disabled={name.trim().length === 0}
            variant="contained"
            color="primary"
            endIcon={<PersonAddIcon/>}
            sx={{ textTransform: 'none' }}
          >
            Add Name
          </Button>
        </div>
        <div className={styles.nameList}>
        <Grid container spacing={1.5} justifyContent="center">
          {names.map((nameItem, index) => (
            <Grid item key={index} >
              <Paper
                elevation={1}
                className={styles.nameItems}
                draggable
                onDragStart={(event) => handleDragStart(event, index)}
              >
                <Typography sx={{ flexGrow: 1 }}>{nameItem}</Typography>
                <IconButton aria-label="remove" onClick={() => handleRemoveClick(index)}>
                  <CloseIcon />
                </IconButton>
              </Paper>
            </Grid>
          ))}
        </Grid>
        </div>
        {names.length > 0 && (
         <DropArea onDragOver={handleDragOver} onDrop={handleDrop} />
        )}
      </form>
    </div>
  );
};

export default NameInput;
