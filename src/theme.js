// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00ACC1', // Turquoise color
    },
    secondary: {
      main: '#00796B', // Dark turquoise color
    },
    background: {
      default: '#E0F7FA', // Light turquoise background
    },
    text: {
      primary: '#006064', // Dark turquoise text
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Open Sans',
      'Helvetica Neue',
      'sans-serif',
    ].join(','),
  },
});

export default theme;
