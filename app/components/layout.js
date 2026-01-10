"use client";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";


const Layout = ({children}) => {



  const onToggleMenu = () => {
   
    const navLinks = document.body.querySelector('.nav-mobs')

    navLinks.classList.toggle('fixed')
    navLinks.classList.toggle('hidden')
    navLinks.classList.toggle('bg-black')

   }

    return (
     
        <>

        
<div className="wrap flex flex-col justify-between
        min-h-[100vh] w-[100%]">

<div className="nav-mobs flex-2 
min-h-[100vh] left-0 hidden
 w-full overflow-y-hidden 
 flex items-top px-12 z-50">
     <div className="flex 
py-2 text-2xl text-white cursor-pointer absolute top-[2%] right-[12%]">
<FontAwesomeIcon icon={faBars} 
onClick={onToggleMenu} 
/>
</div>
<ul className="flex flex-col mt-20
gap-8 font-barlow text-white text-md">
        <li className="nav-link"><Link href="/">Home</Link></li>
        <li className="nav-link"> 
            <button
    type="button"
    className="flex w-full items-center justify-between"
    onClick={(e) => {
      const parent = e.currentTarget.closest("li");
      parent.querySelector(".services-submenu").classList.toggle("hidden");
      parent.querySelector(".services-caret").classList.toggle("rotate-180");
    }}
  >
    <span>Services</span>
    <span className="services-caret transition-transform duration-200">▾</span>
  </button>

  <ul className="services-submenu mt-4 ml-4 hidden flex-col gap-4 text-sm text-slate-300">
    <li className="nav-link">
      <Link href="/services/copywriting-services">Copywriting Services</Link>
    </li>
  </ul>
</li>
        <li className="nav-link"><Link href="/about">About</Link></li>
        <li className="nav-link"><Link href="/blog">Blog</Link></li>
        <li className="nav-link"><Link href="/contact">Contact</Link></li>

      
    </ul>
</div>

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
       src="/images/killer-logo-black-bg-500.png"
       width={120}
       height={120}
       alt="Killer performance digital logo"
       
       /> </Link>  
 
    <ul className="flex flex-row items-center 
    gap-[2vw] justify-items-end
    font-barlow text-white text-sm">
        <li className="nav-link"><Link href="/">Home</Link></li>

        
    {/* Services with submenu */}
  <li className="relative group nav-link">
    <Link href="/services" className="inline-block">
      Services
    </Link>

    {/* Submenu */}
    <ul
      className="
        absolute left-0 top-full
        mt-3 w-56
        bg-slate-900 border border-slate-800
        shadow-xl
        opacity-0 invisible
        translate-y-2
        transition-all duration-200
        group-hover:opacity-100
        group-hover:visible
        group-hover:translate-y-0
      "
    >
    

      <li>
        <Link
          href="/services/copywriting-services"
          className="block px-5 py-3 hover:bg-slate-800 transition"
        >
          Copywriting services
        </Link>
      </li>
    </ul>
  </li>

        <li className="nav-link"><Link href="/about">About</Link></li>
        <li className="nav-link"><Link href="/blog">Blog</Link></li>
      
    </ul>

    </div>
        </nav>

      <div className="absolute text-left top-[16rem] left-[15%] right-[15%]">


      <h2 className="font-barlow text-white
      text-6xl relative font-semibold">
      Performance marketing for SME<span className="lowercase">s</span>
          </h2>
      <h2 className="font-sans font-semibold text-white
       text-4xl relative w-[60%]">
          <span className="neon-red">Better</span> websites </h2>
      
          <h2 className="font-sans font-semibold text-white
       text-4xl relative w-[60%]">
    <span className="neon-red">Stronger</span> performance
    </h2>
<h2 className="font-sans font-semibold text-white
       text-4xl relative w-[60%]">
<span className="neon-red">More</span> leads
          </h2>

<div className="relative w-full">
    
      <h3 className="font-sans text-white
w-[80%]
      text-3xl">
   Website optimisation, high-converting landing pages, 
   complete GA4 & GTM tracking and 
   focused Google Ads campaigns which generate leads.

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

  <Link href="/contact" className="relative z-10">
    Book a free strategy call
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
       src="/images/killer-logo-black-bg-500.png"
       width={70}
       height={70}
       alt="Killer performance digital logo"
 
       /> </Link>  
            

    <ul className="flex flex-row items-center 
    gap-[2vw] justify-items-end
    font-barlow text-white text-sm">
        <li className="nav-link"><Link href="/">Home</Link></li>
     {/* Services with submenu */}
  <li className="relative group nav-link">
    <Link href="/services" className="inline-block">
      Services
    </Link>

    {/* Submenu */}
    <ul
      className="
        absolute left-0 top-full
        mt-3 w-56
        bg-slate-900 border border-slate-800
        shadow-xl
        opacity-0 invisible
        translate-y-2
        transition-all duration-200
        group-hover:opacity-100
        group-hover:visible
        group-hover:translate-y-0
      "
    >
    

      <li>
        <Link
          href="/services/copywriting-services"
          className="block px-5 py-3 hover:bg-slate-800 transition"
        >
          Copywriting services
        </Link>
      </li>
    </ul>
  </li>

       
        <li className="nav-link"><Link href="/about">About</Link></li>
        <li className="nav-link"><Link href="/blog">Blog</Link></li>
      
    </ul>
 
    </div>
        </nav>

        <div className="absolute text-left top-[10rem] left-[10rem] right-[10rem]">
        <h2 className="font-barlow text-white
      text-5xl relative font-semibold">
      Performance marketing for SME<span className="lowercase">s</span>
          </h2>
      <h2 className="font-sans font-semibold text-white
       text-3xl relative w-[60%]">
          <span className="neon-red">Better</span> websites </h2>
      
          <h2 className="font-sans font-semibold text-white
       text-3xl relative w-[60%]">
    <span className="neon-red">Stronger</span> performance
    </h2>
<h2 className="font-sans font-semibold text-white
       text-3xl relative w-[60%]">
<span className="neon-red">More</span> leads
          </h2>

    
      <h3 className="font-sans text-white
w-[80%]
      text-2xl relative">
   Website optimisation, high-converting landing pages, 
   complete GA4 & GTM tracking and 
   focused Google Ads campaigns which generate leads.
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

  <Link href="/contact" className="relative z-10">
    Book a free strategy call
  </Link>
</button>
</div>
          </div>
          </div>

</header>


<header className="md:hidden w-[100%] mobiles max-w-[649px]"> 

<div className="relative w-full h-[620px]">
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
       src="/images/killer-logo-black-bg-500.png"
       height={80}
       width={80}
       alt="Killer performance digital logo"

       /> </Link> 


<div className="text-2xl">
<FontAwesomeIcon icon={faBars} 
onClick={onToggleMenu} 
/>
</div>

      </div>
<div className="top-[8rem] max-w-[649px] absolute  
right-[3rem] left-[3rem]">
     <h2 className="font-barlow text-white
      text-xl relative font-bold leading-5">
      Performance marketing for SME<span className="lowercase">s</span>
          </h2>
      <h2 className="font-sans font-semibold text-white
       text-lg relative w-[100%] leading-3">
          <span className="neon-red">Better</span> websites </h2>
      
          <h2 className="font-sans font-semibold text-white
       text-lg relative w-[100%] leading-3">
    <span className="neon-red">Stronger</span> performance
    </h2>
<h2 className="font-sans font-semibold text-white
       text-lg relative w-[100%] leading-3">
<span className="neon-red">More</span> leads
          </h2>

    
      <h3 className="font-sans text-white
w-[100%]
      text-lg relative leading-5">
   Website optimisation, high-converting landing pages, 
   complete GA4 & GTM tracking and 
   focused Google Ads campaigns which generate leads.
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

  <Link href="/contact" className="relative z-10">
    Book a free strategy call
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
       src="/images/killer-logo-black-bg-500.png"
       height={80}
       width={80}
       alt="Killer performance digital logo"
       /> 
        
        </Link> 

<div className="text-2xl">
<FontAwesomeIcon icon={faBars} 
onClick={onToggleMenu} 
/>
</div>
</div>
      
<div className="absolute text-left top-[8rem] left-[3rem] right-[3rem]">
<h2 className="font-barlow text-white
      text-4xl relative font-bold">
      Performance marketing for SME<span className="lowercase">s</span>
          </h2>
      <h2 className="font-sans font-semibold text-white
       text-2xl relative leading-3">
          <span className="neon-red">Better</span> websites </h2>
      
          <h2 className="font-sans font-semibold text-white
       text-2xl relative leading-3">
    <span className="neon-red">Stronger</span> performance
    </h2>
<h2 className="font-sans font-semibold text-white
       text-2xl relative leading-3">
<span className="neon-red">More</span> leads
          </h2>

    
      <h3 className="font-sans text-white
w-[70%]
      text-xl relative leading-4">
   Website optimisation, high-converting landing pages, 
   complete GA4 & GTM tracking and 
   focused Google Ads campaigns which generate leads.
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

  <Link href="/contact" className="relative z-10">
    Book a free strategy call
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
       <p className="font-barlow text-white text-sm"> We serve businesses worldwide</p>
  
    </div>
          
     
  
           <div className="footer-links 
            flex flex-col w-[30%]">
        
        <ul className="flex flex-col gap-[2vw] flex-wrap font-barlow
         text-white text-sm">
               <li className="footer-link"><Link href="/about">About</Link></li>
               <li className="footer-link"><Link href="/contact">Contact</Link></li>
               <li className="footer-link"><Link href="/services">Services</Link></li>
        
           </ul>
     
        

          </div>


    <div className="footer-legal flex flex-col">
        
        <ul className="flex flex-col gap-[2vw] flex-wrap font-barlow
         text-white text-sm">
               <li className="footer-link"><Link href="#">Terms & Conditions</Link></li>
               <li className="footer-link"><Link href="/privacy-policy">Privacy Policy</Link></li>
               <li className="footer-link"><Link href="/cookies-policy">Cookie Policy</Link></li>
        
           </ul>
        </div>
         

       <div className="w-[100%]
border-t border-dashed border-white"></div>


      <div className="flex flex-col flex-nowrap">
<p className="text-sm text-white font-barlow py-2">© Killer Performance Digital</p>

<div className="flex flex-col 
font-barlow"> 
   <p className='text-md text-white font-barlow'>
  hello@killerperformancedigital.com</p>
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
       <p className="font-barlow text-white text-sm"> We serve businesses worldwide</p>
  
    </div>
          
     
  
           <div className="footer-links 
            flex flex-col w-[30%]">
        
        <ul className="flex flex-col gap-[2vw] flex-wrap font-barlow
         text-white text-sm">
               <li className="footer-link"><Link href="/about">About</Link></li>
               <li className="footer-link"><Link href="/contact">Contact</Link></li>
               <li className="footer-link"><Link href="/services">Services</Link></li>
               <li className="nav-link"><Link href="/blog">Blog</Link></li>
           </ul>
     
        

          </div>


    <div className="footer-legal flex flex-col">
        
        <ul className="flex flex-col gap-[2vw] flex-wrap font-barlow
         text-white text-sm">
               <li className="footer-link"><Link href="#">Terms & Conditions</Link></li>
               <li className="footer-link"><Link href="/privacy-policy">Privacy Policy</Link></li>
               <li className="footer-link"><Link href="/cookies-policy">Cookie Policy</Link></li>
        
           </ul>
        </div>
         

       <div className="w-[100%]
border-t border-dashed border-white"></div>


      <div className="flex flex-col flex-nowrap">
<p className="text-sm text-white font-barlow py-2">© Killer Performance Digital</p>

<div className="flex flex-col 
font-barlow"> 
   <p className='text-md text-white font-barlow'>
  hello@killerperformancedigital.com</p>

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
       <p className="font-barlow text-white text-sm"> We serve businesses worldwide</p>
  
    </div>
          
     
  
           <div className="footer-links 
            flex flex-col w-[30%]">
        
        <ul className="flex flex-col gap-[2vw] flex-wrap font-barlow
         text-white text-sm">
               <li className="footer-link"><Link href="/about">About</Link></li>
               <li className="footer-link"><Link href="/contact">Contact</Link></li>
               <li className="footer-link"><Link href="/services">Services</Link></li>
               <li className="nav-link"><Link href="/blog">Blog</Link></li>
           </ul>
     
        

          </div>


    <div className="footer-legal flex flex-col">
        
        <ul className="flex flex-col gap-[2vw] flex-wrap font-barlow
         text-white text-sm">
               <li className="footer-link"><Link href="#">Terms & Conditions</Link></li>
               <li className="footer-link"><Link href="/privacy-policy">Privacy Policy</Link></li>
               <li className="footer-link"><Link href="/cookies-policy">Cookie Policy</Link></li>
        
           </ul>
        </div>
         

       <div className="w-[100%]
border-t border-dashed border-white"></div>


      <div className="flex flex-col flex-nowrap">
<p className="text-sm text-white font-barlow py-2">© Killer Performance Digital</p>

<div className="flex flex-col 
font-barlow"> 
   <p className='text-md text-white font-barlow'>
  hello@killerperformancedigital.com</p>
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
       <p className="font-barlow text-white text-sm"> We serve businesses worldwide</p>
  
    </div>
          
     
  
           <div className="footer-links 
            flex flex-col w-[30%]">
        
        <ul className="flex flex-col gap-[2vw] flex-wrap font-barlow
         text-white text-sm">
               <li className="footer-link"><Link href="/about">About</Link></li>
               <li className="footer-link"><Link href="/contact">Contact</Link></li>
               <li className="footer-link"><Link href="/services">Services</Link></li>
               <li className="nav-link"><Link href="/blog">Blog</Link></li>
           </ul>
     
        

          </div>


    <div className="footer-legal flex flex-col">
        
        <ul className="flex flex-col gap-[2vw] flex-wrap  font-barlow
         text-white text-sm w-[30%">
               <li className="footer-link"><Link href="#">Terms & Conditions</Link></li>
               <li className="footer-link"><Link href="/privacy-policy">Privacy Policy</Link></li>
               <li className="footer-link"><Link href="/cookies-policy">Cookie Policy</Link></li>
        
           </ul>
        </div>
         

       <div className="w-[100%]
border-t border-dashed border-white"></div>


      <div className="flex flex-col flex-nowrap">
<p className="text-sm text-white font-barlow py-2">© Killer Performance Digital</p>

<div className="flex flex-col 
font-barlow"> 
   <p className='text-md text-white font-barlow'>
  hello@killerperformancedigital.com</p>
</div>

      </div>
      </div>
               </footer>               
          
</div>
        </>

)
}

export default Layout
