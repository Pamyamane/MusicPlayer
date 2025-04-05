import React from 'react';
import { 
  Avatar, Box, Button, IconButton, Paper, Typography, InputBase, Badge 
} from '@mui/material';
import {
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  Settings as SettingsIcon,
  Menu as MenuIcon
} from '@mui/icons-material';
import SearchBar from './SearchBar';
import TimeInfo from './TimeInfo';
import PunchOutButton from './PunchOutButton';
import UserControls from './UserControls';

const Header = ({ isMobile, isSmall, toggleDrawer }) => {
  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      p: 1, 
      bgcolor: 'white', 
      justifyContent: 'space-between', 
      borderBottom: '1px solid #e0e0e0',
      flexWrap: isSmall ? 'wrap' : 'nowrap'
    }}>
      {isMobile && (
        <IconButton edge="start" color="inherit" onClick={toggleDrawer} sx={{ mr: 1 }}>
          <MenuIcon />
        </IconButton>
      )}
      
      <Typography sx={{ color: '#757575', display: { xs: isSmall ? 'none' : 'block', sm: 'block' } }}>
      <SearchBar isSmall={isSmall} />
      </Typography>
      
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 1,
        width: isSmall ? '100%' : 'auto',
        order: isSmall ? 2 : 0,
        mt: isSmall ? 1 : 0,
        justifyContent: isSmall ? 'space-between' : 'flex-end'
      }}>
        
        <TimeInfo isSmall={isSmall} />
        <PunchOutButton isSmall={isSmall} />
        <UserControls isSmall={isSmall} />
      </Box>
    </Box>
  );
};


export default Header;