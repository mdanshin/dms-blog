import React from "react"
import './Nav.scss'
import {Link} from 'react-router-dom';
import Drawer from '../Drawer/Drawer'

function clickHandler() {
    return (
        <Drawer />
    )
}

export default function Nav() {
    return (
        <nav className="Nav">
            <div className="container">
                <Link to="/" className="nav-brand"><strong>IT Blog danshin.ms</strong></Link>
                <button className="hamburger" onClick={clickHandler}>
                    <span className="hamburger"></span>
                </button>
                <div className="nav-collapse">
                    <ul className="mr">
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
                    <ul className="ml">
                        <form className="form" action="">
                            <input className="search" type="text" placeholder="Поиск по блогу..."/>
                        </form>
                    </ul>
                </div>
            </div>
        </nav>
    )
}