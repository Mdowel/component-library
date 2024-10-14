import React, {createContext, useContext} from "react";
import classnames from "classnames";
import { FaCheckCircle } from "react-icons/fa";
import { BsExclamationTriangleFill } from "react-icons/bs";
import { BsXCircleFill } from "react-icons/bs";
import { FaInfoCircle } from "react-icons/fa";

export const BannerContext = createContext()

export default function Banner({children, color, variant, ...rest}) {
    let colorClass = color && `${color}`
    let variantClass = variant && `${variant}`
    const allClasses = classnames(colorClass, variantClass) 

    let icon

    if (variant === "success"){
        icon = <FaCheckCircle/>
    } else if (variant === "warning"){
        icon = <BsExclamationTriangleFill/>
    } else if (variant ==="error"){
        icon = <BsXCircleFill/>
    } else {
        icon = <FaInfoCircle/>
    }

    return (
        <BannerContext.Provider value={{variant}}>
            <div className={`${allClasses} banner`} {...rest}>
                <i>{icon}</i>
                {children}
            </div>
        </BannerContext.Provider>
    )
}