
import React from 'react'
import {StaticImage} from "gatsby-plugin-image"


const HeroSection = () => {

    return (
        <>
<div style={{ display: "grid", 
gridTemplateColumns: "repeat(8, 1fr)", rowGap: "10px"
}} className="">
      {/* You can use a GatsbyImage component if the image is dynamic */}
      <StaticImage
        style={{
          gridArea: "1/1/span 8/ span 8"
        }}
       
        // You can optionally force an aspect ratio for the generated image
      
        // This is a presentational image, so the alt should be an empty string
        alt=""
        src= "../images/my-site-hero-desktops.png"
        loading="eager"
        quality="100"
      
      />
       
            <div
        style={{
          // By using the same grid area for both, they are stacked on top of each other
         gridArea: "1/1/span 8/ span 8",
          position: "relative",
          // This centers the other elements inside the hero component
          
          display: "grid",
          maxWidth: "100%"
           
        }}
     className="" >
        </div>
      <div
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1/span 1/ span 8",
          position: "relative",
          // This centers the other elements inside the hero component
          display: "grid"
         
        }}
     >
        {/* Any content here will be centered in the component */}
        <h1 className=
        "font-sans font-bold text-white text-3xl lg:text-5xl pt-16 md:pt-16 px-8 lg:pl-32">
          </h1>
      </div>

     
      <div
        style={{
          position: "relative",
          display: "grid",
          gridArea: "2/1/span 1/ span 8",
        }}
      >
      <h2 className="font-sans font-semibold text-white text-2xl
    md:text-3xl lg:text-4xl px-8 lg:pl-32">
           
          </h2>
          </div>
     
          <div
        style={{
        
            gridArea: "3/1/span 1/ span 5",
          position: "relative",    
          display: "grid",
        }}
      >
      <h2 className="font-sans font-semibold text-white
       text-2xl md:text-3xl lg:text-4xl sm:hidden md:inline-block lg:inline-block px-8 lg:pl-32">
          
          </h2>
          </div>

            
        
     </div>

</>
     )
     }


     export default HeroSection