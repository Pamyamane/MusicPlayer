import React from 'react';
import { Grid, Typography } from '@mui/material';

const ProfileField = ({ xs, sm, md, label, value, valueColor }) => {
  return (
    <Grid item xs={xs} sm={sm} md={md}>
      <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
        {label}
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{ color: valueColor || 'text.primary', fontWeight: 600 }}
      >
        {value}
      </Typography>
    </Grid>
  );
};

export default ProfileField;
