import React from "react"
import classes from "./Article.module.css"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Img from "../../assets/images/1200px-React-icon.svg.png"

export default function Article() {
    return (
        <article className={classes.Article}>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Img} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </article>
    )
}