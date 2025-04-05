import React from 'react';
import { Box, Typography } from '@mui/material';

const TimeInfo = ({ isSmall }) => {
  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center',
      flexDirection: { xs: 'column', sm: 'row' },
      alignItems: { xs: 'flex-start', sm: 'center' },
      display: { xs: isSmall ? 'none' : 'flex', md: 'flex' }
    }}>
      <Typography variant="body2" sx={{ mr: 1, color: '#757575', fontSize: { xs: '12px', sm: '14px' } }}>
        Punch In: 10:00:00
      </Typography>
      <Typography variant="body2" sx={{ color: '#757575', fontSize: { xs: '12px', sm: '14px' } }}>
        Time Left: <span style={{ fontWeight: 'bold' }}>09:35</span>
      </Typography>
    </Box>
  );
};


export default TimeInfo;