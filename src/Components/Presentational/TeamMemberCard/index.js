import {
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import React from 'react';

import useStyles from './useStyles';

const TeamMemberCard = ({
  image,
  name,
  text,
  time,
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={image}
        title={name}
      />
      <CardContent>
        <Typography variant="h5">
          { name }
        </Typography>
        { time && (
          <Typography
            color="primary"
            variant="subtitle1"
          >
            { time }
          </Typography>
        )}
        <Typography
          color="textSecondary"
          component="p"
          variant="body2"
        >
          { text }
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TeamMemberCard;
