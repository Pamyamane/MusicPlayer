import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';

const UserProfile = () => {
  return (
    <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', borderBottom: '1px solid #3d3d3d' }}>
      <Avatar src="/path/to/profile.jpg" sx={{ width: 56, height: 56, mb: 1 }} />
      <Typography variant="subtitle2" sx={{ color: 'white', textAlign: 'center' }}>
        Devesh Patlkar
      </Typography>
      <Typography variant="caption" sx={{ color: '#aaa', textAlign: 'center' }}>
        Sr. Ideator
      </Typography>
      <Typography variant="caption" sx={{ color: '#aaa', fontSize: '10px', textAlign: 'center' }}>
        Information Technology Division
      </Typography>
      <Typography variant="caption" sx={{ color: '#aaa', fontSize: '10px', textAlign: 'center' }}>
        Time Limit (07:00)
      </Typography>
      <Typography variant="caption" sx={{ color: '#00bcd4', fontSize: '10px', textAlign: 'center', mt: 1 }}>
        Make-Up Time Required 00:35
      </Typography>
    </Box>
  );
};

export default UserProfile;