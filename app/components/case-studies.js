"use client";

import { useState } from "react";

const caseStudies = [
  {
    id: "01",
    tag: "Email flows",
    title: "Welcome email for a growing SME",
    goal: "Welcome new subscribers and set expectations for a short nurture sequence.",
    format: "Email – Welcome #1",
    audience: "New leads for a service-based SME",
    sampleHeading: "You’re in — here’s what happens next",
    sampleBody: `Hey [Name],

Quick note to say welcome.

Over the next few days, I’ll send you a handful of short emails that show you:
• how [result] actually works in practice
• the common mistakes to avoid
• the quickest way to get your first win without [big fear]

If you’d like to skip ahead and talk about how this could work for your business, you can book a quick call here: [link].

Speak soon,
[Client name]`,
    rationale:
      "This opening reduces anxiety, sets a clear expectation for what’s coming next, and invites action without sounding pushy.",
  },
  {
    id: "02",
    tag: "Landing page",
    title: "Service landing page hero section",
    goal: "Make it immediately clear what the service is and who it’s for.",
    format: "Landing page hero copy",
    audience: "Owners of small service businesses",
    sampleHeading: "Clear, conversion-focused copy for small businesses that want more enquiries — not more marketing jargon.",
    sampleBody: `If you’re already getting some traffic but not enough good-fit enquiries, your copy is probably working against you.

I help small and medium-sized businesses turn vague, wordy pages into clear, persuasive journeys that feel honest — and actually convert.`,
    rationale:
      "This hero focuses on the core outcome (more enquiries), calls out the current frustration, and positions the copy as a lever for performance, not decoration.",
  },
  {
    id: "03",
    tag: "Content → conversion",
    title: "Turning a blog insight into email copy",
    goal: "Reuse proven content ideas to warm up subscribers toward a core offer.",
    format: "Email – nurture / story",
    audience: "Existing readers subscribed from blog content",
    sampleHeading: "The moment most people realise their copy is holding them back",
    sampleBody: `You’ve probably had this happen:

You launch a new page, send a few emails, maybe even run some ads… and you get a trickle of replies, but nowhere near what you expected.

Most of the time, the problem isn’t your offer. It’s how clearly that offer is explained.

In this email, I want to show you one small shift you can make to the way you talk about [offer] so that people immediately understand why it matters — and what to do next.`,
    rationale:
      "This email borrows a real scenario from a high-performing blog post and reframes it as a story that leads naturally into the offer.",
  },
];

export default function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = caseStudies[activeIndex];

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
        {/* HEADER */}
        <div className="mb-20 max-w-2xl">
          <p className="mb-4 text-base font-medium uppercase tracking-[0.3em] text-slate-400">
            Copy lab
          </p>

          <h2 className="text-4xl font-semibold leading-tight text-slate-50">
            How I write in practice
          </h2>

          <p className="mt-6 text-lg text-slate-300">
            A few real examples of client copy — with context, the goal for each
            piece, and a short explanation of why it&apos;s written that way.
          </p>
        </div>

        {/* MAIN LAYOUT */}
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
          {/* LEFT: CASE INDEX */}
          <aside className="lg:w-[30%]">
            <div className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-slate-500">
              Selected pieces
            </div>

            <div className="flex flex-row gap-4 overflow-x-auto pb-2 lg:flex-col lg:gap-3 lg:overflow-visible">
              {caseStudies.map((study, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={study.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`
                      group flex min-w-[220px] cursor-pointer flex-col gap-1
                      border-b border-slate-800 pb-4 text-left
                      transition-colors duration-200
                      ${
                        isActive
                          ? "text-slate-50"
                          : "text-slate-500 hover:text-slate-200"
                      }
                    `}
                  >
                    <span className="text-xs uppercase tracking-[0.25em] text-slate-500">
                      Piece {study.id}
                    </span>
                    <span className="text-sm font-medium leading-snug">
                      {study.title}
                    </span>

                    <span
                      className={`
                        mt-3 h-px w-10 transition-all duration-300
                        ${
                          isActive
                            ? "bg-slate-50"
                            : "bg-slate-700 group-hover:bg-slate-400"
                        }
                      `}
                    />
                  </button>
                );
              })}
            </div>
          </aside>

          {/* RIGHT: ACTIVE PIECE */}
          <div className="lg:w-[70%]">
            {/* Meta line */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-slate-500">
              <span>Piece {active.id}</span>
              <span className="h-[1px] w-6 bg-slate-600" />
              <span>{active.tag}</span>
            </div>

            {/* Context */}
            <div className="mt-6 space-y-2 text-sm text-slate-400">
              <MetaRow label="Goal" value={active.goal} />
              <MetaRow label="Format" value={active.format} />
              {active.audience && (
                <MetaRow label="Audience" value={active.audience} />
              )}
            </div>

            {/* Copy excerpt */}
            <div
              className="
                mt-8 rounded-2xl border border-slate-800 bg-slate-900/70
                p-6 text-left
              "
            >
              {active.sampleHeading && (
                <p className="mb-4 text-lg font-semibold text-slate-50">
                  {active.sampleHeading}
                </p>
              )}

              <pre
                className="
                  whitespace-pre-wrap
                  text-base
                  leading-relaxed
                  text-slate-200
                  font-normal
                "
              >
                {active.sampleBody}
              </pre>
            </div>

            {/* Rationale */}
            {active.rationale && (
              <div className="mt-6 text-base leading-relaxed text-slate-300">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Why it&apos;s written this way
                </span>
                <p className="mt-3">{active.rationale}</p>
              </div>
            )}
          </div>
        </div>

        {/* Soft samples note */}
        <p className="mt-16 max-w-2xl text-base leading-relaxed text-slate-300">
          Want to see specific examples for your industry or offer? Mention it
          when you get in touch and I can share relevant samples and explain the
          thinking behind them.
        </p>
      </div>
    </section>
  );
}

function MetaRow({ label, value }) {
  if (!value) return null;
  return (
    <div className="flex flex-col gap-1 md:flex-row md:gap-3">
      <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-500 md:w-24">
        {label}
      </span>
      <span className="text-sm text-slate-300 md:flex-1">{value}</span>
    </div>
  );
}
