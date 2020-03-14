import React from "react"
import './Home.scss'
import Card from '../../components/Card/Card'

export default function Home() {
    return (
        <div className={"row"}>
            <div className={"col"}>
                <Card />
            </div>
            <div className={"col"}></div>
        </div>
    )
}