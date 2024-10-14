import React from "react";

export default function BannerText({children}) {
    return (
        <p>{children ? children : 
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
            }</p>
    )
}