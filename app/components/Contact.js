import Image from 'next/image'

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-slate-200 bg-zinc-50"
    >
      <div
        className="
          py-24
          xl:px-[15%]
          lg:px-[10rem]
          md:px-[3rem]
          sm:px-[3rem]
        "
      >
        {/* TWO-COLUMN LAYOUT */}
        <div className="flex flex-col gap-16 md:gap-24 md:flex-row md:items-start">
          
          {/* LEFT — TITLE / INTRO */}
          <div className="md:w-[40%] w-[100%]">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-slate-500">
              Contact
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-slate-900">
                 <span className="relative inline-block">
              Start a conversation
                  <span
        className="
          absolute left-0 left-0 
          h-[2px] -bottom-4 bg-red-600
          w-[18%]
        "
      />
      </span>
            </h2>
  
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
         We typically respond to enquiries within 48 hours.
            </p>
                <p className="mt-6 text-lg md:text-xl lg:text-2xl leading-relaxed
                font-bold text-slate-900">
         info@killerperformancedigital.com
            </p>
            <div className="flex flex-row justify-center">
             <Image src="/images/arm-flexed.png"
            alt=""
            width={200}
            height={200}
                />
          </div>
</div>
          {/* RIGHT — FORM */}
          <div className="md:w-[60%]">
            <form
              className="
                rounded-2xl border border-slate-200 bg-white
                p-6 md:p-8
                shadow-[0_12px_40px_-10px_rgba(0,0,0,0.12)]
              "
            >
              {/* Name */}
              <div className="mb-5">
                <label className="block text-sm font-medium text-slate-900">
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="
                    mt-2 block w-full rounded-md border border-slate-700 bg-slate-900
                    px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500
                    focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500
                  "
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div className="mb-5">
                <label className="block text-sm font-medium text-slate-900">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  required
                  className="
                    mt-2 block w-full rounded-md border border-slate-700 bg-slate-900
                    px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500
     focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500
                  "
                  placeholder="you@company.com"
                />
              </div>

              {/* Phone */}
              <div className="mb-5">
                <label className="block text-sm font-medium text-slate-900">
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  className="
                    mt-2 block w-full rounded-md border border-slate-700 bg-slate-900
                    px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500
                    px-3 py-2 text-sm 
                    placeholder:text-slate-500
                        focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500
                  "
                  placeholder="+44 7xxx xxx xxx"
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-900">
                  What do you need help with?
                </label>
                <textarea
                  rows={4}
                  className="
                    mt-2 block w-full rounded-md border border border-slate-700 bg-slate-900
                    px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500
                    placeholder:text-slate-500
                    focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500
                  "
                  placeholder="E.g. landing page rewrite, email sequence, funnel review…"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="
                  inline-flex w-full items-center justify-center
                  rounded-md bg-red-600 px-4 py-2.5
                  text-sm font-semibold text-white
                  shadow-sm transition-colors
                  hover:bg-slate-800
                "
              >
                Send message
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
