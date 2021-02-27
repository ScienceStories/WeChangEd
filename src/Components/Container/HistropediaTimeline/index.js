import { LinearProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

import { storiesAPIEndpoint, storiesAPIKey, storiesAPISPARQLQueryId } from '../../../constants';
import { queryToHistropedia } from '../../../utils';
import useStyles from './useStyles';

const HistropediaTimeline = ({ id = 'timeline' }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    queryToHistropedia(storiesAPIEndpoint, storiesAPIKey, storiesAPISPARQLQueryId).then((data) => {
      const container = document.getElementById(id);
      const timeline = new window.Histropedia.Timeline(container, {
        article: {
          autoStacking: {
            range: window.Histropedia.RANGE_SCREEN,
          },
        },
        initialDate: {
          year: 1800,
          month: 1,
          day: 1
        },
        width: window.screen.width,
        zoom: {
          initial: 30,
          minimum: 0,
          maximum: 50,
          wheelStep: 0.1,
          wheelSpeed: 1,
          unitSize: {
            showMinorLabels: 48,
            minimum: 8
          }
        }
      });
      timeline.load(data);
      setLoading(false);
    });
  }, [id]); // passing an empty array as second argument triggers the callback in useEffect only after the initial render thus replicating `componentDidMount` lifecycle behaviour
  return (
    <div
      className={classes.root}
      id={id}
    >
      { loading && (
        <LinearProgress color="primary" />
      )}
    </div>
  )
};

export default HistropediaTimeline;
