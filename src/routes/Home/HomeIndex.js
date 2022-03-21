import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import InfoCard from '../../components/InfoCard';
import './hero.css';
import pages from '../../config/pages'
import title from '../../config/title';

const useStyles = makeStyles((theme) => ({
    gridItem: {
        paddingLeft: 65,
        paddingTop:50,
        paddingRight:65,
        justifyContent: 'center'
    },
  }));

const HomeIndex = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div class="parallax" />
            <div class="top-caption">
                <span>{title.topTitle}</span>
            </div>
            <div class="bottom-caption">
                <span>{title.bottomTitle}</span>
            </div>
                <Grid sx={{ flexGrow: 1 }} container spacing={0} style={{ padding: 40 }}>
                    {pages.map(page =>
                        <React.Fragment>
                            {page.isCard && (
                                <Grid key={page.title} item xs={6} className={classes.gridItem}>
                                    <InfoCard card={page} />
                                </Grid>
                            )}
                        </React.Fragment>
                    )}
                </Grid>
      </React.Fragment>
    )
}

export default HomeIndex
