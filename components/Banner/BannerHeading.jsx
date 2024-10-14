import React, {createContext, useContext} from "react";
import { BannerContext } from "./Banner";

export default function BannerHeading({children}) {
    const {variant} = useContext(BannerContext)

    let bannerHeading

    if (variant === "success"){
        bannerHeading = "Congratulations!"
    } else if (variant === "warning"){
        bannerHeading = "Attention"
    } else if (variant ==="error"){
        bannerHeading = "There is a problem with your application"
    } else {
        bannerHeading = "Update available"
    }

    return (
        <h1>{children ? children : bannerHeading}</h1>
    )
}