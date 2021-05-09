import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  header: {
    fontWeight: theme.fontWeightBold,
  },
  root: {
    margin: 0,
    maxWidth: '100%',
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    textAlign: 'left',
  },
}));

export default useStyles;
