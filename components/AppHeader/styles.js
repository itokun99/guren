import makeStyles from '@material-ui/core/styles/makeStyles';

const styles = makeStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(1),
  },
  logoTitle: {
    color: theme.palette.primary.main,
    fontSize: 28,
    fontWeight: 'bold',
  },
  actionWrapper: {
    textAlign: 'right',
  },
  buttonSignUp: {
    marginLeft: theme.spacing(1),
  },
}));

export default styles;
