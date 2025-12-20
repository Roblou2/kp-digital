"use client";

import { useState } from "react";

const caseStudies = [
  {
    id: "01",
    tag: "Landing page",
    title: "Landing page for a growing AI music generator",
    goal: "To get visitors to trial using the software before making a purchase",
    format: "Landing page hero copy",
    audience: "Vloggers, content makers, marketing agencies, motion designers, artists, startup founders, students",
    sampleHeading: "Original, royalty-free music for your digital content ",
    sampleBody: `
    With Mubert, you can quickly and easily make music that’s of a specific mood and length. Create unique tracks and ones according to your selections.`,
    rationale:
      "This opening line succinctly describes exactly what the music software does while targeting two of their biggest pain points in one sentence. The sub-text adds extra detail to support the value proposition.",
  },

    {
    id: "03",
    tag: "Trial Welcome & Onboarding – Day 1",
    title: "Trial kick-off email",
    goal: "Get fitness trainers to realise need for the app ASAP",
    format: "Email – 1st welcome flow",
    audience: "Exercise to music instructors, gym instructors, personal trainers",
    sampleHeading: "Ready. Set. Go! It’s time to get your pump on.",
    sampleBody: `Thank you for signing up to try FitnessPlayer! 

You now have 14 days to discover new music, make it your own and try it out in your classes!

We know how much effort it is to spend hours upon hours searching for tracks, and putting together that perfect playlist for your classes and workouts.

But with FitnessPlayer, you can search tracks by BPM, genre, year or track length to easily find the music you want for your classes.

With a fitastic playlist of your own curated and mixed tracks, powered by a super user-friendly interface,  getting your pump on is easier than ever before, and you won’t  be leaving your class participants waiting while you fiddle around with an old clunky music player!

 You’ll find a huge library of ready-made fitness class playlists for different class types, or, you can mix your own tracks, and add intervals, effects or pauses. You can even change the track tempo in real time!

And all of this is simple, quick and easy to do. Once you’re set, you can share your playlist with your friends, sync it to your existing player and control it with Bluetooth.

There’s no time to waste. What are you waiting for?



`,
    rationale:
      "This email confirms the action the trainer has taken and pushes for first product usage by focusing on how the app meets their specific needs when sourcing music for their exercise classes.",
  },
  {
    id: "02",
    tag: "Email",
    title: "Feature & Benefit Nurture",
    goal: "Move users from awareness to real usage and purchase readiness",
    format: "Email flow",
    audience: "Exercise to music instructors, gym instructors, personal trainers",
    sampleHeading: "5 reasons to get FitnessPlayer",
    sampleBody: `At the heart of FitnessPlayer is the simplicity and ease at which you can put together and use a customised playlist in your group-exercise sessions and workouts. 

If you still haven’t got round to using FitnessPlayer, here are 5 reasons for you to try it out:

Say goodbye to spending hours and hours searching for the perfect tracks for your classes - with FitnessPlayer you can search by BPM, genre, year, or track length.

Or, save even more time by choosing from one of our many ready-made fitness class playlists.

Perhaps you love to make your classes your own, and stand out from the crowd. With our tool, you can easily mix tracks, add and set intervals, add effects or extra breaks.
 
And if improvising in your classes is your thing, you can change track tempo (BPM) in real time!

No more fretting over playing Spotify music illegally in public — FitnessPlayer’s licenses cover the group training industry.

Oh, and did we mention that navigating and using FitnessPlayer has virtually no learning curve? Many other music mixers and players do, but with FitnessPlayer everything is quick and simple.

 Lastly, switching tracks and changing music with the player during your class is almost effortless. 

What are you waiting for? See you in the studio, trainer.
`,
    rationale:
      "This email focuses on trainers who have signed up to the free trial and downloaded the app, but who have perhaps not yet used the trial enough to realise the app's value. By showing not just the features, but the benefits too, the copy highlights the main value proposition and urges fitness traienrs to try the app out and see just how much it can help them.",
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
