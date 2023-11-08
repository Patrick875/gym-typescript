import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types"
import { HomeModernIcon,UserGroupIcon,AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion} from "framer-motion";
import Benefit from "./Benefit";
import { ActionButton } from "@/shared/ActionButton";
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'


const benefits:Array<BenefitType>=[
    {icon:<HomeModernIcon className='w-6 h-6'/>,
     title:"State of the Art Facilities",
     description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, necessitatibus."
    },
    {icon:<UserGroupIcon className='w-6 h-6'/>,
     title:"100's of Diverse Classes",
     description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, necessitatibus."
    },
    {icon:<AcademicCapIcon className='w-6 h-6'/>,
     title:"Expert and Pro Trainers",
     description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, necessitatibus."
    },
]

type Props = {
    setSelectedPage:(value:SelectedPage)=>void;
}

const container={
  hidden:{},
  visible:{
    transition:{staggerChildren:0.2}
  }
}
const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section id='benefits'
    className="w-5/6 min-h-full py-20 mx-auto"
    >
        <motion.div
         onViewportEnter={()=>setSelectedPage(SelectedPage.Benefits)}
        
        >
            {/* HEADER */}

            <motion.div className='md:my-5 md:w-3/5'
             initial='hidden'
             whileInView='visible'
             viewport={{once:true, amount:0.5}}
             transition={{duration:0.5}}
             variants={{
              hidden:{opacity:0, x:-50},
              visible:{opacity:1,x:0}
             }}
            >
                <HText>MORE THAN JUST A GYM.</HText>
                <p className= "my-5 text-sm">We provide world class fitness equipment, trianers and classes to get 
                  you to your ultimate fitness goals with ease. we provide true care into
                  each and every member.
                </p>
            </motion.div>
          {/* BENEFITS */}

            <motion.div 
            className="items-center justify-between gap-8 mt-5 md:flex"
            initial='hidden'
            whileInView='visible'
            viewport={{once:true,amount:0.5}}
            variants={container}
            >
                {benefits.map((benefit:BenefitType)=>(
                    <Benefit 
                    key={benefit.title} 
                    icon={benefit.icon} 
                    title={benefit.title}
                    description={benefit.description}
                    setSelectedPage={setSelectedPage}
                    />
                ))}

            </motion.div>
            {/* GRAPHICS AND DESCRIPTION */}
            <div className='mt-16 items-center justify-between gap-20 md:mt-28 md:flex'>
               {/* GRAPHIC */}
               <img 
               className='mx-auto ' 
               alt='benefits-page-graphic'
                src={BenefitsPageGraphic}
                />
              {/* DESCRIPTION */}
              <div>
                  {/* title */}
                  <div className='relative'>
                    <div className='before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves '>
                      <motion.div
                      initial='hidden'
                      whileInView='visible'
                      viewport={{once:true, amount:0.5}}
                      transition={{duration:0.5}}
                      variants={{
                        hidden:{opacity:0, x:50},
                        visible:{opacity:1,x:0}
                      }}
                      
                      >
                        <HText>MILLIONS OF HAPPY MEMBERS GETTING{" "} 
                        <span className='text-primary-500'>FIT</span>
                         </HText>
                      </motion.div>
                    </div>
                  </div>
                    {/* descritpion */}
                    <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once:true, amount:0.5}}
                    transition={{delay:0.2,duration:0.5}}
                    variants={{
                      hidden:{opacity:0, x:50},
                      visible:{opacity:1,x:0}
                    }}
                    
                    >
                      <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat libero ipsam voluptatem 
                        tenetur corrupti minus qui quo fuga laborum atque iusto ab repellendus a, 
                        laudantium, suscipit enim neque dolore molestias!
                        </p>
                      <p className='mb-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis dolor iusto praesentium. Rerum temporibus accusamus quam assumenda, necessitatibus ipsam minus excepturi officia 
                        quis quisquam corporis, voluptates quae numquam 
                        aliquid reiciendis.
                      </p>
                    </motion.div>
                  {/* BUTTON */}
                  <div className='relative mt-16'>
                    <div className='before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles'>
                    <ActionButton setSelectedPage={setSelectedPage}>
                    Join Now
                    </ActionButton>

                    </div>
                  </div>
              </div>

            </div>

        </motion.div>


    </section>
  )
}

export default Benefits