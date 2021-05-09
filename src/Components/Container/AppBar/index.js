import {
  Button,
  InputBase,
  Grid,
  Typography,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react';
import { NavLink, useHistory, withRouter } from 'react-router-dom';

import UGhentLogo from '../../../assets/images/logo_ugent_en.svg';
import { ghentUrl, navLinks, siteName } from '../../../constants';
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
  const linkClass = (path) => activeRoute(path) ? `${classes.linkActive} ${classes.link}` : classes.link;
  return (
    <Grid
      className={classes.root}
      container
    >
      <Grid
        className={classes.ghentLogoContainer}
        item
        sm={2}
        xs={4}
      >
        <Button
          className={classes.ghentLogoButton}
          href={ghentUrl}
        >
          <img
            alt="Ghent University"
            className={classes.ghentLogo}
            src={UGhentLogo}
          />
        </Button>
      </Grid>
      <Grid
        item
        sm={10}
        xs={8}
      >
        <Grid container>
          <Grid
            className={classes.titleContainer}
            item
            xs={12}
          >
            <Grid
              alignItems="flex-end"
              container
              justify="space-between"
            >
              <Grid item>
                <Button
                  className={classes.siteBtn}
                  component={NavLink}
                  to="/"
                >
                  <Typography
                    className={classes.title}
                    noWrap
                    variant="h3"
                  >
                    { siteName }
                  </Typography>
                </Button>
              </Grid>
              <Grid item>
                <div className={classes.search}>
                  <form onSubmit={handleSubmit}>
                    <div className={classes.searchIcon}>
                      <SearchIcon />
                    </div>
                    <InputBase
                      classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                      }}
                      inputProps={{ 'aria-label': 'search' }}
                      onChange={handleSearchInput}
                      placeholder="Search Stories…"
                    />
                  </form>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.navLinks}>
             { navLinks.map(({ href, path, title }) => (
                <Button
                  className={linkClass(path)}
                  color="primary"
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
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default withRouter(AppBarContainer);
