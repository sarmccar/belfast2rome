import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, makeStyles } from '@material-ui/core';

const useStyles = (makeStyles((theme) => ({
    cardForm: {
        borderRadius: 10,
        // maxWidth: 500,
        // height: 500,
        // position: 'absolute',
        // padding: 10,
    },
    typography: {
        color: 'white',
        justifyContent: 'center',
        display: 'flex',
    },
    actions: {
        justifyContent: 'center',
        display: 'flex',
    },
})));

const InfoCard = ({ card }) => {
    const classes = useStyles();
    console.log(card.image);
    return (
        <React.Fragment>
            <Card sx={{ maxWidth: 145 }} className={classes.cardForm}  elevation={10}>
                <CardMedia
                    component="img"
                    height="350"
                    image={card.image}
                    alt={card.title}
                />
                {/* <div style={{ backgroundColor: card.colour }}> */}
                    <CardContent style={{ backgroundColor: card.colour }}>
                        <Typography gutterBottom variant="h5" className={classes.typography}>
                            {card.title}
                        </Typography>
                        <Typography variant="body2" className={classes.typography}>
                            {card.description}
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.actions} style={{ backgroundColor: card.colour }}>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                {/* </div> */}
            </Card>
        </React.Fragment>
    )
}

InfoCard.prototypes ={
    card: PropTypes.array,
};
export default InfoCard
