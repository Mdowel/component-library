import React from "react"

export default function TestimonialNoPicFooter({authorName, authorTitle, companyName}) {
    const company = companyName ? companyName : "Black Pearl Enterprises"
    const title = authorTitle ? authorTitle : "Owner"
    const author = authorName ? authorName : "Jack Sparrow"

    return (
        <footer>
            <span className="bold">{author}</span>
            <br></br>
            <span>{title}, {company}</span>
        </footer>
    )
}