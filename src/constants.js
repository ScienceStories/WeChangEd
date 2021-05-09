import _logo from './assets/images/logo.png';

export const blogURL = 'https://www.wechanged.ugent.be/blog/';
export const publicationsURL = 'https://biblio.ugent.be/project/41H02315';
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
