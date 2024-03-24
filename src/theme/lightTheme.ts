'use client';
import { createTheme } from '@mui/material/styles';

const lightPalette = createTheme({
  palette: {
    primary: {
      main: '#bd0b25',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#006874',
      contrastText: '#ffffff',
    },
    text: {
      primary: '#464c5c',
      secondary: '#FFD082',
      // main: '#6a6e8f',
      // accent: '#FF7C7C',
    },
    background: {
      default: '#ffefd6',
      // additional: '#ffefd6',
      // button: '#FF7C7C',
    },
    error: {
      main: '#B3261E',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#006e10',
      contrastText: '#ffffff',
    },
    info: {
      main: '#0062a2',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#606200',
      contrastText: '#313300',
    },
    divider: '#79747E',
  },
});

export default lightPalette;
