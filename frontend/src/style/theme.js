import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      background: {
        paper: grey[200],
      },
    },
  }),
);

export default theme;
