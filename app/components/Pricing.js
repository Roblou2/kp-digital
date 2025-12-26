// components/Pricing.js

const pricing = [
  {
    service: "Landing Pages & Sales Pages",
    range: "£1,800 – £4,500",
    description:
      "Best for paid traffic, lead generation and services that need to explain their value clearly — fast.",
    includes: [
      "Conversion-led structure and flow",
      "Headline, hero, and offer clarity",
      "Objection handling and CTAs"
     
    ],
  },
  {
    service: "Email Sequences & Campaigns",
    range: "£1,200 – £3,800+",
    description:
      "For welcoming, nurturing or converting subscribers without sounding pushy or generic.",
    includes: [
      "Sequence logic and timing",
      "Subject lines and preview copy",
      "5–7 emails written as a system"
    ],
  },
  {
    service: "Direct Response & Funnels",
    range: "£2,000 – £12,000+",
    description:
      "High-impact copy for launches, funnels and offers where performance is paramount.",
    includes: [
      "Offer framing and positioning",
      "Core pages or funnel steps",
      "Email and CTA alignment",
      "Performance-first thinking",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="border-t border-slate-800 bg-slate-950">
      <div
        className="
          py-32
          xl:px-[15%]
          lg:px-[10rem]
          md:px-[3rem]
          sm:px-[3rem]
        "
      >
        {/* Header (centered so it doesn't hug the left on desktop) */}
        <div className="mb-28 max-w-3xl mx-auto lg:text-center">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.35em] text-slate-400">
            Pricing
          </p>

          <h2 className="text-5xl font-semibold leading-tight text-slate-50">
            <span className="relative inline-block">
      Straightfoward pricing
      <br/>
      without the guesswork

      <span
        className="
          absolute left-0 lg:left-1/2 lg:-translate-x-1/2 
          h-[2px] -bottom-4 bg-red-600
          w-[18%]
        "
      />
    </span>
          </h2>

          <p className="mt-8 text-xl leading-relaxed text-slate-300">
            Every project is scoped properly and pricing
            often depends on what the deliverables are, but these ranges give you a clear,
            realistic idea of what to expect.
          </p>
        </div>

        {/* Pricing rows */}
        <div className="flex flex-col gap-32">
          {pricing.map((item, index) => (
            <div key={item.service} className="relative">

              {/* Row content uses width on desktop */}
              <div className="relative z-10">
                <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
                  {/* LEFT column */}
                  <div className="lg:w-[44%]">
                    <div className="mb-4 text-3xl font-semibold text-slate-100">
                      {item.range}
                    </div>

                    <h3 className="text-3xl font-semibold text-slate-50">
                      {item.service}
                    </h3>

                    <p className="mt-4 text-xl leading-relaxed text-slate-300">
                      {item.description}
                    </p>
                  </div>

                  {/* RIGHT column */}
                  <div className="lg:w-[48%]">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                      What’s usually included
                    </p>

                    <ul className="mt-6 space-y-4 text-lg text-slate-300">
                      {item.includes.map((line) => (
                        <li key={line} className="flex gap-4">
                          <span className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="mt-16 h-px w-full bg-slate-800" />
            </div>
          ))}
        </div>

        {/* Closing note (centered to avoid left squeeze) */}
        <div className="mt-24 max-w-2xl mx-auto lg:text-center">
          <p className="text-lg leading-relaxed text-slate-400">
            Want something more bespoke that&apos;s not on the menu? Just
            fill out the contact form here so that we can have a discovery call and discuss
            your project needs.
          </p>
        </div>
      </div>
    </section>
  );
}
