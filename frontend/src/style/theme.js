import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { grey, pink } from '@material-ui/core/colors';

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      divider: grey[500],
      secondary: {
        main: pink[500],
      },
      background: {
        paper: grey[200],
      },
    },
  }),
);

export default theme;
