// import React from 'react';
// import './NavTabs.css'
// import { NavLink } from 'react-router-dom';
import * as React from 'react';
// import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useStyles } from '../../style';
import { NavLink } from 'react-router-dom';

// import './DrawerAppBar.css'
// import { useTheme } from '@mui/material/styles';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Portfolio', 'Contact'];



function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const classes = useStyles();


  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box className={classes.grey} onClick={handleDrawerToggle} sx={{ textAlign: 'center', }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        JONATHAN GREEN

      </Typography>

      <Divider />
      <List sx={{ color: 'black' }}>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} color='black' />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', m: 10 }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar className={classes.grey}>

          <Typography
            variant="h2"
            component="div"
            sx={{ flexGrow: 1, my: 1, display: { xs: 'flex', sm: 'block' }, textAlign: 'left', color: 'black' }}
          >
            JONATHAN GREEN
            <Typography variant="h4" sx={{ my: 0, ml: 17.5, display: { xs: 'none' } }} >
              FRONT-END DEVELOPER
            </Typography>
          </Typography>

          <Box sx={{ pr: 2, display: { xs: 'none', lg: 'block' } }}>
            {navItems.map((item) => (
              <NavLink 
                to={`/${item.toLowerCase()}`} 
                key={item} 
                style={{color: 'black', textDecoration: 'none', paddingRight: '10px', fontSize: '2rem'}}
              >
                {item}
              </NavLink>
            ))}
          </Box >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { lg: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  )
}
export default DrawerAppBar;

// PREVIOUS CODE:

{/* <ul className="nav nav-tabs">
  <li className="nav-item">
    <NavLink
      to="/"
      end
      className={({ isActive }) =>
        isActive ? 'nav-link active' : 'nav-link'
      }
    // style={({isActive}) => {
    //   return{
    //    fontWeight: isActive ? "bold" : "",
    //    color: isActive? "Green" : "blue",
    //   };
    //  }}
    >
      Home
    </NavLink>
  </li>
  <li className="nav-item">
    <NavLink
      to="Portfolio"
      className={({ isActive }) =>
        isActive ? 'nav-link active' : 'nav-link'
      }

    // style={({isActive}) => {
    //  return{
    //   fontWeight: isActive ? "bold" : "",
    //   color: isActive? "Green" : "blue",
    //  };
    // }}
    >
      Portfolio
    </NavLink>
  </li>
  <li className="nav-item">
    <NavLink
      to="Contact"
      className={({ isActive }) =>
        isActive ? 'nav-link active' : 'nav-link'
      }
    // style={({isActive}) => {
    //   return{
    //    fontWeight: isActive ? "bold" : "",
    //    color: isActive? "Green" : "blue",
    //   };
    //  }}
    >
      Contact
    </NavLink>
  </li>

</ul> */}
