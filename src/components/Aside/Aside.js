import React from "react"
import classes from "./Aside.module.css"

export default function Aside(props) {

    const style = [
        classes.Aside,
        classes[props.type]
    ]

    return (        
        <aside className={style.join(' ')}>
            aside
        </aside>
    )
}