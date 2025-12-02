"use client";

import Image from 'next/image'
import ReadMoreButton from './read-more-button.js'
import {motion} from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPen, faDesktop} from '@fortawesome/free-solid-svg-icons'


const ServicesHome = (props) => {

    return (
        <>

 <div className="services-wrapper flex 
 flex-col justify-around items-center 
 font-barlow 
sm:mx-[3rem] xl:px-[15%] lg:px-[10rem]
py-12 lg:pb-44 relative lg:top-[0rem] xl:top-[0rem]">



<div className="main-services
 flex flex-col 
items-center 
 md:max-w-[2000px] md:w-[100%] 
py-12 ">



 <div className={`w-[80vw]
flex flex-col relative
md:flex-col lg:flex-row 
md:justify-center items-center lg:pb-36 
md:gap-4 lg:gap-12 lg:justify-around gap-12`}>


<div className="overlay opacity-[.03] 
absolute sm:hidden lg:block
z-[-50] xl:top-[-2rem] 
 xl:left-[4rem]
 shadow-xl bg-slate-800 md:right-[4rem] 
 xl:w-[1500px] lg:w-[1000px] lg:right-[-6rem] 
 lg:h-[600px] md:w-[440px] sm:h-[830px] xl:h-[650px]">
    </div>

    <motion.div 
    initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{delay: 0.5, duration: 1}}
viewport={{ once: true }}
    className="md:w-[70%]
    xl:w-[800px] w-[90%] shadow-xl">
        
    <Image src="/images/web-design-home-service.png"
alt=""
width={800}
height={400}
    />
    </motion.div>
     
    
    
    <motion.div 
    initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{delay: 0.8, duration: 1}}
viewport={{ once: true }}
 className="flex md:items-center lg:items-start flex-col 
 xl:w-[40%] md:w-[80%]">
    <div className="rounded-[6rem]
    bg-[#282f2f] shadow-xl 
     p-12 h-auto w-auto rounded-tl-none rounded-br-none">
        <div className="text-4xl neon-red lg:text-6xl">
            <FontAwesomeIcon icon={faDesktop} />
            </div>
        <h3 className="md:text-center lg:text-left sm:text-3xl md:text-3xl xl:text-4xl
      text-white">
            
            {props.serviceOne}</h3>
            <p className="text-xl uppercase neon-red">Brand experience</p>
        <p className="text-xl md:text-2xl py-4 md:text-center lg:text-left
        lg:w-[100%] md:w-[80%] text-white">{props.serviceOneTxt}</p>
            <ReadMoreButton bg="bg-[#FD0E35]"/>
            </div>
        </motion.div>
 </div>
 </div>

    <div className={`w-[80vw] 
flex flex-col relative
md:flex-col lg:flex-row-reverse
md:justify-center items-center
lg:pb-36 md:gap-4 lg:gap-12 lg:justify-around gap-12 mb-12 md:mb-16`}>



<div className="overlay opacity-[.03] xl:left-[-5rem] 
absolute z-[-50] xl:top-[-2rem] sm:hidden lg:block
md:right-[-4rem] md:left-[0rem] shadow-xl
 bg-slate-800 xl:w-[1500px] xl:h-[650px]
 lg:h-[600px] lg:w-[1000px] lg:left-[-6rem]
 md:w-[440px] ">
    </div>

    <motion.div 
    initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{delay: 0.5, duration: 1}}
viewport={{ once: true }}
className="md:w-[70%]
    xl:w-[800px] w-[90%] shadow-xl">
   
    <Image src="/images/copywriting-home-service.png"
alt=""
width={800}
height={400}
    />
    </motion.div>

    <motion.div 
    initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{delay: 0.8, duration: 1}}
viewport={{ once: true }}
 className="flex 
 flex-col md:items-center lg:items-start xl:w-[40%] md:w-[80%]">
      <div className="rounded-[6rem]
   bg-[#282f2f] shadow-xl
     p-12 h-auto w-auto rounded-tl-none rounded-br-none">
           <div className="text-4xl neon-red lg:text-6xl flex items-center">
 
            
            <FontAwesomeIcon icon={faPen} />
            
            </div>
        <h3 className="md:text-center lg:text-left sm:text-3xl md:text-3xl xl:text-4xl
      text-white">{props.serviceTwo}</h3>
        <p className="text-xl neon-red uppercase">Your brand message</p>
        <p className="text-xl md:text-2xl text-white py-4 md:text-center lg:text-left
        lg:w-[80%] md:w-[80%]">{props.serviceTwoTxt}</p>
            <ReadMoreButton bg="bg-[#FD0E35]"/>
  </div>
        </motion.div>
    </div>

    <div className={`w-[80vw]
flex flex-col relative
md:flex-col lg:flex-row 
md:justify-center items-center lg:pb-36 
md:gap-4 lg:gap-12 lg:justify-around gap-12 pb-12 md:mb-16`}>


<div className="overlay opacity-[.03] 
absolute sm:hidden lg:block
z-[-50] xl:top-[-2rem] 
 xl:left-[4rem]
 shadow-xl bg-slate-800 md:right-[4rem] 
 xl:w-[1500px] lg:w-[1000px] lg:right-[-6rem] 
 lg:h-[600px] md:w-[440px] sm:h-[830px] xl:h-[650px]">
    </div>

    <motion.div 
    initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{delay: 0.5, duration: 1}}
viewport={{ once: true }}
    className="md:w-[70%]
    xl:w-[400px] w-[90%] shadow-xl">
        
    <Image src="/images/services-home-wordpress.png"
alt=""
width={800}
height={400}
    />
    </motion.div>
     
    
    
    <motion.div 
    initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{delay: 0.8, duration: 1}}
viewport={{ once: true }}
 className="flex md:items-center lg:items-start flex-col 
 xl:w-[40%] md:w-[80%]">
    <div className="rounded-[6rem]
    bg-[#282f2f] shadow-xl 
     p-12 h-auto w-auto rounded-tl-none rounded-br-none">
        <div className="text-4xl neon-red lg:text-6xl">
            <FontAwesomeIcon icon={faDesktop} />
            </div>
        <h3 className="md:text-center lg:text-left sm:text-3xl md:text-3xl xl:text-4xl
      text-white">
            
            {props.serviceThree}</h3>
            <p className="text-xl uppercase neon-red">WordPress</p>
        <p className="text-xl md:text-2xl py-4 md:text-center lg:text-left
        lg:w-[100%] md:w-[80%] text-white">{props.serviceThreeTxt}</p>
            <ReadMoreButton bg="bg-[#FD0E35]"/>
            </div>
        </motion.div>
 </div>
 
 <div className={`w-[80vw] 
flex flex-col relative
md:flex-col lg:flex-row-reverse
md:justify-center items-center
lg:pb-36 md:gap-4 lg:gap-12 lg:justify-around gap-12 pb-12 md:mb-16`}>



<div className="overlay opacity-[.03] xl:left-[-5rem] 
absolute z-[-50] xl:top-[-2rem] sm:hidden lg:block
md:right-[-4rem] md:left-[0rem] shadow-xl
 bg-slate-800 xl:w-[1500px] xl:h-[650px]
 lg:h-[600px] lg:w-[1000px] lg:left-[-6rem]
 md:w-[440px] ">
    </div>

    <motion.div 
    initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{delay: 0.5, duration: 1}}
viewport={{ once: true }}
className="md:w-[70%]
    xl:w-[800px] w-[90%] shadow-xl">
   
    <Image src="/images/services-home-landing-pages.png"
alt=""
width={800}
height={400}
    />
    </motion.div>

    <motion.div 
    initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{delay: 0.8, duration: 1}}
viewport={{ once: true }}
 className="flex 
 flex-col md:items-center lg:items-start xl:w-[40%] md:w-[80%]">
      <div className="rounded-[6rem]
   bg-[#282f2f] shadow-xl
     p-12 h-auto w-auto rounded-tl-none rounded-br-none">
           <div className="text-4xl neon-red lg:text-6xl flex items-center">
 
            
            <FontAwesomeIcon icon={faPen} />
            
            </div>
        <h3 className="md:text-center lg:text-left sm:text-3xl md:text-3xl xl:text-4xl
      text-white">{props.serviceFour}</h3>
        <p className="text-xl neon-red uppercase">Marketing Performance</p>
        <p className="text-xl md:text-2xl text-white py-4 md:text-center lg:text-left
        lg:w-[80%] md:w-[80%]">{props.serviceFourTxt}</p>
            <ReadMoreButton bg="bg-[#FD0E35]"/>
  </div>
        </motion.div>
    </div>

    <div className={`w-[80vw]
flex flex-col relative
md:flex-col lg:flex-row 
md:justify-center items-center lg:pb-36 
md:gap-4 lg:gap-12 lg:justify-around gap-12 pb-12 md:mb-16`}>


<div className="overlay opacity-[.03] 
absolute sm:hidden lg:block
z-[-50] xl:top-[-2rem] 
 xl:left-[4rem]
 shadow-xl bg-slate-800 md:right-[4rem] 
 xl:w-[1500px] lg:w-[1000px] lg:right-[-6rem] 
 lg:h-[600px] md:w-[440px] sm:h-[830px] xl:h-[650px]">
    </div>

    <motion.div 
    initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{delay: 0.5, duration: 1}}
viewport={{ once: true }}
    className="md:w-[70%]
    xl:w-[800px] w-[90%] shadow-xl">
        
    <Image src="/images/services-home-ppc.png"
alt=""
width={800}
height={400}
    />
    </motion.div>
     
    
    
    <motion.div 
    initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{delay: 0.8, duration: 1}}
viewport={{ once: true }}
 className="flex md:items-center lg:items-start flex-col 
 xl:w-[40%] md:w-[80%]">
    <div className="rounded-[6rem]
    bg-[#282f2f] shadow-xl 
     p-12 h-auto w-auto rounded-tl-none rounded-br-none">
        <div className="text-4xl neon-red lg:text-6xl">
            <FontAwesomeIcon icon={faDesktop} />
            </div>
        <h3 className="md:text-center lg:text-left sm:text-3xl md:text-3xl xl:text-4xl
      text-white">
            
            {props.serviceFive}</h3>
            <p className="text-xl uppercase neon-red">Lead Gen</p>
        <p className="text-xl md:text-2xl py-4 md:text-center lg:text-left
        lg:w-[100%] md:w-[80%] text-white">{props.serviceFiveTxt}</p>
            <ReadMoreButton bg="bg-[#FD0E35]"/>
            </div>
        </motion.div>
 </div>

 <div className={`w-[80vw] 
flex flex-col relative
md:flex-col lg:flex-row-reverse
md:justify-center items-center
lg:pb-24 
md:gap-4 lg:gap-12 lg:justify-around gap-12`}>



<div className="overlay opacity-[.03] xl:left-[-5rem] 
absolute z-[-50] xl:top-[-2rem] sm:hidden lg:block
md:right-[-4rem] md:left-[0rem] shadow-xl
 bg-slate-800 xl:w-[1500px] xl:h-[650px]
 lg:h-[600px] lg:w-[1000px] lg:left-[-6rem]
 md:w-[440px] ">
    </div>

    <motion.div 
    initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{delay: 0.5, duration: 1}}
viewport={{ once: true }}
className="md:w-[70%]
    xl:w-[800px] w-[90%] shadow-xl">
   
    <Image src="/images/data-analytics.jpg"
alt=""
width={800}
height={400}
    />
    </motion.div>

    <motion.div 
    initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{delay: 0.8, duration: 1}}
viewport={{ once: true }}
 className="flex 
 flex-col md:items-center lg:items-start xl:w-[40%] md:w-[80%]">
      <div className="rounded-[6rem]
   bg-[#282f2f] shadow-xl
     p-12 h-auto w-auto rounded-tl-none rounded-br-none">
           <div className="text-4xl neon-red lg:text-6xl flex items-center">
 
            
            <FontAwesomeIcon icon={faPen} />
            
            </div>
        <h3 className="md:text-center lg:text-left sm:text-3xl md:text-3xl xl:text-4xl
      text-white">{props.serviceSix}</h3>
        <p className="text-xl neon-red uppercase">Data & Analytics</p>
        <p className="text-xl md:text-2xl text-white py-4 md:text-center lg:text-left
        lg:w-[80%] md:w-[80%]">{props.serviceSixTxt}</p>
            <ReadMoreButton bg="bg-[#FD0E35]"/>
  </div>
        </motion.div>
    </div>
</div>



        </>
    )
}

export default ServicesHome