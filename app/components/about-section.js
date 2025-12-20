// components/AboutSection.js
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="border-t border-slate-800 bg-black">
      <div
        className="
          py-28
          xl:px-[15%]
          lg:px-[10rem]
          md:px-[3rem]
          sm:px-[3rem]
        "
      >
        <div className="flex flex-col flex-col-reverse gap-20 lg:flex-row lg:items-start">
          
          {/* LEFT: Main narrative (BIG, readable) */}
          <div className="lg:w-[60%]">
            <p className="text-xl leading-relaxed text-slate-300">
              Hi, I’m the copywriter behind Killer Performance Digital.  My focus is simple: landing pages, emails, direct response and
              performance-driven brand messaging that directly supports leads,
              sales and real business growth. 
            </p>

            <p className="mt-8 text-xl leading-relaxed text-slate-300">
             
            </p>

            <div className="mt-16 flex flex-col gap-12 text-xl leading-relaxed text-slate-300">
              <AboutPoint
                title="Direct, collaborative communication"
                text="You work directly with me — no account managers, no handoffs, no layers of confusion."
              />

              <AboutPoint
                title="Clear thinking before clever wording"
                text="Strategy comes first. The words follow once the message is actually clear."
              />

              <AboutPoint
                title="I&apos;ll revise the copy until you're satisfied"
                text="I like to think that I get it right first time, but
                if you feel that something I did could be worded differently, I&apos;ll edit
                the copy until you feel that it acheives what its intended to."
              />

              <AboutPoint
                title="Happy to follow your lead"
                text="Most clients I work with already know what they need me to write,
                but if this isn't the case with you, that's totally fine. With over 7 years'
                worth of experience in copywriting and digital marketing, I've acquired
                lots of marketing know-how, and can act as your consultant for
                achieving your marketing goals.
                In collaboration with you, I can form a marketing strategy, and design a marketing funnel for your business which captures leads and converts."
              />
            </div>
          </div>

          {/* RIGHT: Big, bold, totally different title treatment */}
          <aside className="lg:w-[40%] lg:pl-10">
            <div className="flex flex-col items-start lg:items-end">
              <span className="text-sm uppercase tracking-[0.45em] text-slate-400">
                About
              </span>

              <h2
                className="
                  mt-6
                  text-[2.6rem]
                  leading-[1.1]
                  font-semibold
                  text-slate-100
                  lg:text-right
                "
              >
                A brand-focused copy studio built for lead gen and maximum performance.
              </h2>

              <div className="mt-10 h-[2px] w-20 bg-slate-600 lg:ml-auto" />
              <div className="lg:w-[60%] w-[30%] pt-6 lg:pt-20">
                <Image 
src="/images/killer-logo-white.png"
width={500}
height={500}
alt="the Killer Performance Digital logo - the letters 'k' and 'p' joined together all filled in white"

/>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </section>
  );
}

function AboutPoint({ title, text }) {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-slate-50">
        {title}
      </h3>

      <p className="mt-4 text-xl leading-relaxed text-slate-300">
        {text}
      </p>
    </div>
  );
}
