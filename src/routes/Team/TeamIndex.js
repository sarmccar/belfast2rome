import pageDetails from "../../config/page-details";
import { Typography, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
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
    marginLeft: 65,
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
  nameTitle: {
    color: "#2D3353",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 30,
  },
  nameSubtitle: {
    color: "#2D3353",
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
        <Typography className={classes.title}>{theTeam.title}</Typography>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <Paper className={classes.lightBackground}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Typography className={classes.sectionTitle}>
                    {pageDetails.theTeam.subTitleRowers}
                  </Typography>
                </Grid>
                {pageDetails.theTeam.rowers.map((rowers) => (
                  <Grid item xs={6}>
                    <img
                      alt=""
                      src={rowers.image}
                      className={classes.imageStyle}
                    />
                    <div style={{ margin: 80, marginTop: 20 }}>
                      <Typography className={classes.nameTitle}>
                        {rowers.name}
                      </Typography>
                      <Typography className={classes.nameSubtitle}>
                        {rowers.role}
                      </Typography>
                      <Typography className={classes.nameDetails}>
                        {rowers.description}
                      </Typography>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.darkBackground}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Typography className={classes.sectionTitle}>
                    {pageDetails.theTeam.subtitleJourney}
                  </Typography>
                </Grid>
                {pageDetails.theTeam.journey.map((rowers) => (
                  <Grid item xs={6}>
                    <img
                      alt=""
                      src={rowers.image}
                      className={classes.imageStyle}
                    />
                    <div style={{ margin: 80, marginTop: 20 }}>
                      <Typography className={classes.nameTitle}>
                        {rowers.name}
                      </Typography>
                      <Typography className={classes.nameSubtitle}>
                        {rowers.role}
                      </Typography>
                      <Typography className={classes.nameDetails}>
                        {rowers.description}
                      </Typography>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.lightBackground}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Typography className={classes.sectionTitle}>
                    {pageDetails.theTeam.subtitleSocial}
                  </Typography>
                </Grid>
                {pageDetails.theTeam.social.map((rowers) => (
                  <Grid item xs={6}>
                    <img
                      alt=""
                      src={rowers.image}
                      className={classes.imageStyle}
                    />
                    <div style={{ margin: 80, marginTop: 20 }}>
                      <Typography className={classes.nameTitle}>
                        {rowers.name}
                      </Typography>
                      <Typography className={classes.nameSubtitle}>
                        {rowers.role}
                      </Typography>
                      <Typography className={classes.nameDetails}>
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
