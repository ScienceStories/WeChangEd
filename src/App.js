import React from 'react';
import {
  Button, createMuiTheme, Grid, MuiThemeProvider, makeStyles, Typography
} from '@material-ui/core';
import { HashRouter, Route, Switch } from 'react-router-dom';
import StoriesAPIStory, { StoriesAPICollection } from 'react-stories-api';

import {
  affiliationLogos, logo, projectUrl, storiesAPICollectionId,
  storiesAPIEndpoint, storiesAPIKey, theme,
} from "./constants";


const useStyles = makeStyles(theme => ({
  app: {
    textAlign: "center",
    height: "100vh",
    width: "100vw",
  },
  footer: {
    background: theme.palette.background.paper,
    position: "fixed",
    bottom: 0,
    width: "100%",
    boxShadow: theme.shadows[4],
  },
  button: {
    color: theme.palette.background.default,
  },
  container: {
    width: "100%",
  },
  footerLogo:{
    maxHeight: theme.typography.h1.fontSize,
    maxWidth: "100%",
  },
  light:{
    opacity: .5,
    padding: theme.spacing(1)
  }
}));


const LandingPage = () => (
  <div>
    <StoriesAPICollection
      apiKey={storiesAPIKey}
      id={storiesAPICollectionId}
      endpoint={storiesAPIEndpoint}
      urlFormatter="#$id"
    />
    <div style={{padding: 100}} />
    <Footer />
  </div>
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

const Footer = (props) => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container className={classes.container} justify="center" alignItems="center">
        <Grid item xs={4}>
          <Button className={classes.button} href={projectUrl} target="_blank">
            <img
              className={classes.footerLogo}
              alt="WeChangEd Affiliates Logos"
              src={affiliationLogos}
            />
          </Button>
        </Grid>
        <Grid item xs={7} className={classes.light}>
          <Typography variant="caption">
            &copy; {1900 + new Date().getYear()} , In Collaboration with
            <Button
              size="small"
              color="secondary"
              href="http://sciencestories.io"
              target="_blank"
              >
              The ScienceStories.io Team
            </Button>
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default function App() {
  const classes = useStyles();
  return (
    <HashRouter hashType="noslash">
      <MuiThemeProvider theme={createMuiTheme(theme)}>
        <div className={classes.app}>
          <Switch>
            <Route path="/:storyId" component={StoryPage} />
            <Route path="/" component={LandingPage} />
          </Switch>
        </div>
      </MuiThemeProvider>
    </HashRouter>
  );
};
