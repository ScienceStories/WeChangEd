import React from 'react';
import { StoriesAPICollection } from 'react-stories-api';

import { storiesAPICollectionId, storiesAPIEndpoint, storiesAPIKey } from '../../../../constants';
import { useQuery } from '../../../../utils';
import AppLayout from '../../AppLayout';
import useStyles from './useStyles';

const BrowsePage = () => {
  const query = useQuery();
  const classes = useStyles();
  const updateHistory = ({ page, q }) => {
    if (window.history.pushState) {
      const { host, protocol, pathname, } = window.location;
      const newURL = `${protocol}//${host}${pathname}#stories?page=${page}&q=${q || ''}`;
      window.history.replaceState({ path: newURL },'', newURL);
    }
  };
  return (
    <AppLayout className={classes.root}>
      <StoriesAPICollection
        apiKey={storiesAPIKey}
        endpoint={storiesAPIEndpoint}
        id={storiesAPICollectionId}
        onChange={updateHistory}
        page={query.get('page')}
        q={query.get('q')}
        urlFormatter="#$id"
      />
    </AppLayout>
  );
}

export default BrowsePage;
