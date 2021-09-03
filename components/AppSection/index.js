/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
// import ScrollContainer from 'react-indiana-drag-scroll';
import styles from './styles';

export default function AppSection({ title, path, actionTitle }) {
  const classes = styles();

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.header}>
        <Box className={classes.headerLeft}>
          <Typography component="h3" className={classes.title}>{title}</Typography>
        </Box>
        <Box className={classes.headerRight}>
          <Link href={path}>
            <a className={classes.action}>{actionTitle}</a>
          </Link>
        </Box>
      </Box>
      <Box className={classes.body} />
    </Box>
  );
}
