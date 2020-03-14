import React from "react"
import { Switch, Route } from 'react-router-dom'
import Home from "./pages/Home/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"

export default function useRoutes() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/Home">
                <Home />
            </Route>
            <Route path="/Contact">
                <Contact />
            </Route>
            <Route path="/About">
                <About />
            </Route>
        </Switch>
    )
}
