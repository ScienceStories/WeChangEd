import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(6),
    paddingTop: theme.spacing(6),
    '& canvas': {
      // height: 600,
      // maxHeight: '65vh',
      // width: '100%',
    },
  },
}));

export default useStyles;
