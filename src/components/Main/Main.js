import React from "react"
// import './Main.scss'
import useRoutes from "../../routes";

export default function Main() {
    const routes = useRoutes()

    return (
        <main className={"site-content"}>
            <div className={"container"}>
                {routes}
            </div>
        </main>
    )
}