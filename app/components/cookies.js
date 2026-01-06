export default function CookiesPage() {
  return (
    <section
      className="w-full h-full
flex flex-col text-left bg-black pt-6
xl:px-[15%] sm:px-[3rem] lg:px-[10rem]"
    >
      <h1 className="text-4xl font-bold text-slate-50">
        Cookies Policy
      </h1>

      <p className="mt-4 text-slate-300">
        This Cookies Policy explains how Killer Performance Digital uses cookies
        and similar technologies on this website.
      </p>

      <h2 className="mt-10 text-2xl font-semibold text-slate-50">
        1. What are cookies?
      </h2>
      <p className="mt-3 text-slate-300">
        Cookies are small text files stored on your device (computer, tablet or
        phone) when you visit a website. They help websites function properly,
        remember your preferences and understand how people use the site.
      </p>
      <p className="mt-3 text-slate-300">
        Some cookies are essential for basic site functionality. Others are
        optional and are used for analytics, performance measurement or
        personalisation.
      </p>

      <h2 className="mt-10 text-2xl font-semibold text-slate-50">
        2. Types of cookies used
      </h2>

      <h3 className="mt-6 text-xl font-semibold text-slate-50">
        Essential cookies
      </h3>
      <p className="mt-3 text-slate-300">
        These cookies are required for the website to work correctly. They
        support core features such as page navigation, security and access to
        basic functionality. You cannot disable these cookies through the cookie
        banner, because the site would not function properly without them.
      </p>

      <h3 className="mt-6 text-xl font-semibold text-slate-50">
        Analytics & performance cookies
      </h3>
      <p className="mt-3 text-slate-300">
        With your consent, I use analytics tools (such as Google Analytics via
        Google Tag Manager) to understand how visitors use the website. These
        cookies help measure traffic, see which pages are visited and identify
        areas to improve.
      </p>
      <p className="mt-3 text-slate-300">
        Analytics cookies collect aggregated information and are not used to
        directly identify you. These cookies are only activated after you
        explicitly accept analytics cookies via the cookie banner.
      </p>

      <h2 className="mt-10 text-2xl font-semibold text-slate-50">
        3. How consent is collected
      </h2>
      <p className="mt-3 text-slate-300">
        When you first visit this site, you will see a cookie banner. This lets
        you choose whether to allow analytics and performance cookies. Essential
        cookies will always be set, as they are required for the site to work.
      </p>
      <p className="mt-3 text-slate-300">
        Your choice is stored so that you are not asked on every visit. You can
        change your decision at any time by clearing cookies in your browser or
        adjusting your browser settings.
      </p>

      <h2 className="mt-10 text-2xl font-semibold text-slate-50">
        4. Managing cookies in your browser
      </h2>
      <p className="mt-3 text-slate-300">
        Most web browsers allow you to view, manage and delete cookies. You can
        usually find these options in the privacy or security settings of your
        browser.
      </p>
      <ul className="mt-3 list-disc pl-6 text-slate-300">
        <li>In Chrome: Settings → Privacy and security → Cookies</li>
        <li>In Firefox: Settings → Privacy &amp; Security → Cookies and Site Data</li>
        <li>In Safari: Preferences → Privacy</li>
        <li>In Edge: Settings → Cookies and site permissions</li>
      </ul>
      <p className="mt-3 text-slate-300">
        If you block or delete cookies, some parts of the website may not work
        as intended.
      </p>

      <h2 className="mt-10 text-2xl font-semibold text-slate-50">
        5. Third-party cookies
      </h2>
      <p className="mt-3 text-slate-300">
        Some cookies may be set by third-party services used on this site, such
        as analytics providers. These third parties may process data in
        accordance with their own privacy and cookies policies.
      </p>
      <p className="mt-3 text-slate-300">
        I only use third-party services that are widely recognised and that
        commit to appropriate data protection standards.
      </p>

      <h2 className="mt-10 text-2xl font-semibold text-slate-50">
        6. Changes to this Cookies Policy
      </h2>
      <p className="mt-3 text-slate-300">
        This Cookies Policy may be updated from time to time to reflect changes
        in technology, legal requirements or how the website operates. Any
        significant changes will be posted on this page.
      </p>

      <h2 className="mt-10 text-2xl font-semibold text-slate-50">
        7. Contact
      </h2>
      <p className="mt-3 text-slate-300">
        If you have any questions about how cookies are used on this website,
        you can contact:
      </p>
      <p className="mt-2 text-slate-100 font-semibold">
        hello@killerperformancedigital.com
      </p>

      <p className="mt-10 text-slate-400 text-sm">
        Last updated: {new Date().getFullYear()}
      </p>
    </section>
  );
}
