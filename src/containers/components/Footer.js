import React from 'react';
import { Typography, Box, Grid, makeStyles, Divider } from '@material-ui/core';
import CopyrightIcon from '@material-ui/icons/Copyright';
import logo from '../../images/Logo_coloured.png';

const useStyles = makeStyles((theme) => ({
   logo: {
      width: 50,
    },
    container: {
        backgroundColor: 'white',
        height: 300,
        width: '100%',
    },
    grid: {
        marginTop: theme.spacing(3),
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    divider: {
        width: '98%',
    },
    typography: {
        fontSize: 10,
        marginLeft: 5,
        color: '#00000069',
    },
    icon: {
        fontSize: 12,
        marginTop: 1,
        color: '#00000069',
    }
  }));

const Footer = () => {
    const classes = useStyles();

    return (
        <Box className={classes.container}>
            <Grid sx={{ flexGrow: 1 }} container spacing={0} >
                <Grid item xs={12} className={classes.grid}>
                    <img alt="footer-logo" src={logo} className={classes.logo} />
                </Grid>
                <Grid item xs={12} className={classes.grid}>
                    <Divider className={classes.divider} />
                </Grid>
                <Grid item xs={12} className={classes.grid}>
                    {/* <a href='www.facebook.com'>
                        <img alt="fb-icon" src={FBIcon} />
                    </a>
                    <a href='www.facebook.com'>
                        <img alt="fb-icon" src={InstagramIcon} />
                    </a> */}
                </Grid>
                <Grid item xs={12} className={classes.grid}>
                    <CopyrightIcon className={classes.icon} />
                    <Typography className={classes.typography}> Copyright Belfast to Rome 2022. We can't wait to get in the water!</Typography>
                </Grid>
            </Grid>   
        </Box>
    );
}

export default Footer
