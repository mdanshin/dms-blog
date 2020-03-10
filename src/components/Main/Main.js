import React from "react"
import classes from "./Main.module.css"
import Aside from '../Aside/Aside'
import Article from '../Article/Article'

export default function Main(props) {   
    return (
        <main className={classes.Main}>
            <div className={classes.wrapper}>
                {props.sidebar.includes("left") && <Aside type="left-sidebar" />}
                <Article />
                {props.sidebar.includes("right") && <Aside type="right-sidebar" />}
            </div>
        </main>
    )
}