import React from 'react';
import { Box, Typography, Button, Card, List } from '@mui/material';
import NotificationItem from './NotificationItem';

const NotificationsSection = () => {
  const notifications = [
    { type: 'info', icon: 'info', color: '#2196f3', text: 'This is an informative message.' },
    { type: 'success', icon: 'check_circle', color: '#4caf50', text: 'This is a success message.' },
    { type: 'warning', icon: 'warning', color: '#ff9800', text: 'This is a warning message.' },
    { type: 'danger', icon: 'error', color: '#f44336', text: 'This is a danger message.' }
  ];

  return (
    <Box sx={{ mt: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6">
          Alert & Notification
        </Typography>
        <Button sx={{ color: '#2196f3', textTransform: 'none' }}>
          View all
        </Button>
      </Box>
      
      <Card sx={{ borderRadius: 2 }}>
        <List sx={{ p: 0 }}>
          {notifications.map((notification, index) => (
            <NotificationItem 
              key={index}
              notification={notification}
              isLast={index === notifications.length - 1}
            />
          ))}
        </List>
      </Card>
    </Box>
  );
};


export default NotificationsSection;