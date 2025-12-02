"use client";
import Image from 'next/image'
import {motion} from "framer-motion"

const Services = () => {


return (
<>
<motion.div 
    initial={{opacity: 0, top: "5rem" }}
whileInView={{opacity: 1, top: "0rem"}}
transition={{delay: 1, duration: 1.5}}
viewport={{ once: false }}
className="services sm:hidden md:flex 
flex-col flex-wrap py-32 xl:hidden md:py-24 
bg-cover bg-top bg-fixed w-auto
bg-no-repeat bg-[url('/images/service-comp-bg-mobs.png')]
relative h-[600px]">

<div className="bg-slate-800 w-full h-full 
opacity-40 absolute top-[0rem] bg-top bg-fixed 
bg-no-repeat"></div>

  <h2 className="font-barlow w-[40%] font-semibold text-white
   text-2xl lg:ml-[10rem] md:ml-[3rem] brightness-150">
      Memorable digital experiences for your customers
      </h2>
      <div className="border-b border-[#FD0E35]
    border-4 md:ml-[3rem] w-[15%] brightness-150 lg:ml-[10rem] md:w-[10%] lg:w-[5%] my-4">

    </div>

   <p className="text-white font-barlow
    text-md w-[100%] md:w-[60%] md:ml-[3rem] lg:ml-[10rem] brightness-150">
    We offer a unique set of services in web development,
     design and marketing. When you partner with us, our eclectic
      mix of digital 
     skills and expertise are available on hand, and all in one place. Whether 
     you're wanting to get online, refine your
     marketing materials or improve the performance of your existing
     digital assets, our range of services on offer
    can take care of your fundamental digital business needs.        
    </p>


 </motion.div>

 <motion.div 
   initial={{opacity: 0, top: "5rem" }}
whileInView={{opacity: 1}}
transition={{delay: 0.4, duration: 1}}
viewport={{ once: true }}>
 <div className="services-mobiles sm:block flex md:hidden
flex-col flex-wrap px-[3rem] 
bg-cover bg-top bg-fixed 
bg-no-repeat bg-[url('/images/service-comp-bg-mobs.png')]
 py-4 relative">



  <h2 className="font-barlow pb-[1rem] font-semibold text-white
   text-4xl">
        Memorable digital experiences for your customers
      </h2>
      <div className="border-b border-[#FD0E35]
    border-4 w-[15%] md:w-[10%] lg:w-[5%] my-6">

    </div>

   <p className="text-white font-barlow text-lg w-[90%]">
    We offer a unique set of services in web development,
     design and marketing. When you partner with us, our eclectic
      mix of digital 
     skills and expertise are available on hand, and all in one place. Whether 
     you're wanting to get online, refine your
     marketing materials or improve the performance of your existing
     digital assets, our range of services on offer
    can take care of your fundamental digital business needs.        
    </p>


 </div>
 </motion.div>


 <motion.div 
   initial={{opacity: 0, top: "5rem" }}
whileInView={{opacity: 1, top: "0rem"}}
transition={{delay: 1, duration: 1.5}}
viewport={{ once: false }} className="services-desktops px-[20rem] xl:flex 
flex-row sm:hidden py-24 gap-16 bg-cover bg-center bg-fixed 
bg-no-repeat bg-[url('/images/service-comp-bg-mobs.png')]
relative h-[800px] z-100 
items-center w-auto justify-center">

<div className="bg-slate-800 w-full h-full 
opacity-40 absolute top-[0rem] bg-top bg-fixed 
bg-no-repeat"></div>

<div className="w-[50%] brightness-150">
  <h2 className="font-barlow w-[50%] font-semibold text-white
   text-4xl brightness-150">
     Memorable digital experiences for your customers
      </h2>
      <div className="border-b border-[#FD0E35]
    border-4 w-[15%] md:w-[10%] lg:w-[5%] my-6">

    </div>
</div>

   <p className="text-white font-barlow text-xl w-[50%] brightness-150">
    We offer a unique set of services in web development,
     design and marketing. When you partner with us, our eclectic
      mix of digital 
     skills and expertise are available on hand, and all in one place. Whether 
     you're wanting to get online, refine your
     marketing materials or improve the performance of your existing
     digital assets, our range of services on offer
    can take care of your fundamental digital business needs.        
    </p>


    </motion.div>


 </>
)
}

export default Services