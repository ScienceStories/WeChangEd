import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import { HashRouter } from 'react-router-dom';

import { theme } from '../constants';
import routes from '../routes';
import useStyles from './useStyles';

const App = () => {
  const classes = useStyles();
  return (
    <HashRouter hashType="noslash">
      <MuiThemeProvider theme={createMuiTheme(theme)}>
        <div className={classes.root}>
          { routes }
        </div>
      </MuiThemeProvider>
    </HashRouter>
  );
};

export default App;
