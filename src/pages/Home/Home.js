import React from "react"
import './Home.scss'
import CardBig from '../../components/CardBig/CardBig'
import CardSmall from "../../components/CardSmall/CardSmall";

export default function Home() {
    return (
        <div className={"row"}>
            <div className={"col"}>
                <CardBig />
            </div>
            <div className={"col"}>
                {/*<div className={"top-post"}>*/}
                {/*    <div className={"img"}></div>*/}
                {/*    <div>*/}
                {/*        <h2></h2>*/}
                {/*        <small>*/}
                {/*            <span>*/}
                {/*                <a href="#home">Home</a>*/}
                {/*            </span>*/}
                {/*        </small>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <CardSmall/>
            </div>
        </div>
    )
}