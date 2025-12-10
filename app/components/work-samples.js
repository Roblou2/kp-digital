// components/WorkSamples.js

export default function WorkSamples() {
  return (
    <section className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold text-slate-50">
            A quick look at my work
          </h2>
          <p className="mt-3 text-sm text-slate-300">
            Most of my early copywriting experience has been in blog content,
            and over time I&apos;ve shifted that understanding of audience and
            tone into more conversion-focused work — especially landing pages
            and email flows for SMEs.
          </p>
          <p className="mt-2 text-sm text-slate-300">
            Here are a few types of pieces I can share as samples. When we chat,
            I can send you the most relevant examples for your business.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <SampleCard
            label="Landing Page"
            title="Service landing page copy"
            description="A focused landing page for a service-based SME, written to clarify the offer and drive enquiries with a single clear call to action."
            ctaLabel="View sample"
          />
          <SampleCard
            label="Email Flow"
            title="Welcome & nurture emails"
            description="A small sequence of emails designed to welcome new subscribers, tell the brand story, and guide people toward a core product or service."
            ctaLabel="View sample"
          />
          <SampleCard
            label="Content"
            title="Educational blog-style copy"
            description="Longer-form pieces that explain complex topics in plain language — often used as a base for later email and landing page messaging."
            ctaLabel="View sample"
          />
        </div>

        <p className="mt-8 text-sm text-slate-400">
          Want to see something specific? Just mention it when you request a
          quote and I&apos;ll share the most relevant examples I have for your
          niche and goals.
        </p>
      </div>
    </section>
  );
}

function SampleCard({ label, title, description, ctaLabel }) {
  return (
    <article className="flex h-full flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-sm shadow-slate-950/60">
      <div>
        <span className="inline-flex w-fit rounded-full bg-slate-800 px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-300">
          {label}
        </span>
        <h3 className="mt-3 text-sm font-semibold text-slate-50">{title}</h3>
        <p className="mt-3 text-sm text-slate-300">{description}</p>
      </div>
      <div className="mt-4">
        <button
          type="button"
          className="text-xs font-semibold text-emerald-400 underline-offset-4 hover:underline"
        >
          {ctaLabel}
        </button>
        <p className="mt-1 text-[11px] text-slate-500">
          Sample links provided on request during our initial conversation.
        </p>
      </div>
    </article>
  );
}
