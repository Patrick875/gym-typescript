import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    icon:JSX.Element;
    title:string;
    description:string;
    setSelectedPage:(value:SelectedPage)=>void
}
const childVariant={
    hidden:{opacity:0 ,scale:0.9},
    visible:{opacity:1,scale:1}
}

const Benefit = ({icon,title,description,setSelectedPage}: Props) => {
  return (
    <motion.div 
    variants={childVariant}
    className='px-5 py-16 mt-5 text-center border-2 rounded-md border-gray-10'>
        <div className='flex justify-center mb-4'>
            <div className='p-4 border-2 border-gray-100 rounded-full bg-primary '>
                {icon}
            </div>
        </div>
    <h4 className='font-bold'>
        {title}
    </h4>
    <p>{description}</p>
   <AnchorLink  
        className='text-sm font-bold underline text-primary-500 hover:text-secondary-500'
        onClick={()=>setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
        >
    <p>Learn More</p>
    </AnchorLink>
    </motion.div>
  )
}

export default Benefit