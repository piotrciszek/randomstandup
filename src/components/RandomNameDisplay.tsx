import React from 'react';
import Button from '../ui/Button';
import styles from './RandomNameDisplay.module.css';
import { RandomNameDisplayProps } from '../types/types';



const RandomNameDisplay: React.FC<RandomNameDisplayProps> = ({ randomName, onPickRandomName, names }) => (
    
    <div className={styles.randomNameContainer}>
        <Button onClick={onPickRandomName} disabled={names.length === 0}>
            Pick a Name
        </Button>
        {randomName && (
            <p className={styles.randomNameText}>Next standup will be conducted by: {randomName} !</p>
        )}
        </div>
    );

export default RandomNameDisplay;


