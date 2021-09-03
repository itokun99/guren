/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/forbid-prop-types */
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './styles';

export default function Menu({ items }) {
  const classes = styles();
  return (
    <Box component="ul" className={classes.wrapper}>
      {items.map((item, index) => (
        <Box className={classes.item} key={Number(index)} component="li">
          <Link href={item.path}>
            <a className={classes.link}>{item.title}</a>
          </Link>
        </Box>
      ))}
    </Box>
  );
}

Menu.propTypes = {
  items: PropTypes.array,
};
Menu.defaultProps = {
  items: [],
};
