"use client";
import Image from "next/image";

import {motion} from "framer-motion"

const ContactUs = () => {

    return (
        <>
            <motion.div 
    initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{delay: 0.8, duration: 1}}
viewport={{ once: true }} className="bg-black font-barlow
        text-white relative">
        <div className="flex
        flex-row flex-wrap-reverse md:py-12 justify-start 
        lg:justify-around md:justify-start lg:px-0 
        lg:flex-nowrap">

<div className="lg:w-[2/5] sm:w-4/5 
flex flex-col px-[3rem] lg:px-[0rem] lg:ml-[10rem] pt-12 xl:ml-[15%]">
<h2 className='text-3xl md:text-4xl xl:text-6xl'>Contact Us
</h2>

<div className="border-b border-[#FD0E35]
    border-4 w-[15%] md:w-[10%] lg:w-[5%] my-2">

    </div>
<p className="pt-6 text-xl md:text-3xl lg:w-[80%]">
    We typically respond to enquiries within
    24 hours.</p>
 
<div className="flex flex-row  
contact font-barlow py-2"> <p className='text-xl 
md:text-2xl lg:text-4xl text-white'>hello@killerperformancedigital.com</p>
</div>

</div>

<div className="w-full md:mx-[3rem] lg:mr-[10rem] xl:mr-[15%] md:pt-12">

    
    <div className="opacity-90">
<Image src="/images/contact-section-img.png"
width={800}
height={400}
alt="Photograph of the index finger of a man's hand connecting
with a bright blue envelope over a night-sky background"

/>
</div>

 </div>
 </div>
        </motion.div>
        </>
    )
}

export default ContactUs