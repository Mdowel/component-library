import React from "react";

export default function CardHeading({children}) {
    return (
        <h3>{children ? children : "Easy Deployment"}</h3>
    )
}