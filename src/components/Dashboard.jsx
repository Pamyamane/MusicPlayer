import React from 'react';
import { Box, Grid } from '@mui/material';
import UserProfileBanner from './UserProfileBanner';
import EmployeeOfTheMonth from './EmployeeOfTheMonth';
import MeetingsCard from './MeetingsCard';
import BirthdayCard from './BirthdayCard';
import NotificationsSection from './NotificationsSection';

const Dashboard = () => {
  return (
    <Box sx={{ flex: 1, p: { xs: 1, sm: 2, md: 3 }, overflow: 'auto' }}>
      <UserProfileBanner />
      
      <Grid container spacing={{ xs: 8, md: 12 }}>
        <Grid item xs={12} sm={6} md={4}>
          <EmployeeOfTheMonth />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MeetingsCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <BirthdayCard />
        </Grid>
      </Grid>
      
      <NotificationsSection />
    </Box>
  );
};


export default Dashboard;