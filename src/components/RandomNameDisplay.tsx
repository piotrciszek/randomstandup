import React from 'react';
// import Button from '../ui/Button';
import { Button, CircularProgress, Typography } from '@mui/material';
import styles from './RandomNameDisplay.module.css';
import { RandomNameDisplayProps } from '../types/types';
import LoadingSpinner from '../ui/LoadingSpinner';
import ShuffleIcon from '@mui/icons-material/Shuffle';


const RandomNameDisplay: React.FC<RandomNameDisplayProps> = ({ 
    randomName,
    onPickRandomName,
    names,
    isLoading,
    }) => (
    
    
    <div className={styles.randomNameContainer}>
        <Button 
            onClick={onPickRandomName}
            disabled={names.length === 0}
            variant="contained"
            color="primary"
            size="large"
            endIcon={<ShuffleIcon/>}
            sx={{ textTransform: 'none' }}>
            Pick a Name
        </Button>
        {/* {isLoading ? (
        <div className={styles.spinnerContainer}>
          <CircularProgress />
        </div>
      ) : (
        randomName && (
          <Typography variant="body1" className={styles.randomNameText}>
            Next standup will be conducted by: {randomName}!
          </Typography>
        )
      )} */}
        {isLoading ? (
            <div className={styles.spinnerContainer}>
            <LoadingSpinner />
            </div>
        ) : (
        randomName && (
            <h4 className={styles.randomNameText}>Next standup will be conducted by: {randomName} !</h4>
        )
        )}
        </div>
    );

export default RandomNameDisplay;
