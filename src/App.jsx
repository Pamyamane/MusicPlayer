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



// import React, { useState } from 'react';
// import { Box, useMediaQuery, Drawer, useTheme } from '@mui/material';
// import Sidebar from './components/Sidebar1';
// import Header from './components/Header';
// import Dashboard from './components/Dashboard';
// import Sidebarnew from './components/Sidebar1';


// const App = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
//   const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const toggleDrawer = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   return (
//     <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#f5f5f5' }}>
//       {/* Sidebar - Desktop view */}
//       {!isMobile && (
//         <Box sx={{ width: 170, flexShrink: 0 }}>
//           <Sidebarnew />
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
//         <Sidebarnew onMobileClose={toggleDrawer} />
//       </Drawer>
      
//       {/* Main Content */}
//       <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
//         <Header
//           isMobile={isMobile} 
//           isSmall={isSmall} 
//           toggleDrawer={toggleDrawer} 
//         />
//         <Dashboard />
//       </Box>
//     </Box>
//   );
// };

// export default App;





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


// import { Provider } from "react-redux";
// import Body from "./Components/Body";
// import appStore from "./Utils/appStore";

// function App() {
//   return (
//     <>
//     <Provider store={appStore}> <Body/> </Provider>  
//     </>
//   );
// }

// export default App;

import React, { useState } from 'react';
import { 
  Users, 
  Calendar, 
  FileText, 
  Activity, 
  Bell, 
  Settings, 
  LogOut, 
  Plus, 
  Search, 
  Eye,
  Edit,
  Trash2,
  User,
  Stethoscope,
  Bed,
  TrendingUp,

} from 'lucide-react';

// Mock Data
const mockData = {
  users: [
    { id: 1, name: 'Dr. Sarah Wilson', email: 'sarah.wilson@hospital.com', role: 'Doctor', department: 'Cardiology', phone: '+1-555-0101', status: 'active' },
    { id: 2, name: 'John Smith', email: 'john.smith@hospital.com', role: 'Patient', department: null, phone: '+1-555-0102', status: 'active' },
    { id: 3, name: 'Nurse Maria Garcia', email: 'maria.garcia@hospital.com', role: 'Nurse', department: 'Emergency', phone: '+1-555-0103', status: 'active' },
    { id: 4, name: 'Emily Johnson', email: 'emily.johnson@hospital.com', role: 'Patient', department: null, phone: '+1-555-0104', status: 'inactive' }
  ],
  appointments: [
    { id: 1, patientName: 'John Smith', doctorName: 'Dr. Sarah Wilson', date: '2025-07-21', time: '09:00', type: 'Consultation', status: 'scheduled' },
    { id: 2, patientName: 'Emily Johnson', doctorName: 'Dr. Michael Brown', date: '2025-07-21', time: '14:30', type: 'Follow-up', status: 'completed' },
    { id: 3, patientName: 'Robert Davis', doctorName: 'Dr. Sarah Wilson', date: '2025-07-22', time: '11:00', type: 'Check-up', status: 'scheduled' }
  ],
  doctors: [
    { id: 1, name: 'Dr. Sarah Wilson', specialty: 'Cardiology', experience: '12 years', patients: 156, rating: 4.9 },
    { id: 2, name: 'Dr. Michael Brown', specialty: 'Neurology', experience: '8 years', patients: 89, rating: 4.7 },
    { id: 3, name: 'Dr. Lisa Chen', specialty: 'Pediatrics', experience: '15 years', patients: 203, rating: 4.8 }
  ],
  stats: {
    totalPatients: 1247,
    totalDoctors: 45,
    todayAppointments: 23,
    availableBeds: 12
  }
};

// Header Component
const Header = ({ user, onLogout }) => (
  <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <Activity className="h-8 w-8 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-900">MediCare HMS</h1>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Bell className="h-5 w-5 text-gray-500 cursor-pointer hover:text-gray-700" />
        <Settings className="h-5 w-5 text-gray-500 cursor-pointer hover:text-gray-700" />
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <User className="h-4 w-4 text-white" />
          </div>
          <span className="text-sm font-medium text-gray-700">{user.name}</span>
        </div>
        <button
          onClick={onLogout}
          className="flex items-center space-x-1 text-gray-500 hover:text-gray-700"
        >
          <LogOut className="h-4 w-4" />
        </button>
      </div>
    </div>
  </header>
);

// Sidebar Component
const Sidebar = ({ activeTab, setActiveTab, userRole }) => {
  const adminMenuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Activity },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'appointments', label: 'Appointments', icon: Calendar },
    { id: 'doctors', label: 'Doctors', icon: Stethoscope },
    { id: 'patients', label: 'Patients', icon: User },
    { id: 'reports', label: 'Reports', icon: FileText }
  ];

  const userMenuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Activity },
    { id: 'appointments', label: 'My Appointments', icon: Calendar },
    { id: 'doctors', label: 'Doctors', icon: Stethoscope },
    { id: 'profile', label: 'Profile', icon: User }
  ];

  const menuItems = userRole === 'admin' ? adminMenuItems : userMenuItems;

  return (
    <aside className="bg-gray-900 text-white w-64 min-h-screen p-6">
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === item.id
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

// Stats Card Component
const StatsCard = ({ title, value, icon: Icon, color = 'blue', trend }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="text-3xl font-bold text-gray-900">{value}</p>
        {trend && (
          <div className="flex items-center mt-2">
            <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-sm text-green-500">{trend}</span>
          </div>
        )}
      </div>
      <div className={`p-3 rounded-full bg-${color}-100`}>
        <Icon className={`h-6 w-6 text-${color}-600`} />
      </div>
    </div>
  </div>
);

// Dashboard Component
const Dashboard = ({ userRole }) => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
      <div className="text-sm text-gray-500">
        {new Date().toLocaleDateString('en-US', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}
      </div>
    </div>

    {userRole === 'admin' && (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Patients"
          value={mockData.stats.totalPatients.toLocaleString()}
          icon={Users}
          color="blue"
          trend="+12% from last month"
        />
        <StatsCard
          title="Total Doctors"
          value={mockData.stats.totalDoctors}
          icon={Stethoscope}
          color="green"
        />
        <StatsCard
          title="Today's Appointments"
          value={mockData.stats.todayAppointments}
          icon={Calendar}
          color="purple"
        />
        <StatsCard
          title="Available Beds"
          value={mockData.stats.availableBeds}
          icon={Bed}
          color="orange"
        />
      </div>
    )}

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Appointments</h3>
        <div className="space-y-4">
          {mockData.appointments.slice(0, 3).map((appointment) => (
            <div key={appointment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">{appointment.patientName}</p>
                <p className="text-sm text-gray-600">{appointment.doctorName}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">{appointment.date}</p>
                <p className="text-sm text-gray-600">{appointment.time}</p>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                appointment.status === 'scheduled' ? 'bg-blue-100 text-blue-800' :
                appointment.status === 'completed' ? 'bg-green-100 text-green-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {appointment.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-4">
          <button className="flex flex-col items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
            <Plus className="h-6 w-6 text-blue-600 mb-2" />
            <span className="text-sm font-medium text-blue-900">New Appointment</span>
          </button>
          <button className="flex flex-col items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
            <User className="h-6 w-6 text-green-600 mb-2" />
            <span className="text-sm font-medium text-green-900">Add Patient</span>
          </button>
          <button className="flex flex-col items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
            <FileText className="h-6 w-6 text-purple-600 mb-2" />
            <span className="text-sm font-medium text-purple-900">Generate Report</span>
          </button>
          <button className="flex flex-col items-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
            <Bed className="h-6 w-6 text-orange-600 mb-2" />
            <span className="text-sm font-medium text-orange-900">Bed Management</span>
          </button>
        </div>
      </div>
    </div>
  </div>
);

// Users Management Component
const UsersManagement = () => {
  const [users, setUsers] = useState(mockData.users);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'all' || user.role.toLowerCase() === filterRole.toLowerCase();
    return matchesSearch && matchesRole;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Users Management</h2>
        <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Plus className="h-4 w-4" />
          <span>Add User</span>
        </button>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search users..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
          >
            <option value="all">All Roles</option>
            <option value="doctor">Doctor</option>
            <option value="nurse">Nurse</option>
            <option value="patient">Patient</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-700">Name</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Email</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Role</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Department</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <User className="h-4 w-4 text-white" />
                      </div>
                      <span className="font-medium text-gray-900">{user.name}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{user.email}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      user.role === 'Doctor' ? 'bg-green-100 text-green-800' :
                      user.role === 'Nurse' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{user.department || 'N/A'}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <button className="p-1 text-gray-400 hover:text-blue-600">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-green-600">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-red-600">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Appointments Component
const AppointmentsManagement = () => {
  const [appointments, setAppointments] = useState(mockData.appointments);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Appointments</h2>
        <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Plus className="h-4 w-4" />
          <span>New Appointment</span>
        </button>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-700">Patient</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Doctor</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Date</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Time</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Type</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900">{appointment.patientName}</td>
                  <td className="py-3 px-4 text-gray-600">{appointment.doctorName}</td>
                  <td className="py-3 px-4 text-gray-600">{appointment.date}</td>
                  <td className="py-3 px-4 text-gray-600">{appointment.time}</td>
                  <td className="py-3 px-4 text-gray-600">{appointment.type}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      appointment.status === 'scheduled' ? 'bg-blue-100 text-blue-800' :
                      appointment.status === 'completed' ? 'bg-green-100 text-green-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {appointment.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <button className="p-1 text-gray-400 hover:text-blue-600">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-green-600">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-red-600">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Doctors Component
const DoctorsManagement = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Doctors</h2>
        <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Plus className="h-4 w-4" />
          <span>Add Doctor</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockData.doctors.map((doctor) => (
          <div key={doctor.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <Stethoscope className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{doctor.name}</h3>
                <p className="text-sm text-gray-600">{doctor.specialty}</p>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Experience:</span>
                <span className="font-medium">{doctor.experience}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Patients:</span>
                <span className="font-medium">{doctor.patients}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Rating:</span>
                <span className="font-medium text-yellow-600">★ {doctor.rating}</span>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm">
                View Profile
              </button>
              <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Edit className="h-4 w-4 text-gray-600" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Login Component
const Login = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ email: '', password: '', role: 'admin' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple mock authentication
    const user = {
      name: credentials.role === 'admin' ? 'Admin User' : 'John Doe',
      email: credentials.email,
      role: credentials.role
    };
    onLogin(user);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Activity className="h-12 w-12 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">MediCare HMS</h1>
          <p className="text-gray-600 mt-2">Hospital Management System</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={credentials.email}
              onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              placeholder="Enter your password"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Login as</label>
            <select
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={credentials.role}
              onChange={(e) => setCredentials({ ...credentials, role: e.target.value })}
            >
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          <p>Demo Credentials:</p>
          <p>Email: admin@hospital.com | Password: admin123</p>
        </div>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
    setActiveTab('dashboard');
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard userRole={user.role} />;
      case 'users':
        return <UsersManagement />;
      case 'appointments':
        return <AppointmentsManagement />;
      case 'doctors':
        return <DoctorsManagement />;
      case 'patients':
        return <div className="text-center py-12 text-gray-500">Patients management component coming soon...</div>;
      case 'reports':
        return <div className="text-center py-12 text-gray-500">Reports component coming soon...</div>;
      case 'profile':
        return <div className="text-center py-12 text-gray-500">Profile component coming soon...</div>;
      default:
        return <Dashboard userRole={user.role} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={user} onLogout={handleLogout} />
      <div className="flex">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} userRole={user.role} />
        <main className="flex-1 p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default App;
