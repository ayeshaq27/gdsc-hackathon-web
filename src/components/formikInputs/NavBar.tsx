import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { SwipeableDrawer, List, ListItem, ListItemButton, ListItemText, Link as ALink } from '@mui/material';
import { Close } from '@mui/icons-material';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { Link, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const pages = [
  {
    title: 'Home',
    url: '/'
  },
  {
    title: 'About',
    url: '/#about'
  },
  {
    title: 'Application',
    url: '/#application'
  },
  {
    title: 'Sponsor',
    url: '/#sponsor'
  },
  {
    title: 'FAQs',
    url: '/#faq'
  }
];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [showBg, setShowBg] = React.useState<boolean>(false);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleHomeClick = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  useScrollPosition(({ currPos }) => {
    setShowBg(currPos.y < 0);
  });

  return (
    <AppBar position="fixed" elevation={showBg ? 1 : 0} sx={{
      background: showBg ? '#78AFF0)' : 'none',
      boxShadow: showBg ? '0 4px 8px rgba(0,0,0,0.1)' : 'none'
    }}>
      <Container maxWidth="lg">  
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
            <Link to='/'>
              <img 
                width='auto'
                height={20}
                src={`${process.env.PUBLIC_URL}/logoMobile.png`}
                alt="GDG logo"
              />
            </Link>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              height: 40,
              display: { xs: 'none', md: 'flex' }
            }}
          >
            <img 
              height={40}
              src={`${process.env.PUBLIC_URL}/apple-touch-icon.png`} 
              alt="GDG logo"/>
          </Typography>
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              height: 23.9,
              display: { xs: 'flex', flexGrow: 1, justifyContent: 'center', md: 'none' }
            }}
          >
          </Typography>
          
          <Box sx={{ flexGrow: 1, justifyContent: 'flex-end', display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                component={page.title === 'Home' ? 'button' : HashLink}
                to={page.url}
                smooth
                onClick={page.title === 'Home' ? handleHomeClick : undefined}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: 'inline-block', md: 'none' }, marginLeft: 'auto' }}>
            <IconButton
              size="large"
              aria-label="side menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <SwipeableDrawer
              onOpen={handleOpenNavMenu}
              anchor={'right'} // Change the drawer anchor to the right
              open={!!anchorElNav}
              PaperProps={{
                sx: {
                  backgroundColor: '#ffffff',
                  width: '100%' // Make the drawer full screen
                }
              }}
              onClose={handleCloseNavMenu}
            >
              <Box
                sx={{ 
                  width: '100%', // Make the drawer full screen
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100vh' // Ensure it takes the full height
                }}
                role="presentation"
                onClick={handleCloseNavMenu}
                onKeyDown={handleCloseNavMenu}
              >
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  paddingTop: '24px',
                  paddingLeft: '16px',
                  paddingRight: '16px', // Add padding to the right
                  maxWidth: '100%' // Ensure it takes the full width
                }}>
                  <img 
                    width={300} // Increased width
                    height='auto' // Increased height
                    src={'/logo.svg'} 
                    alt="GDSC logo"
                  />
                  <Close onClick={handleCloseNavMenu} sx={{color: 'black', marginLeft: 'auto'}}/>
                </Box>
                <List sx={{ width: '100%' }}>
                  {pages.map((text, index) => (
                    <ListItem key={text.title} disablePadding sx={{ justifyContent: 'center' }}>
                      <ListItemButton component={text.title === 'Home' ? 'button' : HashLink} to={text.url} smooth onClick={text.title === 'Home' ? handleHomeClick : undefined} sx={{ textAlign: 'center', padding: '16px 0' }}>
                        <ListItemText primary={text.title} sx={{ color: 'black', '& .MuiTypography-root': { fontSize: { xs: '2.5rem', sm: '2rem' } }, textAlign: 'center' }}/>
                      </ListItemButton>
                    </ListItem>
                  ))}
                  
                </List>
              </Box>
            </SwipeableDrawer>
          </Box>
          <Button color='secondary' className="bttnF" component={Link} to="/interest-form" variant="contained" sx={{display: { xs: 'none', md: 'flex' }, borderRadius: "40px"}}>
            Apply
          </Button>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;