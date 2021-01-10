import { Button } from '@material-ui/core';
import React from 'react';
import StoriesAPIStory from 'react-stories-api';

import {
  logo,
  storiesAPICollectionId,
  storiesAPIEndpoint,
  storiesAPIKey,
} from '../../../../constants';
import useStyles from './useStyles';

const StoryPage = ({ match }) => {
  const classes = useStyles();
  return (
    <StoriesAPIStory
      apiKey={storiesAPIKey}
      id={match.params.storyId}
      collection={storiesAPICollectionId}
      endpoint={storiesAPIEndpoint}
      options={{logo: (
        <Button href="#">
          <img
            alt="WeChangEd Logo"
            className={classes.logo}
            src={logo}
          />
        </Button>
      )}}
    />
  );
}

export default StoryPage;
