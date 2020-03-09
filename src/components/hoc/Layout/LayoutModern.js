import React from 'react';
import classes from './LayoutModern.module.css'
import Nav from '../../Nav/Nav'
import Main from '../../Main/Main'
import Footer from '../../Footer/Footer'

export default function LayoutModern() {
    return (
        <div className={classes.LayoutModern}>
            <Nav />
            <Main sidebar="right" />
            <Footer />
        </div>
    );
}


