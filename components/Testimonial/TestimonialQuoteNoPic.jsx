import React from "react";

export default function TestimonialQuoteNoPic({children}) {
    return (
        <>
        <div className="no-pic-testimonial">
            {children ? children : 
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, illo saepe maxime dolore iure, ullam"
            }
        </div>
        </>
    )
}