import Link from "next/link";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const studies = [
  { href: "/work/edi-migration", name: "EDI Integration Migration After an Acquisition" },
  { href: "/work/edi-onboarding", name: "Automating an EDI Onboarding Workflow" },
  { href: "/work/edi-operations", name: "EDI Operations Process Analysis & Workflow Optimization" },
];

export default function EdiOperationsCaseStudy() {
  return (
    <main className={`${roboto.className} min-h-screen bg-white text-zinc-950`}>
      <header className="bg-black text-white">
        <div className="mx-auto max-w-6xl px-8 py-12 sm:py-16">
          <Link href="/#selected-work" className="text-sm font-medium text-zinc-400 transition hover:text-white">
            ← Back to Selected Work
          </Link>
          <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-400">Case Study · 2022</p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                EDI Operations Process Analysis &amp; Workflow Optimization
              </h1>
              <p className="mt-5 max-w-3xl text-xl leading-8 text-zinc-300">
                Examining how work was done, finding opportunities to reduce manual steps, and making the backlog easier to understand.
              </p>
            </div>
            <aside className="lg:mt-10">
              <p className="text-xl font-bold text-white">Case Studies</p>
              <div className="mt-4 flex flex-col gap-2">
                {studies.map((study) => (
                  <Link key={study.href} href={study.href} className="text-base font-normal leading-6 text-sky-400 transition hover:text-sky-300">
                    {study.name}
                  </Link>
                ))}
              </div>
            </aside>
          </div>
          <div className="mt-12 grid gap-6 border-t border-zinc-800 pt-8 sm:grid-cols-3">
            <div><p className="text-3xl font-bold">50%</p><p className="mt-2 text-sm text-zinc-400">Reduction in time for one repetitive task</p></div>
            <div><p className="text-3xl font-bold">1,100+</p><p className="mt-2 text-sm text-zinc-400">Jira tickets analyzed</p></div>
            <div><p className="text-3xl font-bold">JQL</p><p className="mt-2 text-sm text-zinc-400">Custom dashboard filters and reporting</p></div>
          </div>
        </div>
      </header>

      <section className="border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-8 py-16">
          <h2 className="text-3xl font-bold tracking-tight">Project Overview</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <h3 className="text-lg font-bold text-blue-700">The problem</h3>
              <p className="mt-4 text-lg leading-8 text-zinc-700">
                EDI Operations relied on manual steps to manage requests and maintain tickets. Jira statuses did not always show whether the technical work was complete, making the backlog harder to assess.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-700">My role</h3>
              <p className="mt-4 text-lg leading-8 text-zinc-700">
                I examined the existing process, mapped improvements, adapted VBA tools, investigated ticket data against B2B activity, and built Jira reporting to make the work easier to review.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50">
        <div className="mx-auto max-w-6xl px-8 py-16">
          <h2 className="text-3xl font-bold tracking-tight">Current State to Future State</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">
            I started by looking at the steps employees followed each day. I documented the workflow in Microsoft Visio, identified repeated work, and mapped how the process could be handled with fewer manual steps.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 bg-white p-7">
              <p className="text-sm font-bold uppercase tracking-wide text-zinc-500">Current state</p>
              <ul className="mt-5 list-disc space-y-3 pl-5 text-zinc-700">
                <li>Repeated administrative steps</li>
                <li>Manual email and file handling</li>
                <li>Ticket records requiring additional investigation</li>
                <li>Limited visibility into aging work</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-7">
              <p className="text-sm font-bold uppercase tracking-wide text-blue-700">Future state</p>
              <ul className="mt-5 list-disc space-y-3 pl-5 text-zinc-700">
                <li>Simpler sequences of work</li>
                <li>Automation where repetitive steps could be removed</li>
                <li>Validation against actual B2B file activity</li>
                <li>Reporting that makes the backlog easier to review</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-200">
        <div className="mx-auto max-w-6xl px-8 py-16">
          <h2 className="text-3xl font-bold tracking-tight">VBA Automation</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-700">
            I modified existing Excel VBA code to reduce repetitive work, including bulk email communications, retrieving and attaching files, and bulk Jira ticket updates and closures.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-zinc-100 p-6"><p className="text-3xl font-bold">~20 min</p><p className="mt-2 text-zinc-600">Before</p></div>
            <div className="rounded-2xl bg-blue-50 p-6"><p className="text-3xl font-bold text-blue-700">~10 min</p><p className="mt-2 text-zinc-600">After</p></div>
            <div className="rounded-2xl bg-zinc-100 p-6"><p className="text-3xl font-bold">50%</p><p className="mt-2 text-zinc-600">Less time for the task</p></div>
          </div>
          <p className="mt-5 text-sm text-zinc-500">Approximate processing times for one task in this 2022 improvement; separate from the later onboarding hackathon.</p>
        </div>
      </section>

      <section className="bg-zinc-50">
        <div className="mx-auto max-w-6xl px-8 py-16">
          <h2 className="text-3xl font-bold tracking-tight">Investigating the Jira Backlog</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">
            I analyzed more than 1,100 tickets to understand completion times and reporting gaps. The analysis showed an average completion time of about 20 business days, with roughly 40% meeting the expected timeframe and about 12% showing certification status discrepancies.
          </p>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-600">
            I did not rely on Jira status alone. I researched individual tickets in the B2B system and checked whether files were flowing successfully in both directions. Some records needed individual transaction searches to establish whether the technical work was actually complete.
          </p>
        </div>
      </section>

      <section className="border-y border-zinc-200">
        <div className="mx-auto max-w-6xl px-8 py-16">
          <h2 className="text-3xl font-bold tracking-tight">JQL Dashboards &amp; Reporting</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-700">
            I built a separate Jira dashboard rather than changing the one the team already used. That let me create new reporting without disrupting their daily work.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ["Backlog", "Ticket age, status, and items that needed attention."],
              ["Workload", "Assignments and completion activity over selected timeframes."],
              ["Access", "JQL filters, dashboard permissions, and quick access to time tracking."],
            ].map(([heading, detail]) => (
              <div key={heading} className="rounded-2xl border border-zinc-200 p-7">
                <h3 className="text-xl font-bold">{heading}</h3>
                <p className="mt-3 leading-7 text-zinc-600">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-50">
        <div className="mx-auto max-w-6xl px-8 py-16">
          <h2 className="text-3xl font-bold tracking-tight">Results &amp; Impact</h2>
          <div className="mt-10 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {[
              ["Less manual work", "One task went from approximately 20 minutes to 10 minutes after a process improvement."],
              ["A clearer picture of completed work", "Checking Jira records against B2B activity exposed gaps between ticket status and actual integration activity."],
              ["More useful reporting", "The new dashboard brought aging tickets, assignments, and completion activity into one view."],
              ["Documented opportunities", "Current-state and future-state maps showed where the process could be simplified. Not every recommendation was implemented."],
            ].map(([heading, detail]) => (
              <div key={heading} className="border-t border-zinc-300 pt-6">
                <h3 className="text-xl font-bold">{heading}</h3>
                <p className="mt-3 leading-7 text-zinc-700">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-8 py-16">
          <h2 className="text-3xl font-bold tracking-tight">What I Learned</h2>
          <div className="mt-10 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {[
              ["Look at the full process", "Following the work from beginning to end helped me find problems that were easy to miss when looking at only one task."],
              ["Verify what the data means", "A ticket can look unfinished in a report even when files are moving successfully. Sometimes I had to investigate the underlying transactions to know what was really happening."],
              ["Use the tools already available", "Not every improvement requires new software. VBA, JQL, and better workflow design gave me practical ways to improve daily work."],
              ["Avoid disrupting existing work", "Creating a separate dashboard let me build something useful while keeping the team's existing reporting intact."],
            ].map(([heading, detail]) => (
              <div key={heading} className="border-t border-zinc-300 pt-6">
                <h3 className="text-xl font-bold">{heading}</h3>
                <p className="mt-3 leading-7 text-zinc-700">{detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 border-t border-zinc-200 pt-10">
            <h3 className="text-xl font-bold">Skills used</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Current-State Analysis", "Future-State Design", "Visio", "Process Improvement", "Excel VBA", "Jira", "JQL", "Backlog Analysis", "Data Validation", "B2B / EDI", "Dashboard Development", "Permissions"].map((skill) => (
                <span key={skill} className="rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm text-zinc-700">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-8 py-12">
          <Link href="/#selected-work" className="text-sm font-medium text-zinc-700 transition hover:text-blue-700">← Back to Selected Work</Link>
          <div className="mt-10 border-t border-zinc-200 pt-8">
            <p className="text-xl font-bold">Case Studies</p>
            <div className="mt-4 flex flex-col gap-2">
              {studies.map((study) => (
                <Link key={study.href} href={study.href} className="text-base font-normal leading-6 text-blue-700 transition hover:text-blue-900">{study.name}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <footer className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-8 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div><p className="font-bold">April Smith</p><p className="text-sm font-medium text-zinc-600">Implementation • Integration • Automation</p></div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <a href="/April_D_Smith_Resume_2026.pdf" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-zinc-600 transition hover:text-blue-700">Resume</a>
            <a href="https://www.linkedin.com/in/april-d-smith-5230aa46/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-zinc-600 transition hover:text-blue-700">LinkedIn</a>
            <a href="mailto:aprilsmith4026@gmail.com" className="text-sm font-medium text-zinc-600 transition hover:text-blue-700">Email</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
