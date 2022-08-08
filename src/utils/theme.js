import { createTheme } from '@mui/material/styles';
import { grey, red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#146ca1',
    },
    secondary: {
      main: grey[500],
    },
    third: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
