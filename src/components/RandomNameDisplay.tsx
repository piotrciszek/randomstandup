import React from 'react';
import Button from '../ui/Button';
import styles from './RandomNameDisplay.module.css';
import { RandomNameDisplayProps } from '../types/types';



const RandomNameDisplay: React.FC<RandomNameDisplayProps> = ({ randomName, onPickRandomName }) => (

    <div className={styles.randomNameContainer}>
        <Button onClick={onPickRandomName}>Pick a Random Name</Button>
        {randomName && <p>Next standup will be conducted by: {randomName}</p>}
    </div>
);


export default RandomNameDisplay;
