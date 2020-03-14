import React from "react"
import "./Article.scss"
import useRoutes from "../../routes"

export default function Article() {
  const routes = useRoutes()  
  return (
    <article className={"Article"}>
      {routes}
    </article>
    )
}