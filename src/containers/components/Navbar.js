import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Box, CssBaseline, makeStyles } from '@material-ui/core';
import Logo from '../../images/Logo_coloured.png';
import pages from '../../config/pages';

const useStyles = makeStyles((theme) => ({
  navLinks: {
    marginLeft: theme.spacing(2),
    display: "flex",
    justifyContent: "flex-end", 
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
    width: 50,
  },
  linkText: {
    textDecoration: "none",
    color: "#2D3353",
    fontSize: theme.typography.h1,
    marginLeft: theme.spacing(1),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
        <CssBaseline />
          <Toolbar>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Link to="/" className="navbar-logo">
                  <img 
                    alt="topLogo" 
                    className={classes.logo} 
                    src={Logo} 
                  />
                </Link>
              </Box>
              <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                  <div key={page.title} className={classes.navLinks}>
                    <Link to={`/${page.link}`} className={classes.linkText}>
                      {page.title}
                    </Link>
                  </div>
                ))}
            </Box>   
          </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}

export default Navbar
