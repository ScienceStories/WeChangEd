import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  button: {
    color: theme.palette.background.default,
  },
  container: {
    width: '100%',
  },
  credit:{
    opacity: .5,
    padding: theme.spacing(1)
  },
  logo:{
    maxHeight: theme.typography.h2.fontSize,
    maxWidth: '100%',
  },
  root: {
    background: theme.palette.background.paper,
    bottom: 0,
    boxShadow: theme.shadows[4],
    position: 'fixed',
    width: '100%',
  },
}));

export default useStyles;
