import React from "react"
import ExampleCodeBlock from "../ExampleCodeBlock"

export default function BadgeList( {children, showCode = false} ) {
    const codeString = `
    <Badge shape="square" color="white">Text</Badge>
    <Badge shape="pill" color="red">Text</Badge>
    `

    return (
        <>
            <div className="badge-list" id="badge-list">{children}</div>
            {showCode && (
                <ExampleCodeBlock language="jsx">
                {codeString}
                </ExampleCodeBlock>
            )}
        </>
    )
}