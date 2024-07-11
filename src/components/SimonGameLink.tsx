import React from 'react';
import { useThemeContext } from '../context/ThemeContext';
import styles from './SimonGameLink.module.css';


const SimonGameLink: React.FC = () => {
  const { theme } = useThemeContext();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <div className={styles.LinkContainer}>
      <p className={styles.simonGameFont}>Need a break?</p>
      <a href="https://piotrciszek.github.io/SimonGame/" className={`${styles.buttonLike} ${isDarkMode ? styles.dark : ''}`} target="_blank" rel="noopener noreferrer">Play{"\n"}SIMON GAME</a>
    </div>
  );
};

export default SimonGameLink;