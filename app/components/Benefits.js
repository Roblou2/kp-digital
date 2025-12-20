// components/Benefits.js

const benefits = [
  {
    title: "Copy built for action",
    text: "Nice-sounding copy is useless if it doesn’t move people to act. I focus on structure, message and intent first; then make it sound good.",
  },
  {
    title: "On-time delivery, no excuses",
    text: "You get work sent on time, quick decisions and copy that ships. No endless rewrites, no disappearing acts, no delays.",
  },
  {
    title: "Direct communication, no middlemen",
    text: "You work directly with me, not an account manager you have to go back and forth with.",
  },
];

export default function Benefits() {
  return (
    <section className="border-t border-slate-800 bg-slate-950">
      <div
        className="
          py-28
          xl:px-[15%]
          lg:px-[10rem]
          md:px-[3rem]
          sm:px-[3rem]
     "
      >
        <div className="flex flex-col gap-16 lg:flex-row items-center lg:gap-20">
          {/* LEFT: Text / manifesto */}
          <div className="lg:w-[55%]">
            {/* Header */}
            <div className="mb-12 max-w-2xl">
              <p className="mb-4 text-base font-medium uppercase tracking-[0.3em] text-slate-400">
                How I work
              </p>

              <h2 className="text-4xl font-semibold leading-tight text-slate-50">
                Hi! I&apos;m Rob, the owner of Killer Performance Digital. I write copy designed to convert.
              </h2>

                  <h2 className="text-4xl font-semibold leading-tight text-slate-50">
               Here&apos;s what working with me looks like:
              </h2>

              <p className="mt-6 text-lg text-slate-300">
               I&apos;m not going to show you a wall of “features”. Instead, here are a few principles that shape how I
                write and what it&apos;s like when you hire me as your go-to copywriter.
              </p>
            </div>

            {/* Benefits – manifesto style */}
            <div className="space-y-10">
              {benefits.map((item) => (
                <div
                  key={item.title}
                  className="
                    group relative border-l border-slate-700 pl-6
                    transition-transform duration-300
                    hover:translate-x-1
                  "
                >
                  {/* Accent line */}
                  <span
                    className="
                      absolute -left-px top-0 h-8
                      bg-red-600
                      transition-all duration-300
                      group-hover:h-full
                    "
                  />

                  <h3 className="text-2xl font-semibold text-slate-50">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-lg leading-relaxed text-slate-300">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Image / visual panel with off-centre backing */}
          <div className="lg:w-[45%] relative mt-4 lg:mt-0">
            {/* Off-centre light backing shape */}
            <div
              className="
                absolute
                lg:-top-10
                lg:-right-10
                -top-6
                left-6
                lg:h-[80%]
                lg:w-[100%]
              h-full w-full
                bg-slate-100/90
               
              "
            />

            {/* Main image card */}
            <div
              className="
                relative 
                h-full
                overflow-hidden
        
               shadow-[0_10px_40px_rgba(0,0,0,0.35)]
                bg-slate-900
              "
            >
              <img
                src="/images/benefits-img.jpg" // <-- your image path
                alt="Notes and layout for high-performing copy"
                className="h-full w-full object-cover opacity-80"
              />

              {/* Gradient overlay */}
              <div className="pointer-events-none absolute 
              inset-0 bg-gradient-to-tr from-black/60 via-black/20 to-transparent" />

              {/* Tiny label */}
              <div className="absolute bottom-5 left-5">
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-300">
                  Focused, conversion-led work
                </p>
                <p className="mt-1 text-sm text-slate-200/90">
                  Strategy-led, no filler
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
