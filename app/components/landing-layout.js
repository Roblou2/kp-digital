"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

async function getRecaptchaToken(action) {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  if (!siteKey) throw new Error("Missing NEXT_PUBLIC_RECAPTCHA_SITE_KEY");
  if (typeof window === "undefined") throw new Error("No window");
  if (!window.grecaptcha) throw new Error("reCAPTCHA not loaded yet");

  return await new Promise((resolve, reject) => {
    window.grecaptcha.ready(async () => {
      try {
        const token = await window.grecaptcha.execute(siteKey, { action });
        resolve(token);
      } catch (e) {
        reject(e);
      }
    });
  });
}



const LandingLayout = ({children, ...props}) => {

const [status, setStatus] = useState("idle"); // idle | loading | success | error

  async function handleSubmit(e) {
    e.preventDefault();

      // ✅ Native HTML validation gate
  if (!e.currentTarget.checkValidity()) {
    e.currentTarget.reportValidity();
    return;
  }
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const recaptchaToken = await getRecaptchaToken("contact_form");

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone") || "",
      details: formData.get("details") || "",
      
       gdprConsent: formData.get("gdprConsent") === "on", 
       recaptchaToken,
       recaptchaAction: "contact_form",
    };

    const pushLeadSubmitEvent = () => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "lead_submit",
        form_name: "contact_form",
      });
    };
    

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Request failed");
  // ✅ Fire GTM event ONLY when submission is successful
  pushLeadSubmitEvent();

      setStatus("success");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

    return (
     
        <>

        
<div className="wrap flex flex-col justify-between
        min-h-[100vh] w-[100%]">

<div className="nav-mobs flex-2 
min-h-[100vh] left-0 hidden
 w-full overflow-y-hidden 
 flex items-top px-12 z-50">
    

</div>

<header className="sm:hidden xl:block desktops-extra-large
max-w-[4000px] bg-black"> 

<div className="relative h-[1200px]">
      <Image
     className="object-cover object-top"
        alt=""
        src= "/images/copywriting-hero-desktops-xl-squares.jpg"
        loading="eager"
        quality="100"
fill={true}

      />
     </div>

       <nav className="top-[2rem] absolute left-[15%] right-[15%]">

  <div className="flex flex-row items-center justify-between">
 
    <Image 
       src="/images/killer-logo-black-bg-500.png"
       width={120}
       height={120}
       alt="Killer performance digital logo"
       
       /> 
 
   

    </div>
        </nav>

    <div className="absolute text-left top-[16rem] left-[15%] right-[15%]
      flex flex-row justify-between items-start gap-48 font-sans">

 <div className="w-1/2">
    <div className="relative top-[12rem]">
       
    <h1 className="text-white
 text-6xl relative font-bold pb-8 w-full">
      Bad copy costs money. 
          </h1>
      <h1 className="text-white
       text-6xl relative font-bold pb-4 w-full">
<span className="relative inline-block">Great copy   <span className="neon-red">makes</span> money!

  <span
        className="
          absolute left-0 -bottom-10
          h-[2px] w-0 bg-white opacity-50
          transition-all duration-500
          w-[120%]
        "
      />
   
</span>
          </h1>
      
          <h3 className="font-semibold text-white
     text-xl relative w-full">
Conversion-focused copywriting for 
businesses that want stronger 
messaging, more and better leads and marketing 
that actually works.
    </h3>
</div>
</div>

 <div className="w-1/2">

 <div className="relative bottom-[5rem] border border-white border-[1px] shadow-[0_8px_24px_rgba(255,255,255,0.15),0_0_40px_rgba(255,255,255,0.1)]
bg-slate-800 bg-[linear-gradient(to_bottom,theme(colors.slate.800)_0%,theme(colors.slate.800)_40%,theme(colors.slate.600)_60%,theme(colors.slate.800)_80%,theme(colors.slate.800)_100%)]
 rounded-3xl w-[80%] max-w-[600px] flex-col flex
 items-center justify-center 
  pt-6 pr-6 pl-6 pb-8 gap-6">

<div className="bg-[radial-gradient(ellipse_at_center_top,theme(colors.sky.100)_0%,theme(colors.sky.100)_50%,theme(colors.sky.200)_75%)]
border border-slate-200 rounded-lg w-full flex flex-col items-center justify-center
">
<div className="w-3 h-3 rounded-full bg-sky-100 mt-2 border border-dotted border-slate-600"></div>
            <form
            onSubmit={handleSubmit}
  className="rounded-2xl border bg-white
    p-6 w-[90%] my-[5%]
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
      className="field
        mt-2 block w-full rounded-lg bg-slate-900
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
      Message    <span className="text-red-600">*</span>
    </label>
    <textarea
      name="details"
      rows={3}
      minLength={15}
      required
      className="
        mt-2 block w-full rounded-lg border border-slate-700 bg-slate-900
        px-3 py-2 text-sm text-slate-50
        placeholder:text-slate-500
        focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"/>
  </div>

                  <div className="my-4">
  <label className="flex items-start gap-3 text-sm md:text-base text-black">
    <input
      type="checkbox"
      name="gdprConsent"
      required
      className="mt-1 h-4 w-4 rounded border-slate-400 text-red-600 focus:ring-red-500"
    />
    <span>
      I consent to you storing my details and contacting me about this enquiry.
      I&apos;ve read and agree to the{" "}
      <a href="/privacy-policy" className="underline underline-offset-2 hover:text-slate-100">
        privacy policy
      </a>.
    </span>
  </label>
</div>


  {/* Submit */}
  <button
    type="submit"
    disabled={status === "loading"}
    className="
      inline-flex w-full items-center justify-center
      rounded-lg bg-red-600 px-4 py-2.5
      text-sm font-semibold text-white
      shadow-sm shadow-red-900/40
      transition-colors
      hover:bg-red-500
    "
  >
  {status === "loading" ? "Sending…" : "Get in touch"}
  </button>
  {status === "success" && (
                <p className="mb-0 mt-2 text-xs text-emerald-600 text-center">
                  Thank you for your message! I&apos;ll get back to you ASAP!
                </p>
              )}
              {status === "error" && (
                <p className="mt-2 mb-0 text-xs text-red-600 text-center">
                  Something went wrong. Please try again.
                </p>
              )}

</form>
</div>
<div className="w-[20%] h-8 rounded-2xl border-t border-dotted border-slate-200
bg-gradient-to-b from-slate-600 from-50%
to-slate-700 to-50% shadow-[inset_0_1px_0_0_theme(colors.slate.500)]">

</div>
</div>

          </div>
</div>
</header>

 <header className="lg:block xl:hidden desktops
sm:hidden w-[100%] bg-black h-[1200px]"> 

<div className="relative h-[1000px]">
      <Image
     className="object-cover object-top"
        alt=""
        src= "/images/copywriting-hero-desktops-xl-squares.jpg"
        loading="eager"
        quality="100"
fill={true}

      />
     </div>

       <nav className="top-[2rem] absolute left-[10rem] right-[10rem]">

  <div className="flex flex-row items-center justify-between">
 
      <Image 
       src="/images/killer-logo-black-bg-500.png"
       width={120}
       height={120}
       alt="Killer performance digital logo"
       
       />   
 
 
    </div>
        </nav>

      <div className="absolute text-left top-[16rem] left-[10rem] right-[10rem]
      flex flex-row justify-between items-start gap-48">

       <div className="w-1/2">
  <div className="relative top-[12rem]">
       
    <h1 className="text-white
 text-5xl relative font-bold pb-8 w-full">
      Bad copy costs money. 
          </h1>
      <h1 className="text-white
       text-5xl relative font-bold pb-4 w-full">
<span className="relative inline-block">Great copy   <span className="neon-red">makes</span> money!

  <span
        className="
          absolute left-0 -bottom-8
          h-[2px] w-0 bg-white opacity-50
          transition-all duration-500
          w-[120%]
        "
      />
   
</span>
          </h1>
      
          <h3 className="font-semibold text-white
     text-xl relative w-full">
Conversion-focused copywriting for businesses that want stronger 
messaging, more and better leads and marketing 
that actually works.
    </h3>
</div>
</div>


 <div className="w-1/2">

 <div className="relative bottom-[3rem] border border-white border-[1px] shadow-[0_8px_24px_rgba(255,255,255,0.15),0_0_40px_rgba(255,255,255,0.1)]
bg-slate-800 bg-[linear-gradient(to_bottom,theme(colors.slate.800)_0%,theme(colors.slate.800)_40%,theme(colors.slate.600)_60%,theme(colors.slate.800)_80%,theme(colors.slate.800)_100%)]
 rounded-3xl w-[100%] max-w-[500px] flex-col flex
 items-center justify-center 
  pt-4 pr-4 pl-4 pb-6 gap-4">

<div className="bg-[radial-gradient(ellipse_at_center_top,theme(colors.sky.100)_0%,theme(colors.sky.100)_50%,theme(colors.sky.200)_75%)]
border border-slate-200 rounded-lg w-full flex flex-col items-center justify-center
">
<div className="w-3 h-3 rounded-full bg-sky-100 mt-2 border border-dotted border-slate-600"></div>
            <form
            onSubmit={handleSubmit}
  className="rounded-2xl border bg-white
    p-4 my-[5%] w-[90%]
    shadow-lg shadow-black/30
    backdrop-blur">
    
  <h3 className="mb-5 text-3xl text-center font-bold font-sans uppercase text-black">
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
      Message    <span className="text-red-600">*</span>
    </label>
    <textarea
      name="details"
      rows={3}
      minLength={15}
      required
      className="
        mt-2 block w-full rounded-lg border border-slate-700 bg-slate-900
        px-3 py-2 text-sm text-slate-50
        placeholder:text-slate-500
        focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"/>
  </div>

                  <div className="my-4">
  <label className="flex items-start gap-3 text-sm md:text-base text-black">
    <input
      type="checkbox"
      name="gdprConsent"
      required
      className="mt-1 h-4 w-4 rounded border-slate-400 text-red-600 focus:ring-red-500"
    />
    <span>
      I consent to you storing my details and contacting me about this enquiry.
      I&apos;ve read and agree to the{" "}
      <a href="/privacy-policy" className="underline underline-offset-2 hover:text-slate-100">
        privacy policy
      </a>.
    </span>
  </label>
</div>  

  {/* Submit */}
  <button
    type="submit"
     disabled={status === "loading"}
    className="
      inline-flex w-full items-center justify-center
      rounded-lg bg-red-600 px-4 py-2.5
      text-sm font-semibold text-white
      shadow-sm shadow-red-900/40
      transition-colors
      hover:bg-red-500
    "
  >
 {status === "loading" ? "Sending…" : "Get in touch"}
  </button>
{status === "success" && (
                <p className="mb-0 mt-2 text-xs text-emerald-600 text-center">
                  Thank you for your message! I&apos;ll get back to you ASAP!
                </p>
              )}
              {status === "error" && (
                <p className="mt-2 mb-0 text-xs text-red-600 text-center">
                  Something went wrong. Please try again.
                </p>
              )}

</form>
</div>
<div className="w-[20%] h-8 rounded-2xl border-t border-dotted border-slate-200
bg-gradient-to-b from-slate-600 from-50%
to-slate-700 to-50% shadow-[inset_0_1px_0_0_theme(colors.slate.500)]">

</div>
</div>

          </div>
</div>

</header>


<header className="md:hidden w-[100%] mobiles max-w-[649px]
 bg-black"> 

<div className="relative w-full h-[620px]">
      <Image
     className=""
        alt=""
        src= "/images/copywriting-services-hero-sm.jpg"
        loading="eager"
        quality="100"

fill={true}
      />
       </div>
    

       <div className="flex flex-row
       items-center top-[2rem] justify-between text-white
        absolute left-[3rem] right-[3rem]">


    <Image 
       src="/images/killer-logo-black-bg-500.png"
       height={80}
       width={80}
       alt="Killer performance digital logo"

       /> 



      </div>
<div className="top-[8rem] max-w-[649px] absolute  
right-[3rem] left-[3rem]">
 <div className="relative top-[2rem]">
       
    <h1 className="text-white
 text-4xl relative font-bold pb-8 w-full">
      Bad copy costs money. 
          </h1>
      <h1 className="text-white
       text-4xl relative font-bold pb-4 w-full">
<span className="relative inline-block">Great copy   <span className="neon-red">makes</span> money!

  <span
        className="
          absolute left-0 -bottom-8
          h-[2px] w-0 bg-white opacity-50
          transition-all duration-500
          w-[100%]
        "
      />
   
</span>
          </h1>
      
          <h3 className="font-semibold text-white
     text-lg relative w-full">
Conversion-focused copywriting for businesses that want stronger 
messaging, more and better leads and marketing 
that actually works.
    </h3>
</div>
          </div>

           <form
              onSubmit={handleSubmit}
  className="
    rounded-2xl border border-slate-800 bg-white
    p-4 mx-[3rem] relative mt-[-2rem]
    shadow-md shadow-black/30
    backdrop-blur mb-20">
    
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
      Message     <span className="text-red-600">*</span>
    </label>
    <textarea
      name="details"
      rows={3}
      minLength={15}
      required
      className="
        mt-2 block w-full rounded-lg border border-slate-700 bg-slate-900
        px-3 py-2 text-sm text-slate-50
        placeholder:text-slate-500
        focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"/>
  </div>

     <div className="my-4">
  <label className="flex items-start gap-3 text-sm md:text-base text-black">
    <input
      type="checkbox"
      name="gdprConsent"
      required
      className="mt-1 h-4 w-4 rounded border-slate-400 text-red-600 focus:ring-red-500"
    />
    <span>
      I consent to you storing my details and contacting me about this enquiry.
      I&apos;ve read and agree to the{" "}
      <a href="/privacy-policy" className="underline underline-offset-2 hover:text-slate-100">
        privacy policy
      </a>.
    </span>
  </label>
</div>  

  {/* Submit */}
  <button
    type="submit"
        disabled={status === "loading"}
    className="
      inline-flex w-full items-center justify-center
      rounded-lg bg-red-600 px-4 py-2.5
      text-sm font-semibold text-white
      shadow-sm shadow-red-900/40
      transition-colors
      hover:bg-red-500
    "
  >
 {status === "loading" ? "Sending…" : "Get in touch"}
  </button>
{status === "success" && (
                <p className="mb-0 mt-2 text-xs text-emerald-600 text-center">
                  Thank you for your message! I&apos;ll get back to you ASAP!
                </p>
              )}
              {status === "error" && (
                <p className="mt-2 mb-0 text-xs text-red-600 text-center">
                  Something went wrong. Please try again.
                </p>
              )}

</form>
</header>


<header className="md:block 
sm:hidden lg:hidden max-w-[1099px] tablets"> 

<div className="relative w-full h-[1000px]">
    
      <Image
        alt=""
        src= "/images/copywriting-services-hero-md.jpg"
        loading="eager"
        quality="100"
      fill={true}


      />
       </div>
   
       <div className="top-[2rem] 
        flex flex-row items-center justify-between text-white
        absolute left-[3rem] right-[3rem]">
     
     
    <Image 
       src="/images/killer-logo-black-bg-500.png"
       height={80}
       width={80}
       alt="Killer performance digital logo"
       /> 
        
    


</div>
      
<div className="absolute text-left top-[6rem] left-[3rem] right-[3rem] 
flex flex-row justify-between items-center">
  
   <div className="w-1/2">
  <div className="relative top-[2rem]">
       
    <h1 className="text-white
 text-4xl relative font-bold pb-8 w-full">
      Bad copy costs money. 
          </h1>
      <h1 className="text-white
       text-4xl relative font-bold pb-4 w-full">
<span className="relative inline-block">Great copy   <span className="neon-red">makes</span> money!

  <span
        className="
          absolute left-0 -bottom-8
          h-[2px] w-0 bg-white opacity-50
          transition-all duration-500
          w-[100%]
        "
      />
   
</span>
          </h1>
      
          <h3 className="font-semibold text-white
     text-xl relative w-full">
Conversion-focused copywriting for businesses that want stronger 
messaging, more and better leads and marketing 
that actually works.
    </h3>
</div>
</div>


 <div className="w-1/2">

 <div className="relative shadow-[0_8px_24px_rgba(255,255,255,0.15),0_0_40px_rgba(255,255,255,0.1)]
bg-slate-800 bg-[linear-gradient(to_bottom,theme(colors.slate.800)_0%,theme(colors.slate.800)_40%,theme(colors.slate.600)_60%,theme(colors.slate.800)_80%,theme(colors.slate.800)_100%)]
 rounded-3xl w-full max-w-[400px] flex-col flex border border-slate-200
 items-center justify-center 
  pt-2 pr-2 pl-2 pb-2 gap-2">

<div className="bg-[radial-gradient(ellipse_at_center_top,theme(colors.sky.100)_0%,theme(colors.sky.100)_50%,theme(colors.sky.200)_75%)]
border border-slate-200 rounded-lg w-full flex flex-col items-center justify-center
">
<div className="w-3 h-3 rounded-full bg-sky-100 mt-2 border border-dotted border-slate-600"></div>
            <form
              onSubmit={handleSubmit}
  className="rounded-2xl border bg-white
    p-4 my-[5%] w-[90%]
    shadow-lg shadow-black/30
    backdrop-blur">
    
  <h3 className="mb-5 text-xl text-center font-bold font-sans uppercase text-black">
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
        mt-2 block w-full rounded-lg field bg-slate-900
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
      Message    <span className="text-red-600">*</span>
    </label>
    <textarea
      name="details"
      rows={3}
      minLength={15}
      required
      className="field
        mt-2 block w-full rounded-lg bg-slate-900
        px-3 py-2 text-sm text-slate-50
        placeholder:text-slate-500
        focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"/>
  </div>

    <div className="my-4">
  <label className="flex items-start gap-3 text-sm md:text-base text-black">
    <input
      type="checkbox"
      name="gdprConsent"
      required
      className="mt-1 h-4 w-4 rounded border-slate-400 text-red-600 focus:ring-red-500"
    />
    <span>
      I consent to you storing my details and contacting me about this enquiry.
      I&apos;ve read and agree to the{" "}
      <a href="/privacy-policy" className="underline underline-offset-2 hover:text-slate-100">
        privacy policy
      </a>.
    </span>
  </label>
</div>  


  {/* Submit */}
  <button
    type="submit"
    disabled={status === "loading"}
    className="
      inline-flex w-full items-center justify-center
      rounded-lg bg-red-600 px-4 py-2.5
      text-sm font-semibold text-white
      shadow-sm shadow-red-900/40
      transition-colors
      hover:bg-red-500
    "
  >
 {status === "loading" ? "Sending…" : "Get in touch"}
  </button>
{status === "success" && (
                <p className="mb-0 mt-2 text-xs text-emerald-600 text-center">
                  Thank you for your message! I&apos;ll get back to you ASAP!
                </p>
              )}
              {status === "error" && (
                <p className="mt-2 mb-0 text-xs text-red-600 text-center">
                  Something went wrong. Please try again.
                </p>
              )}

</form>
</div>
<div className="w-[20%] h-8 rounded-2xl border-t border-dotted border-slate-200
bg-gradient-to-b from-slate-600 from-50%
to-slate-700 to-50% shadow-[inset_0_1px_0_0_theme(colors.slate.500)]">

</div>
</div>

          </div>

     </div>

</header>



      <main className="md:mt-[-2rem]">
                {children}
                </main>

      <footer className="footer footer-desktops sm:hidden xl:block 
         px-[15%] bg-cover bg-black bg-no-repeat bg-[url('/images/footer-desktops-xl.png')]
 w-[100%] py-24 bg-top">
 

         

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
      
               </footer>      

                <footer className="footer footer-desktops sm:hidden lg:block 
               px-[10rem] xl:hidden
            bg-top bg-black bg-cover bg-black bg-no-repeat bg-[url('/images/footer-desktops-xl.png')]
 w-[100%] py-32">
 

        

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
    
               </footer>      
    

               <footer className="footer footer-tablets sm:hidden md:block 
               lg:hidden px-[3rem]
               bg-center
               bg-cover bg-black bg-no-repeat bg-[url('/images/footer-mobs.png')] w-[100%] py-28">
 
         

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
               </footer>       

              

               <footer className="footer-mobiles 
               lg:hidden md:hidden sm:block bg-center px-[3rem]
               bg-cover bg-black bg-no-repeat bg-[url('/images/footer-mobs.png')] w-[100%] py-28">

         

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
               </footer>                      
          
</div>
        </>

)
}

export default LandingLayout
