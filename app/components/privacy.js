export default function PrivacyPage() {
  return (
    <section className="w-full h-full
flex flex-col text-left bg-black pt-6
xl:px-[15%] sm:px-[3rem] lg:px-[10rem]">
  
        <h1 className="text-4xl font-bold text-slate-50">
          Privacy Policy
        </h1>

        <p className="mt-4 text-slate-300">
          This page explains how Killer Performance Digital collects, uses and
          protects your information when you contact me or use this website.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-slate-50">
          1. Who I am
        </h2>
        <p className="mt-3 text-slate-300">
          Killer Performance Digital provides marketing services
          for businesses.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-slate-50">
          2. What data I collect
        </h2>

        <p className="mt-3 text-slate-300">
          When you submit a form, I may collect:
        </p>

        <ul className="mt-3 list-disc pl-6 text-slate-300">
          <li>Your name</li>
          <li>Your email address</li>
          <li>Your phone number (optional)</li>
          <li>Any details you include in your message</li>
          <li>Basic website usage information (see cookies section below)</li>
        </ul>

        <p className="mt-3 text-slate-300">
          I only collect information that helps me respond to enquiries and
          improve my website and services.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-slate-50">
          3. How your data is used
        </h2>

        <p className="mt-3 text-slate-300">
          I use your information only to:
        </p>

        <ul className="mt-3 list-disc pl-6 text-slate-300">
          <li>Reply to enquiries and discuss potential projects</li>
          <li>Keep basic business and accounting records</li>
          <li>Understand how people use the website so I can improve it</li>
        </ul>

        <p className="mt-3 text-slate-300">
          Your details are never sold, traded or used for unrelated marketing
          without your permission.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-slate-50">
          4. Cookies & analytics
        </h2>

        <p className="mt-3 text-slate-300">
          This website uses cookies and analytics tools to understand how visitors
          use the site (for example, which pages are viewed and for how long).
          These tools help me make the site clearer and more useful.
        </p>

        <p className="mt-3 text-slate-300">
          Where required by law, analytics cookies are only set **after you give
          consent** via the cookie banner. You can withdraw or change consent at
          any time.
        </p>

        <p className="mt-3 text-slate-300">
          Cookies do not give me access to your computer or personal content.
          They simply store small pieces of data to improve website performance
          and understand usage trends.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-slate-50">
          Types of cookies used:
        </h3>

        <ul className="mt-3 list-disc pl-6 text-slate-300">
          <li>
            <span className="font-semibold text-slate-200">
              Essential cookies:
            </span>{" "}
            required for the website to function correctly.
          </li>

          <li>
            <span className="font-semibold text-slate-200">
              Analytics cookies:
            </span>{" "}
            used to measure site traffic and performance.
          </li>
        </ul>

        <p className="mt-3 text-slate-300">
          If you prefer not to be tracked, you can disable non-essential cookies
          through the cookie preferences option or your browser settings.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-slate-50">
          5. Where your data is stored
        </h2>

        <p className="mt-3 text-slate-300">
          Enquiries are sent to my secure business email (Zoho Mail) and may be
          backed up in internal business tools such as spreadsheets. Access is
          restricted and protected by strong security controls.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-slate-50">
          6. How long data is kept
        </h2>

        <p className="mt-3 text-slate-300">
          Enquiry information is kept only as long as reasonably necessary — 
          typically up to 24 months — unless there is a legitimate business or
          legal need to retain it longer.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-slate-50">
          7. Sharing your data
        </h2>

        <p className="mt-3 text-slate-300">
          I do not sell or share personal data with third parties except where
          required to deliver a service you have requested or to comply with law.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-slate-50">
          8. Your rights
        </h2>

        <p className="mt-3 text-slate-300">
          Under GDPR, you have the right to:
        </p>

        <ul className="mt-3 list-disc pl-6 text-slate-300">
          <li>Request a copy of the data held about you</li>
          <li>Ask for incorrect information to be corrected</li>
          <li>Request deletion of your data</li>
          <li>Withdraw consent at any time</li>
        </ul>

        <p className="mt-3 text-slate-300">
          To make a request, email:
        </p>

        <p className="mt-2 text-slate-100 font-semibold">
          hello@killerperformancedigital.com
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-slate-50">
          9. Changes to this policy
        </h2>

        <p className="mt-3 text-slate-300">
          This policy may occasionally be updated. Any significant changes will
          be posted on this page.
        </p>

        <p className="mt-10 text-slate-400 text-sm">
          Last updated: {new Date().getFullYear()}
        </p>
    
    </section>
  );
}
