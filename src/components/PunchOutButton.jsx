import React from 'react';
import { Button } from '@mui/material';

const PunchOutButton = ({ isSmall }) => {
  return (
    <Button 
      variant="contained" 
      sx={{ 
        bgcolor: '#e53935', 
        color: 'white', 
        borderRadius: 1, 
        px: { xs: 1, sm: 2 }, 
        py: 0.5, 
        fontSize: { xs: '10px', sm: '12px' },
        whiteSpace: 'nowrap',
        '&:hover': { bgcolor: '#d32f2f' }
      }}
    >
      PUNCH OUT
    </Button>
  );
};

export default PunchOutButton;