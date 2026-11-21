import Link from "next/link";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

const studies = [
  { href: "/work/tms-implementation", title: "TMS Implementation & Customer Adoption" },
  { href: "/work/edi-migration", title: "EDI Integration Migration After an Acquisition" },
  { href: "/work/edi-onboarding", title: "Automating an EDI Onboarding Workflow" },
  { href: "/work/edi-operations", title: "EDI Operations Process Analysis & Workflow Optimization" },
  { href: "/work/shared-inbox", title: "EDI Shared Inbox Consolidation" },
];

const phases = [
  ["Data preparation", "I received customer requirements already collected by another team, then cleaned customer, carrier, and vendor records. I checked duplicates, addresses, contacts, location codes, vendor codes, and account associations before loading records into the TMS."],
  ["Data validation", "TMS uploads returned error spreadsheets when data was missing or invalid. I researched the errors, corrected the source records, and retried uploads. I also built Excel VLOOKUP checks for country codes and ZIP codes instead of verifying every entry manually."],
  ["Testing against business rules", "I worked through an established test plan containing thousands of scenarios across order creation through delivery. When a test failed, I checked the documented business rules in Confluence, marked the scenario as failed, and routed discrepancies to the Implementation Manager or Business Analyst as appropriate. I retested after corrections until the scenario passed."],
  ["Implementation reporting", "My weekly notes covered testing progress, missing data, unanswered customer and partner communications, and training attendance. I flagged gaps to the Implementation Manager, who coordinated customer follow-up and decisions."],
  ["Role-specific training", "I prepared and delivered sessions for customers, vendors, carriers, and internal users. Customers learned order entry, Excel upload rules, manual entries, and shipment monitoring. Vendors learned scheduling and monitoring. Carriers learned the TMS portal for auctions, tenders, load details, status updates, and invoicing."],
  ["Go-live and Hypercare", "I coordinated with IT to obtain and distribute user credentials, helped close out implementation questions, and supported a two-week Hypercare period. I investigated reported issues first, created Jira tickets for confirmed defects, and retested fixes in production before handing support to the Operations team by email."],
];

export default function TmsImplementationCaseStudy() {
  return (
    <main className={`${roboto.className} min-h-screen bg-white text-zinc-950`}>
      <header className="bg-black text-white">
        <div className="mx-auto max-w-6xl px-8 py-12 sm:py-16">
          <Link href="/#selected-work" className="text-sm font-medium text-zinc-400 transition hover:text-white">← Back to Selected Work</Link>
          <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-400">Implementation Experience</p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">TMS Implementation &amp; Customer Adoption</h1>
              <p className="mt-5 max-w-3xl text-xl leading-8 text-zinc-300">
                Helping customers, carriers, vendors, and operations teams prepare for and use new transportation management workflows.
              </p>
            </div>
            <aside className="lg:mt-10">
              <p className="text-xl font-bold">Case Studies</p>
              <div className="mt-4 flex flex-col gap-2">
                {studies.map(s => <Link key={s.href} href={s.href} className="text-base leading-6 text-sky-400 transition hover:text-sky-300">{s.title}</Link>)}
              </div>
            </aside>
          </div>
          <div className="mt-12 grid gap-6 border-t border-zinc-800 pt-8 sm:grid-cols-3">
            <div><p className="text-3xl font-bold">200+</p><p className="mt-2 text-sm text-zinc-400">Accounts supported through implementation activities</p></div>
            <div><p className="text-3xl font-bold">300+</p><p className="mt-2 text-sm text-zinc-400">Hours of customer and internal training</p></div>
            <div><p className="text-3xl font-bold">2 weeks</p><p className="mt-2 text-sm text-zinc-400">Planned post-launch Hypercare support</p></div>
          </div>
        </div>
      </header>
      <section className="border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-8 py-16">
          <h2 id="project-overview" className="text-3xl font-bold tracking-tight">Overview</h2>
          <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <h3 className="text-lg font-bold text-blue-700">The work</h3>
              <p className="mt-4 text-lg leading-8 text-zinc-700">Each customer account had its own operating rules, data requirements, and participants. The TMS needed usable customer, carrier, and vendor records, tested workflows, trained users, and a supported transition to the new operations team.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-700">My role</h3>
              <p className="mt-4 text-lg leading-8 text-zinc-700">As an Implementation Analyst, I supported account onboarding through data preparation, system uploads, functional testing, status reporting, training, and Hypercare. Implementation Managers owned customer escalations and overall project decisions; Business Analysts handled changes to system requirements.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-zinc-50">
        <div className="mx-auto max-w-6xl px-8 py-16">
          <h2 className="text-3xl font-bold tracking-tight">How I Supported Implementations</h2>
          <div className="mt-10 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {phases.map(([heading, detail]) => (
              <div key={heading} className="border-t border-zinc-300 pt-6">
                <h3 className="text-xl font-bold">{heading}</h3>
                <p className="mt-3 leading-7 text-zinc-700">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="border-y border-zinc-200">
        <div className="mx-auto max-w-6xl px-8 py-16">
          <h2 id="training-adoption" className="text-3xl font-bold tracking-tight">Training &amp; User Adoption</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-700">The carrier portal training followed a standard format. Customer and vendor sessions needed account-specific demonstrations and data prepared ahead of time so the examples would work. During some weeks, I trained users for three to six new accounts and kept sessions organized to avoid conflicts.</p>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-700">I helped develop account-specific SOPs and how-to guides for users after sessions, and created training videos for customers and vendors. I also tracked attendance and reported missing participation to the Implementation Manager for follow-up.</p>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-8 py-16">
          <h2 className="text-3xl font-bold tracking-tight">What This Experience Built</h2>
          <div className="mt-10 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {[
              ["Business and system understanding", "I learned how customer requirements connect to order entry, scheduling, shipment visibility, and carrier workflows."],
              ["Data quality discipline", "Accurate codes, locations, and customer-account relationships mattered before testing or reporting could work correctly."],
              ["Structured issue follow-through", "I compared failures with documented rules, involved the responsible teams, and retested fixes rather than closing issues on assumptions."],
              ["User-focused implementation", "Training, written guides, production access, and Hypercare were part of getting the system ready for daily use."],
            ].map(([heading, detail]) => (
              <div key={heading} className="border-t border-zinc-300 pt-6">
                <h3 className="text-xl font-bold">{heading}</h3>
                <p className="mt-3 leading-7 text-zinc-700">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-8 py-10">
          <Link href="/#selected-work" className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 hover:text-blue-900">Back to Selected Work</Link>
        </div>
      </footer>
    </main>
  );
}
