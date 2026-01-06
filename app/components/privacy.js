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

      {/* 1 */}
      <h2 className="mt-10 text-2xl font-semibold text-slate-50">
        1. Who I am
      </h2>
      <p className="mt-3 text-slate-300">
        Killer Performance Digital provides copywriting and marketing services
        for small and medium-sized businesses.
      </p>

      {/* 2 */}
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
        <li>Basic website usage information (through cookies and analytics)</li>
      </ul>

      <p className="mt-3 text-slate-300">
        I only collect information necessary to respond to enquiries and improve
        the performance and usability of this website.
      </p>

      {/* 3 */}
      <h2 className="mt-10 text-2xl font-semibold text-slate-50">
        3. How your data is used
      </h2>

      <p className="mt-3 text-slate-300">
        I use your information only to:
      </p>

      <ul className="mt-3 list-disc pl-6 text-slate-300">
        <li>Reply to enquiries and discuss potential projects</li>
        <li>Keep necessary business and accounting records</li>
        <li>Understand how people use the website so I can improve it</li>
      </ul>

      <p className="mt-3 text-slate-300">
        Your details are never sold or shared for unrelated marketing purposes.
      </p>

      {/* 4 */}
      <h2 className="mt-10 text-2xl font-semibold text-slate-50">
        4. Cookies & analytics
      </h2>

      <p className="mt-3 text-slate-300">
        This website uses cookies to operate correctly and, with your consent,
        analytics tools (such as Google Analytics via Google Tag Manager) to
        understand how visitors interact with the site.
      </p>

      <p className="mt-3 text-slate-300">
        Analytics cookies are only activated after you choose to allow them in
        the cookie banner. You can change your choice at any time by clearing
        cookies in your browser.
      </p>

      <p className="mt-3 text-slate-300">
        For full details about what cookies are used, why they are used and how
        you can manage them, please see the{" "}
        <a
          href="/cookies-policy"
          className="underline underline-offset-2 text-slate-100 hover:text-slate-50"
        >
          Cookies Policy
        </a>.
      </p>

      {/* 5 */}
      <h2 className="mt-10 text-2xl font-semibold text-slate-50">
        5. Where your data is stored
      </h2>

      <p className="mt-3 text-slate-300">
        Enquiries are sent to my secure business email (Zoho Mail) and may be
        recorded in internal tools such as spreadsheets. Access is restricted
        and protected using strong security controls.
      </p>

      {/* 6 */}
      <h2 className="mt-10 text-2xl font-semibold text-slate-50">
        6. How long data is kept
      </h2>

      <p className="mt-3 text-slate-300">
        Enquiry information is kept only as long as reasonably necessary —
        typically up to 24 months — unless there is a legitimate business or
        legal reason to retain it longer.
      </p>

      {/* 7 */}
      <h2 className="mt-10 text-2xl font-semibold text-slate-50">
        7. Sharing your data
      </h2>

      <p className="mt-3 text-slate-300">
        I do not sell personal data. Data may only be shared with trusted
        service providers where required to deliver functionality (for example,
        email hosting), or where required by law.
      </p>

      {/* 8 */}
      <h2 className="mt-10 text-2xl font-semibold text-slate-50">
        8. Your rights
      </h2>

      <p className="mt-3 text-slate-300">
        Under GDPR, you have the right to:
      </p>

      <ul className="mt-3 list-disc pl-6 text-slate-300">
        <li>Request a copy of the data held about you</li>
        <li>Ask for incorrect data to be corrected</li>
        <li>Request deletion of your data (where applicable)</li>
        <li>Withdraw consent for analytics at any time</li>
      </ul>

      <p className="mt-3 text-slate-300">
        To make a request, email:
      </p>

      <p className="mt-2 text-slate-100 font-semibold">
        hello@killerperformancedigital.com
      </p>

      {/* 9 */}
      <h2 className="mt-10 text-2xl font-semibold text-slate-50">
        9. Changes to this policy
      </h2>

      <p className="mt-3 text-slate-300">
        This policy may be updated from time to time. Any significant changes
        will be posted on this page.
      </p>

      <p className="mt-10 text-slate-400 text-sm">
        Last updated: {new Date().getFullYear()}
      </p>
    </section>
  );
}
