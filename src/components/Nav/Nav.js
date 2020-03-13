import React from "react"
import classes from './Nav.module.scss'
import {Link} from 'react-router-dom';
import Drawer from '../Drawer/Drawer'

function clickHandler() {
    return (

        <Drawer />
    )
}

export default function Nav() {
    return (
        <nav className={classes.Nav}>
            <div className={[classes.container]}>
                <Link to="/" className={classes.navbarBrand}><strong>IT Blog danshin.ms</strong></Link>
                <button className={classes.hamburger} onClick={clickHandler}>
                    <span className={classes.hamburger ? classes.hamburger : classes.hamburger}></span>
                </button>
                <div className={classes.navbarCollapse}>
                    <ul className={classes.mr}>
                        <li>
                            <Link to="/">Главная</Link>
                        </li>
                        <li>
                            <Link to="/about">Обратная связь</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">О блоге</Link>
                        </li>
                    </ul>
                    <ul className={classes.ml}>
                        <form className={classes.form} action="">
                            <input className={classes.search} type="text" placeholder="Поиск по блогу..."/>
                        </form>
                    </ul>
                </div>
            </div>
        </nav>
    )
}