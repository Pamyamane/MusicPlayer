import React from 'react';
import { Card, CardContent, Box, Typography } from '@mui/material';
import Pagination from './Pagination';

const MeetingsCard = () => {
  const meetings = [
    {
      time: "10:00 AM - 10:30 AM",
      title: "Meeting Office with HR Team",
      description: "Suggest improvements to make HR dept more efficient"
    },
    {
      time: "03:00 PM - 04:30 PM",
      title: "Meeting Office with HR Team",
      description: "Suggest improvements to make HR dept more efficient"
    }
  ];

  return (
    <Card
      sx={{
        borderRadius: 2,
        width: '100%',
        maxWidth: { xs: '100%', sm: 350, md: 400 },
        height: '100%',
      }}
    >
      <CardContent sx={{ p: { xs: 1.5, sm: 2 } }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Today's Meetings
        </Typography>

        {meetings.map((meeting, index) => (
          <Box sx={{ mb: index < meetings.length - 1 ? 3 : 0 }} key={index}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '0.85rem', sm: '1rem' },
              }}
            >
              {meeting.time}
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem' } }}
            >
              {meeting.title}
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: '#757575', fontSize: { xs: '0.7rem', sm: '0.8rem' } }}
            >
              {meeting.description}
            </Typography>
          </Box>
        ))}

        <Pagination count={4} activeIndex={0} sx={{ mt: 3 }} />
      </CardContent>
    </Card>
  );
};

export default MeetingsCard;
