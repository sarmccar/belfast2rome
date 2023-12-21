import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Card, CardActions, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

const useStyles = (makeStyles((theme) => ({
    cardForm: {
        height: '100%',
    },
    typography: {
        color: 'white',
        justifyContent: 'center',
        display: 'flex',
        fontFamily: 'Montserrat',
    },
    actions: {
        justifyContent: 'center',
        display: 'flex',
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
    cardContent: {
        width: '100%',
        height: '100%',
    },
})));
const CardContentNoPadding = styled(CardContent)(`
  padding: 0;
  &:last-child {
    padding-bottom: 0;
  }
`);
const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
        zIndex: 1,
        '& .MuiImageBackdrop-root': {
            opacity: 0.4,
        },
        '& .MuiImageMarked-root': {
            opacity: 0,
        },
        '& .MuiTypography-root': {
            border: '4px solid currentColor',
        },
    },
}));

const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0,
    transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
    // height: 3,
    // width: 18,
    // backgroundColor: 'theme.palette.common.white',
    // position: 'absolute',
    // bottom: -2,
    // left: 'calc(50% - 9px)',
    // opacity: 0,
    // transition: theme.transitions.create('opacity'),
}));
const InfoCard = ({ card }) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Card className={classes.cardForm} elevation={20}>
                <CardContentNoPadding className={classes.cardContent}>
                    <ImageButton
                        focusRipple
                        key={card.title}
                        className={classes.cardContent}
                        style={{
                            //width: '500px',
                        }}
                    >
                        {/* <ImageSrc style={{ backgroundImage: `url(${'../../images/jack1.jpg'}})` }} /> */}
                        <CardMedia
                            component="img"
                            className={classes.cardContent}
                            image={card.image}
                            alt={card.title}
                        />
                        <ImageBackdrop className="MuiImageBackdrop-root" style={{ height: '100%', width: '100%' }} />
                        <Image className={classes.cardContent}>
                            <Typography
                                component="span"
                                variant="subtitle1"
                                color="inherit"
                                sx={{
                                    position: 'relative',
                                    p: 4,
                                    pt: 2,
                                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                                }}
                            >
                                {card.description}
                                <ImageMarked className="MuiImageMarked-root" />
                            </Typography>
                        </Image>
                    </ImageButton>
                </CardContentNoPadding>
                {/* <CardMedia
                    component="img"
                    height="75%"
                    image={card.image}
                    alt={card.title}
                />
                <CardContent style={{ backgroundColor: card.colour }}>
                <CardActions disableSpacing className={classes.actions} style={{ backgroundColor: card.colour }}>
                    <Link to={card.link} className={classes.link}>
                        <Typography className={classes.button}>{card.title}</Typography>
                    </Link>
                </CardActions>
                    <Typography variant="body2" className={classes.typography}>
                        {card.description}
                    </Typography>
                </CardContent> */}
                {/* <CardActions className={classes.actions} style={{ backgroundColor: card.colour }}>
                    <Link to={card.link} className={classes.link}>
                        <Typography className={classes.button}>Learn More</Typography>
                    </Link>
                </CardActions> */}
            </Card>
        </React.Fragment>
    )
}

InfoCard.propTypes = {
    card: PropTypes.object,
};
export default InfoCard
