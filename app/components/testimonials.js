"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote:
      "It is great to work with Robert, he has proven to be a reliable partner, and most importantly, the quality of his work is outstanding",
    role: "Saas eCommerce startup marketing manager",
  },
  {
    quote:
      "Robert was excellent, it is not often a contractor gets the brief 1st round and adds great value in ideas and presentation.",
    role: "Marketing agency founder",
  },
  {
    quote:
      "Thanks a lot for a great copy for B2B company! Will definitely recommend to work with Robert",
    role: "Startup marketing assistant",
  },

    {
    quote:
      "Excellent, communicative freelancer",
    role: "Startup founder",
  },

      {
    quote:
      "It was a pleasure working with Rob",
    role: "Senior Copywriter, media company",
  },
];

function TestimonialItem({ t, alignRight }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <figure
      ref={ref}
      className={`
        relative group max-w-3xl
        transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        ${
          alignRight
            ? "self-end text-right hover:-translate-x-2"
            : "self-start text-left hover:translate-x-2"
        }
      `}
    >
      {/* Giant decorative quote */}
      <div
        className={`
          pointer-events-none absolute -top-10
          text-[140px] font-bold leading-none
          text-slate-900/5
          ${alignRight ? "right-0" : "left-0"}
        `}
      >
        “
      </div>

      {/* Main quote */}
      <blockquote className="relative z-10 text-2xl leading-relaxed font-medium text-slate-900">
        “{t.quote}”
      </blockquote>

      {/* Meta */}
      <figcaption
        className={`
          mt-6 flex flex-col gap-1 text-base text-slate-500 relative
          ${alignRight ? "items-end" : "items-start"}
        `}
      >
        <span className="relative inline-block font-semibold text-slate-900">
          {t.name}
          {/* Underline sweep */}
          <span
            className="
              absolute left-0 -bottom-1 h-px w-0 bg-slate-900
              transition-all duration-500 group-hover:w-[40%]
            "
          />
        </span>
        <span className="italic">{t.role}</span>
      </figcaption>

      {/* Thin vertical rule (desktop only) */}
      <div
        className={`
          absolute top-0 h-full w-px bg-slate-200
          ${alignRight ? "-right-8" : "-left-8"}
          hidden md:block
        `}
      />
    </figure>
  );
}

export default function Testimonials() {
  return (
    <section className="border-t border-slate-200 bg-zinc-50 bg-[url('/images/noise-light.png')]">

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
        <div className="mb-24 max-w-2xl md:mx-auto md:text-center">
          <p className="mb-4 text-base font-medium uppercase tracking-[0.3em] text-slate-500">
            Testimonials
          </p>

          <h2 className="text-4xl font-semibold leading-tight text-slate-900">
            A few words from clients
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Honest feedback from real people I’ve worked with. 
          </p>
        </div>

        {/* Testimonials */}
        <div className="flex flex-col gap-32">
          {testimonials.map((t, index) => (
            <TestimonialItem
              key={index}
              t={t}
              alignRight={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
