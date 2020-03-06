import React from 'react';
import { Button, createMuiTheme, MuiThemeProvider, } from '@material-ui/core';
import { HashRouter, Route, Switch } from 'react-router-dom';
import StoriesAPIStory, { StoriesAPICollection } from 'react-stories-api';

import './App.css';
import {
  logo, storiesAPICollectionId, storiesAPIEndpoint, storiesAPIKey, theme,
} from "./constants";

const LandingPage = () => (
  <StoriesAPICollection
    apiKey={storiesAPIKey}
    id={storiesAPICollectionId}
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
      <Button href="#">
        <img alt="WeChangEd Logo" src={logo} style={{width: "100%"}}/>
      </Button>
    )}}
  />
)


function App() {
  return (
    <HashRouter hashType="noslash">
      <MuiThemeProvider theme={createMuiTheme(theme)}>
        <div className="App">
          <Switch>
            <Route path="/:storyId" component={StoryPage} />
            <Route path="/" component={LandingPage} />
          </Switch>
        </div>
      </MuiThemeProvider>
    </HashRouter>
  );
}

export default App;
