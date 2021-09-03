import Box from '@material-ui/core/Box';
import InputBase from '@material-ui/core/InputBase';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import styles from './styles';

export default function Filter() {
  const classes = styles();

  return (
    <Box component="form" className={classes.wrapper}>
      <InputBase
        placeholder="Search..."
        endAdornment={
          <InputAdornment position="right"><SearchIcon /></InputAdornment>
        }
        fullWidth
        className={classes.input}
      />
    </Box>
  );
}
