import React, { useState } from 'react'
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { Close } from '@mui/icons-material';
import { MusicNote,Home,Sports } from '@mui/icons-material';
import { IconButton,Divider, Button } from '@mui/material';
const drawerWidth = 300;

const Sidebar = ({open,setOpen,setQuery}) => {
    const handleDrawerClose = () => {
        setOpen(false);
    };
  return (
    <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          backgroundColor:'white',
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        className="bg-white"
        variant="persistent"
        anchor="left"
        open={open}
      >
        <Button
           onClick={()=>setOpen(false)}
          >
            <Close />
          </Button>
        <Divider />
        <List>
          {[{text:"All",icon:<Home/>},{text:"Music",icon:<MusicNote/>}, {text:"Sports",icon:<Sports/>}, {text:"Entertainment",icon:<MusicNote/>}].map((item,index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={()=>{setQuery(item.text.toLowerCase())}}>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
  )
}

export default Sidebar