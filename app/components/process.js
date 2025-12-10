// components/Process.js

const steps = [
  {
    title: "Tell Me What You Need",
    text: "Fill out a short form or book a quick intro call so I can understand your business, goals, and timelines.",
  },
  {
    title: "I Create High-Converting Copy",
    text: "Based on your goals, audience, and message — all written in your brand voice, using proven conversion frameworks.",
  },
  {
    title: "You Get Copy That’s Ready to Launch",
    text: "Plug it into your website, ads, emails, or funnel and start seeing the difference.",
  },
];

export default function Process() {
  return (
    <section className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-slate-50">
          How it works (3 simple steps)
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
            >
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10 text-sm font-semibold text-emerald-400">
                {index + 1}
              </div>
              <h3 className="text-sm font-semibold text-slate-50">
                {step.title}
              </h3>
              <p className="mt-3 text-sm text-slate-300">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
