import {
  Button,
  Grid,
  List,
  ListItem,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

import story1 from '../../../../assets/images/story-1.png';
import story2 from '../../../../assets/images/story-2.png';
import story3 from '../../../../assets/images/story-3.png';
import {
  blogURL,
  browseURL,
  logo,
  resourceLinks,
  storiesAPIEndpoint,
  storiesAPIKey,
  storiesAPISPARQLQueryId,
} from '../../../../constants';
import AppLayout from '../../AppLayout';
import SPARQLTimelineContainer from '../../SPARQLTimeline';
import useStyles from './useStyles';

// TODO: Replace lorem text
// TODO: Figure out page jumping
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
                Women Editors and Socio-Cultural Transformation in Europe, 1710-1920
              </Typography>
              <br />
              <Button
                color="secondary"
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
            className={classes.bold}
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
            title="Query"
            style={{width: '100%', height: '65vh', border: 'none'}}
            src="https://query.wikidata.org/embed.html#%23defaultView%3AMap%0ASELECT%20%3Fitem%20%3FitemLabel%20%3Fbirthplace%20%3Fbirthyear%20%3Fcoord%20%3Flayer%20%3Fimage%20WHERE%20%7B%0A%20%20%3Fitem%20wdt%3AP7947%20%3Fid%3B%0A%20%20%20%20wdt%3AP570%20%3Fdod%3B%0A%20%20%20%20wdt%3AP19%20%3Fplace.%0A%20%20%3Fplace%20wdt%3AP625%20%3Fcoord.%0A%20%20OPTIONAL%20%7B%20%3Fitem%20wdt%3AP569%20%3Fdob.%20%7D%0A%20%20BIND%28YEAR%28%3Fdob%29%20AS%20%3Fbirthyear%29%0A%20%20BIND%28IF%28%3Fbirthyear%20%3C%201700%20%2C%20%22Pre-1700%22%2C%20IF%28%3Fbirthyear%20%3C%201751%20%2C%20%221700-1750%22%2C%20IF%28%3Fbirthyear%20%3C%201801%20%2C%20%221751-1800%22%2C%20IF%28%3Fbirthyear%20%3C%201851%20%2C%20%221801-1850%22%2C%20IF%28%3Fbirthyear%20%3C%201901%20%2C%20%221851-1900%22%2C%20IF%28%3Fbirthyear%20%3C%201951%20%2C%20%221901-1950%22%2C%20%22Post-1950%22%29%29%29%29%29%29%20AS%20%3Flayer%29%0A%20%20OPTIONAL%20%7B%3Fitem%20wdt%3AP18%20%3Fimage%7D.%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22%5BAUTO_LANGUAGE%5D%2Cen%22.%20%7D%0A%7D"
            referrerPolicy="origin"
            sandbox="allow-scripts allow-same-origin allow-popups"
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
                variant="overline"
              >
                The WeChanEd Dataset
              </Typography>
              <Typography variant="subtitle1">
                We partnered with the Science Stories Team to develop a Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ex explicabo quos? Corporis, cum delectus dicta earum facilis itaque nam provident quisquam rerum sint tempora, tempore totam, voluptates. Aliquam autem dolores eligendi facilis fugit inventore, ipsa maiores molestias necessitatibus numquam, officiis perspiciatis possimus quis sequi suscipit ullam vel velit. Consectetur deleniti esse harum illo iste maxime repellat sequi sint totam vero! Accusamus aliquam, aut autem cumque, dicta dolorem dolores dolorum eligendi enim eum fugit impedit iste natus nesciunt optio perferendis placeat quae quam quibusdam quidem quisquam sed similique tempore temporibus vitae, voluptas voluptatum. Aspernatur corporis magni, neque obcaecati sequi soluta.
              </Typography>
              <br />
              <Typography variant="subtitle1">
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
          <SPARQLTimelineContainer
            apiKey={storiesAPIKey}
            endpoint={storiesAPIEndpoint}
            sparqlQueryId={storiesAPISPARQLQueryId}
          />
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
        <Grid
          className={classes.resources}
          item
          xs={12}
        >
          <Grid
            container
            justify="center"
            spacing={10}
          >
            <Grid
              item
              xs={12}
            >
              <Typography
                className={classes.bold}
                variant="h4"
              >
                Additional Resources
              </Typography>
            </Grid>
            { resourceLinks.map(({ category, links }) => (
              <Grid
                item
                md={Math.max(resourceLinks.length/12, 4)}
                key={category}
              >
                <Typography
                  className={classes.bold}
                  variant="subtitle1"
                >
                  { category }
                </Typography>
                <List>
                  { links.map(({ href, label }) => (
                    <ListItem
                      button
                      color="inherit"
                      component="a"
                      href={href}
                      key={label}
                      target="_blank"
                    >
                      { label }
                    </ListItem>
                  ))}
                </List>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </AppLayout>
  );
};

export default HomePage;
