import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  ghentLogo: {
    height: 85,
    width: 112,
  },
  ghentLogoButton: {
    padding: 0,
  },
  ghentLogoContainer: {
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  inputRoot: {
    color: 'inherit',
  },
  navLinks: {
    display: 'none',
    [theme.breakpoints.up('xs')]: {
      display: 'flex',
    },
  },
  search: {
    backgroundColor: fade(theme.palette.common.white, 0.15),
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(1),
    marginLeft: 0,
    marginRight: theme.spacing(2),
    position: 'relative',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
  },
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(10),
  },
  searchIcon: {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    padding: theme.spacing(0, 2),
    pointerEvents: 'none',
    position: 'absolute',
  },
  title: {
    display: 'none',
    fontWeight: 500,
    fontFamily: 'PannoTextMedium',
    color: theme.palette.primary.contrastText,
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  titleContainer: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(2),
    paddingTop: theme.spacing(4),
    textAlign: 'left',
    textTransform: 'uppercase',
  },
  link: {
    borderRadius: 0,
    borderBottom: '2px solid transparent',
    fontFamily: 'PannoTextMedium',
    fontSize: 10,
    fontWeight: 'bold',
    marginRight: theme.spacing(2),
    paddingBottom: 0,
    '&:hover': {
      borderColor: theme.palette.primary.main,
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: 20,
      fontWeight: 'inherit',
    },
  },
  linkActive: {
    borderColor: theme.palette.primary.main,
  },
  siteBtn: {
    padding: 0
  },
}));

export default useStyles;
