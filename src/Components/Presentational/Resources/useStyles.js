import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  bold: {
    fontWeight: theme.typography.fontWeightBold,
  },
  root: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    margin: 0,
    marginTop: theme.spacing(4),
    padding: theme.spacing(5),
    paddingBottom: theme.spacing(20),
    width: '100%',
  },
}));

export default useStyles;
