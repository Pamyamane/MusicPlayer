import React from 'react';
import { Paper, InputBase } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

const SearchBar = ({ isSmall }) => {
  return (
    <Paper sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      borderRadius: 20, 
      px: 2, 
      py: 0.5,
      flexGrow: isSmall ? 1 : 0,
      maxWidth: isSmall ? 'none' : 200
    }}>
      <SearchIcon sx={{ color: '#757575', mr: 1 }} />
      <InputBase placeholder="Search..." sx={{ fontSize: '14px', width: '100%' }} />
    </Paper>
  );
};


export default SearchBar;