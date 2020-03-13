import React from "react"
import classes from "./Article.scss"
import useRoutes from "../../routes"

export default function Article() {
  const routes = useRoutes()  
  return (
    <article className={classes.Article}>
      {routes}
    </article>
    )
}