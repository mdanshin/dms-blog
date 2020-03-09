import React from 'react';
import classes from './Layout.module.css'
import Header from '../../Header/Header'
import Nav from '../../Nav/Nav'
import Main from '../../Main/Main'
import Footer from '../../Footer/Footer'

export default function Layout() {
    return (
        <div className={classes.Layout}>
            <Header />
            <Nav />
            <Main sidebar={"left, right"} />
            <Footer />
        </div>
    );
}


