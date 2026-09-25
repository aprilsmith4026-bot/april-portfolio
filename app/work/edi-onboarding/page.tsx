import Link from "next/link";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function EdiOnboardingCaseStudy() {
  return (
    <main className={`${roboto.className} min-h-screen bg-white text-zinc-950`}>
      {/* =========================================================
          HEADER
      ========================================================= */}
      <header className="bg-black text-white">
        <div className="mx-auto max-w-6xl px-8 py-12 sm:py-16">
          <Link
            href="/#selected-work"
            className="text-sm font-medium text-zinc-400 transition hover:text-white"
          >
            ← Back to Selected Work
          </Link>

          <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start">
            {/* LEFT SIDE — CASE STUDY INTRO */}
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-400">
                Case Study
              </p>

              <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                EDI Onboarding Automation
              </h1>

              <p className="mt-5 max-w-3xl text-xl leading-8 text-zinc-300">
                Supporting a development team from workflow documentation
                through production.
              </p>
            </div>

            {/* RIGHT SIDE — CASE STUDIES */}
            <aside className="lg:mt-10">
              <p className="text-xl font-bold text-white">
                Case Studies
              </p>

              <div className="mt-4 flex flex-col gap-2">
                <Link
                  href="/work/edi-migration"
                  className="text-base font-normal leading-6 text-sky-400 transition hover:text-sky-300"
                >
                  EDI Integration Migration After an Acquisition
                </Link>

                <Link
                  href="/work/edi-onboarding"
                  className="text-base font-normal leading-6 text-sky-400 transition hover:text-sky-300"
                >
                  Automating an EDI Onboarding Workflow
                </Link>
              </div>
            </aside>
          </div>

          {/* KEY RESULTS */}
          <div className="mt-12 grid gap-6 border-t border-zinc-800 pt-8 sm:grid-cols-3">
            <div>
              <p className="text-3xl font-bold text-white">2 weeks</p>
              <p className="mt-2 text-sm text-zinc-400">
                Project start to production
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-white">100%</p>
              <p className="mt-2 text-sm text-zinc-400">
                Onboarding initiation automated
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-white">~15 min</p>
              <p className="mt-2 text-sm text-zinc-400">
                Manual work saved per request
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* =========================================================
          PROJECT OVERVIEW
      ========================================================= */}
      <section className="border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-8 py-16">
          <h2 className="text-3xl font-bold tracking-tight">
            Project Overview
          </h2>

          <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-16">
            {/* PROJECT */}
            <div>
              <h3 className="text-lg font-bold text-blue-700">
                The project
              </h3>

              <p className="mt-4 text-lg leading-8 text-zinc-700">
                The development team had two weeks to automate an EDI
                onboarding process and move it into production. The existing
                process relied on manual initiation, repeated processing, and
                team capacity to keep requests moving.
              </p>
            </div>

            {/* ROLE */}
            <div>
              <h3 className="text-lg font-bold text-blue-700">
                My role
              </h3>

              <p className="mt-4 text-lg leading-8 text-zinc-700">
                I provided existing workflow documentation and operational
                knowledge, answered process questions during development,
                identified gaps and exceptions, supported testing, and helped
                prepare users for the new workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SUPPORTING THE BUILD
      ========================================================= */}
      <section className="bg-zinc-50">
        <div className="mx-auto max-w-6xl px-8 py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight">
              Supporting the Build
            </h2>

            <p className="mt-4 text-lg leading-8 text-zinc-600">
              The workflow documentation gave the developers a starting
              point. I stayed involved throughout the build to provide the
              operational details they needed.
            </p>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 md:grid-cols-4">
            {/* DOCUMENT */}
            <div className="bg-white p-7">
              <h3 className="text-xl font-bold">
                Document
              </h3>

              <p className="mt-3 leading-7 text-zinc-600">
                Shared the existing workflow and process documentation with
                the development team.
              </p>
            </div>

            {/* TRANSLATE */}
            <div className="bg-white p-7">
              <h3 className="text-xl font-bold">
                Translate
              </h3>

              <p className="mt-3 leading-7 text-zinc-600">
                Explained process steps, data requirements, decision points,
                and known exceptions.
              </p>
            </div>

            {/* VALIDATE */}
            <div className="bg-white p-7">
              <h3 className="text-xl font-bold">
                Validate
              </h3>

              <p className="mt-3 leading-7 text-zinc-600">
                Answered questions, identified gaps, and supported testing as
                the workflow was built.
              </p>
            </div>

            {/* PREPARE */}
            <div className="bg-white p-7">
              <h3 className="text-xl font-bold">
                Prepare
              </h3>

              <p className="mt-3 leading-7 text-zinc-600">
                Helped prepare the team for the new process before the
                workflow moved into production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WORKFLOW CHANGE
      ========================================================= */}
      <section className="border-y border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-8 py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight">
              Workflow Change
            </h2>

            <p className="mt-4 text-lg leading-8 text-zinc-600">
              The project automated the start of the onboarding workflow and
              reduced the amount of repetitive work handled manually.
            </p>
          </div>

          <div className="mt-10 grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
            {/* BEFORE */}
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-7">
              <p className="text-sm font-bold text-zinc-500">
                Before
              </p>

              <ul className="mt-5 space-y-3 text-zinc-700">
                <li>Manual onboarding initiation</li>
                <li>Repetitive processing</li>
                <li>Capacity-dependent delays</li>
                <li>Manual workflow management</li>
              </ul>
            </div>

            {/* ARROW */}
            <div className="flex items-center justify-center text-3xl text-blue-600">
              <span className="hidden lg:block">→</span>
              <span className="lg:hidden">↓</span>
            </div>

            {/* MY CONTRIBUTION */}
            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-7">
              <p className="text-sm font-bold text-blue-700">
                My contribution
              </p>

              <ul className="mt-5 space-y-3 text-zinc-700">
                <li>Workflow documentation</li>
                <li>Process and requirements clarification</li>
                <li>Data preparation</li>
                <li>Gap and exception identification</li>
                <li>Testing support</li>
                <li>User preparation</li>
              </ul>
            </div>

            {/* ARROW */}
            <div className="flex items-center justify-center text-3xl text-blue-600">
              <span className="hidden lg:block">→</span>
              <span className="lg:hidden">↓</span>
            </div>

            {/* IN PRODUCTION */}
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-7">
              <p className="text-sm font-bold text-emerald-700">
                In production
              </p>

              <ul className="mt-5 space-y-3 text-zinc-700">
                <li>Automated onboarding initiation</li>
                <li>Consistent process execution</li>
                <li>Less repetitive manual work</li>
                <li>Team involvement when needed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT I LEARNED
      ========================================================= */}
      <section className="bg-zinc-50">
        <div className="mx-auto max-w-6xl px-8 py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight">
              What I Learned
            </h2>

            <p className="mt-4 text-lg leading-8 text-zinc-600">
              Working closely with the developers for two weeks gave me a much
              better understanding of the development process and my role in it.
            </p>
          </div>

          <div className="mt-10 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {/* LESSON 1 */}
            <div className="border-t border-zinc-300 pt-6">
              <h3 className="text-xl font-bold">
                Speed requires availability
              </h3>

              <p className="mt-3 leading-7 text-zinc-700">
                With only two weeks to get this into production, I learned how
                important it was to be available while the developers were
                working. They had questions throughout the day about the
                workflow, exceptions, and what needed to happen in different
                situations. We met daily, but I also stayed available between
                meetings so they could keep moving.
              </p>
            </div>

            {/* LESSON 2 */}
            <div className="border-t border-zinc-300 pt-6">
              <h3 className="text-xl font-bold">
                Documentation gives developers a starting point
              </h3>

              <p className="mt-3 leading-7 text-zinc-700">
                Having the workflow documented ahead of time made it much easier
                to show the developers how the process worked. They were not
                starting with a blank page. I also learned that documentation
                can only take you so far. More questions came up once they
                started building, and I needed to fill in those details as we
                went.
              </p>
            </div>

            {/* LESSON 3 */}
            <div className="border-t border-zinc-300 pt-6">
              <h3 className="text-xl font-bold">
                I learned how development works with requirements
              </h3>

              <p className="mt-3 leading-7 text-zinc-700">
                One of the biggest things I learned was that developers could
                not just create anything we wanted. There were technical
                guidelines they had to work within. Sometimes we could adjust
                the development approach, and sometimes the process itself
                needed to change. I became the person who could explain how the
                process worked and help work through those decisions with them.
              </p>
            </div>

            {/* LESSON 4 */}
            <div className="border-t border-zinc-300 pt-6">
              <h3 className="text-xl font-bold">
                I learned how much could actually be automated
              </h3>

              <p className="mt-3 leading-7 text-zinc-700">
                As we worked through the workflow, we found places where the
                process needed to change or be clarified before it could be
                automated. I was surprised by how much we were ultimately able
                to automate. By the end of the project, the onboarding
                initiation process was 100% automated.
              </p>
            </div>
          </div>

          {/* SKILLS USED */}
          <div className="mt-14 border-t border-zinc-200 pt-10">
            <h3 className="text-xl font-bold">
              Skills used
            </h3>

            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Workflow Analysis",
                "Requirements",
                "Process Documentation",
                "Technical Translation",
                "Developer Collaboration",
                "Testing",
                "Problem Solving",
                "Rapid Delivery",
                "Change Adoption",
                "Automation",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm text-zinc-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CASE STUDY NAVIGATION
      ========================================================= */}
      <section className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-8 py-12">
          <Link
            href="/#selected-work"
            className="text-sm font-medium text-zinc-700 transition hover:text-blue-700"
          >
            ← Back to Selected Work
          </Link>

          <div className="mt-10 border-t border-zinc-200 pt-8">
            <p className="text-xl font-bold text-zinc-950">
              Case Studies
            </p>

            <div className="mt-4 flex flex-col gap-2">
              <Link
                href="/work/edi-migration"
                className="text-base font-normal leading-6 text-blue-700 transition hover:text-blue-900"
              >
                EDI Integration Migration After an Acquisition
              </Link>

              <Link
                href="/work/edi-onboarding"
                className="text-base font-normal leading-6 text-blue-700 transition hover:text-blue-900"
              >
                Automating an EDI Onboarding Workflow
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-8 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-bold">
              April Smith
            </p>

            <p className="text-sm font-medium text-zinc-600">
              Implementation • Integration • Automation
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href="/April_D_Smith_Resume_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-zinc-600 transition hover:text-blue-700"
            >
              Resume
            </a>

            <a
              href="https://www.linkedin.com/in/april-d-smith-5230aa46/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-zinc-600 transition hover:text-blue-700"
            >
              LinkedIn
            </a>

            <a
              href="mailto:aprilsmith4026@gmail.com"
              className="text-sm font-medium text-zinc-600 transition hover:text-blue-700"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}