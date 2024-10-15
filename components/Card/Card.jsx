import React from "react"

export default function CardElement({children, className}) {
   
    return (
        <div className={className ? `${className} card` : "card"}>
            {children}
        </div>
    )
}