import React from 'react';
import { Card, CardContent, Box, Avatar, Typography } from '@mui/material';

const EmployeeOfTheMonth = () => {
  return (
    <Card sx={{ borderRadius: 2, bgcolor: '#ffebee', height: '100%' }}>
      <CardContent sx={{ textAlign: 'center', position: 'relative', p: { xs: 1.5, sm: 2 } }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Avatar 
            src="/path/to/profile.jpg" 
            sx={{ width: { xs: 60, sm: 80 }, height: { xs: 60, sm: 80 }, mb: 1, border: '3px solid white' }} 
          />
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            Devesh Patlkar
          </Typography>
          <Typography variant="body2" sx={{ color: '#757575', mb: 2 }}>
            Sr. Ideator
          </Typography>
          
          <Typography variant="h6" sx={{ color: '#1565c0', fontStyle: 'italic', mb: 1, fontSize: { xs: '1rem', sm: '1.25rem' } }}>
            Congratulations
          </Typography>
          <Typography variant="subtitle1" sx={{ color: '#1565c0', fontWeight: 'bold' }}>
            Fast and Furious
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
            EMPLOYEE OF THE MONTH
          </Typography>
          <Typography variant="body2" sx={{ color: '#757575' }}>
            OCTOBER 2024
          </Typography>
          
          <Typography variant="caption" sx={{ mt: 2, color: '#757575', maxWidth: '80%' }}>
            Your dedication and outstanding hard work is recognized.
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};


export default EmployeeOfTheMonth;