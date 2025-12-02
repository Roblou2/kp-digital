

const Contact = () => {

    return (
        <>
            <div className="bg-black font-barlow
        text-white">
        <div className="flex
        flex-row flex-wrap md:pt-0 justify-start 
        lg:justify-around lg:px-0 
        lg:flex-nowrap gap-12">

<div className="lg:w-[2/5] sm:w-4/5 
flex flex-col px-[3rem] lg:px-[0rem] lg:ml-[10rem] pt-12 xl:ml-[15%]">
<h2 className='text-3xl md:text-4xl xl:text-6xl'>Contact Us
</h2>

<div className="border-b border-[#FD0E35]
    border-4 w-[15%] md:w-[10%] lg:w-[5%] my-2">

    </div>
<p className="pt-6 w-full lg:w-[80%] text-xl md:text-3xl">
    We typically respond to enquiries within
    24 hours.</p>
 
<div className="flex flex-row  
contact font-barlow py-2"> <p className='text-xl 
md:text-2xl lg:text-4xl text-white'>info@sleekdigitaldesigns.com</p>
</div>

</div>
<div className='w-[100%] md:w-4/5 lg:w-full
xl:mr-[15%] text-lg xl:text-xl py-8 px-[3rem] lg:mr-[10rem]'
 id="contact-sleek">
<form method="POST" netlify-honeypot="bot-field" 
data-netlify="true" name="contact-page-sleek">
    
    <input type="hidden" name="bot-field" />
<input type="hidden" name="form-name" value="contact-page-sleek" />

<label>
    Name
    <input type="text" name="name" className='w-[100%]
    flex flex-col my-4 md:w-4/5 lg:w-full text-black' 
    />
  </label>

  <label>
    Phone Number
    <input type="tel" name="surname" className='w-[100%] 
    flex flex-col my-4 md:w-4/5 lg:w-full  text-black' 
    />
  </label>

  <label>
    Email
    <input type="email" name="email" 
    className='w-[100%] md:w-4/5 flex 
    lg:w-full flex-col my-4 text-black'/>
  </label>
  
  <label>
    Message
    <input type="textarea" name="message" 
    className='w-[100%] h-40 md:w-4/5
    flex flex-col my-4 lg:w-full text-black'/>
  </label>

  <button type="submit" className='bg-[#FD0E35]
        hover:bg-red-600 text-white font-barlow
        p-2 rounded
        box-content mt-8 
        shadow-lg 
        text-xl
        xl:text-2xl'>Send</button>
</form>
 </div>

 </div>
        </div>
        </>
    )
}

export default Contact