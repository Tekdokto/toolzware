import { createMuiTheme } from '@material-ui/core/styles';

// Light theme
export const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#0070f3',
    },
    background: {
      default: '#fcf5ebcc',
    },
    secondary: {
      main: '#1874f4',
      paper: '#293145'
    },
  },
});

// Dark theme
export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#90caf9',
    },
    background: {
      default: '#1a2236',
      paper: '#293145',
    },
    secondary: {
      main: '#293145',
    },
  },
});
