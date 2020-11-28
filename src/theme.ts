import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffdf6f',
    },
    secondary: {
      main: '#e71a1a',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#f6d45b',
    },
  },
});

export default theme;