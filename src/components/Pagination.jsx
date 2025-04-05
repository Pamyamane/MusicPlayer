import React from 'react';
import { Box } from '@mui/material';

const Pagination = ({ count, activeIndex, sx = {} }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', ...sx }}>
      <Box sx={{ display: 'flex', gap: 1 }}>
        {[...Array(count)].map((_, i) => (
          <Box 
            key={i} 
            sx={{ 
              width: 8, 
              height: 8, 
              borderRadius: '50%', 
              bgcolor: i === activeIndex ? '#2196f3' : '#e0e0e0' 
            }} 
          />
        ))}
      </Box>
    </Box>
  );
};

export default Pagination;