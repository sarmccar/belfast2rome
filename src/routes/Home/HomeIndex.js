import React from 'react';
import { Grid, Box } from '@material-ui/core';
import InfoCard from '../../components/InfoCard';
import './hero.css';
import pages from '../../config/pages'

const HomeIndex = () => {
    console.log(pages);
    return (
        <React.Fragment>
            <div class="parallax" />
            <div class="top-caption">
                <span>We will attempt to do something that has never been done before...</span>
            </div>
            <div class="bottom-caption">
                <span>...Row from Belfast to Rome</span>
            </div>
                <Grid sx={{ flexGrow: 1 }} container spacing={0}>
                    {pages.map(page =>
                        <React.Fragment>
                            {page.isCard && (
                                <Grid key={page.title} item xs={6} style={{ paddingLeft: 40, paddingTop:40, paddingRight:40 }}>
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
