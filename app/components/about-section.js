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
        <div className="flex flex-col gap-20 lg:flex-row lg:items-start">
          
          {/* LEFT: Main narrative (BIG, readable) */}
          <div className="lg:w-[60%]">
            <p className="text-xl leading-relaxed text-slate-300">
              Hi, I’m the copywriter behind Killer Performance Digital. I help
              small and medium-sized businesses communicate clearly,
              confidently, and persuasively — without sounding stiff,
              overproduced, or full of marketing jargon.
            </p>

            <p className="mt-8 text-xl leading-relaxed text-slate-300">
              My focus is simple: landing pages, emails, direct response, and
              performance-driven brand messaging that directly supports leads,
              sales, and real business growth. No fluff. No filler. Just clean,
              conversion-focused writing.
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
                title="Honest feedback"
                text="If something won’t help performance, I’ll say so — even if it’s not what you expected."
              />

              <AboutPoint
                title="Careful attention to detail"
                text="Every line is intentional. From headline to microcopy."
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
                A focused copy studio built for clarity, performance,
                and direct collaboration.
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
