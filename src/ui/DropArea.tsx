import React from 'react';
import { Typography, Paper } from '@mui/material';
import styles from './DropArea.module.css';
import { useThemeContext } from '../ThemeContext';

interface DropAreaProps {
  onDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
  onDrop: (event: React.DragEvent<HTMLDivElement>) => void;
  darkMode?: boolean;
}

const DropArea: React.FC<DropAreaProps> = ({ onDragOver, onDrop, darkMode = false }) => {
  const { theme } = useThemeContext();

  return (
    <Paper
      className={`${styles.dropArea} ${darkMode ? styles.dark : ''}`}
      onDragOver={onDragOver}
      onDrop={onDrop}>
      <Typography>Drop here to remove</Typography>
    </Paper>
  );
};

export default DropArea;