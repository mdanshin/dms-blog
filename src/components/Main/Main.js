import React from "react"
import classes from "./Main.scss"
import Article from '../Article/Article'

export default function Main() {
    return (
        <main className={classes.Main}>
            <div className={classes.container}>
                <Article />
            </div>
        </main>
    )
}