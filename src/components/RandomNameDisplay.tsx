import React from 'react';
import { Button, Paper, Typography } from '@mui/material';
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
            endIcon={<ShuffleIcon/>}
            sx={{ 
              textTransform: 'none',
              fontSize: '1.5rem',
              padding: '16px 32px',
            }}>
            Pick a Name
        </Button>
        {isLoading ? (
            <div className={styles.spinnerContainer}>
            <LoadingSpinner />
            </div>
        ) : (
        randomName && (
          <Paper elevation={3} className={styles.randomNameText }>
            <Typography variant="h5">
              Next standup will be conducted by: {randomName} !
            </Typography>
          </Paper>
        )
        )}
        </div>
    );

export default RandomNameDisplay;
