import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#DC004E',
    },
    action: {
      disabledBackground: '#d7d7d7',
      disabled: '#b1b1b1',
    },
    error: {
      main: '#f44336',
    },
    warning: {
      main: '#ff9800',
    },
    background: {
      default: '#f0f0f0',
      paper: '#ffffff',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.9)',
      secondary: '#b1b1b1',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          color: 'rgba(0, 0, 0, 0.9)',
          '&:hover': {
            backgroundColor: '#d7d7d7',
          },
        },
      },
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});
export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#90caf9',
        },
          secondary: {
            main: '#f48fb1',
          },
          action: {
            disabledBackground: '#d7d7d7',
            disabled: '#b1b1b1',
          },
          text: {
            primary: '#d7d7d7',
            secondary: '#a4a4a4',
          },
          background: {
            default: '#1f1f1f',
            paper: '#2c2c2c',
          },
        },
        components: {
          MuiPaper: {
            styleOverrides: {
              root: {
                backgroundColor: '#1f1f1f',
                color: '#d7d7d7',
                '&:hover': {
                  backgroundColor: '#3a3a3a',
                },
              },
            },
          },
        },
        typography: {
          fontFamily: 'Roboto, sans-serif',
        },
      });
