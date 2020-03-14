import React, {useState} from "react"
import './Nav.scss'
import {Link} from 'react-router-dom';

export default function Nav() {

    const [state, setState] = useState(false)

    function clickHandler() {
        return (
            setState(!state)
        )
    }

    return (
        <nav className="Nav">
            <div className="container">
                <Link to="/" className="nav-brand"><strong>IT Blog danshin.ms</strong></Link>
                <button className="hamburger" onClick={clickHandler}>
                    <span className="hamburger"></span>
                </button>
                <div className={state ? "nav-collapse show" : "nav-collapse" } >
                    <ul className="mr">
                        <li>
                            <Link to="/Home">Главная</Link>
                        </li>
                        <li>
                            <Link to="/contact">Обратная связь</Link>
                        </li>
                        <li>
                            <Link to="/about">О блоге</Link>
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