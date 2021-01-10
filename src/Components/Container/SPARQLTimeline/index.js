import { LinearProgress } from '@material-ui/core';
import React, { useState } from 'react';

import useStyles from './useStyles';
import { getHistropediaURL } from '../../../utils';

const SPARQLTimelineContainer = ({ apiKey, endpoint, sparqlQueryId }) => {
  const classes = useStyles();
  const [url, setURL] = useState(null);
  getHistropediaURL(endpoint, apiKey, sparqlQueryId).then((data) => setURL(data));
  return url ? (
    <iframe
      className={classes.root}
      src={url}
      title="SPARQL Query Timeline"
    />
  ) : (
    <div className={classes.root}>
      <LinearProgress />
    </div>
  );
};

export default SPARQLTimelineContainer;
