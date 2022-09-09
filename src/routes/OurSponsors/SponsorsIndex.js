import pageDetails from "../../config/page-details";
import { Typography, Grid, Paper, Chip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import EmailLink from '../../components/EmailLink';

import "./sponsor-style.css";
import React from "react";

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 40,
    color: "#FF8640",
  },
  backGround: {
    height: "100%",
    background:
      "linear-gradient(180deg, #0E9E61 40.91%, rgba(14, 158, 97, 0.179447) 87.78%, rgba(14, 158, 97, 0) 100%)",
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
  },
  lightBackground: {
    marginTop: 50,
    marginBottom: 50,
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
    marginLeft: 105,
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
  joinUs: {
    textAlign: "left",
    fontSize: 60,
    fontWeight: 700,
    color: "#323232",
  },
}));

const SponsorsIndex = () => {
  const classes = useStyles();
  const sponsors = pageDetails.ourSponsors;

  return (
    <React.Fragment>
      <div className="parallax-container">
        <div className="parallaxSpons" />
        <div className="top-captionSpons">
          <span>{sponsors.tagline}</span>
        </div>
      </div>
      <div
        style={{
          marginLeft: 100,
          marginRight: 100,
          marginBottom: 25,
          marginTop: 25,
        }}
      >
        <Grid container spacing={10}>
          <Grid item xs={12} style={{ marginTop: 80 }}>
            <Paper className={classes.lightBackground}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Grid container spacing={1} style={{ paddingBottom: 25 }}>
                    <Grid
                      item
                      xs={3}
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <img
                        alt=""
                        src={sponsors.image}
                        className={classes.imageStyle}
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <Typography className={classes.nameDetails}>
                        {sponsors.sponsorDesc0}
                      </Typography>
                      <Typography className={classes.nameDetails}>
                        {sponsors.sponsorDesc1}
                      </Typography>
                      <Typography className={classes.nameDetails}>
                        {sponsors.sponsorDesc2}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={6} style={{ paddingBottom: 100, paddingTop: 60 }}>
              <Grid item xs={12}>
                <Typography className={classes.joinUs}>
                  Interested in becoming a sponsor?
                </Typography>
                <EmailLink
            mailto="mailto:jacknorris382@gmail.com?subject=Ireland to Italy Inquiry"
            label={
             <Chip size="medium" variant="outlined" label="Contact Us" color="primary" clickable />
            }
          />
              </Grid>
              <Grid item xs={8}></Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default SponsorsIndex;
