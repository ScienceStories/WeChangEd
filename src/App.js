import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StoriesAPIStory, { StoriesAPICollection } from 'react-stories-api';

import logo from './logo.svg';
import './App.css';
import {
  storiesAPICollectionId, storiesAPIEndpoint, storiesAPIKey
} from "./constants";

const LandingPage = () => (
  <StoriesAPICollection
    apiKey={storiesAPIKey}
    id={2}
    endpoint={storiesAPIEndpoint}
    urlFormatter="/$id"
  />
);

const StoryPage = (props) => (
  <StoriesAPIStory
    apiKey={storiesAPIKey}
    id={props.match.params.storyId}
    collection={storiesAPICollectionId}
    endpoint={storiesAPIEndpoint}
  />
)


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/:storyId" component={StoryPage} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
