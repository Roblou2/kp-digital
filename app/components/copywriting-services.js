// components/Services.js

import Link from "next/link";

const services = [
  {
    title: "Landing & Sales Pages",
    description:
      "Intent-focused pages that turn visitors into enquiries, leads and customers. Ideal for services, products, offers and PPC traffic.",
  },
  {
    title: "Email Sequences & Campaigns",
    description:
      "Welcome sequences, nurture flows and sales campaigns that build trust, warm leads and drive action over time.",
  },
  {
    title: "Direct Response Copy & Funnels",
    description:
      "Launch copy, offer pages, upsells, scripts and promotional sequences designed to generate immediate response.",
  },
  {
    title: "Paid & social media ads",
    description:
      "Scroll-stopping hooks, captions, angles and scripts for Meta, TikTok, Google, and LinkedIn — all built for performance.",
  },
  {
    title: "Brand Messaging & Voice",
    description:
      "Tone of voice, positioning, value propositions, taglines and messaging frameworks that clarify how your brand sounds and sells.",
  },
];

export default function Services() {
  return (
    <section
      className="
        relative
        border-t border-slate-800
        bg-slate-950
        bg-[url('/images/copywriting-services-bg.png')]
        bg-cover
        bg-center
        bg-fixed
      "
    >
      <div
        className="
          py-28
          xl:px-[15%]
          lg:px-[10rem]
          md:px-[3rem]
          sm:px-[3rem]
        "
      >
{/* Header */}
<div className="mb-24 ml-auto max-w-2xl text-right">
  <p className="mb-4 text-base font-medium uppercase tracking-[0.3em] text-slate-400">
    Services
  </p>

  <h2 className="group text-4xl font-semibold uppercase leading-tight text-slate-50">
    <span className="relative inline-block">
      What I can write for you

      <span
        className="
          absolute right-0 -bottom-2
          h-[2px] w-0 bg-red-600
          transition-all duration-500
          w-[18%]
        "
      />
    </span>
  </h2>

  <p className="mt-6 text-lg text-slate-300">
    Conversion-focused copy only. No content fluff. No filler. Just writing that
    directly supports leads, sales and performance.
  </p>
</div>


        {/* Services – purely typographic */}
        <div className="flex flex-col gap-12">
          {services.map((service) => (
            <article
              key={service.title}
              className="
                group
                border-t border-slate-800
                pt-10
                first:border-t-0 first:pt-0
              "
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-baseline md:gap-8">
                {/* Title + description */}
                <div className="md:flex-1">
                  <h3
                    className="
                      relative inline-block
                      text-2xl md:text-3xl
                      font-semibold text-slate-50
                    "
                  >
                    {service.title}

                    {/* Short underline on hover */}
                    <span
                      className="
                        absolute left-0 -bottom-2 
                        h-[2px] w-0 bg-red-600
                        transition-all duration-500 
                        group-hover:w-[18%]
                      "
                    />
                  </h3>

                  <p
                    className="
                      mt-5 text-lg leading-relaxed
                      text-slate-300
                      transition-colors duration-300
                      group-hover:text-slate-200
                    "
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Closing line */}
        <div className="mt-28 max-w-xl">
          <p className="text-xl text-slate-200">
            Want more info? Drop me a message and I&apos;ll get back to you.
          </p>
          <Link href="#contact">
            <button
                type="submit"
                className="
                 w-full md:w-1/2 inline-flex items-center justify-center
                  rounded-md bg-red-600 px-4 py-2.5
                  text-lg font-semibold text-white
                  shadow-sm transition-colors
                  hover:bg-red-500
                "
              >
                Send message
              </button>
              </Link>
        </div>
      </div>
    </section>
  );
}
