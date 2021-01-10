import { makeStyles } from '@material-ui/core';

import hero from '../../../../assets/images/hero.png';

const useStyles = makeStyles((theme) => ({
  about: {
    background: theme.palette.secondary.light,
    boxShadow: theme.shadows[4],
    color: theme.palette.primary.dark,
    padding: theme.spacing(3),
    zIndex: 1,
    [theme.breakpoints.up('md')]: {
      minHeight: '80vh',
      padding: `${theme.spacing(6)}px ${theme.spacing(8)}px`,
    },
  },
  blog: {
    padding: theme.spacing(5),
  },
  bold: {
    fontWeight: theme.typography.fontWeightBold,
  },
  hero: {
    background: theme.palette.primary.light,
    backgroundImage: `url(${hero})`,
    backgroundSize: 'cover',
    color: theme.palette.primary.contrastText,
    fontWeight: theme.typography.fontWeightBold,
    padding: theme.spacing(8),
    textAlign: 'left',
    [theme.breakpoints.up('md')]: {
      minHeight: '80vh',
    },
  },
  heroSection: {
    zIndex: 1,
  },
  img: {
    width: '100%',
    boxShadow: theme.shadows[6],
  },
  logo: {
    maxHeight: 100,
  },
  medium: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  resources: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(5),
    paddingBottom: theme.spacing(20),
  },
  stories: {
    padding: theme.spacing(5),
  },
}));

export default useStyles;
