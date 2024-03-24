'use client';
import { createTheme } from '@mui/material/styles';

const darkPalette = createTheme({
  palette: {
    primary: {
      main: '#ffb3b0',
      contrastText: '#68000c',
    },
    secondary: {
      main: '#4fd8eb',
      contrastText: '#00363d',
    },
    text: {
      primary: '#E6E1E5',
      secondary: '#E6E1E5',
    },
    background: {
      default: '#1C1B1F',
      paper: '#1C1B1F',
    },
    error: {
      main: '#F2B8B5',
      contrastText: '#601410',
    },
    success: {
      main: '#79dd72',
      contrastText: '#003a03',
    },
    info: {
      main: '#99cbff',
      contrastText: '#003257',
    },
    warning: {
      main: '#cace09',
      contrastText: '#313300',
    },
    divider: '#938F99',
  },
});

export default darkPalette;
