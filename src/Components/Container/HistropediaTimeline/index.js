import { LinearProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { getStoriesAPIQueryTimeline } from '../../../utils';
import useStyles from './useStyles';

const HistropediaTimeline = ({ id = 'timeline' }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  useEffect(() => {
    getStoriesAPIQueryTimeline().then(({ articles, options }) => {
      options.width = window.screen.width;
      options.onArticleClick = ({ id }) => history.push(`/#${id}`);
      const container = document.getElementById(id);
      const timeline = new window.Histropedia.Timeline(container, options);
      timeline.load(articles);
      setLoading(false);
    });
  }, [id, history]);
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
