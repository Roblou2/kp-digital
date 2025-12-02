"use client";
import {motion} from "framer-motion"

const ComingSoon = () => {

    return (
        <>

<div className="w-full min-h-[50vh] h-full
flex flex-col items-center justify-center text-center bg-black
xl:px-[15%] sm:px-[3rem] lg:px-[10rem]">
    <motion.h2 
    initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{delay: 0.5, duration: 3}}
viewport={{ once: true }} className
="sm:text-3xl md:text-4xl lg:text-6xl font-barlow text-white">
    This page will be live real soon. Stay tuned.</motion.h2>

</div>

        </>
    )
}

export default ComingSoon 