import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Search } from '@mui/icons-material';
import profileImage from "../assets/images/profile.jpeg";
import logo from "../assets/images/logo.png";

export default function Navbar({ setOpen,setQuery }) {
  return (
    <Box sx={{ flexGrow: 1, padding: '2px',minHeight:"100px" }}>
      <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black', boxShadow: 'none' }}>
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <IconButton
              size="medium"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <img src={logo} alt="Logo" style={{ height: 28, width: 28, marginRight: 8 }} />
            <Typography variant="h6" component="div">
              Nextube
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, justifyContent: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', maxWidth: 600, bgcolor: 'background.paper', borderRadius: 2, px: 2 }}>
              <input
                type="text"
                style={{ outline: 'none', flexGrow: 1, padding: '8px 16px', fontSize: 16 }}
                placeholder="Search"
                className='border border-gray-200 rounded-lg'
                onChange={(e)=>{setQuery(e.target.value)}}
              />
              <IconButton
                size="large"
                color="inherit"
                aria-label="search"
              >
                <Search />
              </IconButton>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              size="medium"
              edge="end"
              color="inherit"
              aria-label="profile"
            >
              <Avatar alt="Profile" src={profileImage} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
