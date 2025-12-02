"use client";
import React from 'react'

const Content = ({children}) => {


return (
<>
<div className='bg-black w-[100%]'>
<div className="services px-[10rem] sm:hidden md:block 
 xl:hidden md:py-24 
bg-black text-white font-barlow text-lg w-[100%]">

      {children}



 </div>

 <div className="services-mobiles sm:block md:hidden
m-auto bg-black text-white font-barlow text-lg 
px-[3rem] py-4">

     {children}


 </div>


 <div className="services-desktops px-[20rem] xl:block
py-24 sm:hidden bg-black 
w-[100%] text-white font-barlow text-2xl ">


   {children}


 </div>
 </div>
 </>
)
}

export default Content