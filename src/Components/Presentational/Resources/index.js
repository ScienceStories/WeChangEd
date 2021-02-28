import {
  Grid,
  List,
  ListItem,
  Typography,
} from '@material-ui/core';
import React from 'react';

import { resourceLinks } from '../../../constants';
import useStyles from './useStyles';

const Resources = () => {
  const classes = useStyles();
  return (
    <Grid
      className={classes.root}
      container
      justify="center"
      spacing={10}
    >
      <Grid
        item
        xs={12}
      >
        <Typography
          className={classes.bold}
          variant="h4"
        >
          Additional Resources
        </Typography>
      </Grid>
      { resourceLinks.map(({ category, links }) => (
        <Grid
          item
          md={Math.max(resourceLinks.length/12, 4)}
          key={category}
        >
          <Typography
            className={classes.bold}
            variant="subtitle1"
          >
            { category }
          </Typography>
          <List>
            { links.map(({ href, label }) => (
              <ListItem
                button
                color="inherit"
                component="a"
                href={href}
                key={label}
                target="_blank"
              >
                { label }
              </ListItem>
            ))}
          </List>
        </Grid>
      ))}
    </Grid>
  );
};

export default Resources;
