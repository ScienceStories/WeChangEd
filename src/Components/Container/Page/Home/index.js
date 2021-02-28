import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

import story1 from '../../../../assets/images/story-1.png';
import story2 from '../../../../assets/images/story-2.png';
import story3 from '../../../../assets/images/story-3.png';
import {
  blogURL,
  browseURL,
  logo,
  mapQueryUrl,
} from '../../../../constants';
import AppLayout from '../../AppLayout';
import HistropediaTimeline from '../../HistropediaTimeline';
import useStyles from './useStyles';

// TODO: Replace lorem text
// TODO: Update Blog href

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
            “Agents of Change: Women Editors and Socio-Cultural Transformation in Europe, 1710-1920″ (acronym WeChangEd)
            is a five-year research project funded by an ERC Starting Grant (2015-2020).
            It is directed by Marianne Van Remoortel and based at the Department of Literary Studies,
            Ghent University, Belgium.  The project examines a neglected aspect of the social and
            cultural life in Europe in the modern period: the impact of women editors on public debate.
            This project advances the hypothesis that periodical editorship enabled these women to
            take a prominent role in public life, to influence public opinion and to shape transnational
            processes of change. In order to test this hypothesis, the project brings together
            a multilingual and multidisciplinary team of six researchers who combine methodologies
            from literary studies, (women’s) history and the social sciences to map the transnational
            networks of intellectual exchange in which women editors participated, with particular
            attention to practices of textual transfer (including translation, adaptation,
            reprinting and reviewing) across language boundaries and historical periods. The
            project has two parts:
            <br/>
            1) a database takes stock of women editors and their
            periodicals, makes available new material and provides a data source for socio-textual
            network analysis;
            <br/>
            2) a series of thematic subprojects, focusing on, for example,
            domestic ideology, salon culture, fashion and women’s rights, studies the impact of women editors on
            some of the most significant processes of socio-cultural transformation in modern European history.
            <br/>
            By examining how these processes unfolded in the press through practices of textual transfer both
            among women and in the larger publishing landscape, the project aims not only to initiate a shift in our
            thinking about the participation of women in society and print culture but also to pave the way for
            pan-European research on the periodical press.
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
                We partnered with the Science Stories Team to develop a Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ex explicabo quos? Corporis, cum delectus dicta earum facilis itaque nam provident quisquam rerum sint tempora, tempore totam, voluptates. Aliquam autem dolores eligendi facilis fugit inventore, ipsa maiores molestias necessitatibus numquam, officiis perspiciatis possimus quis sequi suscipit ullam vel velit. Consectetur deleniti esse harum illo iste maxime repellat sequi sint totam vero! Accusamus aliquam, aut autem cumque, dicta dolorem dolores dolorum eligendi enim eum fugit impedit iste natus nesciunt optio perferendis placeat quae quam quibusdam quidem quisquam sed similique tempore temporibus vitae, voluptas voluptatum. Aspernatur corporis magni, neque obcaecati sequi soluta.
              </Typography>
              <br />

              <Typography
                className={classes.text}
                variant="subtitle1"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ex explicabo quos? Corporis, cum delectus dicta earum facilis itaque nam provident quisquam rerum sint tempora, tempore totam, voluptates. Aliquam autem dolores
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
              Over 2 Centuries of Change Agents
            </Typography>
          </div>
          <HistropediaTimeline id="editors-timeline" />
        </Grid>
        <Grid
          className={classes.blog}
          item
          xs={11}
        >
          <img
            alt="WeChanEd Logo"
            className={classes.logo}
            src={logo}
          />
          <br />
          <Typography variant="overline">
            See Our Latest Posts
          </Typography>
          <Typography
            className={classes.bold}
            color="primary"
            variant="h3"
          >
            WeChangEd Blog
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci autem consectetur corporis cum itaque iusto odio totam! Alias aperiam culpa expedita incidunt, iusto laborum, maiores numquam quam quasi quis rem reprehenderit sequi similique sunt voluptas. Cupiditate harum hic, incidunt itaque iusto maxime! Ab adipisci amet corporis eligendi facilis, voluptatum!
          </Typography>
          <br />
          <Button
            color="primary"
            href={blogURL}
            target="_blank"
            variant="contained"
          >
            Learn More
          </Button>
        </Grid>
      </Grid>
    </AppLayout>
  );
};

export default HomePage;
