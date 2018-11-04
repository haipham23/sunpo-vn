import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00923f'
    },
  },
  typography: {
    useNextVariants: true,
  },
});

export default theme;
