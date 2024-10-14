import React from "react";

export default function TestimonialQuote({children}) {
    return (
        <p>{children ? children : 
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, illo saepe maxime dolore iure, ullam"
            }</p>
    )
}