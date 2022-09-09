import React from "react";
import { Grid, makeStyles, Typography, Divider } from "@material-ui/core";
import InfoCard from "../../components/InfoCard";
import "./hero.css";
import logo from "../../images/Logo_coloured.png";
import ExternalBoat from "../../images/boat_external.png";
import guy from '../../images/team/guy_hall.jpg';
import simon from '../../images/team/Simon-Rowell.png';
import rannoch from '../../images/team/rannoch.jpg';
import pages from "../../config/pages";
import title from "../../config/title";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  gridItem: {
    maxHeight: 600,
  },
  subHeader: {
    fontFamily: "Montserrat",
    fontSize: 22,
    fontWeight: 400,
    letterSpacing: "-0.015em",
    textAlign: "left",
    color: "#777777",
  },
  header: {
    fontFamily: "Montserrat",
    fontSize: 46,
    fontWeight: 400,
    letterSpacing: "-0.015em",
    textAlign: "left",
    color: "#777777",
  },
  logoStyle: {
    height: 200,
  },
  link: {
    backgroundColor: "#283453",
    width: 100,
    borderRadius: 4,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    textDecoration: "none",
  },
  button: {
    fontSize: 10,
    color: "white",
  },
  largeImage: {
    boxShadow: "5px 5px 4px 0px #0000004D",
    borderRadius: 10,
    width: 1202,
    height: 680,
    left: 89,
    top: 3411,
    filter: "drop-shadow(5px 5px 4px rgba(0, 0, 0, 0.3))",
  },
  centerAlignment: {
    display: "flex",
    justifyContent: "center",
  },
  container: {
    marginTop: 100,
    marginBottom: 100,
  },
  imageStyle: {
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    borderRadius: 200,
    marginLeft: 65,
    height: 200,
    width: 200,
  },
}));

const HomeIndex = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className="parallax-container">
        <div className="parallax" />
        <div className="top-caption">
          <span>{title.topTitle}</span>
        </div>
        <div className="bottom-caption">
          <span>{title.bottomTitle}</span>
        </div>
        {/* <div className="top-logo">
          <img alt="header-logo" src={logo} className={classes.logoStyle} />
        </div> */}
      </div>
      <div style={{ marginLeft: 100, marginRight: 100 }}>
        <Grid container spacing={4} className={classes.container}>
          {pages.map((page) => (
            <React.Fragment key={`${page.title}-div`}>
              {page.isCard && (
                <Grid className={classes.gridItem} key={page.title} item xs={6}>
                  <InfoCard card={page} />
                </Grid>
              )}
            </React.Fragment>
          ))}
        </Grid>
        <div>
        <Divider style={{ width: '100%' }} />
          <Grid container spacing={2} className={classes.container}>
            <Grid key="meet-team" item xs={4}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignContent: "left",
                }}
              >
                <div>
                  <Typography className={classes.header}>
                    Meet the Team
                  </Typography>
                </div>
                <div>
                  <Typography className={classes.subHeader}>
                    Making the Dream a Reality
                  </Typography>
                </div>
                <Link to="/Team" className={classes.link} style={{ marginTop: 25 }}>
                  <Typography className={classes.button}>Learn More</Typography>
                </Link>
              </div>
            </Grid>
            <Grid key="meet-team" item xs={4}>
            <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "right",
                }}
              >
            <img
                            alt="guy-team"
                            src={guy}
                            className={classes.imageStyle} />
                                        <img
                            alt="simon-team"
                            src={simon}
                            className={classes.imageStyle} />
                                        <img
                            alt="rannoch-team"
                            src={rannoch}
                            className={classes.imageStyle} />
            </div>
            </Grid>
          </Grid>
          <Divider style={{ width: '100%' }} />
        </div>
        <Grid container spacing={2} className={classes.container}>
          <Grid item xs={12} className={classes.centerAlignment}>
            <img
              alt="get-involved"
              src={ExternalBoat}
              className={classes.largeImage}
            />
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default HomeIndex;
