import makeStyles from '@material-ui/core/styles/makeStyles';

const styles = makeStyles((theme) => ({
  wrapper: {
    width: '100%',
    height: '100%',
    padding: theme.spacing(1),
  },
  input: {
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 4,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(0),
  },
}));

export default styles;
