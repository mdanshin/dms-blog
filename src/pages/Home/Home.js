import React from "react"
// import './Home.scss'
import CardBig from '../../components/CardBig/CardBig'
import CardSmall from "../../components/CardSmall/CardSmall";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import OtherPostMain from "../../components/OtherPostMain/OtherPostMain";
import Favorites from "../../components/Favorites/Favorites";


export default function Home() {
    return (
        <div>
            <div className={"row remove-site-content-margin"}>
                <div className={"col-md-6"}>
                    <CardBig/>
                </div>
                <div className={"col-md-6"}>
                    <CardSmall/>
                    <CardSmall/>
                    <CardSmall/>
                </div>
            </div>
            <Jumbotron/>
            <div className={"row mt-3"}>
                <OtherPostMain />
                <Favorites />
            </div>
        </div>
    )
}