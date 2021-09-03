import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styles from './styles';

function AppHeader() {
  const classes = styles();
  return (
    <Box className={classes.wrapper}>
      <Grid container justifyContent="space-between">
        <Grid item xs={12} md={6} lg={3}>
          <Typography component="h1" className={classes.logoTitle}>MyAnimeList</Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={6} />
        <Grid item xs={12} md={6} lg={3} className={classes.actionWrapper}>
          <Button color="primary" variant="outlined">Login</Button>
          <Button color="primary" variant="contained" className={classes.buttonSignUp}>Sign Up</Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AppHeader;
