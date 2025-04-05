import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
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
  EventNote as TrackerIcon
} from '@mui/icons-material';

const NavigationMenu = ({ onMobileClose }) => {
  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon fontSize="small" />, selected: true },
    { text: 'Leaves', icon: <TrackerIcon fontSize="small" /> },
    { text: 'Tracker', icon: <TrackerIcon fontSize="small" /> },
    { text: 'Employees', icon: <EmployeesIcon fontSize="small" /> },
    { text: 'Schedule', icon: <ScheduleIcon fontSize="small" /> },
    { text: 'My Documents', icon: <DocumentsIcon fontSize="small" /> },
    { text: 'Reimbursement', icon: <ReimbursementIcon fontSize="small" /> },
    { text: 'My Profile', icon: <ProfileIcon fontSize="small" /> },
    { text: 'Organization', icon: <OrganizationIcon fontSize="small" /> },
    { text: 'Add News & Updates', icon: <UpdatesIcon fontSize="small" /> },
    { text: 'Asset', icon: <AssetIcon fontSize="small" /> },
    { text: 'Recruitment', icon: <RecruitmentIcon fontSize="small" /> },
    { text: 'Attendance', icon: <AttendanceIcon fontSize="small" /> }
  ];

  return (
    <List sx={{ py: 0, flex: 1 }}>
      {menuItems.map((item, index) => (
        <ListItem 
          button 
          key={item.text} 
          selected={item.selected}
          sx={item.selected ? { bgcolor: '#1e1e1e' } : {}}
          onClick={() => onMobileClose()}
        >
          <ListItemIcon sx={{ minWidth: 35, color: 'white' }}>
            {item.icon}
          </ListItemIcon>
          <ListItemText primary={item.text} primaryTypographyProps={{ fontSize: '14px' }} />
        </ListItem>
      ))}
    </List>
  );
};

export default NavigationMenu;