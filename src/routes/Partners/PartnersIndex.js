import { Typography, Grid } from "@material-ui/core";
import { makeStyles, Divider } from "@material-ui/core";
import pageDetails from "../../config/page-details";
import React from "react";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "#2D3353",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 40,
  },
  backGround: {
    width: "100%",
    background: 'linear-gradient(270deg, #2D3353 26.77%, rgba(72, 77, 104, 0.896348) 56.77%, rgba(233, 233, 233, 0.268339) 99.97%, rgba(219, 219, 219, 0) 99.98%)',
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    boxShadow: "none",
  },
  imageStyle: {
    height: 600,
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
  subtitle: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 20,
    color: '#383838',
  },
  quote: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 60,
    color: '#383838',
  },
}));

const PartnerIndex = () => {
  const classes = useStyles();
  const partner = pageDetails.partner;

  return (
    <React.Fragment>
      <div style={{ marginLeft: 100, marginRight: 100, marginBottom: 25, marginTop: 25 }}>
        <Typography className={classes.title}>{partner.title}</Typography>
      </div>
      <Divider className={classes.backGround}/>
      <Grid container>
        <Grid item xs={7}>
        <div style= {{ padding: 100 }}>
          {/* <Paper className={classes.backGround}> */}
           <Typography className={classes.quote}>"The greatest sin is to do nothing because you can only do a little."</Typography>
           <Typography className={classes.subtitle} style={{ fontWeight: 200 }}>- Edmund Burke</Typography>
            <Typography className={classes.subtitle}>{partner.profile}</Typography>
          {/* </Paper> */}
          </div>
        </Grid>
        <Grid item xs={5}>
          <img
            alt="header-logo"
            src={partner.image}
            className={classes.imageStyle}
          />
        </Grid>
      </Grid>
      <div style={{ marginLeft: 100, marginRight: 100, marginBottom: 100, marginTop: 100 }}>
        <Grid container spacing={8}>
          {partner.details.map((item) => (
            <Grid item xs={6} key={item.title} >
              <Typography className={classes.sectionTitle}>{item.title}</Typography>
              <Typography className={classes.sectionDetail}>{item.paragraph}</Typography>
            </Grid>
          ))}
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default PartnerIndex;
