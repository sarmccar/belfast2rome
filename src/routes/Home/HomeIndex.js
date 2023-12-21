import React, { useEffect } from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import Divider from '@mui/material/Divider';
import InfoCard from "../../components/InfoCard";
import "./hero.css";
import ExternalBoat from "../../images/boat_external.png";
import guy from "../../images/team/guy_hall.jpg";
import simon from "../../images/team/Simon-Rowell.png";
import rannoch from "../../images/team/rannoch.jpg";
import logo from "../../images/Logo_coloured.png";
import TeamGroup from '../../images/Group Team.png'
import pages from "../../config/pages";
import title from "../../config/title";
import useDeviceDetect from '../../hooks/useDeviceDetect';
import { Link } from "react-router-dom";

const useStyles = makeStyles((isDesktop) => ({
  gridItem: {
    marginBottom: 30,
    padding: 15,
  },
  subHeader: {
    fontFamily: "Montserrat",
    fontSize: isDesktop ? 22 : 12,
    fontWeight: 400,
    letterSpacing: "-0.015em",
    textAlign: "left",
    color: "#777777",
  },
  header: {
    fontFamily: "Montserrat",
    fontSize: isDesktop ? 46 : 24,
    fontWeight: 400,
    letterSpacing: "-0.015em",
    textAlign: "left",
    color: "#777777",
    width: 'max-content',
  },
  logoStyle: {
    height: 100,
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
  largeImageShadow: {
    boxShadow: "5px 5px 4px 0px #0000004D",
    borderRadius: 10,
    height: '90%',
    width: '80%',
    filter: "drop-shadow(5px 5px 4px rgba(0, 0, 0, 0.3))",
  },
  largeImage: {
    height: '90%',
    width: '80%',
  },
  centerAlignment: {
    display: "flex",
    justifyContent: "center",
  },
  rowImages: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
  },
  container: {
    marginTop: 100,
    display: 'flex',
    flexDirection: 'row',
  },
  imageStyle: {
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    borderRadius: 200,
    marginLeft: 65,
    height: 200,
    width: 200,
  },
  mobileImageStyle: {
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    borderRadius: 200,
    marginBottom: 15,
    height: 100,
    width: 100,
  },
  bubbleImage: {
    transition: 'transform .2s',
    '& .hover': {
      transform: 'scale(1.5)',
    },
    display: isDesktop ? "flex" : '',
    flexDirection: "row",
    alignContent: "right",
  },
}));

const HomeIndex = () => {
  const { isDesktop } = useDeviceDetect();
  const classes = useStyles(isDesktop);
  console.log(isDesktop);
  return (
    <React.Fragment>
      <div className="hero">
        <div className="text">
          <Typography>{title.title}</Typography>
          <Typography>{title.subTitle}</Typography>
        </div>
      </div>
      <div style={isDesktop ? { marginLeft: 100, marginRight: 100 } : { marginLeft: 30, marginRight: 30 }}>
        <Divider style={{ display: 'flex', alignItems: 'center', backgroundColor: 'transparent', marginTop: 100 }}>
          <img alt="header-logo" src={logo} className={classes.logoStyle} />
        </Divider>
        <Grid container className={classes.container}>
          {title.descriptions.map((detail) => (
            <React.Fragment key={`${detail.year}-div`}>
              
                <Grid className={classes.gridItem} key={detail.year} item xs={12}>
                  <Typography>{detail.year}</Typography>
                  <Typography>{detail.description}</Typography>
                </Grid>
            
            </React.Fragment>
          ))}
        </Grid>
        <Grid container className={classes.container}>
          {pages.map((page) => (
            <React.Fragment key={`${page.title}-div`}>
              {page.isCard && (
                <Grid className={classes.gridItem} key={page.title} item xs={12} sm={6}>
                  <InfoCard card={page} />
                </Grid>
              )}
            </React.Fragment>
          ))}
        </Grid>
        <div>
          <Divider style={{ width: "100%", marginTop: 100 }} />
          <Grid container className={!isDesktop ? classes.centerAlignment : classes.container}>
            <Grid key="meet-team-header" item sm={12} md={4}>
              <div
                style={isDesktop ? {
                  display: "flex",
                  flexDirection: "column",
                  alignContent: 'left',
                } : {
                  display: "flex",
                  flexDirection: "column",
                  alignContent: 'center',
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
                {isDesktop && <Link
                  to="/Team"
                  className={classes.link}
                  style={{ marginTop: 25 }}
                >
                  <Typography className={classes.button}>Learn More</Typography>
                </Link>
                }
              </div>
            </Grid>
           <img alt='team' src={TeamGroup} className={classes.largeImage}/>
            {!isDesktop && <Link
              to="/Team"
              className={classes.link}
              style={{ marginTop: 25 }}
            >
              <Typography className={classes.button}>Learn More</Typography>
            </Link>
            }
          </Grid>
          <Divider style={{ width: "100%", marginTop: 100 }} />
        </div>
        <Grid container className={classes.container}>
          <Grid item xs={12} className={classes.centerAlignment}>
            <img
              alt="get-involved"
              src={ExternalBoat}
              className={classes.largeImageShadow}
            />
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default HomeIndex;
