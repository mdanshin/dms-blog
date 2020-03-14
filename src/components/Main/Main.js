import React from "react"
import './Main.scss'
import useRoutes from "../../routes";

export default function Main() {
    const routes = useRoutes()
    return (
        <main className={"Main"}>
            <div className={"container"}>
                {routes}
            </div>
        </main>
    )
}