import { makeStyles } from '@material-ui/core';

import hero from '../../../../assets/images/hero.png';

const useStyles = makeStyles((theme) => ({
  about: {
    background: theme.palette.background.paper,
    boxShadow: theme.shadows[4],
    padding: theme.spacing(3),
    textAlign: 'left',
    zIndex: 1,
    [theme.breakpoints.up('md')]: {
      minHeight: '80vh',
      padding: `${theme.spacing(6)}px ${theme.spacing(8)}px`,
    },
  },
  aboutHeader: {
    color: theme.palette.primary.main,
    fontSize: theme.typography.h5.fontSize,
    fontWeight: theme.typography.fontWeightBold,
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
  heroBtn: {
    background: theme.palette.accent.main,
    color: theme.palette.accent.contrastText,
  },
  img: {
    width: '100%',
    boxShadow: theme.shadows[6],
  },
  iframe: {
    border: 'none',
    height: '65vh',
    width: '100%',
  },
  logo: {
    maxHeight: 100,
  },
  medium: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  overline: {
    fontSize: theme.typography.h6.fontSize,
    textAlign: 'center',
  },
  timelineHeader: {
    background: theme.palette.primary.light,
    padding: theme.spacing(5),
  },
  timelineHeaderText: {
    fontWeight: theme.typography.fontWeightBold,
  },
  stories: {
    padding: theme.spacing(5),
  },
  text: {
    textAlign: 'left',
  },
}));

export default useStyles;
