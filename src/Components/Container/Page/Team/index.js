import { Grid, Typography } from '@material-ui/core';
import React from 'react';

import TeamMemberCard from '../../../Presentational/TeamMemberCard';
import AppLayout from '../../AppLayout';
import teamBios from './teamBios';
import useStyles from './useStyles';

const TeamPage = () => {
  const classes = useStyles();
  return (
    <AppLayout>
      <Grid
        className={classes.root}
        container
        justify="center"
        spacing={3}
      >
        <Grid
          item
          xs={12}
        >
          <Typography
            align="center"
            className={classes.header}
            color="primary"
            variant="h3"
          >
            Meet the WeChanged Team
          </Typography>
        </Grid>
        {teamBios.map(({ image, name, text }) => (
          <Grid
            item
            key={name}
          >
            <TeamMemberCard
              image={image}
              name={name}
              text={text}
            />
          </Grid>
        ))}
      </Grid>
    </AppLayout>
  );
};

export default TeamPage;
