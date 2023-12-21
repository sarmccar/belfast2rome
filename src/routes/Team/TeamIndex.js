import pageDetails from "../../config/page-details";
import { Typography, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import clsx from 'clsx';
import useDeviceDetect from '../../hooks/useDeviceDetect';
import React from "react";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "#2D3353",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 50,
    marginBottom: 50,
  },
  backGround: {
    height: "100%",
    background:
      "linear-gradient(180deg, #0E9E61 40.91%, rgba(14, 158, 97, 0.179447) 87.78%, rgba(14, 158, 97, 0) 100%)",
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
  },
  lightBackground: {
    background: "#f3f3f3",
    borderRadius: 44,
    width: "100%",
  },
  darkBackground: {
    background: "rgba(45, 51, 83, 0.17)",
    borderRadius: 44,
    width: "100%",
  },
  imageStyle: {
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    borderRadius: 200,
    height: 200,
    width: 200,
  },
  sectionTitle: {
    color: "#2D3353",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 40,
    marginLeft: 50,
  },
  centerItem: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    marginLeft: 0,
  },
  nameTitle: {
    color: "#2D3353",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 30,
  },
  nameSubtitle: {
    color: "#747474",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 20,
  },
  nameDetails: {
    color: "#2D3353",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 20,
    marginTop: 30,
  },
}));

const TeamIndex = () => {
  const classes = useStyles();
  const theTeam = pageDetails.theTeam;
  const { isDesktop } = useDeviceDetect();

  return (
    <React.Fragment>
      <div
        style={{
          marginLeft: 100,
          marginRight: 100,
          marginBottom: 150,
          marginTop: 25,
        }}
      >
        <Typography className={isDesktop ? classes.title : clsx(classes.title, classes.mobileTitle)}>{theTeam.title}</Typography>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <Paper className={classes.lightBackground}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Typography className={isDesktop ? classes.sectionTitle : clsx(classes.title, classes.centerItem)}>
                    {pageDetails.theTeam.subTitleRowers}
                  </Typography>
                </Grid>
                {pageDetails.theTeam.rowers.map((rowers) => (
                  <Grid item xs={isDesktop ? 6 : 12} className={isDesktop ? '' : classes.centerItem}>
                    <Grid item className={classes.centerItem}>
                      <img
                        alt=""
                        src={rowers.image}
                        className={isDesktop ? classes.imageStyle : clsx(classes.imageStyle, classes.centerItem)}
                      />
                    </Grid>
                    <Grid item className={classes.centerItem}>
                      <div style={{ margin: 80, marginTop: 20 }}>
                        <Typography className={isDesktop ? classes.nameTitle : clsx(classes.nameTitle, classes.centerItem)}>
                          {rowers.name}
                        </Typography>
                        <Typography className={isDesktop ? classes.nameSubtitle : clsx(classes.nameSubtitle, classes.centerItem)}>
                          {rowers.role}
                        </Typography>
                        <Typography className={isDesktop ? classes.nameDetails : clsx(classes.nameDetails, classes.centerItem)}>
                          {rowers.description}
                        </Typography>
                      </div>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.darkBackground}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Typography className={isDesktop ? classes.sectionTitle : clsx(classes.title, classes.mobileTitle)}>
                    {pageDetails.theTeam.subtitleJourney}
                  </Typography>
                </Grid>
                {pageDetails.theTeam.journey.map((rowers) => (
                  <Grid item xs={isDesktop ? 6 : 12} className={isDesktop ? '' : classes.mobileTitle}>
                    <Grid item className={classes.centerItem}>
                      <img
                        alt=""
                        src={rowers.image}
                        className={isDesktop ? classes.imageStyle : clsx(classes.imageStyle, classes.mobileTitle)}
                      />
                    </Grid>
                    <Grid item className={classes.centerItem}>
                      <div style={{ margin: 80, marginTop: 20 }}>
                        <Typography className={isDesktop ? classes.nameTitle : clsx(classes.nameTitle, classes.mobileTitle)}>
                          {rowers.name}
                        </Typography>
                        <Typography className={isDesktop ? classes.nameSubtitle : clsx(classes.nameSubtitle, classes.mobileTitle)}>
                          {rowers.role}
                        </Typography>
                        <Typography className={isDesktop ? classes.nameDetails : clsx(classes.nameDetails, classes.mobileTitle)}>
                          {rowers.description}
                        </Typography>
                      </div>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.lightBackground}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Typography className={isDesktop ? classes.sectionTitle : clsx(classes.title, classes.mobileTitle)}>
                    {pageDetails.theTeam.subtitleSocial}
                  </Typography>
                </Grid>
                {pageDetails.theTeam.social.map((rowers) => (
                  <Grid item xs={isDesktop ? 6 : 12} className={isDesktop ? '' : classes.mobileTitle}>
                    <img
                      alt=""
                      src={rowers.image}
                      className={isDesktop ? classes.imageStyle : clsx(classes.imageStyle, classes.mobileTitle)}
                    />
                    <div style={{ margin: 80, marginTop: 20 }}>
                      <Typography className={isDesktop ? classes.nameTitle : clsx(classes.nameTitle, classes.mobileTitle)}>
                        {rowers.name}
                      </Typography>
                      <Typography className={isDesktop ? classes.nameSubtitle : clsx(classes.nameSubtitle, classes.mobileTitle)}>
                        {rowers.role}
                      </Typography>
                      <Typography className={isDesktop ? classes.nameDetails : clsx(classes.nameDetails, classes.mobileTitle)}>
                        {rowers.description}
                      </Typography>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default TeamIndex;
