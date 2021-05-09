import _logo from './assets/images/logo.png';

export const blogURL = 'https://www.wechanged.ugent.be/blog/';
export const biblioURL = 'https://biblio.ugent.be/publication?embed=1&q=%22Marianne+Van+Remoortel%22&hide_info=1&hide_options=1';
export const publicationsURL = 'https://nam12.safelinks.protection.outlook.com/?url=https%3A%2F%2Fbiblio.ugent.be%2Fproject%2F41H02315&data=04|01|katherine.thornton%40yale.edu|37b70dc60a2944a5177608d8f5a45b27|dd8cbebb21394df8b4114e3e87abeb5c|0|0|637529433561941691|Unknown|TWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D|1000&sdata=esu76bkgQW6zWgj99vO8vb40ZDfR3wmRSRYmnfhp%2F20%3D&reserved=0'
export const browseURL = '/stories';
export const teamURL = '/team';
export const ghentColor = {
  black: '#202020',
  blue: '#1E64C8',
  blueLight: '#e9f0fa',
  yellow: '#FFD200',
  yellowLight: '#fffae5',
};
export const ghentUrl = 'https://www.ugent.be/en';
export const logo = _logo;
export const mapQueryUrl = 'https://query.wikidata.org/embed.html#%23defaultView%3AMap%0ASELECT%20%3Fitem' +
  '%20%3FitemLabel%20%3Fbirthplace%20%3Fbirthyear%20%3Fcoord%20%3Flayer%20%3Fimage%20WHERE%20%7B%0A%20%20%3Fitem' +
  '%20wdt%3AP7947%20%3Fid%3B%0A%20%20%20%20wdt%3AP570%20%3Fdod%3B%0A%20%20%20%20wdt%3AP19%20%3Fplace.%0A%20%20%3F' +
  'place%20wdt%3AP625%20%3Fcoord.%0A%20%20OPTIONAL%20%7B%20%3Fitem%20wdt%3AP569%20%3Fdob.%20%7D%0A%20%20BIND%28YEAR' +
  '%28%3Fdob%29%20AS%20%3Fbirthyear%29%0A%20%20BIND%28IF%28%3Fbirthyear%20%3C%201700%20%2C%20%22Pre-1700%22%2C%20' +
  'IF%28%3Fbirthyear%20%3C%201751%20%2C%20%221700-1750%22%2C%20IF%28%3Fbirthyear%20%3C%201801%20%2C%20%221751' +
  '-1800%22%2C%20IF%28%3Fbirthyear%20%3C%201851%20%2C%20%221801-1850%22%2C%20IF%28%3Fbirthyear%20%3C%201901%20' +
  '%2C%20%221851-1900%22%2C%20IF%28%3Fbirthyear%20%3C%201951%20%2C%20%221901-1950%22%2C%20%22Post-1950%22%29%29%' +
  '29%29%29%29%20AS%20%3Flayer%29%0A%20%20OPTIONAL%20%7B%3Fitem%20wdt%3AP18%20%3Fimage%7D.%0A%20%20SERVICE%20' +
  'wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22%5BAUTO_LANGUAGE%5D%2Cen%22.%20%7D%0A%7D';
export const navLinks = [
  { path: '/', title: 'Home' },
  { path: browseURL, title: 'Browse Stories' },
  { path: teamURL, title: 'Team' },
  { href: publicationsURL, title: 'Publications' },
  { href: blogURL, title: 'Blog' },
];
export const projectUrl = 'https://www.wechanged.ugent.be/';
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
export const siteName = 'Agents of Change';
export const storiesAPICollectionId = 2;
export const storiesAPIEndpoint = 'https://stories-api-stage.herokuapp.com';
export const storiesAPIKey = 'rf9qXEDE.SqlziAxtY58fTbSyx2MoKz2naXO9UlvE';
export const storiesAPISPARQLQueryId = 4;
export const theme = {
  palette: {
    accent: {
      light: ghentColor.yellowLight,
      main: ghentColor.yellow,
    },
    primary: {
      light: ghentColor.blueLight,
      main: ghentColor.blue,
    },
    secondary: {
      light: ghentColor.blueLight,
      main: ghentColor.blue,
    },
    text: {
      primary: ghentColor.black,
    },
  },
  typography: {
    fontFamily: '"PannoTextNormal", "Arial", sans-serif',
    fontSize: 16,
  }
};
