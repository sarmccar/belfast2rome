import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Box,
  CssBaseline,
  makeStyles,
} from "@material-ui/core";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Logo from "../../images/Logo_coloured.png";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import pages from "../../config/pages";
import useDeviceDetect from "../../hooks/useDeviceDetect";

const useStyles = makeStyles((theme) => ({
  navLinks: {
    margin: theme.spacing(2),
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
    padding: 5,
    fontSize: theme.typography.h1,
    "&:hover": {
      backgroundColor: "#bcd0e9",
      color: "white",
      borderRadius: 4,
    },
  },
  menuLinkText: {
    textDecoration: "none",
    color: "#2D3353",
    padding: 5,
    fontSize: theme.typography.h1,
  },
  listItem: {
    marginRight: 50,
  },
}));

function Navbar() {
  const classes = useStyles();
  const { isDesktop } = useDeviceDetect();

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const list = () => (
    <Box
      sx={{ width: "auto" }}
      role="presentation"
      onClick={handleDrawerClose}
      onKeyDown={handleDrawerClose}
    >
      <List disablePadding>
        {pages.map((page) => (
          <ListItem
            key={page.title}
            disablePadding
            className={classes.listItem}
          >
            <ListItemButton>
              <ListItemIcon>{page.icon}</ListItemIcon>
              <Link to={page.link} className={classes.menuLinkText}>
                <ListItemText primary={page.title} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Contact Us", "Donate"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <AppBar
        position="static"
        style={{ background: "transparent", boxShadow: "none" }}
      >
        <CssBaseline />
        <Toolbar>
          {isDesktop ? (
            <React.Fragment>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <Link to="/" className="navbar-logo">
                  <img alt="topLogo" className={classes.logo} src={Logo} />
                </Link>
              </Box>
              <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <div key={page.title} className={classes.navLinks}>
                    <Link to={page.link} className={classes.linkText}>
                      {page.title}
                    </Link>
                  </div>
                ))}
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ...(open && { display: "none" }) }}
              >
                <MenuIcon />
              </IconButton>
              <SwipeableDrawer
                anchor="left"
                open={open}
                onClose={handleDrawerClose}
                onOpen={handleDrawerOpen}
              >
                {list()}
              </SwipeableDrawer>
            </React.Fragment>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Navbar;
