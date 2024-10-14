import React from "react";
import { IoCloudUploadOutline } from "react-icons/io5";

export default function CardIcon({children}) {
    return (
        <i>{children ? children : <IoCloudUploadOutline />}</i>
    )
}