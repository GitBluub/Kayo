import * as React from 'react';
import IconButton from '@mui/material/IconButton/IconButton';
import Menu from '@mui/material/Menu/Menu';
import MenuItem from '@mui/material/MenuItem/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid/Grid';
import LogoutButton from './LogoutButton';
const ITEM_HEIGHT = 48;

/**
 * Properties for main page menu
 */
interface MainPageMenuProps {
    isAdmin: boolean,
}

/**
 * Main page menu/navigator
 * @param param0 
 * @returns 
 */
const MainPageMenu = ({ isAdmin }: MainPageMenuProps) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const Administration = () => (isAdmin ?
    <Link to="/admin">
        <MenuItem>
            Administration
        </MenuItem>
    </Link>
    : <></>)

    return (
        <Grid container justifyContent="right" style={{ paddingRight: 30, paddingTop: 30 }}>
            <IconButton aria-label="more" id="long-button" aria-controls="long-menu" aria-expanded={open ? 'true' : undefined} aria-haspopup="true" onClick={handleClick}>
                <MoreVertIcon />
            </IconButton>
            <Menu id="long-menu" MenuListProps={{ 'aria-labelledby': 'long-button' }} anchorEl={anchorEl} open={open} PaperProps={{ style: { maxHeight: ITEM_HEIGHT * 4.5, width: '20ch' } }}>
                <Link to="services">
                    <MenuItem>
                        Services
                    </MenuItem>
                </Link>
                <Link to="widgets/add">
                    <MenuItem>
                        Add Widgets
                    </MenuItem>
                </Link>
                <Link to="widgets/manage">
                    <MenuItem>
                        Manage Widgets
                    </MenuItem>
                </Link>
                <Administration />
                <MenuItem>
                    <LogoutButton />
                </MenuItem>
            </Menu>
        </Grid>
    );
}

export default MainPageMenu;