import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import styles from './styles';
import Menu from './Menu';
import Filter from './Filter';

const menus = [
  {
    title: 'Anime',
    path: '/anime',
  },
  {
    title: 'Manga',
    path: '/manga',
  },
  {
    title: 'Article',
    path: '/article',
  },
  {
    title: 'Download',
    path: '/download',
  },
  {
    title: 'FAQ',
    path: '/faq',
  },
];

function AppNavigation() {
  const classes = styles();

  return (
    <Box borderRadius={8} boxShadow={4} className={classes.wrapper}>
      <Grid container>
        <Grid item xs={12} lg={8}>
          <Menu items={menus} />
        </Grid>
        <Grid item xs={12} lg={4}>
          <Filter />
        </Grid>
      </Grid>
    </Box>
  );
}

export default AppNavigation;
