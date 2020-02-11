import React from 'react';
import { Button } from '@material-ui/core';
import { HashRouter, Route, Switch } from 'react-router-dom';
import StoriesAPIStory, { StoriesAPICollection } from 'react-stories-api';

import './App.css';
import {
  logo, storiesAPICollectionId, storiesAPIEndpoint, storiesAPIKey
} from "./constants";

const LandingPage = () => (
  <StoriesAPICollection
    apiKey={storiesAPIKey}
    id={2}
    endpoint={storiesAPIEndpoint}
    urlFormatter="#$id"
  />
);

const StoryPage = (props) => (
  <StoriesAPIStory
    apiKey={storiesAPIKey}
    id={props.match.params.storyId}
    collection={storiesAPICollectionId}
    endpoint={storiesAPIEndpoint}
    options={{logo: (
      <Button href="/">
        <img src={logo} style={{width: "100%"}}/>
      </Button>
    )}}
  />
)


function App() {
  return (
    <HashRouter hashType="noslash">
      <div className="App">
        <Switch>
          <Route path="/:storyId" component={StoryPage} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
