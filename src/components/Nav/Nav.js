import React from "react"
import classes from './Nav.module.scss'

import {Link} from 'react-router-dom';

export default function Nav() {
    return (
        <nav className={classes.Nav}>
            <div className={[classes.container]}>
                <Link to="/" className={classes.navbarBrand}><strong>IT Blog danshin.ms</strong></Link>
                {/*<button className={classes.toggle}>*/}
                {/*    <span className={classes.toggleIcon}></span>*/}
                {/*</button>*/}
                <div className={classes.navbarCollapse}>
                    <ul>
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
                    <ul>
                        <form action="">
                            <input type="text" placeholder="Поиск по блогу..." />
                        </form>
                    </ul>
                </div>
            </div>
        </nav>
    )
}