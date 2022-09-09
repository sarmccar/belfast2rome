import React from 'react';
import { Grid, makeStyles, Typography, Paper, Divider } from "@material-ui/core";
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
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 30,
        color: '#373434',
      },
      sectionDetail: {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 25,
        color: '#4b4b4b',
      },
      backGround: {
        backgroundColor: '#D02C37',
        width: '100%',
        height: '100%',
      },
      title: {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 40,
        color: '#D02C37',
      },
      subtitle: {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 20,
        color: 'white',
      },
  }));

const ExpeditionIndex = () => {
    const classes = useStyles();
    const expedition = pageDetails.theExpedition;

    return (
        <React.Fragment>
                  <div style={{ marginLeft: 100, marginRight: 100, marginBottom: 25, marginTop: 25 }}>
        <Typography className={classes.title}>{expedition.title}</Typography>
      </div>
        <Grid container spacing={6}>
            {expedition.stages.map((stage) => (
        <><Grid item xs={7}>
                        <Paper className={classes.backGround}>
                        <Typography className={classes.title}>{stage.stage}</Typography>
                        <Typography className={classes.subtitle} style={{ fontWeight: 200 }}>{stage.leg}</Typography>
                        <Divider style={{ backgroundColor: 'white' }}/>
                        <Typography className={classes.subtitle}>{stage.description}</Typography>
                        </Paper>
                </Grid><Grid item xs={5}>
                        <img
                            alt="header-logo"
                            src={stage.image}
                            className={classes.imageStyle} />
                    </Grid></>
            ))}
      </Grid>
        <Grid container spacing={2} className={classes.container}>
          <Grid item xs={12} className={classes.centerAlignment}>
            <img
              alt="get-involved"
              src={expedition.image}
              className={classes.largeImage}
            />
          </Grid>
        </Grid>
        <div style={{ marginLeft: 100, marginRight: 100, marginBottom: 100, marginTop: 100 }}>
        <Grid container spacing={8}>
          {expedition.details.map((item) => (
            <Grid item xs={6} key={item.title} >
              <Typography className={classes.sectionTitle}>{item.title}</Typography>
              <Typography className={classes.sectionDetail}>{item.paragraph}</Typography>
            </Grid>
          ))}
        </Grid>
      </div>
        </React.Fragment>
    )
}

export default ExpeditionIndex
