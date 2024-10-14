import React from "react";

export default function CardHeading({children}) {
    return (
        <h2>{children ? children : "Easy Deployment"}</h2>
    )
}