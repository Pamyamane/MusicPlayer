import React from "react";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
} from "@mui/material";
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
  ExitToApp as LogoutIcon,
} from "@mui/icons-material";

const NavigationMenu = ({ onMobileClose }) => {
  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon />, selected: true },
    { text: "Leaves", icon: <TrackerIcon /> },
    { text: "Tracker", icon: <TrackerIcon /> },
    { text: "Employees", icon: <EmployeesIcon /> },
    { text: "Schedule", icon: <ScheduleIcon /> },
    { text: "My Documents", icon: <DocumentsIcon /> },
    { text: "Reimbursement", icon: <ReimbursementIcon /> },
    { text: "My Profile", icon: <ProfileIcon /> },
    { text: "Logout", icon: <LogoutIcon /> },
  ];

  return (
    <Box sx={{ flex: 1 }}>
      <List disablePadding>
        {menuItems.map((item, index) => (
          <ListItemButton
            key={item.text}
            selected={item.selected}
            onClick={() => onMobileClose()}
            sx={{
              px: 2,
              py: 1.2,
              borderRadius: 1,
              mx: 1,
              my: 0.5,
              color: "white",
              backgroundColor: item.selected
                ? "rgba(255,255,255,0.1)"
                : "transparent",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.08)",
              },
              "&.Mui-selected": {
                backgroundColor: "#333",
                "&:hover": {
                  backgroundColor: "#444",
                },
              },
            }}
          >
            <ListItemIcon sx={{ color: "white", minWidth: 35 }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                  {item.text}
                </Typography>
              }
            />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default NavigationMenu;
