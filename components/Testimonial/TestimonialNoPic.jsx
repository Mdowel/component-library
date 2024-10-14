import React from "react"


export default function TestimonialNoPic({
    children,
    orientation, 
    backgroundColor, 
    textColor,
}) {
    let orientationClass
    if (orientation === "vertical") {
        orientationClass = "vertical"
    } else {
        orientationClass = "horizontal"
    }

    const style = {
        backgroundColor: backgroundColor || "transparent",
        color: textColor || "#000000"
    }

    return (
        <div className={`${orientationClass}`}>
            <div className="testimonial-container-no-pic" style={style}>
                    {children}
            </div>
        </div>
    )
}