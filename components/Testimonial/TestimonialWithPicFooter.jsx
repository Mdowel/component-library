import React from "react";

export default function TestimonialWithPicFooter({authorName, companyName, authorTitle}) {
    
    const company = companyName ? companyName : "Black Pearl Enterprises"
    const title = authorTitle ? authorTitle : "Owner"
    const author = authorName ? authorName : "Jack Sparrow"

    return (
        <>
            <span className="bold">{author}</span>
            <span>{title}, {company}</span>
        </>
    )
}