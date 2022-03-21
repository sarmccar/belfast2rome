import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, makeStyles } from '@material-ui/core';

const useStyles = (makeStyles((theme) => ({
    cardForm: {
        borderRadius: 10,
        minHeight: 600,
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
                    height="480"
                    image={card.image}
                    alt={card.title}
                />
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
            </Card>
        </React.Fragment>
    )
}

InfoCard.propTypes ={
    card: PropTypes.array,
};
export default InfoCard
