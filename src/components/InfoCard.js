import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, CardActions, CardContent, CardMedia, Typography, makeStyles } from '@material-ui/core';

const useStyles = (makeStyles((theme) => ({
    cardForm: {
        height: '100%',
    },
    typography: {
        color: 'white',
        justifyContent: 'center',
        display: 'flex',
    },
    actions: {
        justifyContent: 'center',
        display: 'flex',
        paddingBottom: 20,
    },
    link: {
        backgroundColor: 'white',
        borderRadius: 4,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        textDecoration: 'none',
    },
    button: {
        fontSize: 10,
        color: '#2D3353',
    },
})));

const InfoCard = ({ card }) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Card sx={4} className={classes.cardForm}  elevation={20}>
                <CardMedia
                    component="img"
                    height="75%"
                    image={card.image}
                    alt={card.title}
                />
                <CardContent style={{ backgroundColor: card.colour }}>
                <CardActions className={classes.actions} style={{ backgroundColor: card.colour }}>
                    <Link to={card.link} className={classes.link}>
                        <Typography className={classes.button}>{card.title}</Typography>
                    </Link>
                </CardActions>
                    <Typography variant="body2" className={classes.typography}>
                        {card.description}
                    </Typography>
                </CardContent>
                {/* <CardActions className={classes.actions} style={{ backgroundColor: card.colour }}>
                    <Link to={card.link} className={classes.link}>
                        <Typography className={classes.button}>Learn More</Typography>
                    </Link>
                </CardActions> */}
            </Card>
        </React.Fragment>
    )
}

InfoCard.propTypes ={
    card: PropTypes.object,
};
export default InfoCard
