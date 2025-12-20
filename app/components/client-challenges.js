// components/ClientChallenges.js

const challengeGroups = [
  {
    title: "Messaging & clarity",
    summary:
      "Your core offer isn’t coming across clearly enough for a busy stranger to understand it at a glance.",
  },
  {
    title: "Underperforming landing pages",
    summary:
      "The page has information, but not a clear narrative that leads someone toward a single, obvious action.",
  },
  {
    title: "Emails that don’t earn their keep",
    summary:
      "Your emails exist, but they’re not working as a structured journey that warms people up and nudges people forward.",
  },
  {
    title: "Brand voice & consistency",
    summary:
      "You don’t yet have a clear, shared way your brand speaks — so every channel ends up improvising.",
  },
  {
    title: "Looking more professional",
    summary:
      "The business is solid, but the copy hasn’t caught up with where you are now or where you’re heading.",
  },
  {
    title: "Not sure where to start",
    summary:
      "There are lots of moving parts and you want someone to prioritise what will actually move the needle first.",
  }, 
  
  { title: "No time to write copy",
summary: "Limited resources have meant that you haven't been able to prioritise your marketing copy."
  },

];

// Curated, shorter list of “have you said this?” lines
const leftStatements = [
  "“People visit our site but I’m not sure they really get what we do.”",
  "“We get traffic, but hardly any enquiries or sign-ups.”",
  "“Our emails go out, but they don’t really seem to move the needle.”",
  "“The website, emails and socials all sound slightly different.”",
  "“The business is good — the copy just feels a bit DIY.”",
  "“I know we need better copy, I’m just not sure where to start.”",
    "“We've mapped out our customer journey and funnel, but we just don't have the time to write the copy.”",
];

export default function ClientChallenges() {
  return (
  <section className="relative border-t z-10 border-slate-800 bg-slate-950 overflow-hidden">
  {/* Background image layer */}
  <div
    className="
      pointer-events-none
      absolute inset-0
      bg-[url('/images/client-challenges-bg.jpg')]
      bg-cover bg-center 
      opacity-20 z-[-10]
    "
  />

  <div
  className="
    pointer-events-none
    absolute bottom-0 left-0
    z-0
    w-[1220px] h-[1220px]
    bg-[url('/images/copywriting-services-swirls.png')]
    bg-no-repeat bg-contain
   

  "
/>

      <div
        className="
          py-20
          xl:px-[15%]
          lg:px-[10rem]
          md:px-[3rem]
          sm:px-[3rem]
          relative
          z-10
        "
      >
        {/* Section header */}
        <div className="mb-16 max-w-2xl lg:ml-auto lg:text-right">
          <p className="mb-4 text-base font-medium uppercase tracking-[0.3em] text-slate-400">
            Client challenges
          </p>
          <h2 className="text-4xl font-semibold leading-tight text-slate-50">
           The problems I see on repeat
          </h2>
          <p className="mt-6 text-lg text-slate-300">
            Most businesses I work with recognise themselves in at least a couple of
            these. You don&apos;t need everything here to be true — one or two
            is enough to know your copy could be working harder.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col gap-16 lg:flex-row lg:gap-20">
          {/* LEFT: Short, bold “have you said this?” list */}
          <div className="lg:w-1/2">
            <h3 className="text-base font-semibold uppercase tracking-[0.25em] text-slate-400">
              Have you said anything like this?
            </h3>

            <ul className="mt-8 space-y-5 text-xl leading-relaxed text-slate-200">
              {leftStatements.map((line) => (
                <li
                  key={line}
                  className="group flex gap-4"
                >
                  <span
                    className="
                      mt-3 h-[3px] w-8 shrink-0 rounded-full bg-slate-600
                      transition-all duration-300 group-hover:w-14 group-hover:bg-slate-100
                    "
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: Fewer, clearer “what’s going on underneath” items */}
          <div className="lg:w-1/2">
            <h3 className="text-base font-semibold uppercase tracking-[0.25em] text-slate-400">
              What&apos;s usually going on underneath
            </h3>

            <div className="mt-8 flex flex-col gap-8">
              {challengeGroups.map((group, index) => (
                <div
                  key={group.title}
                  className="group flex flex-col gap-2"
                >
                  <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-slate-500">
                    <span className="text-[11px] text-red-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{group.title}</span>
                  </div>

                  <p className="text-lg leading-relaxed text-slate-300">
                    {group.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
