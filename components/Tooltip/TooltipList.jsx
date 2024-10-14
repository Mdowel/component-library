import React from "react"
import ExampleCodeBlock from "../ExampleCodeBlock"

export default function TooltipList( {children} ) {
    const codeString = `
    <TooltipEl 
        id="tooltip-anchor-block" 
        anchorSelect="#tooltip-anchor-block" 
        place="top" 
        text={"Action unavailable"}>
        <BiBlock />
    </TooltipEl>
   `

    return (
        <div className="tooltip-section">
            <div className="tooltip-list">
                {children}
            </div>
            <ExampleCodeBlock language="jsx">{codeString}</ExampleCodeBlock>
        </div>
    )
}