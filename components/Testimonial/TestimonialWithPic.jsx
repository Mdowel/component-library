import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";

export default function TestimonialWithPic({
    children,
    orientation, 
    backgroundColor, 
    textColor, 
    boxShadow,
    imageSrc,
    imageAltText}) {
        
    let orientationClass
    if (orientation === "vertical") {
        orientationClass = "vertical"
    } else {
        orientationClass = "horizontal"
    }

    const style = {
        backgroundColor: backgroundColor || "transparent",
        color: textColor || "#000000",
        boxShadow: boxShadow || "none" 
    }

    const src = imageSrc
    const alt = imageAltText


    return (
        <div className={`${orientationClass} testimonial-container`} style={style}>
            <div className="testimonial-image-container">
                <img style={style} 
                src={src ? src : "../man-leaning-on-wall.jpg"} 
                alt={alt ? alt : "man leaning on wall"} />
            </div>
            <div className="testimonial">
                <i className="dbl-quote-icon"><RiDoubleQuotesL/></i>
                {children}
            </div>
        </div>
    )
}