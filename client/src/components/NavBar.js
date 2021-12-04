import * as React from 'react';
import {AppBar,Box,Toolbar,Typography,Button,IconButton,Link, Menu, MenuItem} from '@mui/material/';
import MenuIcon from '@mui/icons-material/Menu';

import Auth from '../utils/auth';

export default function NavBar() {



  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

const handleLogout = () => {
    Auth.logout()
    setAnchorEl(null);
  };









  return (
    <Box sx={{ flexGrow: 1}} gridColumn ='span 12' gridRow ='span 2' >
      <AppBar position="static" sx={{bgcolor: 'black'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick = {handleClick}
            
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
        <MenuIcon />
 </IconButton>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link href= '/' color="inherit" underline="hover"><MenuItem onClick={handleClose}>Home</MenuItem></Link>
        {Auth.loggedIn() ?
        ( <Link href= '/login' color="inherit" underline="hover"><MenuItem onClick={handleLogout}>Log Out</MenuItem></Link>):
       ( <Link href= '/login' color="inherit" underline="hover"><MenuItem onClick={handleClose}>Log In</MenuItem></Link>)}
        <Link href= '/signup' color="inherit" underline="hover"><MenuItem onClick={handleClose}>Create Account</MenuItem></Link>
      </Menu>








         
          <Typography id="mainHeader" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            StoYo.Code
          </Typography>
             
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}

