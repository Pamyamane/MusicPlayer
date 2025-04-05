import React from 'react';
import { Box, IconButton, Badge, Avatar } from '@mui/material';
import {
  Notifications as NotificationsIcon,
  Settings as SettingsIcon
} from '@mui/icons-material';

const UserControls = ({ isSmall }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <IconButton size="small" sx={{ mr: { xs: 0.5, sm: 1 } }}>
        <Badge variant="dot" color="error">
          <NotificationsIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
        </Badge>
      </IconButton>
      
      <IconButton size="small" sx={{ mr: { xs: 0.5, sm: 1 }, display: { xs: isSmall ? 'none' : 'flex', sm: 'flex' } }}>
        <SettingsIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
      </IconButton>
      
      <Avatar sx={{ width: { xs: 28, sm: 32 }, height: { xs: 28, sm: 32 } }} />
    </Box>
  );
};

export default UserControls;