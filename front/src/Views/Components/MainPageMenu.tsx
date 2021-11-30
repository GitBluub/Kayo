import * as React from 'react';
import IconButton from '@mui/material/IconButton/IconButton';
import Menu from '@mui/material/Menu/Menu';
import MenuItem from '@mui/material/MenuItem/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid/Grid';
const ITEM_HEIGHT = 48;

const MainPageMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Grid container justifyContent="right" style={{ paddingRight: 30, paddingTop: 30 }}>
      <IconButton aria-label="more" id="long-button" aria-controls="long-menu" aria-expanded={open ? 'true' : undefined} aria-haspopup="true" onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu id="long-menu" MenuListProps={{ 'aria-labelledby': 'long-button' }} anchorEl={anchorEl} open={open} PaperProps={{ style: { maxHeight: ITEM_HEIGHT * 4.5, width: '20ch' } }}>
        <MenuItem>
          <Link to="services">Services</Link>
        </MenuItem>
        <MenuItem>
          <Link to="widgets/manage">Manage Widgets</Link>
        </MenuItem>
        <MenuItem>
          <Link to="widgets/add">Add Widgets</Link>
        </MenuItem>
        <Link to="/logout">
        <MenuItem style={{ color: 'red'}}>
          Logout
        </MenuItem>
        </Link>
      </Menu>
    </Grid>
  );
}

export default MainPageMenu;