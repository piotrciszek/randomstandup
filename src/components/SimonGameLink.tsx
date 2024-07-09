import React from 'react';
import styles from './SimonGameLink.module.css';


const SimonGameLink: React.FC = () => {
  return (
    <div className={styles.LinkContainer}>
      <p>Need a break? Play <a href="https://piotrciszek.github.io/SimonGame/" target="_blank" rel="noopener noreferrer">Simon Game</a>.</p>
    </div>
  );
};

export default SimonGameLink;