import { Typography, Grid, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import pageDetails from "../../config/page-details";
import React from "react";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "#0E9E61",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: '5vw',
  },
  backGround: {
    width: "100%",
    background: 'linear-gradient(270deg, #0E9E61 42.03%, rgba(14, 158, 97, 0.179447) 90.19%, rgba(14, 158, 97, 0) 102.74%)',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    // boxShadow: "none",
  },
  imageStyle: {
    height: 600,
    width: '100%',
  },
  sectionTitle: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '4vw',
    color: '#373434',
  },
  sectionDetail: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '3vw',
    color: '#4b4b4b',
  },
  subtitle: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 300,
    fontSize: '3vw',
    color: '#383838',
  },
  quote: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '4vw',
    color: '#0E9E61',
    marginBottom: 20,
  },
}));

const AboutMeIndex = () => {
  const classes = useStyles();
  const aboutMe = pageDetails.aboutMe;

  return (
    <React.Fragment>
      <div style={{ marginLeft: 100, marginRight: 100, marginBottom: 25, marginTop: 25 }}>
        <Typography className={classes.title}>{aboutMe.title}</Typography>
      </div>
      <Divider className={classes.backGround}/>
      <Grid container>
        <Grid item xs={12}>
          <div style= {{ padding: 100 }}>
          {/* <Paper className={classes.backGround}> */}
          <Typography className={classes.quote}>"Don't live your life between 4 and 6."</Typography>
          {/* <Typography className={classes.subtitle} style={{ fontWeight: 200 }}>- Colin O'Brady</Typography> */}
            <Typography className={classes.subtitle}>{aboutMe.profile}</Typography>
          {/* </Paper> */}
          </div>
        </Grid>
      </Grid>
      <div style={{ marginLeft: 100, marginRight: 100, marginBottom: 150, marginTop: 100 }}>
        <Divider style={{ marginBottom: 100 }} />
        <Grid container spacing={8}>
          {aboutMe.details.map((item) => (
            <Grid item xs={12} sm={6} key={item.title} >
              <Typography className={classes.sectionTitle}>{item.title}</Typography>
              <Typography className={classes.sectionDetail}>{item.paragraph}</Typography>
            </Grid>
          ))}
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default AboutMeIndex;
