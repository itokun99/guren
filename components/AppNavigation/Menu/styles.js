import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles((theme) => ({
  wrapper: {
    padding: 0,
    margin: 0,
    listStyle: 'none',
  },
  item: {
    display: 'inline-block',
  },
  link: {
    color: '#fff',
    fontWeight: 'bold',
    display: 'inline-block',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
  },
}));
