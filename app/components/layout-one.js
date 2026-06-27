"use client";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";


const LayoutOne = ({children}) => {



    return (
     
        <>

        
<div className="wrap flex flex-col justify-between
        min-h-[100vh] w-[100%]">


<header className="sm:hidden xl:block desktops-extra-large
max-w-[4000px] bg-black"> 

<div className="relative h-[1000px]">
      <Image
     className="object-cover object-top"
        alt=""
        src= "/images/killer-performance-digital-hero-xl.png"
        loading="eager"
        quality="100"
fill={true}

      />
     </div>

       <nav className="top-[2rem] absolute left-[15%] right-[15%]">

  <div className="flex flex-row items-center justify-between">
 
       <Link href="/"><Image 
       src="/images/a1-webs-logo-500.png"
       width={120}
       height={120}
       alt="A1 webs logo"
       
       /> </Link>  
 
   

    </div>
        </nav>

      <div className="absolute text-left top-[16rem] left-[15%] right-[15%]">


      <h2 className="font-barlow text-white
      text-6xl relative font-semibold">
      Technical & Creative Support for Marketing Agencies and SMEs
          </h2>
          <ul
  className="font-sans font-semibold text-white text-3xl
   relative w-[80%] flex flex-wrap gap-y-2 gap-x-4"
>
  <li className="flex items-center gap-1">
    <span>•</span>
    <span>Web Design & development</span>
  </li>

  <li className="flex items-center gap-1 neon-red">
    <span>•</span>
    <span>Landing pages</span>
  </li>

  <li className="flex items-center gap-1">
    <span>•</span>
    <span>Copywriting</span>
  </li>

  <li className="flex items-center gap-1 neon-red">
    <span>•</span>
    <span>Wordpress support</span>
  </li>

  <li className="flex items-center gap-1">
    <span>•</span>
    <span>Analytics & conversion tracking</span>
  </li>

  <li className="flex items-center gap-1 neon-red">
    <span>•</span>
    <span>Google Ads setup</span>
  </li>

  <li className="flex items-center gap-1">
    <span>•</span>
    <span>Complete GA4 & GTM</span>
  </li>


</ul>

<div className="relative w-full">
    
      <h3 className="font-sans text-white
w-[80%]
      text-3xl">
Available for white-label and overflow projects

          </h3>
     <span
        className="
          absolute left-0 
          h-[2px] w-full bg-white opacity-50
          transition-all duration-500
         
        "
      />
          <div className="font-barlow  
     top-[2rem]  text-3xl 
   relative flex justify-end">
<button
  className="
    relative overflow-hidden rounded-lg
    px-6 py-3
    font-barlow font-bold text-white
    shadow-lg transition-all duration-300
    bg-gradient-to-r from-[#090fbd] to-[#ff3131]
    hover:shadow-[0_20px_50px_-20px_rgba(255,49,49,0.9)]
    hover:scale-[1.02]
    active:scale-[0.98]
  "
>
  {/* shimmer sweep */}
  <span
    className="
      pointer-events-none absolute inset-0
      translate-x-[-120%]
      bg-gradient-to-r from-transparent via-white/35 to-transparent
      animate-[shine_2.2s_ease-in-out_infinite]
    "
  />

  {/* optional glossy highlight */}
  <span className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />

  <Link href="#contactMe" className="relative z-10">
    Let&apos;s talk
  </Link>
</button>



          </div>
          </div>
          </div>


</header>

 <header className="lg:block xl:hidden desktops
sm:hidden w-[100%] bg-black h-[850px]"> 

<div className="relative w-full h-[1000px]">
      <Image
        className="object-center"
        alt=""
        src= "/images/killer-performance-digital-hero-xl.png"
        loading="eager"
 width={1598}
 height={800}

      />
     </div>

       <nav className="top-[2rem] absolute left-[10rem] right-[10rem]">

  <div className="flex flex-row items-center justify-between">

         
           <Link href="/">
             
    <Image 
       src="/images/a1-webs-logo-500.png"
       width={70}
       height={70}
       alt="A1 webs logo"
 
       /> </Link>  
            

   
 
    </div>
        </nav>

        <div className="absolute text-left top-[10rem] left-[10rem] right-[10rem]">
        <h2 className="font-barlow text-white
      text-5xl relative font-semibold">
      Technical & Creative Support for Marketing Agencies and SMEs
          </h2>
          <ul
  className="font-sans font-semibold text-white text-3xl
   relative w-[80%] flex flex-wrap gap-y-2 gap-x-4"
>
  <li className="flex items-center gap-1">
    <span>•</span>
    <span>Web Design & development</span>
  </li>

  <li className="flex items-center gap-1 neon-red">
    <span>•</span>
    <span>Landing pages</span>
  </li>

  <li className="flex items-center gap-1">
    <span>•</span>
    <span>Copywriting</span>
  </li>

  <li className="flex items-center gap-1 neon-red">
    <span>•</span>
    <span>Wordpress support</span>
  </li>

  <li className="flex items-center gap-1">
    <span>•</span>
    <span>Analytics & conversion tracking</span>
  </li>

  <li className="flex items-center gap-1 neon-red">
    <span>•</span>
    <span>Google Ads setup</span>
  </li>

  <li className="flex items-center gap-1 neon-red">
  <span>•</span>
    <span>Complete GA4 & GTM</span>
  </li>
</ul>

    
      <h3 className="font-sans text-white
w-[80%]
      text-2xl relative">
  Available for white-label and overflow projects
          </h3>

          <div className="font-barlow  
     top-[2rem]  text-3xl 
   relative">
         <span
        className="
          absolute left-0 
          h-[2px] w-full bg-white opacity-50
          transition-all duration-500
         
        "
      />
          <div className="font-barlow  
     top-[2rem]  text-2xl 
   relative flex justify-end">
<button
  className="
    relative overflow-hidden rounded-lg
    px-6 py-3
    font-barlow font-bold text-white
    shadow-lg transition-all duration-300
    bg-gradient-to-r from-[#090fbd] to-[#ff3131]
    hover:shadow-[0_20px_50px_-20px_rgba(255,49,49,0.9)]
    hover:scale-[1.02]
    active:scale-[0.98]
  "
>
  {/* shimmer sweep */}
  <span
    className="
      pointer-events-none absolute inset-0
      translate-x-[-120%]
      bg-gradient-to-r from-transparent via-white/35 to-transparent
      animate-[shine_2.2s_ease-in-out_infinite]
    "
  />

  {/* optional glossy highlight */}
  <span className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />

  <Link href="contactMe" className="relative z-10">
    Let&apos;s talk
  </Link>
</button>
</div>
          </div>
          </div>

</header>


<header className="md:hidden w-[100%] mobiles max-w-[649px]"> 

<div className="relative w-full h-[650px] -mt-10">
      <Image
     className=""
        alt=""
        src= "/images/killer-performance-digital-hero-sm.png"
        loading="eager"
        quality="100"

fill={true}
      />
       </div>
    

       <div className="flex flex-row
       items-center top-[2rem] justify-between text-white
        absolute left-[3rem] right-[3rem]">


       <Link href="/"><Image 
       src="/images/a1-webs-logo-500.png"
       height={80}
       width={80}
       alt="A1 webs logo"

       /> </Link> 




      </div>
<div className="top-[6rem] max-w-[649px] absolute  
right-[3rem] left-[3rem]">
     <h2 className="font-barlow text-white
      text-3xl relative font-bold leading-2">
      Technical & Creative Support for Marketing Agencies and SMEs
          </h2>

          <ul
  className="font-sans font-semibold text-white
       text-2xl relative w-[100%] leading-3 flex flex-wrap gap-y-6 gap-x-4"
>
  <li className="flex items-center gap-1">
    <span>•</span>
    <span>Web Design & development</span>
  </li>

  <li className="flex items-center gap-1 neon-red">
    <span>•</span>
    <span>Landing pages</span>
  </li>

  <li className="flex items-center gap-1">
    <span>•</span>
    <span>Copywriting</span>
  </li>

  <li className="flex items-center gap-1 neon-red">
    <span>•</span>
    <span>Wordpress support</span>
  </li>

  <li className="flex items-center gap-1">
    <span>•</span>
    <span>Analytics & conversion tracking</span>
  </li>

  <li className="flex items-center gap-1 neon-red">
    <span>•</span>
    <span>Google Ads setup</span>
  </li>

  <li className="flex items-center gap-1">
    <span>•</span>
    <span>Complete GA4 & GTM</span>
  </li>


</ul>
    
      <h3 className="font-sans text-white
w-[100%]
      text-lg relative leading-5">
Available for white-label and overflow projects
          </h3>

                  <span
        className="
          absolute left-0 
          h-[2px] w-full bg-white opacity-50
          transition-all duration-500
         
        "
      />

          <div className="font-barlow  
    text-lg
   relative top-4">
<button
  className="
    relative overflow-hidden rounded-lg
    px-6 py-3
    font-barlow font-bold text-white
    shadow-lg transition-all duration-300
    bg-gradient-to-r from-[#090fbd] to-[#ff3131]
    hover:shadow-[0_20px_50px_-20px_rgba(255,49,49,0.9)]
    hover:scale-[1.02]
    active:scale-[0.98]
  "
>
  {/* shimmer sweep */}
  <span
    className="
      pointer-events-none absolute inset-0
      translate-x-[-120%]
      bg-gradient-to-r from-transparent via-white/35 to-transparent
      animate-[shine_2.2s_ease-in-out_infinite]
    "
  />

  {/* optional glossy highlight */}
  <span className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />

  <Link href="contactMe" className="relative z-10">
    Let&apos;s talk
  </Link>
</button>
</div>
          </div>
</header>


<header className="md:block 
sm:hidden lg:hidden max-w-[1099px] tablets"> 

<div className="relative w-full h-[650px]">
    
      <Image
        alt=""
        src= "/images/killer-performance-digital-hero-md.png"
        loading="eager"
        quality="100"
      fill={true}


      />
       </div>
   
       <div className="top-[2rem] 
        flex flex-row items-center justify-between text-white
        absolute left-[3rem] right-[3rem]">
     
     
      <Link href="/"><Image 
       src="/images/a1-webs-logo-500.png"
       height={80}
       width={80}
       alt="A1 webs logo"
       /> 
        
        </Link> 


</div>
      
<div className="absolute text-left top-[8rem] left-[3rem] right-[3rem]">
<h2 className="font-barlow text-white
      text-4xl relative font-bold">
      Technical & Creative Support for Marketing Agencies and SMEs   </h2>
      <ul
  className="font-sans font-semibold text-white
       text-2xl relative w-[100%] leading-3 flex flex-wrap gap-y-6 gap-x-4"
>
  <li className="flex items-center gap-1">
    <span>•</span>
    <span>Web Design & development</span>
  </li>

  <li className="flex items-center gap-1 neon-red">
    <span>•</span>
    <span>Landing pages</span>
  </li>

  <li className="flex items-center gap-1">
    <span>•</span>
    <span>Copywriting</span>
  </li>

  <li className="flex items-center gap-1 neon-red">
    <span>•</span>
    <span>Wordpress support</span>
  </li>

  <li className="flex items-center gap-1">
    <span>•</span>
    <span>Analytics & conversion tracking</span>
  </li>

  <li className="flex items-center gap-1 neon-red">
    <span>•</span>
    <span>Google Ads setup</span>
  </li>

  <li className="flex items-center gap-1">
    <span>•</span>
    <span>Complete GA4 & GTM</span>
  </li>

</ul>

    
      <h3 className="font-sans text-white
w-[70%]
      text-xl relative leading-4">
Available for white-label and overflow projects
          </h3>

          <div className="font-barlow  
      text-lg
   relative">
       <span
        className="
          absolute left-0 
          h-[2px] w-full bg-white opacity-50
          transition-all duration-500
         
        "
      />
          <div className="font-barlow  
    text-xl 
   relative flex justify-end top-4">
<button
  className="
    relative overflow-hidden rounded-lg
    px-6 py-3
    font-barlow font-bold text-white
    shadow-lg transition-all duration-300
    bg-gradient-to-r from-[#090fbd] to-[#ff3131]
    hover:shadow-[0_20px_50px_-20px_rgba(255,49,49,0.9)]
    hover:scale-[1.02]
    active:scale-[0.98]
  "
>
  {/* shimmer sweep */}
  <span
    className="
      pointer-events-none absolute inset-0
      translate-x-[-120%]
      bg-gradient-to-r from-transparent via-white/35 to-transparent
      animate-[shine_2.2s_ease-in-out_infinite]
    "
  />

  {/* optional glossy highlight */}
  <span className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />

  <Link href="contactMe" className="relative z-10">
    Let&apos;s talk
  </Link>
</button>
</div>
          </div>
          </div>
     

</header>



      <main className="md:mt-[-2rem]">
                {children}
                </main>

                <footer className="footer footer-desktops sm:hidden xl:block 
         px-[15%] bg-cover bg-black bg-no-repeat bg-[url('/images/footer-desktops-xl.png')]
 w-[100%] py-24">
 
 <div className="flex flex-row flex-wrap 
                gap-2 justify-between">
      
        <div className="footer-address flex flex-col w-[30%]">
        <p className="font-barlow font-bold text-white text-sm">Service Areas</p>
        <p className="font-barlow text-white text-sm">Based in London</p>
       <p className="font-barlow text-white text-sm"> I serve businesses worldwide</p>
  
    </div>
          
     



    <div className="footer-legal flex flex-col">
        
        <ul className="flex flex-col gap-[2vw] flex-wrap font-barlow
         text-white text-sm">
             
               <li className="footer-link"><Link href="/privacy-policy">Privacy Policy</Link></li>
               <li className="footer-link"><Link href="/cookies-policy">Cookie Policy</Link></li>
        
           </ul>
        </div>
         

       <div className="w-[100%]
border-t border-dashed border-white"></div>


      <div className="flex flex-col flex-nowrap">
<p className="text-sm text-white font-barlow py-2">© A1 webs</p>

<div className="flex flex-col 
font-barlow"> 
   <p className='text-md text-white font-barlow'>
  hello@ano1webs.com</p>
</div>

      </div>
      </div>
               </footer>      

                <footer className="footer footer-desktops sm:hidden lg:block 
               px-[10rem] xl:hidden
            bg-center   bg-black bg-cover bg-black bg-no-repeat bg-[url('/images/footer-desktops-xl.png')]
 w-[100%] py-32">
 
 <div className="flex flex-row flex-wrap 
                gap-2 justify-between">
      
        <div className="footer-address flex flex-col w-[30%]">
        <p className="font-barlow font-bold text-white text-sm">Service Areas</p>
        <p className="font-barlow text-white text-sm">Based in London</p>
       <p className="font-barlow text-white text-sm"> I serve businesses worldwide</p>
  
    </div>
          
     



    <div className="footer-legal flex flex-col">
        
        <ul className="flex flex-col gap-[2vw] flex-wrap font-barlow
         text-white text-sm">
            
               <li className="footer-link"><Link href="/privacy-policy">Privacy Policy</Link></li>
               <li className="footer-link"><Link href="/cookies-policy">Cookie Policy</Link></li>
        
           </ul>
        </div>
         

       <div className="w-[100%]
border-t border-dashed border-white"></div>


      <div className="flex flex-col flex-nowrap">
<p className="text-sm text-white font-barlow py-2">© A1 webs</p>

<div className="flex flex-col 
font-barlow"> 
   <p className='text-md text-white font-barlow'>
  hello@ano1webs.com</p>

</div>

      </div>
      </div>
               </footer>      
    

               <footer className="footer footer-tablets sm:hidden md:block 
               lg:hidden
               bg-center
               bg-cover bg-black bg-no-repeat bg-[url('/images/footer-mobs.png')] w-[100%] py-28">
 
 <div className="flex flex-row flex-wrap px-[3rem]
                gap-2 justify-between">
      
        <div className="footer-address flex flex-col w-[30%]">
        <p className="font-barlow font-bold text-white text-sm">Service Areas</p>
        <p className="font-barlow text-white text-sm">Based in London</p>
       <p className="font-barlow text-white text-sm"> I serve businesses worldwide</p>
  
    </div>
          
     
         

       <div className="w-[100%]
border-t border-dashed border-white"></div>


      <div className="flex flex-col flex-nowrap">
<p className="text-sm text-white font-barlow py-2">© A1 webs</p>

<div className="flex flex-col 
font-barlow"> 
   <p className='text-md text-white font-barlow'>
  hello@ano1webs.com</p>
</div>

      </div>
      </div>
               </footer>       

              

               <footer className="footer-mobiles 
               lg:hidden md:hidden sm:block bg-center
               bg-cover bg-black bg-no-repeat bg-[url('/images/footer-mobs.png')] w-[100%] py-28">
 
 <div className="flex flex-row flex-wrap px-[3rem]
             gap-4 justify-between">
      
        <div className="footer-address flex flex-col w-[35%]">
        <p className="font-barlow font-bold text-white text-sm">Service Areas</p>
        <p className="font-barlow text-white text-sm">Based in London</p>
       <p className="font-barlow text-white text-sm"> I serve businesses worldwide</p>
  
    </div>
          
    


    <div className="footer-legal flex flex-col">
        
        <ul className="flex flex-col gap-[2vw] flex-wrap  font-barlow
         text-white text-sm w-[30%">
            
               <li className="footer-link"><Link href="/privacy-policy">Privacy Policy</Link></li>
               <li className="footer-link"><Link href="/cookies-policy">Cookie Policy</Link></li>
        
           </ul>
        </div>
         

       <div className="w-[100%]
border-t border-dashed border-white"></div>


      <div className="flex flex-col flex-nowrap">
<p className="text-sm text-white font-barlow py-2">© A1 webs</p>

<div className="flex flex-col 
font-barlow"> 
   <p className='text-md text-white font-barlow'>
  hello@ano1webs.com</p>
</div>

      </div>
      </div>
               </footer>               
          
</div>
        </>

)
}

export default LayoutOne
