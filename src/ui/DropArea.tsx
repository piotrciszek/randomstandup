import React from 'react';
import { Typography, Paper } from '@mui/material';
import styles from './DropArea.module.css';
import { useThemeContext } from '../context/ThemeContext';

interface DropAreaProps {
  onDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
  onDrop: (event: React.DragEvent<HTMLDivElement>) => void;
}

const DropArea: React.FC<DropAreaProps> = ({ onDragOver, onDrop }) => {
  const { theme } = useThemeContext();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    // <Paper
    //   className={`${styles.dropArea} ${darkMode ? styles.dark : ''}`}
    //   onDragOver={onDragOver}
    //   onDrop={onDrop}>
    //   <Typography>Drop here to remove</Typography>
    // </Paper>
        <div
          className={`${styles.dropArea} ${isDarkMode ? styles.dark : ''}`}
          onDragOver={onDragOver}
          onDrop={onDrop}
        >
          Drop here to remove
        </div>
  );
};

export default DropArea;