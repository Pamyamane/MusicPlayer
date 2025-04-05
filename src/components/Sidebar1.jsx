import React from 'react';
import { 
  Avatar, Box, Button, Typography, List, ListItem, 
  ListItemIcon, ListItemText 
} from '@mui/material';
import { 
  Dashboard as DashboardIcon, 
  AssignmentInd as EmployeesIcon,
  Schedule as ScheduleIcon,
  Description as DocumentsIcon,
  MonetizationOn as ReimbursementIcon,
  Person as ProfileIcon,
  Business as OrganizationIcon,
  Announcement as UpdatesIcon,
  Inventory as AssetIcon,
  WorkOutline as RecruitmentIcon,
  AccessTime as AttendanceIcon,
  EventNote as TrackerIcon,
  KeyboardArrowRight as LogoutIcon
} from '@mui/icons-material';
import UserProfile from './UserProfile';
import NavigationMenu from './NavigationMenu';

const Sidebarnew = ({ onMobileClose = () => {} }) => {
  return (
    <Box sx={{ width: { xs: 240, lg: 170 }, bgcolor: '#292929', color: 'white', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Box sx={{ p: 2, borderBottom: '1px solid #3d3d3d' }}>
        <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
          <span style={{ color: '#4CAF50' }}>M</span>
          <span style={{ color: '#FF0000' }}>OON</span>
        </Typography>
        <Typography variant="caption" sx={{ color: '#aaa' }}>
          EMPLOYEE PORTAL
        </Typography>
      </Box>
      
      <UserProfile />
      <NavigationMenu onMobileClose={onMobileClose} />
      
      <Box sx={{ mt: 'auto', p: 1 }}>
        <Button 
          variant="outlined" 
          fullWidth 
          endIcon={<LogoutIcon />} 
          sx={{ color: 'white', borderColor: '#3d3d3d', justifyContent: 'space-between', textTransform: 'none' }}
        >
          Log Out
        </Button>
      </Box>
    </Box>
  );
};

export default Sidebarnew;