import React from "react";
import {
  Grid,
  makeStyles,
  Typography,
  Paper,
  Divider,
} from "@material-ui/core";
import pageDetails from "../../config/page-details";

const useStyles = makeStyles((theme) => ({
  gridItem: {
    maxHeight: 600,
  },
  subHeader: {
    fontFamily: "Montserrat",
    fontSize: 26,
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
  sectionTitle: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 30,
    color: "#373434",
  },
  sectionDetail: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 25,
    color: "#4b4b4b",
  },
  backGround: {
    backgroundColor: "#D02C37",
    borderRadius: 0,
    width: "100%",
    height: "100%",
  },
  title: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 40,
    color: "#D02C37",
  },
  stageTitle: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 40,
    color: "#420307",
  },
  subtitle: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 20,
    color: "#4b4b4b",
  },
  imageStyle: {
    height: "100%",
    maxWidth: 663,
  },
  lightBackground: {
    background: "#f3f3f3",
    borderRadius: 44,
    width: "100%",
    height: '100%',
  },
}));

const ExpeditionIndex = () => {
  const classes = useStyles();
  const expedition = pageDetails.theExpedition;

  return (
    <React.Fragment>
      <div
        style={{
          margin: 100,
          marginTop: 25,
        }}
      >
        <Typography className={classes.title}>{expedition.title}</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} style={{ marginTop: 80 }}>
            <Paper className={classes.lightBackground}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Typography
                    className={classes.nameDetails}
                    style={{
                      marginLeft: 50,
                      marginRight: 50,
                      marginBottom: 50,
                      lineHeight: 2,
                      fontSize: 25,
                      color: "#373434",
                    }}
                  >
                    {expedition.profile}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
      <Divider />
      <div style={{ margin: 100 }}>
      {expedition.stages.map((stage) => (
        <Grid container spacing={4} style={{ marginBottom: 50 }}>
          <Grid item xs={7}>
            <Paper className={classes.lightBackground}>
              <div style={{ marginLeft: 50 }}>
                <Typography className={classes.stageTitle}>
                  {stage.stage}
                </Typography>
                <Typography
                  className={classes.subtitle}
                  style={{ fontWeight: 200, color: '#c4c3c3' }}
                >
                  {stage.leg}
                </Typography>
              </div>
              <Divider />
              <div style={{ marginLeft: 50, marginTop: 25, width: "80%" }}>
                <Typography
                  className={classes.subtitle}
                  style={{ lineHeight: 2 }}
                >
                  {stage.description}
                </Typography>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={5} style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <img
              alt="header-logo"
              src={stage.image}
              className={classes.imageStyle}
            />
          </Grid>
        </Grid>
      ))}
      </div>
      <Grid container className={classes.container}>
        <Grid item xs={12} className={classes.centerAlignment}>
          <img
            alt="get-involved"
            src={expedition.image}
            className={classes.largeImage}
          />
        </Grid>
      </Grid>
      <div
        style={{
          marginLeft: 100,
          marginRight: 100,
          marginBottom: 100,
          //marginTop: 100,
        }}
      >
        <Divider style={{ marginBottom: 100 }} />
        <Grid container spacing={8}>
          {expedition.details.map((item) => (
            <Grid item xs={6} key={item.title}>
              <Typography className={classes.sectionTitle}>
                {item.title}
              </Typography>
              <Typography className={classes.sectionDetail}>
                {item.paragraph}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default ExpeditionIndex;
