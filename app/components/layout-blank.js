"use client";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'


const LayoutBlank = ({children}) => {

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
w-[100%] bg-black"> 


       <nav className="px-[15%] pt-[2rem]">

  <div className="flex flex-row items-center justify-between">
 
       <Link href="/"><Image 
       src="/images/killer-logo-black-bg-500.png"
       width={350}
       height={350}
       alt="Killer performance logo"
       
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

     

</header>

 <header className="lg:block xl:hidden desktops
sm:hidden w-[100%] bg-black"> 

       

       <nav className="px-[10rem] pt-[2rem]">

  <div className="flex flex-row items-center justify-between">

         
           <Link href="/">
             
    <Image 
       src="/images/killer-logo-black-bg-500.png"
       width={300}
       height={300}
       alt="Killer performance logo"
 
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


</header>


<header className="md:hidden w-[100%] mobiles bg-black"> 

    
       
    

       <div className="flex flex-row
       items-center justify-between text-white
        px-[3rem] pt-[2rem]">


       <Link href="/"><Image 
       src="/images/killer-logo-black-bg-500.png"
       height={100}
       width={150}
       alt="Killer performance logo"

       /> </Link> 


<div className="text-2xl">
<FontAwesomeIcon icon={faBars} 
onClick={onToggleMenu} 
/>
</div>

      </div>

</header>


<header className="md:block 
sm:hidden lg:hidden w-[100%] tablets bg-black"> 


       
   
       <div className=" 
        flex flex-row items-center justify-between text-white
        px-[3rem] pt-[2rem]">
     
     
      <Link href="/"><Image 
       src="/images/killer-logo-black-bg-500.png"
       width={100}
       height={150}
       alt="Killer performance logo"
       /> 
        
        </Link> 

<div className="text-2xl">
<FontAwesomeIcon icon={faBars} 
onClick={onToggleMenu} 
/>
</div>
</div>
 
     

</header>



      <main className="">
                {children}
                </main>

                <footer className="footer footer-desktops sm:hidden xl:block 
               px-[15%]
               bg-black w-[100%] py-32">
 
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
               bg-black w-[100%] py-32">
 
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
               bg-black w-[100%] py-32">
 
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
               lg:hidden md:hidden sm:block
               bg-black w-[100%] py-28">
 
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

export default LayoutBlank
