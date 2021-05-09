import React from 'react';
import { Route, Switch } from 'react-router-dom';

import BrowsePage from './Components/Container/Page/Browse';
import HomePage from './Components/Container/Page/Home';
import StoryPage from './Components/Container/Page/Story';
import TeamPage from './Components/Container/Page/Team';
import { browseURL, teamURL } from './constants';

export default (
  <Switch>
    <Route
      component={BrowsePage}
      path={browseURL}
    />
    <Route
      component={TeamPage}
      path={teamURL}
    />
    <Route
      component={StoryPage}
      path="/:storyId"
    />
    <Route
      component={HomePage}
      path="/"
    />
  </Switch>
);
