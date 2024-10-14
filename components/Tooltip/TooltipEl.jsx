import React from "react"
import { Tooltip } from 'react-tooltip'


export default function TooltipEl( {children, id, anchorSelect, place, text} ) {
    return (
        <>
            <div id={id} className="tooltip-anchor">
                {children}
            </div>
            <Tooltip anchorSelect={anchorSelect} place={place}>
                {text}
            </Tooltip>
        </>
    )
}