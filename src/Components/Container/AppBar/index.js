import {
  AppBar,
  Button,
  InputBase,
  Toolbar,
  Typography,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react';
import { NavLink, useHistory, withRouter } from 'react-router-dom';

import { navLinks, siteName } from '../../../constants';
import { searchURL } from '../../../utils';
import useStyles from './useStyles';

const AppBarContainer = ({ location }) => {
  const classes = useStyles();
  const activeRoute = (path) => location.pathname === path;
  const [formAction, setFormAction] = useState('');
  const history = useHistory();
  const handleSearchInput = ({ target }) => {
    const { value } = target;
    return setFormAction(searchURL(null, value));
  }
  const handleSubmit = () => history.push(formAction);
  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            className={classes.title}
            noWrap
            variant="h6"
          >
            { siteName}
          </Typography>
          <div className={classes.grow} />
          <div className={classes.navLinks}>
            { navLinks.map(({ href, path, title }) => (
              <Button
                color={activeRoute(path) ? 'secondary' : 'inherit'}
                component={path && NavLink}
                href={href}
                key={title}
                target={href && '_blank'}
                to={path}
              >
                { title }
              </Button>
            ))}
          </div>
          <div className={classes.grow} />
          <div className={classes.search}>
            <form onSubmit={handleSubmit}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onChange={handleSearchInput}
              />
            </form>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(AppBarContainer);
