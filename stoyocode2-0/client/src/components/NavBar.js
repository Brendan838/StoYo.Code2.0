import * as React from 'react';
import {AppBar,Box,Toolbar,Typography,Button,IconButton} from '@mui/material/';
import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar() {
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
          >
            <MenuIcon />
          </IconButton>
          <Typography id="mainHeader" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            StoYo.Code
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}