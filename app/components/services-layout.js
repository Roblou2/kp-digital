"use client";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";


const ServicesLayout = ({children, ...props}) => {



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
        <li className="nav-link"><Link href="/services">Services</Link></li>
        <li className="nav-link"><Link href="/about">About</Link></li>
        <li className="nav-link"><Link href="/blog">Blog</Link></li>
        <li className="nav-link"><Link href="/contact">Contact</Link></li>

      
    </ul>
</div>

<header className="sm:hidden xl:block desktops-extra-large
max-w-[4000px] bg-black relative"> 

<div className="relative h-[1000px]">
      <Image
     className="object-cover object-center"
        alt=""
        src= "/images/my-site-hero-desktops-xl-squares.png"
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
        <li className="nav-link"><Link href="/services">Services</Link></li>
       
        <li className="nav-link"><Link href="/about">About</Link></li>
        <li className="nav-link"><Link href="/blog">Blog</Link></li>
      
    </ul>

    </div>
        </nav>

      <div className="absolute text-left top-[16rem]  
      left-[15%] right-[15%] flex flex-row justify-between items-center">

<div className="w-1/2">
      <h2 className="font-barlow text-white
      text-4xl relative font-bold uppercase">
      High-converting copywriting for SME<span className="lowercase">s</span>
          </h2>
      <h2 className="font-sans font-semibold text-white
       text-3xl relative uppercase">
          <span className="neon-red">Better</span> websites </h2>
      
          <h2 className="font-sans font-semibold text-white
       text-3xl relative uppercase">
    <span className="neon-red">Stronger</span> performance
    </h2>
<h2 className="font-sans font-semibold text-white
       text-3xl relative uppercase">
<span className="neon-red">More</span> leads
          </h2>

    
      <h3 className="font-sans text-white

      text-2xl relative">
   Website optimisation, high-converting landing pages, 
   complete GA4 & GTM tracking and 
   focused Google Ads campaigns which generate leads.
          </h3>

          </div>

          <div className="w-1/2 max-w-[600px]">
            <form
  className="
    rounded-2xl border border-slate-800 bg-white
    p-6
    shadow-lg shadow-black/30
    backdrop-blur">
    
  <h3 className="mb-5 text-4xl text-center font-bold font-sans uppercase text-black">
    Start a conversation
  </h3>

  {/* Name */}
  <div className="mb-4">
    <label className="block text-sm font-medium text-black">
      Name <span className="text-red-600">*</span>
    </label>
    <input
      type="text"
      name="name"
      required
      className="
        mt-2 block w-full rounded-lg border border-slate-700 bg-slate-900
        px-3 py-2 text-sm text-slate-50
        placeholder:text-slate-500
        focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500
      "
      placeholder="Your name"
    />
  </div>

  {/* Email */}
  <div className="mb-4">
    <label className="block text-sm font-medium text-black">
      Email <span className="text-red-600">*</span>
    </label>
    <input
      type="email"
      name="email"
      required
      className="
        mt-2 block w-full rounded-lg border border-slate-700 bg-slate-900
        px-3 py-2 text-sm text-slate-50
        placeholder:text-slate-500
        focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500
      "
      placeholder="you@company.com"
    />
  </div>

  {/* Phone */}
  <div className="mb-4">
    <label className="block text-sm font-medium text-black">
      Phone (optional)
    </label>
    <input
      type="tel"
      name="phone"
      className="
        mt-2 block w-full rounded-lg border border-slate-700 bg-slate-900
        px-3 py-2 text-sm text-slate-50
        placeholder:text-slate-500
        focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500
      "
      placeholder="+1 555 123 4567"
    />
  </div>

  {/* Details */}
  <div className="mb-6">
    <label className="block text-sm font-medium text-black">
      Message
    </label>
    <textarea
      name="details"
      rows={3}
      className="
        mt-2 block w-full rounded-lg border border-slate-700 bg-slate-900
        px-3 py-2 text-sm text-slate-50
        placeholder:text-slate-500
        focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"/>
  </div>

  {/* Submit */}
  <button
    type="submit"
    className="
      inline-flex w-full items-center justify-center
      rounded-lg bg-red-600 px-4 py-2.5
      text-sm font-semibold text-white
      shadow-sm shadow-red-900/40
      transition-colors
      hover:bg-red-500
    "
  >
    Get in touch
  </button>


</form>

          </div>
</div>

</header>

 <header className="lg:block xl:hidden desktops
sm:hidden w-[100%] bg-black h-[850px]"> 

<div className="relative w-full h-[1000px]">
      <Image
        className="object-center"
        alt=""
        src= "/images/my-site-hero-desktops-xl-squares.png"
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
        <li className="nav-link"><Link href="/services">Services</Link></li>
       
        <li className="nav-link"><Link href="/about">About</Link></li>
        <li className="nav-link"><Link href="/blog">Blog</Link></li>
      
    </ul>
 
    </div>
        </nav>

        <div className="absolute text-left top-[10rem] left-[10rem] right-[10rem]
         flex flex-row justify-between items-center">

          <div className="w-1/2">
        <h2 className="font-barlow text-white
      text-3xl relative font-bold uppercase">
      Performance marketing for SME<span className="lowercase">s</span>
          </h2>
      <h2 className="font-sans font-semibold text-white
       text-2xl relative uppercase">
          <span className="neon-red">Better</span> websites </h2>
      
          <h2 className="font-sans font-semibold text-white
       text-2xl relative uppercase">
    <span className="neon-red">Stronger</span> performance
    </h2>
<h2 className="font-sans font-semibold text-white
       text-2xl relative uppercase">
<span className="neon-red">More</span> leads
          </h2>

    
      <h3 className="font-sans text-white
      text-xl relative">
   Website optimisation, high-converting landing pages, 
   complete GA4 & GTM tracking and 
   focused Google Ads campaigns which generate leads.
          </h3>
</div>
  <div className="w-1/2 max-w-[500px]">
            <form
  className="w-full
    rounded-2xl border border-slate-800 bg-white
    p-6
    shadow-lg shadow-black/30
    backdrop-blur">
    
  <h3 className="mb-5 text-3xl text-black 
  text-center font-extrabold font-sans uppercase">
    Start a conversation
  </h3>

  {/* Name */}
  <div className="mb-4">
    <label className="block text-sm font-medium text-black">
      Name <span className="text-red-600">*</span>
    </label>
    <input
      type="text"
      name="name"
      required
      className="
        mt-2 block w-full rounded-lg border border-slate-700 bg-slate-900
        px-3 py-2 text-sm text-slate-50
        placeholder:text-slate-500
        focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500
      "
      placeholder="Your name"
    />
  </div>

  {/* Email */}
  <div className="mb-4">
    <label className="block text-sm font-medium text-black">
      Email <span className="text-red-600">*</span>
    </label>
    <input
      type="email"
      name="email"
      required
      className="
        mt-2 block w-full rounded-lg border border-slate-700 bg-slate-900
        px-3 py-2 text-sm text-slate-50
        placeholder:text-slate-500
        focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500
      "
      placeholder="you@company.com"
    />
  </div>

  {/* Phone */}
  <div className="mb-4">
    <label className="block text-sm font-medium text-black">
      Phone (optional)
    </label>
    <input
      type="tel"
      name="phone"
      className="
        mt-2 block w-full rounded-lg border border-slate-700 bg-slate-900
        px-3 py-2 text-sm text-slate-50
        placeholder:text-slate-500
        focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500
      "
      placeholder="+1 555 123 4567"
    />
  </div>

  {/* Details */}
  <div className="mb-6">
    <label className="block text-sm font-medium text-black">
      Message
    </label>
    <textarea
      name="details"
      rows={3}
      className="
        mt-2 block w-full rounded-lg border border-slate-700 bg-slate-900
        px-3 py-2 text-sm text-slate-50
        placeholder:text-slate-500
        focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"/>
  </div>

  {/* Submit */}
  <button
    type="submit"
    className="
      inline-flex w-full items-center justify-center
      rounded-lg bg-red-600 px-4 py-2.5
      text-sm font-semibold text-white
      shadow-sm shadow-red-900/40
      transition-colors
      hover:bg-red-500
    "
  >
    Get in touch
  </button>


</form>

          </div>

          </div>

</header>


<header className="md:hidden w-[100%] mobiles max-w-[649px]
 bg-black"> 

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
      text-xl relative font-bold uppercase leading-5">
      Performance marketing for SME<span className="lowercase">s</span>
          </h2>
      <h2 className="font-sans font-semibold text-white
       text-lg relative uppercase w-[100%] leading-3">
          <span className="neon-red">Better</span> websites </h2>
      
          <h2 className="font-sans font-semibold text-white
       text-lg relative uppercase w-[100%] leading-3">
    <span className="neon-red">Stronger</span> performance
    </h2>
<h2 className="font-sans font-semibold text-white
       text-lg relative uppercase w-[100%] leading-3">
<span className="neon-red">More</span> leads
          </h2>

    
      <h3 className="font-sans text-white
w-[100%]
      text-lg relative leading-5">
   Website optimisation, high-converting landing pages, 
   complete GA4 & GTM tracking and 
   focused Google Ads campaigns which generate leads.
          </h3>

          </div>

           <form
  className="
    rounded-2xl border border-slate-800 bg-white
    p-4 mx-[3rem] relative bottom-[6rem]
    shadow-md shadow-black/30
    backdrop-blur">
    
  <h3 className="mb-5 text-xl text-center font-extrabold font-sans uppercase text-black">
    Start a conversation
  </h3>

  {/* Name */}
  <div className="mb-4">
    <label className="block text-sm font-medium text-black">
      Name <span className="text-red-600">*</span>
    </label>
    <input
      type="text"
      name="name"
      required
      className="
        mt-2 block w-full rounded-lg border border-slate-700 bg-slate-900
        px-3 py-2 text-sm text-slate-50
        placeholder:text-slate-500
        focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500
      "
      placeholder="Your name"
    />
  </div>

  {/* Email */}
  <div className="mb-4">
    <label className="block text-sm font-medium text-black">
      Email <span className="text-red-600">*</span>
    </label>
    <input
      type="email"
      name="email"
      required
      className="
        mt-2 block w-full rounded-lg border border-slate-700 bg-slate-900
        px-3 py-2 text-sm text-slate-50
        placeholder:text-slate-500
        focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500
      "
      placeholder="you@company.com"
    />
  </div>

  {/* Phone */}
  <div className="mb-4">
    <label className="block text-sm font-medium text-black">
      Phone (optional)
    </label>
    <input
      type="tel"
      name="phone"
      className="
        mt-2 block w-full rounded-lg border border-slate-700 bg-slate-900
        px-3 py-2 text-sm text-slate-50
        placeholder:text-slate-500
        focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500
      "
      placeholder="+1 555 123 4567"
    />
  </div>

  {/* Details */}
  <div className="mb-6">
    <label className="block text-sm font-medium text-black">
      Message
    </label>
    <textarea
      name="details"
      rows={3}
      className="
        mt-2 block w-full rounded-lg border border-slate-700 bg-slate-900
        px-3 py-2 text-sm text-slate-50
        placeholder:text-slate-500
        focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"/>
  </div>

  {/* Submit */}
  <button
    type="submit"
    className="
      inline-flex w-full items-center justify-center
      rounded-lg bg-red-600 px-4 py-2.5
      text-sm font-semibold text-white
      shadow-sm shadow-red-900/40
      transition-colors
      hover:bg-red-500
    "
  >
    Get in touch
  </button>


</form>
</header>


<header className="md:block 
sm:hidden lg:hidden max-w-[1099px] tablets"> 

<div className="relative w-full h-[550px]">
    
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
      
<div className="absolute text-left top-[8rem] left-[3rem] right-[3rem] 
flex flex-row justify-between items-center">
  
  <div className="w-2/3">
<h2 className="font-barlow text-white
      text-2xl relative font-bold uppercase">
      Performance marketing for SME<span className="lowercase">s</span>
          </h2>
      <h2 className="font-sans font-semibold text-white
       text-xl relative uppercase w-[60%] leading-3">
          <span className="neon-red">Better</span> websites </h2>
      
          <h2 className="font-sans font-semibold text-white
       text-xl relative uppercase w-[60%] leading-3">
    <span className="neon-red">Stronger</span> performance
    </h2>
<h2 className="font-sans font-semibold text-white
       text-xl relative uppercase w-[60%] leading-3">
<span className="neon-red">More</span> leads
          </h2>

    
      <h3 className="font-sans text-white
w-[70%]
      text-lg relative leading-4">
   Website optimisation, high-converting landing pages, 
   complete GA4 & GTM tracking and 
   focused Google Ads campaigns which generate leads.
          </h3>


          </div>

          <div className="w-1/2">
            <form
  className="
    rounded-2xl border border-slate-800 bg-white
    p-4
    shadow-lg shadow-black/30
    backdrop-blur">
    
  <h3 className="mb-5 text-xl 
  text-right font-extrabold font-sans uppercase text-black">
    Start a conversation
  </h3>

  {/* Name */}
  <div className="mb-4">
    <label className="block text-sm font-medium text-black">
      Name <span className="text-red-600">*</span>
    </label>
    <input
      type="text"
      name="name"
      required
      className="
        mt-2 block w-full rounded-lg border border-slate-700 bg-slate-900
        px-3 py-2 text-sm text-slate-50
        placeholder:text-slate-500
        focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500
      "
      placeholder="Your name"
    />
  </div>

  {/* Email */}
  <div className="mb-4">
    <label className="block text-sm font-medium text-black">
      Email <span className="text-red-600">*</span>
    </label>
    <input
      type="email"
      name="email"
      required
      className="
        mt-2 block w-full rounded-lg border border-slate-700 bg-slate-900
        px-3 py-2 text-sm text-slate-50
        placeholder:text-slate-500
        focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500
      "
      placeholder="you@company.com"
    />
  </div>

  {/* Phone */}
  <div className="mb-4">
    <label className="block text-sm font-medium text-black">
      Phone (optional)
    </label>
    <input
      type="tel"
      name="phone"
      className="
        mt-2 block w-full rounded-lg border border-slate-700 bg-slate-900
        px-3 py-2 text-sm text-slate-50
        placeholder:text-slate-500
        focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500
      "
      placeholder="+1 555 123 4567"
    />
  </div>

  {/* Details */}
  <div className="mb-6">
    <label className="block text-sm font-medium text-black">
      Message
    </label>
    <textarea
      name="details"
      rows={3}
      className="
        mt-2 block w-full rounded-lg border border-slate-700 bg-slate-900
        px-3 py-2 text-sm text-slate-50
        placeholder:text-slate-500
        focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"/>
  </div>

  {/* Submit */}
  <button
    type="submit"
    className="
      inline-flex w-full items-center justify-center
      rounded-lg bg-red-600 px-4 py-2.5
      text-sm font-semibold text-white
      shadow-sm shadow-red-900/40
      transition-colors
      hover:bg-red-500
    "
  >
    Get in touch
  </button>


</form>

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
               <li className="footer-link"><Link href="#">Privacy Policy</Link></li>
               <li className="footer-link"><Link href="#">Cookie Policy</Link></li>
        
           </ul>
        </div>
         

       <div className="w-[100%]
border-t border-dashed border-white"></div>


      <div className="flex flex-col flex-nowrap">
<p className="text-sm text-white font-barlow py-2">© Killer Performance Digital</p>

<div className="flex flex-col 
font-barlow"> 
   <p className='text-md text-white font-barlow'>
  info@killerperformancedigital.com</p>
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
               <li className="footer-link"><Link href="#">Privacy Policy</Link></li>
               <li className="footer-link"><Link href="#">Cookie Policy</Link></li>
        
           </ul>
        </div>
         

       <div className="w-[100%]
border-t border-dashed border-white"></div>


      <div className="flex flex-col flex-nowrap">
<p className="text-sm text-white font-barlow py-2">© Killer Performance Digital</p>

<div className="flex flex-col 
font-barlow"> 
   <p className='text-md text-white font-barlow'>
  info@killerperformancedigital.com</p>

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
               <li className="footer-link"><Link href="#">Privacy Policy</Link></li>
               <li className="footer-link"><Link href="#">Cookie Policy</Link></li>
        
           </ul>
        </div>
         

       <div className="w-[100%]
border-t border-dashed border-white"></div>


      <div className="flex flex-col flex-nowrap">
<p className="text-sm text-white font-barlow py-2">© Killer Performance Digital</p>

<div className="flex flex-col 
font-barlow"> 
   <p className='text-md text-white font-barlow'>
  info@killerperformancedigital.com</p>
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
               <li className="footer-link"><Link href="#">Privacy Policy</Link></li>
               <li className="footer-link"><Link href="#">Cookie Policy</Link></li>
        
           </ul>
        </div>
         

       <div className="w-[100%]
border-t border-dashed border-white"></div>


      <div className="flex flex-col flex-nowrap">
<p className="text-sm text-white font-barlow py-2">© Killer Performance Digital</p>

<div className="flex flex-col 
font-barlow"> 
   <p className='text-md text-white font-barlow'>
  info@killerperformancedigital.com</p>
</div>

      </div>
      </div>
               </footer>               
          
</div>
        </>

)
}

export default ServicesLayout
