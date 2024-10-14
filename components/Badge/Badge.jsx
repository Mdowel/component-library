import React from "react"
import classnames from "classnames"

export default function Badge({ children, className, color, shape, ...rest}) {
    let colorClass = color && `${color}`
    let shapeClass = shape && `${shape}`
    const allClasses = classnames(colorClass, shapeClass)

    return (
        <div className={allClasses} {...rest}>Badge</div>
    )
}