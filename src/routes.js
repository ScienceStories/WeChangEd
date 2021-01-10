import React from 'react';
import { Route, Switch } from 'react-router-dom';

import BrowsePage from './Components/Container/Page/Browse';
import HomePage from './Components/Container/Page/Home';
import StoryPage from './Components/Container/Page/Story';

export default (
  <Switch>
    <Route
      component={BrowsePage}
      path="/stories"
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
