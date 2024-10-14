import React from "react"
import ExampleCodeBlock from "../ExampleCodeBlock"

export default function ButtonList({ children }) {
   const codeString = `
   <Button size="sm" variant="success">success</Button>
   <Button size="" variant="warning">warning</Button>
   <Button size="lg" variant="danger">danger</Button>
   `

    return (
        <div className="button-section">
            <div className="button-list">
                {children}
            </div>
            <ExampleCodeBlock language="jsx">{codeString}</ExampleCodeBlock>
        </div>
    )
}