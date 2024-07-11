import React from 'react';
import { AppBar, Container, Switch, Toolbar, Typography } from '@mui/material';
import styles from './Header.module.css';
import { useThemeContext } from '../ThemeContext';

const Header = () => {
    const { toggleTheme, theme } = useThemeContext();
    const isDarkMode = theme.palette.mode === 'dark';
    
    return (
    <AppBar 
      position="static"
      color="primary"
      sx={{
        borderRadius: '8px',
        '&:hover': {
          backgroundColor: isDarkMode ? theme.palette.background.default : theme.palette.primary.main,
        },
      }}>
      <Container className={styles.headerContainer}>
        <Toolbar>
          <div className={styles.header}>
            <Typography variant="h3" className={styles.title}>
              Random Name Picker
            </Typography>
            <Typography variant="h5" className={styles.subtitle}>
              JAD Suite EH
            </Typography>
          </div>
          <div className={styles.switch}>
            <Switch
              checked={isDarkMode}
              onChange={toggleTheme}
              inputProps={{ 'aria-label': 'toggle dark mode' }}
            />
            <Typography variant="body1" >
              {isDarkMode ? 'Dark Mode' : 'Light Mode'}
            </Typography>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;