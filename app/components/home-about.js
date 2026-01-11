// components/AboutSection.js
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-black">
      <div
        className="
          py-28
          xl:px-[15%]
          lg:px-[10rem]
          md:px-[3rem]
          sm:px-[3rem]
        "
      >
        <div className="flex flex-col flex-col-reverse gap-20 lg:flex-row lg:flex-row-reverse lg:items-start">
          {/* LEFT: Main narrative (BIG, readable) */}
          <div className="lg:w-[60%]">
            <p className="text-xl leading-relaxed text-slate-300">
              We’re a performance marketing agency built for measurable growth. We combine sharp strategy, clean design and
              conversion-focused messaging to turn attention into action and
              clicks into customers.
            </p>

            <p className="mt-8 text-xl leading-relaxed text-slate-300">
              Whether you need a new site, a landing page that gets results
              or campaigns supported by solid tracking and reporting, we focus on
              the fundamentals that move the needle: clarity, speed and
              outcomes.
            </p>

            <div className="mt-16 flex flex-col gap-12 text-xl leading-relaxed text-slate-300">
              <AboutPoint
                title="Strategy before execution"
                text="We start with what matters: your offer, your audience and the actions that drive revenue. Everything else follows from that."
              />

              <AboutPoint
                title="Design and copy that work together"
                text="Good creative doesn’t just look nice — it guides decisions. We build pages where layout, messaging, and UX all point to conversion."
              />

              <AboutPoint
                title="Track what matters, improve what counts"
                text="We set up clean analytics and conversion tracking so you can see what’s working, cut what isn’t, and scale with confidence."
              />

              <AboutPoint
                title="A reliable partner, not a revolving door"
                text="No handoffs, no layers, no confusion. You get clear communication, fast iterations and ongoing support when you need it."
              />
            </div>
          </div>

          {/* RIGHT: Big, bold, totally different title treatment */}
          <aside className="lg:w-[40%]">
            <div className="flex flex-col items-start">
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
                  lg:text-left
                "
              >
               A performance agency built for leads, sales and measurable growth.
              </h2>

              <div className="mt-10 h-[2px] w-20 bg-slate-600" />

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
      <h3 className="text-2xl font-semibold text-slate-50">{title}</h3>

      <p className="mt-4 text-xl leading-relaxed text-slate-300">{text}</p>
    </div>
  );
}
