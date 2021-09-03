import makeStyles from '@material-ui/core/styles/makeStyles';

const styles = makeStyles((theme) => ({
  wrapper: {
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  headerLeft: {},
  headerRight: {},
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  action: {
    fontSize: 16,
    color: theme.palette.primary.main,
  },
}));

export default styles;
