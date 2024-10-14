import React from "react";
import { GiPirateHook } from "react-icons/gi";

export default function TestimonialNoPicHeader({logo, companyName}) {
    const company = companyName ? companyName : "Black Pearl Enterprises"
    
    let icon
    if (logo){
        icon = logo
    } else {
        icon = <GiPirateHook/>
    }

    return (
        <>
            <div className="logo-line">
                <i>{icon}</i>
                <span>{company}</span>
            </div>
        </>
    )
}