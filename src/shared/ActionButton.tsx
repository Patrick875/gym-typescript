import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types";

interface Props {
    children:React.ReactNode;
    setSelectedPage:(value:SelectedPage)=>void
}

export const ActionButton = ({children,setSelectedPage}: Props) => {
    return (
        <AnchorLink 
        className='px-10 py-2 rounded-md hover:text-white bg-secondary-500 hover:bg-primary-500'
        onClick={()=>setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
        >
            {children}
        </AnchorLink>
    )
}
