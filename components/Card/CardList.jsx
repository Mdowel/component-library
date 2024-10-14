import React from "react"
import ExampleCodeBlock from "../ExampleCodeBlock"

export default function CardList({children}) {
    const codeString = `
    <Card>
        <Card.Icon> <IconComponent> </Card.Icon>
        <Card.Heading>Heading</Card.Heading>
        <hr />
        <Card.Text>Text</Card.Text>
    </Card>
    `

    return (
        <>
            <div className="card-list">{children}</div>
            <ExampleCodeBlock language="jsx">{codeString}</ExampleCodeBlock>
        </>
    )
}