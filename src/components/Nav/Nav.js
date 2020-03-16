import React, {useState} from "react"
// import './Nav.scss'
import {Link} from 'react-router-dom';

export default function Nav() {

    const [state, setState] = useState(false)

    function clickHandler() {
        return (
            setState(!state)
        )
    }

    return (

        <nav id="MagicMenu" className="topnav navbar navbar-expand-lg navbar-light bg-white fixed-top">
            <div className="container">
                <Link className="navbar-brand" to="/" ><strong>IT Blog danshin.ms</strong></Link>


                {/*<button className="navbar-toggler collapsed" type="button" data-toggle="collapse"*/}
                {/*        data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false"*/}
                {/*        aria-label="Toggle navigation">*/}
                {/*    <span className="navbar-toggler-icon"></span>*/}
                {/*</button>*/}

                         <button className="navbar-toggler collapsed" onClick={clickHandler}>
                             <span className="navbar-toggler-icon"></span>
                         </button>

                <div className="navbar-collapse collapse" id="navbarColor02" >
                    <ul className="navbar-nav mr-auto d-flex align-items-center">
                        <li className="nav-item">
                            <Link className="nav-link" to="/Home">Главная</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Обратная связь</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">О блоге</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto d-flex align-items-center">

                        <form className="bd-search hidden-sm-down">
                            <input type="text" className="form-control text-small" id="lunrsearch" name="q" value=""
                                   placeholder="Поиск по блогу..." />
                        </form>
                    </ul>
                </div>
            </div>
        </nav>

        // <nav className="Nav">
        //     <div className="container">
        //         <Link to="/" className="nav-brand"><strong>IT Blog danshin.ms</strong></Link>
        //         <button className="hamburger" onClick={clickHandler}>
        //             <span className="hamburger"></span>
        //         </button>
        //         <div className={state ? "nav-collapse show" : "nav-collapse" } >
        //             <ul className="mr">
        //                 <li>
        //                     <Link to="/Home">Главная</Link>
        //                 </li>
        //                 <li>
        //                     <Link to="/contact">Обратная связь</Link>
        //                 </li>
        //                 <li>
        //                     <Link to="/about">О блоге</Link>
        //                 </li>
        //             </ul>
        //             <ul className="ml">
        //                 <form className="form" action="">
        //                     <input className="search" type="text" placeholder="Поиск по блогу..."/>
        //                 </form>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>
    )
}