import React from 'react';
import { AppBar, Container, Switch, Toolbar, Typography } from '@mui/material';
import styles from './Header.module.css';
import { useThemeContext } from '../ThemeContext';

const Header = () => {
    const { toggleTheme, theme } = useThemeContext();
    const isDarkMode = theme.palette.mode === 'dark';
    
    return (
    <AppBar position="static" color="primary">
      <Container>
        <Toolbar>
          <div className={styles.headerContent}>
            <Typography variant="h3" className={styles.title}>
              Random Name Picker
            </Typography>
            <Typography variant="h4" className={styles.subtitle}>
              JAD Suite EH
            </Typography>
          </div>
          <Switch
            checked={isDarkMode}
            onChange={toggleTheme}
            inputProps={{ 'aria-label': 'toggle dark mode' }}
          />
          <Typography variant="body1" >
            {isDarkMode ? 'Dark Mode' : 'Light Mode'}
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;