// import React, { useState } from 'react';
// import { 
//   Avatar, 
//   Box, 
//   Button, 
//   Card, 
//   CardContent, 
//   Container, 
//   Divider, 
//   Grid, 
//   IconButton, 
//   List, 
//   ListItem, 
//   ListItemIcon, 
//   ListItemText, 
//   Paper, 
//   Typography, 
//   Badge,
//   AppBar,
//   Toolbar,
//   InputBase,
//   useMediaQuery,
//   Drawer,
//   useTheme
// } from '@mui/material';
// import { 
//   Dashboard as DashboardIcon, 
//   AssignmentInd as EmployeesIcon,
//   Schedule as ScheduleIcon,
//   Description as DocumentsIcon,
//   MonetizationOn as ReimbursementIcon,
//   Person as ProfileIcon,
//   Business as OrganizationIcon,
//   Announcement as UpdatesIcon,
//   Inventory as AssetIcon,
//   WorkOutline as RecruitmentIcon,
//   AccessTime as AttendanceIcon,
//   Search as SearchIcon,
//   Notifications as NotificationsIcon,
//   Settings as SettingsIcon,
//   EventNote as TrackerIcon,
//   KeyboardArrowRight as LogoutIcon,
//   Close as CloseIcon,
//   Menu as MenuIcon
// } from '@mui/icons-material';

// const App = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
//   const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const toggleDrawer = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   const SidebarContent = () => (
//     <Box sx={{ width: { xs: 240, lg: 170 }, bgcolor: '#292929', color: 'white', display: 'flex', flexDirection: 'column', height: '100%' }}>
//       <Box sx={{ p: 2, borderBottom: '1px solid #3d3d3d' }}>
//         <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
//           <span style={{ color: '#4CAF50' }}>M</span>
//           <span style={{ color: '#FF0000' }}>OON</span>
//         </Typography>
//         <Typography variant="caption" sx={{ color: '#aaa' }}>
//           EMPLOYEE PORTAL
//         </Typography>
//       </Box>
      
//       <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', borderBottom: '1px solid #3d3d3d' }}>
//         <Avatar src="/path/to/profile.jpg" sx={{ width: 56, height: 56, mb: 1 }} />
//         <Typography variant="subtitle2" sx={{ color: 'white', textAlign: 'center' }}>
//           Devesh Patlkar
//         </Typography>
//         <Typography variant="caption" sx={{ color: '#aaa', textAlign: 'center' }}>
//           Sr. Ideator
//         </Typography>
//         <Typography variant="caption" sx={{ color: '#aaa', fontSize: '10px', textAlign: 'center' }}>
//           Information Technology Division
//         </Typography>
//         <Typography variant="caption" sx={{ color: '#aaa', fontSize: '10px', textAlign: 'center' }}>
//           Time Limit (07:00)
//         </Typography>
//         <Typography variant="caption" sx={{ color: '#00bcd4', fontSize: '10px', textAlign: 'center', mt: 1 }}>
//           Make-Up Time Required 00:35
//         </Typography>
//       </Box>
      
//       <List sx={{ py: 0, flex: 1 }}>
//         <ListItem button selected sx={{ bgcolor: '#1e1e1e' }} onClick={() => isMobile && setDrawerOpen(false)}>
//           <ListItemIcon sx={{ minWidth: 35, color: 'white' }}>
//             <DashboardIcon fontSize="small" />
//           </ListItemIcon>
//           <ListItemText primary="Dashboard" primaryTypographyProps={{ fontSize: '14px' }} />
//         </ListItem>
//         {['Leaves', 'Tracker', 'Employees', 'Schedule', 'My Documents', 'Reimbursement', 
//           'My Profile', 'Organization', 'Add News & Updates', 'Asset', 'Recruitment', 'Attendance'].map((text, index) => (
//           <ListItem button key={text} onClick={() => isMobile && setDrawerOpen(false)}>
//             <ListItemIcon sx={{ minWidth: 35, color: 'white' }}>
//               {index === 0 || index === 1 ? <TrackerIcon fontSize="small" /> :
//                index === 2 ? <EmployeesIcon fontSize="small" /> :
//                index === 3 ? <ScheduleIcon fontSize="small" /> :
//                index === 4 ? <DocumentsIcon fontSize="small" /> :
//                index === 5 ? <ReimbursementIcon fontSize="small" /> :
//                index === 6 ? <ProfileIcon fontSize="small" /> :
//                index === 7 ? <OrganizationIcon fontSize="small" /> :
//                index === 8 ? <UpdatesIcon fontSize="small" /> :
//                index === 9 ? <AssetIcon fontSize="small" /> :
//                index === 10 ? <RecruitmentIcon fontSize="small" /> :
//                <AttendanceIcon fontSize="small" />}
//             </ListItemIcon>
//             <ListItemText primary={text} primaryTypographyProps={{ fontSize: '14px' }} />
//           </ListItem>
//         ))}
//       </List>
      
//       <Box sx={{ mt: 'auto', p: 1 }}>
//         <Button 
//           variant="outlined" 
//           fullWidth 
//           endIcon={<LogoutIcon />} 
//           sx={{ color: 'white', borderColor: '#3d3d3d', justifyContent: 'space-between', textTransform: 'none' }}
//         >
//           Log Out
//         </Button>
//       </Box>
//     </Box>
//   );

//   return (
//     <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#f5f5f5' }}>
//       {/* Sidebar - Desktop view */}
//       {!isMobile && (
//         <Box sx={{ width: 170, flexShrink: 0 }}>
//           <SidebarContent />
//         </Box>
//       )}
      
//       {/* Sidebar - Mobile drawer */}
//       <Drawer
//         anchor="left"
//         open={drawerOpen}
//         onClose={toggleDrawer}
//         sx={{
//           display: { xs: 'block', md: 'none' },
//           '& .MuiDrawer-paper': { width: '80%', maxWidth: 280 },
//         }}
//       >
//         <SidebarContent />
//       </Drawer>
      
//       {/* Main Content */}
//       <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
//         {/* Top Bar */}
//         <Box sx={{ 
//           display: 'flex', 
//           alignItems: 'center', 
//           p: 1, 
//           bgcolor: 'white', 
//           justifyContent: 'space-between', 
//           borderBottom: '1px solid #e0e0e0',
//           flexWrap: isSmall ? 'wrap' : 'nowrap'
//         }}>
//           {isMobile && (
//             <IconButton edge="start" color="inherit" onClick={toggleDrawer} sx={{ mr: 1 }}>
//               <MenuIcon />
//             </IconButton>
//           )}
          
//           <Typography sx={{ color: '#757575', display: { xs: isSmall ? 'none' : 'block', sm: 'block' } }}>
//             Homepage
//           </Typography>
          
//           <Box sx={{ 
//             display: 'flex', 
//             alignItems: 'center',
//             flexWrap: 'wrap',
//             gap: 1,
//             width: isSmall ? '100%' : 'auto',
//             order: isSmall ? 2 : 0,
//             mt: isSmall ? 1 : 0,
//             justifyContent: isSmall ? 'space-between' : 'flex-end'
//           }}>
//             <Paper sx={{ 
//               display: 'flex', 
//               alignItems: 'center', 
//               borderRadius: 20, 
//               px: 2, 
//               py: 0.5,
//               flexGrow: isSmall ? 1 : 0,
//               maxWidth: isSmall ? 'none' : 200
//             }}>
//               <SearchIcon sx={{ color: '#757575', mr: 1 }} />
//               <InputBase placeholder="Search..." sx={{ fontSize: '14px', width: '100%' }} />
//             </Paper>
            
//             <Box sx={{ 
//               display: 'flex', 
//               alignItems: 'center',
//               flexDirection: { xs: 'column', sm: 'row' },
//               alignItems: { xs: 'flex-start', sm: 'center' },
//               display: { xs: isSmall ? 'none' : 'flex', md: 'flex' }
//             }}>
//               <Typography variant="body2" sx={{ mr: 1, color: '#757575', fontSize: { xs: '12px', sm: '14px' } }}>
//                 Punch In: 10:00:00
//               </Typography>
//               <Typography variant="body2" sx={{ color: '#757575', fontSize: { xs: '12px', sm: '14px' } }}>
//                 Time Left: <span style={{ fontWeight: 'bold' }}>09:35</span>
//               </Typography>
//             </Box>
            
//             <Button 
//               variant="contained" 
//               sx={{ 
//                 bgcolor: '#e53935', 
//                 color: 'white', 
//                 borderRadius: 1, 
//                 px: { xs: 1, sm: 2 }, 
//                 py: 0.5, 
//                 fontSize: { xs: '10px', sm: '12px' },
//                 whiteSpace: 'nowrap',
//                 '&:hover': { bgcolor: '#d32f2f' }
//               }}
//             >
//               PUNCH OUT
//             </Button>
            
//             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//               <IconButton size="small" sx={{ mr: { xs: 0.5, sm: 1 } }}>
//                 <Badge variant="dot" color="error">
//                   <NotificationsIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
//                 </Badge>
//               </IconButton>
              
//               <IconButton size="small" sx={{ mr: { xs: 0.5, sm: 1 }, display: { xs: isSmall ? 'none' : 'flex', sm: 'flex' } }}>
//                 <SettingsIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
//               </IconButton>
              
//               <Avatar sx={{ width: { xs: 28, sm: 32 }, height: { xs: 28, sm: 32 } }} />
//             </Box>
//           </Box>
//         </Box>
        
//         {/* Content */}
//         <Box sx={{ flex: 1, p: { xs: 1, sm: 2, md: 3 }, overflow: 'auto' }}>
//           {/* Welcome Header */}
//           <Box sx={{ mb: 3, display: 'flex', flexDirection: 'column' }}>
//             <Box sx={{ mb: 1, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'flex-start', sm: 'center' } }}>
//               <Typography variant="h5" sx={{ mb: { xs: 0.5, sm: 0 } }}>
//                 Welcome back <span style={{ fontWeight: 'bold' }}>Devesh!</span>
//               </Typography>
//               <Typography variant="caption" sx={{ ml: { xs: 0, sm: 2 }, color: '#757575' }}>
//                 Last login on 17 October 2024 at 10:12:30
//               </Typography>
//             </Box>
            
//             <Box sx={{ bgcolor: 'white', p: { xs: 1.5, sm: 2 }, borderRadius: 2 }}>
//               <Grid container spacing={{ xs: 1, sm: 2 }}>
//                 <Grid item xs={12} sm={6} md={4}>
//                   <Box>
//                     <Typography variant="caption" sx={{ color: '#757575' }}>Full Name :</Typography>
//                     <Typography variant="body2" sx={{ wordBreak: 'break-word' }}>Devesh Shrinivasa Patlkar</Typography>
//                   </Box>
//                 </Grid>
                
//                 <Grid item xs={12} sm={6} md={4}>
//                   <Box>
//                     <Typography variant="caption" sx={{ color: '#757575' }}>Email ID :</Typography>
//                     <Typography variant="body2" sx={{ wordBreak: 'break-word' }}>deveshpatlkar@icloud.com</Typography>
//                   </Box>
//                 </Grid>
                
//                 <Grid item xs={12} sm={6} md={4}>
//                   <Box>
//                     <Typography variant="caption" sx={{ color: '#757575' }}>Department :</Typography>
//                     <Typography variant="body2">Information Technology</Typography>
//                   </Box>
//                 </Grid>
                
//                 <Grid item xs={12} sm={6} md={2}>
//                   <Box>
//                     <Typography variant="caption" sx={{ color: '#757575' }}>Designation :</Typography>
//                     <Typography variant="body2">Ideator</Typography>
//                   </Box>
//                 </Grid>
                
//                 <Grid item xs={6} sm={3} md={2}>
//                   <Box>
//                     <Typography variant="caption" sx={{ color: '#757575' }}>Office ID :</Typography>
//                     <Typography variant="body2">MN 888</Typography>
//                   </Box>
//                 </Grid>
                
//                 <Grid item xs={6} sm={3} md={2}>
//                   <Box>
//                     <Typography variant="caption" sx={{ color: '#757575' }}>Joining Date :</Typography>
//                     <Typography variant="body2">23 October 2024</Typography>
//                   </Box>
//                 </Grid>
                
//                 <Grid item xs={6} sm={3} md={2}>
//                   <Box>
//                     <Typography variant="caption" sx={{ color: '#757575' }}>Gender :</Typography>
//                     <Typography variant="body2">Male</Typography>
//                   </Box>
//                 </Grid>
                
//                 <Grid item xs={6} sm={3} md={2}>
//                   <Box>
//                     <Typography variant="caption" sx={{ color: '#757575' }}>Blood Group :</Typography>
//                     <Typography variant="body2">O +</Typography>
//                   </Box>
//                 </Grid>
                
//                 <Grid item xs={6} sm={3} md={2}>
//                   <Box>
//                     <Typography variant="caption" sx={{ color: '#757575' }}>Status :</Typography>
//                     <Typography variant="body2" sx={{ color: '#4caf50' }}>Active</Typography>
//                   </Box>
//                 </Grid>
//               </Grid>
//             </Box>
//           </Box>
          
//           {/* Cards Row */}
//           <Grid container spacing={{ xs: 2, md: 3 }}>
//             {/* Employee of the Month Card */}
//             <Grid item xs={12} sm={6} md={4}>
//               <Card sx={{ borderRadius: 2, bgcolor: '#ffebee', height: '100%' }}>
//                 <CardContent sx={{ textAlign: 'center', position: 'relative', p: { xs: 1.5, sm: 2 } }}>
//                   <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                     <Avatar 
//                       src="/path/to/profile.jpg" 
//                       sx={{ width: { xs: 60, sm: 80 }, height: { xs: 60, sm: 80 }, mb: 1, border: '3px solid white' }} 
//                     />
//                     <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
//                       Devesh Patlkar
//                     </Typography>
//                     <Typography variant="body2" sx={{ color: '#757575', mb: 2 }}>
//                       Sr. Ideator
//                     </Typography>
                    
//                     <Typography variant="h6" sx={{ color: '#1565c0', fontStyle: 'italic', mb: 1, fontSize: { xs: '1rem', sm: '1.25rem' } }}>
//                       Congratulations
//                     </Typography>
//                     <Typography variant="subtitle1" sx={{ color: '#1565c0', fontWeight: 'bold' }}>
//                       Fast and Furious
//                     </Typography>
//                     <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
//                       EMPLOYEE OF THE MONTH
//                     </Typography>
//                     <Typography variant="body2" sx={{ color: '#757575' }}>
//                       OCTOBER 2024
//                     </Typography>
                    
//                     <Typography variant="caption" sx={{ mt: 2, color: '#757575', maxWidth: '80%' }}>
//                       Your dedication and outstanding hard work is recognized.
//                     </Typography>
//                   </Box>
//                 </CardContent>
//               </Card>
//             </Grid>
            
//             {/* Meetings Card */}
//             <Grid item xs={12} sm={6} md={4}>
//               <Card sx={{ borderRadius: 2, height: '100%' }}>
//                 <CardContent sx={{ p: { xs: 1.5, sm: 2 } }}>
//                   <Typography variant="h6" sx={{ mb: 2 }}>
//                     Today's Meetings
//                   </Typography>
                  
//                   <Box sx={{ mb: 3 }}>
//                     <Typography variant="subtitle1" sx={{ fontWeight: 'bold', fontSize: { xs: '0.9rem', sm: '1rem' } }}>
//                       10:00 AM - 10:30 AM
//                     </Typography>
//                     <Typography variant="body2">
//                       Meeting Office with HR Team
//                     </Typography>
//                     <Typography variant="caption" sx={{ color: '#757575' }}>
//                       Suggest improvements to make HR dept more efficient
//                     </Typography>
//                   </Box>
                  
//                   <Box>
//                     <Typography variant="subtitle1" sx={{ fontWeight: 'bold', fontSize: { xs: '0.9rem', sm: '1rem' } }}>
//                       03:00 PM - 04:30 PM
//                     </Typography>
//                     <Typography variant="body2">
//                       Meeting Office with HR Team
//                     </Typography>
//                     <Typography variant="caption" sx={{ color: '#757575' }}>
//                       Suggest improvements to make HR dept more efficient
//                     </Typography>
//                   </Box>
                  
//                   <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
//                     <Box sx={{ display: 'flex', gap: 1 }}>
//                       {[0, 1, 2, 3].map((i) => (
//                         <Box 
//                           key={i} 
//                           sx={{ 
//                             width: 8, 
//                             height: 8, 
//                             borderRadius: '50%', 
//                             bgcolor: i === 0 ? '#2196f3' : '#e0e0e0' 
//                           }} 
//                         />
//                       ))}
//                     </Box>
//                   </Box>
//                 </CardContent>
//               </Card>
//             </Grid>
            
//             {/* Birthday Card */}
//             <Grid item xs={12} sm={6} md={4}>
//               <Card sx={{ borderRadius: 2, height: '100%' }}>
//                 <CardContent sx={{ p: { xs: 1.5, sm: 2 } }}>
//                   <Typography variant="h6" sx={{ mb: 2 }}>
//                     Happy Birthday
//                   </Typography>
                  
//                   <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                     <Avatar 
//                       src="/path/to/profile.jpg" 
//                       sx={{ width: { xs: 60, sm: 80 }, height: { xs: 60, sm: 80 }, mb: 1 }} 
//                     />
//                     <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
//                       Devesh Patlkar
//                     </Typography>
//                     <Typography variant="body2" sx={{ color: '#757575', mb: 2 }}>
//                       10 February
//                     </Typography>
                    
//                     <Typography variant="subtitle1" sx={{ mb: 2 }}>
//                       Upcoming Birthday
//                     </Typography>
                    
//                     <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                       <Avatar sx={{ width: 40, height: 40, mr: 2 }} />
//                       <Box>
//                         <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
//                           Devesh Patlkar
//                         </Typography>
//                         <Typography variant="caption" sx={{ color: '#757575' }}>
//                           14 February
//                         </Typography>
//                       </Box>
//                     </Box>
                    
//                     <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
//                       <Box sx={{ display: 'flex', gap: 1 }}>
//                         {[0, 1, 2].map((i) => (
//                           <Box 
//                             key={i} 
//                             sx={{ 
//                               width: 8, 
//                               height: 8, 
//                               borderRadius: '50%', 
//                               bgcolor: i === 0 ? '#2196f3' : '#e0e0e0' 
//                             }} 
//                           />
//                         ))}
//                       </Box>
//                     </Box>
//                   </Box>
//                 </CardContent>
//               </Card>
//             </Grid>
//           </Grid>
          
//           {/* Notifications Section */}
//           <Box sx={{ mt: 3 }}>
//             <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
//               <Typography variant="h6">
//                 Alert & Notification
//               </Typography>
//               <Button sx={{ color: '#2196f3', textTransform: 'none' }}>
//                 View all
//               </Button>
//             </Box>
            
//             <Card sx={{ borderRadius: 2 }}>
//               <List sx={{ p: 0 }}>
//                 {[
//                   { type: 'info', icon: 'info', color: '#2196f3', text: 'This is an informative message.' },
//                   { type: 'success', icon: 'check_circle', color: '#4caf50', text: 'This is a success message.' },
//                   { type: 'warning', icon: 'warning', color: '#ff9800', text: 'This is a warning message.' },
//                   { type: 'danger', icon: 'error', color: '#f44336', text: 'This is a danger message.' }
//                 ].map((notification, index) => (
//                   <React.Fragment key={index}>
//                     <ListItem 
//                       sx={{ 
//                         py: 1, 
//                         px: 2, 
//                         flexDirection: { xs: 'column', sm: 'row' }, 
//                         alignItems: { xs: 'flex-start', sm: 'center' } 
//                       }}
//                     >
//                       <Box sx={{ 
//                         display: 'flex', 
//                         alignItems: 'flex-start', 
//                         flex: 1, 
//                         width: '100%',
//                         mb: { xs: 1, sm: 0 }
//                       }}>
//                         <Box 
//                           sx={{ 
//                             width: 8, 
//                             height: 8, 
//                             borderRadius: '50%', 
//                             bgcolor: notification.color,
//                             mr: 2,
//                             mt: 1
//                           }} 
//                         />
//                         <Box sx={{ flex: 1 }}>
//                           <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
//                             {notification.text}
//                           </Typography>
//                           <Typography variant="caption" sx={{ color: '#757575', display: 'block' }}>
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
//                           </Typography>
//                         </Box>
//                       </Box>
//                       <Box sx={{ 
//                         display: 'flex', 
//                         alignItems: 'center',
//                         alignSelf: { xs: 'flex-end', sm: 'center' }
//                       }}>
//                         <Button sx={{ color: '#2196f3', mr: 1, p: { xs: 0, sm: 1 } }}>Action</Button>
//                         <IconButton size="small">
//                           <CloseIcon fontSize="small" />
//                         </IconButton>
//                       </Box>
//                     </ListItem>
//                     {index < 3 && <Divider />}
//                   </React.Fragment>
//                 ))}
//               </List>
//             </Card>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default App;



import React, { useState } from 'react';
import { Box, useMediaQuery, Drawer, useTheme } from '@mui/material';
import Sidebar from './components/Sidebar1';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Sidebarnew from './components/Sidebar1';


const App = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#f5f5f5' }}>
      {/* Sidebar - Desktop view */}
      {!isMobile && (
        <Box sx={{ width: 170, flexShrink: 0 }}>
          <Sidebarnew />
        </Box>
      )}
      
      {/* Sidebar - Mobile drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { width: '80%', maxWidth: 280 },
        }}
      >
        <Sidebarnew onMobileClose={toggleDrawer} />
      </Drawer>
      
      {/* Main Content */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <Header
          isMobile={isMobile} 
          isSmall={isSmall} 
          toggleDrawer={toggleDrawer} 
        />
        <Dashboard />
      </Box>
    </Box>
  );
};

export default App;





// import React, { useState, useEffect, useRef } from 'react';
// import { Container, Row, Col } from 'react-bootstrap';

// import './App.css';
// import Sidebar from './components/Sidebar';
// import MusicList from './components/MusicList';
// import Player from './components/Player';
// import { musicData } from './data/musicData';

// function App() {
//   const [activeTab, setActiveTab] = useState('forYou');
//   const [currentTrack, setCurrentTrack] = useState(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [recentlyPlayed, setRecentlyPlayed] = useState([]);
//   const [favorites, setFavorites] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredTracks, setFilteredTracks] = useState(musicData);
//   const [showSidebar, setShowSidebar] = useState(false);
//   const audioRef = useRef(new Audio());


//   useEffect(() => {
//     const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
//     setFavorites(storedFavorites);
//   }, []);


//   useEffect(() => {
//     const storedRecentlyPlayed = JSON.parse(sessionStorage.getItem('recentlyPlayed')) || [];
//     setRecentlyPlayed(storedRecentlyPlayed);
//   }, []);


//   useEffect(() => {
//     if (currentTrack) {
//       audioRef.current.src = currentTrack.musicUrl;
//       if (isPlaying) {
//         audioRef.current.play().catch(error => {
//           console.error("Error playing audio:", error);
         
//         });
//       } else {
//         audioRef.current.pause();
//       }
//     }
//     return () => {
//       audioRef.current.pause();
//     };
//   }, [currentTrack, isPlaying]);

  
//   useEffect(() => {
//     if (searchTerm.trim() === '') {
//       setFilteredTracks(musicData);
//     } else {
//       const filtered = musicData.filter(track => 
//         track.title.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       setFilteredTracks(filtered);
//     }
//   }, [searchTerm]);


//   const updateRecentlyPlayed = (track) => {
//     const updatedRecentlyPlayed = [track, ...recentlyPlayed.filter(t => t.id !== track.id)]
//       .slice(0, 10);
//     setRecentlyPlayed(updatedRecentlyPlayed);
//     sessionStorage.setItem('recentlyPlayed', JSON.stringify(updatedRecentlyPlayed));
//   };


//   const toggleFavorite = (trackId) => {
//     let updatedFavorites;
//     if (favorites.some(track => track.id === trackId)) {
//       updatedFavorites = favorites.filter(track => track.id !== trackId);
//     } else {
//       const trackToAdd = musicData.find(track => track.id === trackId);
//       updatedFavorites = [...favorites, trackToAdd];
//     }
//     setFavorites(updatedFavorites);
//     localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
//   };

  
//   const handleTrackSelect = (track) => {
//     setCurrentTrack(track);
//     setIsPlaying(true);
//     updateRecentlyPlayed(track);
//   };

  
//   const getTracksForActiveTab = () => {
//     switch (activeTab) {
//       case 'favorites':
//         return favorites;
//       case 'recentlyPlayed':
//         return recentlyPlayed;
//       default:
//         return filteredTracks;
//     }
//   };

//   return (
//     <div 
//       className="app min-vh-100 d-flex flex-column" 
//       style={{
//         background: currentTrack 
//           ? `linear-gradient(to bottom, ${currentTrack.color}, #121212)`
//           : 'linear-gradient(to bottom, #404040, #121212)',
//         transition: 'background 0.5s ease',
//         color: 'white'
//       }}
//     >
//       <Container fluid className="flex-grow-1 d-flex flex-column p-0">
//         <Row className="flex-grow-1 m-0">
//           <Col 
//             md={3} 
//             className={`sidebar-container p-0 bg-dark bg-opacity-25 ${showSidebar ? 'show' : 'd-none d-md-block'}`}
//             style={{ maxWidth: '250px' }}
//           >
//             <Sidebar
//               activeTab={activeTab} 
//               setActiveTab={setActiveTab}
//               searchTerm={searchTerm}
//               setSearchTerm={setSearchTerm}
//               toggleSidebar={() => setShowSidebar(false)}
//             />
//           </Col>
//           <Col className="content-container p-3 overflow-auto">
//             <MusicList
//               tracks={getTracksForActiveTab()}
//               currentTrack={currentTrack}
//               onTrackSelect={handleTrackSelect}
//               favorites={favorites}
//               toggleFavorite={toggleFavorite}
//               activeTab={activeTab}
//               toggleSidebar={() => setShowSidebar(true)}
//             />
//           </Col>
//         </Row>
//         <Row className="player-container m-0 bg-dark bg-opacity-25" style={{ height: '90px' }}>
//           <Col>
//             <Player
//               currentTrack={currentTrack}
//               isPlaying={isPlaying}
//               setIsPlaying={setIsPlaying}
//               audioRef={audioRef}
//               onNextTrack={() => {
//                 const tracks = getTracksForActiveTab();
//                 const currentIndex = tracks.findIndex(track => track.id === currentTrack?.id);
//                 if (currentIndex !== -1 && currentIndex < tracks.length - 1) {
//                   handleTrackSelect(tracks[currentIndex + 1]);
//                 }
//               }}
//               onPrevTrack={() => {
//                 const tracks = getTracksForActiveTab();
//                 const currentIndex = tracks.findIndex(track => track.id === currentTrack?.id);
//                 if (currentIndex > 0) {
//                   handleTrackSelect(tracks[currentIndex - 1]);
//                 }
//               }}
//             />
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default App;