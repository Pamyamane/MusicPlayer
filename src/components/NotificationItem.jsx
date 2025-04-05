import React from 'react';
import { ListItem, Box, Typography, Button, IconButton, Divider } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

const NotificationItem = ({ notification, isLast }) => {
  return (
    <React.Fragment>
      <ListItem 
        sx={{ 
          py: 1, 
          px: 2, 
          flexDirection: { xs: 'column', sm: 'row' }, 
          alignItems: { xs: 'flex-start', sm: 'center' } 
        }}
      >
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'flex-start', 
          flex: 1, 
          width: '100%',
          mb: { xs: 1, sm: 0 }
        }}>
          <Box 
            sx={{ 
              width: 8, 
              height: 8, 
              borderRadius: '50%', 
              bgcolor: notification.color,
              mr: 2,
              mt: 1
            }} 
          />
          <Box sx={{ flex: 1 }}>
            <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
              {notification.text}
            </Typography>
            <Typography variant="caption" sx={{ color: '#757575', display: 'block' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </Typography>
          </Box>
        </Box>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center',
          alignSelf: { xs: 'flex-end', sm: 'center' }
        }}>
          <Button sx={{ color: '#2196f3', mr: 1, p: { xs: 0, sm: 1 } }}>Action</Button>
          <IconButton size="small">
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
      </ListItem>
      {!isLast && <Divider />}
    </React.Fragment>
  );
};

export default NotificationItem;