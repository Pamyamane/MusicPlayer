import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import ProfileField from './ProfileField';

const UserProfileBanner = () => {
  return (
    <Box sx={{ mb: 3, display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          mb: 2,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'flex-start', md: 'center' },
          rowGap: 1,
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' } }}
        >
          Welcome back <span style={{ fontWeight: 'bold' }}>Devesh</span> !
        </Typography>
        <Typography
          variant="caption"
          sx={{ color: '#757575', fontSize: { xs: '0.75rem', sm: '0.85rem' } }}
        >
          Last login on 17 October 2024 at 10:12:30
        </Typography>
      </Box>

      <Box
        sx={{
          bgcolor: 'white',
          p: { xs: 2, sm: 3 },
          borderRadius: 2,
          boxShadow: 1,
        }}
      >
        <Grid container spacing={{ xs: 2, sm: 3 }}>
          <ProfileField xs={12} sm={6} md={4} label="Full Name :" value="Devesh Bhanudas Patelkar" />
          <ProfileField xs={12} sm={6} md={4} label="Email ID :" value="deveshpatelkar@icloud.com" />
          <ProfileField xs={12} sm={6} md={4} label="Department :" value="Information Technology" />
          <ProfileField xs={12} sm={6} md={2} label="Designation :" value="Trainee" />
          <ProfileField xs={6} sm={3} md={2} label="Group ID :" value="RM 185" />
          <ProfileField xs={6} sm={3} md={2} label="Joining Date :" value="03 October 2024" />
          <ProfileField xs={6} sm={3} md={2} label="Gender :" value="Male" />
          <ProfileField xs={6} sm={3} md={2} label="Blood Group :" value="O +" />
          <ProfileField xs={6} sm={3} md={2} label="Status :" value="Active" valueColor="#4caf50" />
        </Grid>
      </Box>
    </Box>
  );
};

export default UserProfileBanner;
