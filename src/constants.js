import _logo from './assets/images/logo.png';

export const blogURL = 'https://www.wechanged.ugent.be/blog/';
export const browseURL = '/stories';
export const histropediaBaseURL = 'http://histropedia.com/showcase/wikidata-viewer.html';
export const logo = _logo;
export const navLinks = [
  { path: '/', title: 'Home' },
  { path: browseURL, title: 'Browse Stories' },
  { href: blogURL, title: 'Blog' },
];
export const projectUrl = 'https://www.wechanged.ugent.be/';
export const siteName = 'Agents of Change';
export const storiesAPICollectionId = 2;
export const storiesAPISPARQLQueryId = 1;
export const storiesAPIEndpoint = 'https://stories-api-stage.herokuapp.com';
export const storiesAPIKey = 'rf9qXEDE.SqlziAxtY58fTbSyx2MoKz2naXO9UlvE';
export const resourceLinks = [
  {
    category: 'Centres and Societies',
    links: [
      { href: 'http://www.espr-it.eu/', label: 'European Society for Periodical Research (ESPRit)' },
      { href: 'http://rs4vp.org/', label: 'Research Society for Victorian Periodicals (RSVP)' },
      { href: 'http://www.periodicalresearch.org/', label: 'Research Society for American Periodicals (RASP)' },
      { href: 'https://www.ghentcdh.ugent.be/', label: 'Ghent Center for Digital Humanities (GhentCDH)' },
    ],
  },
  {
    category: 'Projects',
    links: [
      {
        href: 'https://kjc-sv034.kjc.uni-heidelberg.de/frauenzeitschriften/',
        label: 'Chinese Women’s Magazines from the Late Qing and Early Republican Periods',
      },
      {
        href: 'http://portal.uni-freiburg.de/historische-lebenswelten/projekte/BK_DL',
        label: 'Project on Victorian Periodicals “Histories for the Many:' +
          ' Historical Lifeworlds in Victorian Family, Women’s and Children’s Periodicals”',
      },
      { href: 'http://www.womenwriters.nl/index.php/Women_writers%27_networks', label: 'Women Writers’ Networks' },
    ],
  },
];
export const theme = {
  palette: {
    primary: {
      main: '#205d91',
    },
    secondary: {
      light: '#f7ced0',
      main: '#da5055',
    }
  },
};
