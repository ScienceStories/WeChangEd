import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

import story1 from '../../../../assets/images/story-1.png';
import story2 from '../../../../assets/images/story-2.png';
import story3 from '../../../../assets/images/story-3.png';
import { browseURL, mapQueryUrl } from '../../../../constants';
import AppLayout from '../../AppLayout';
import HistropediaTimeline from '../../HistropediaTimeline';
import useStyles from './useStyles';


const HomePage = () => {
  const classes = useStyles();
  return (
    <AppLayout>
      <Grid
        container
        justify="center"
      >
        <Grid
          className={classes.heroSection}
          item
          xs={12}
        >
          <Grid
            alignItems="flex-end"
            className={classes.hero}
            container
          >
            <Grid
              item
              md={6}
            >
              <Typography
                className={classes.bold}
                variant="h3"
              >
                Agents of Change
              </Typography>
              <Typography
                className={classes.bold}
                variant="h5"
              >
                Women Editors and Socio-Cultural Transformation in Europe
                <br />
                1710-1920
              </Typography>
              <br />
              <Button
                className={classes.heroBtn}
                component={Link}
                to={browseURL}
                variant="contained"
              >
                Browse Stories
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          className={classes.about}
          item
          xs={12}
        >
          <Typography
            className={classes.aboutHeader}
            variant="overline"
          >
            About the Project
          </Typography>
          <Typography className={classes.medium}>
            "Agents of Change: Women Editors and Socio-Cultural Transformation in Europe, 1710-1920″
            (acronym WeChangEd) was an ERC Starting Grant project directed by Marianne Van Remoortel and
            based at the Department of Literary Studies, Ghent University, Belgium.
            <br/><br />
            From 2015 to 2021, a team of seven researchers and seven student interns with complementary language
            skills and methodological expertise in literary studies, the digital humanities, and the social
            sciences investigated the impact of women editors on public debate and processes of socio-cultural
            change in Europe in the eighteenth to early twentieth centuries.
            Women’s access to public life and to political power and decision-making was limited in this period.
            Women were often excluded from formal education, and lacked many fundamental legal, political, and
            financial rights, most notably the right to vote. The WeChangEd project revealed that the print
            medium of the periodical offered women an alternative means to make their voices heard far beyond
            their immediate sphere of influence.
            As editors of their own periodicals, women were able to establish transnational networks of intellectual
            exchange across Europe, engage in cultural transfer, and position themselves in contemporary
            debate as makers of culture, arbiters of social values, and proponents of women’s rights.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
        >
          <iframe
            className={classes.iframe}
            referrerPolicy="origin"
            sandbox="allow-scripts allow-same-origin allow-popups"
            src={mapQueryUrl}
            title="Query Map"
          />
        </Grid>
        <Grid
          className={classes.stories}
          item
          xs={12}
        >
          <Grid
            alignItems="center"
            container
            justify="center"
            spacing={7}
          >
            <Grid
              item
              xs={12}
            >
              <Typography
                className={classes.bold}
                color="secondary"
                variant="h3"
              >
                Browsing the Collection
              </Typography>
            </Grid>
            <Grid
              item
              md={7}
            >
              <Grid
                alignItems="center"
                container
                justify="center"
              >
                <Grid
                  item
                  md={4}
                  xs={10}
                >
                  <img
                    alt="Ghent University WeChangEd"
                    className={classes.img}
                    src={story1}
                  />
                </Grid>
                <Grid
                  item
                  md={3}
                  xs={10}
                >
                  <img
                    alt="Ghent University WeChangEd"
                    className={classes.img}
                    src={story2}
                  />
                </Grid>
                <Grid
                  item
                  md={4}
                  xs={10}
                >
                  <img
                    alt="Ghent University WeChangEd"
                    className={classes.img}
                    src={story3}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              md={5}
            >
              <Typography
                color="primary"
                className={classes.overline}
                variant="overline"
              >
                The WeChanEd Dataset
              </Typography>
              <Typography
                className={classes.text}
                variant="subtitle1"
              >
                We partnered with the Science Stories Team to showcase our research through the development
                of this application powered by Linked Open Data and Semantic Web technologies. We contributed
                the WeChanEd dataset to the Wikidata knowledgebase to curate visual storytelling interactions with
                our research. As you browse the collection, you'll be able to dynamically experience layers of both
                human and machine-curated content through a variety of mediums.
              </Typography>
              <br />

              <Typography
                className={classes.text}
                variant="subtitle1"
              >
                As more humanists, social scientists and other researchers choose to contribute their data to Wikidata
                we will all benefit. As researchers add data, the breadth and complexity of the questions we can
                ask about the data we have contributed will increase. Relationships between editors in the dataset
                and other people described in Wikidata will continue to grow over time.
              </Typography>
              <br />
              <Button
                color="secondary"
                component={Link}
                to={browseURL}
                variant="contained"
              >
                View Stories
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
        >
          <div className={classes.timelineHeader}>
            <Typography
              className={classes.timelineHeaderText}
              color="primary"
              variant="h4"
            >
              Over Two Centuries of Women’s Editorship
            </Typography>
          </div>
          <HistropediaTimeline id="editors-timeline" />
        </Grid>
      </Grid>
    </AppLayout>
  );
};

export default HomePage;
