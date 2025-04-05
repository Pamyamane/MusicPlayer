import React from 'react';
import { Card, CardContent, Box, Typography, Avatar } from '@mui/material';
import Pagination from './Pagination';

const BirthdayCard = () => {
  return (
    <Card
    sx={{
      borderRadius: 2,
      height: '100%',
      width: { xs: '100%', sm: 350, md: 400 } // 👈 Same width as BirthdayCard
    }}
  >
  
      <CardContent sx={{ p: { xs: 1.5, sm: 2 } }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Happy Birthday
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Avatar
            src="/path/to/profile.jpg"
            sx={{ width: { xs: 60, sm: 80 }, height: { xs: 60, sm: 80 }, mb: 1 }}
          />
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            Devesh Patlkar
          </Typography>
          <Typography variant="body2" sx={{ color: '#757575', mb: 2 }}>
            10 February
          </Typography>

          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            Upcoming Birthday
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar sx={{ width: 40, height: 40, mr: 2 }} />
            <Box>
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                Devesh Patlkar
              </Typography>
              <Typography variant="caption" sx={{ color: '#757575' }}>
                14 February
              </Typography>
            </Box>
          </Box>

          <Pagination count={3} activeIndex={0} sx={{ mt: 3 }} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default BirthdayCard;
