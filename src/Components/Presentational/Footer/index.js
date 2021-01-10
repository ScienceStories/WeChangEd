import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';

import affiliationLogos from '../../../assets/images/affiliates.png';
import { projectUrl } from '../../../constants';
import useStyles from './useStyles';

const Footer = () => {
  const classes = useStyles();
  const credit = `© ${1900 + new Date().getYear()}, In Collaboration with`;
  return (
    <footer className={classes.root}>
      <Grid
        alignItems="center"
        className={classes.container}
        container
        justify="center"
      >
        <Grid
          item
          xs={4}
        >
          <Button
            className={classes.button}
            href={projectUrl}
            target="_blank"
          >
            <img
              alt="WeChangEd Affiliates Logos"
              className={classes.logo}
              src={affiliationLogos}
            />
          </Button>
        </Grid>
        <Grid
          className={classes.credit}
          item
          xs={7}
        >
          <Typography variant="caption">
            { credit }
            <Button
              color="secondary"
              href="http://sciencestories.io"
              size="small"
              target="_blank"
              >
              The ScienceStories.io Team
            </Button>
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
