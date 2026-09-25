import Link from "next/link";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function EdiMigrationCaseStudy() {
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
                EDI Integration Migration After an Acquisition
              </h1>

              <p className="mt-5 max-w-3xl text-xl leading-8 text-zinc-300">
                Organizing, automating, and coordinating an EDI migration from
                planning through production.
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
          <div className="mt-12 grid gap-6 border-t border-zinc-800 pt-8 sm:grid-cols-2">
            <div>
              <p className="text-3xl font-bold text-white">
                18 months
              </p>

              <p className="mt-2 text-sm text-zinc-400">
                Ahead of the original timeline
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-white">
                90%+
              </p>

              <p className="mt-2 text-sm text-zinc-400">
                Of active EDI traffic migrated
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* =========================================================
          THE CHALLENGE
      ========================================================= */}
      <section className="border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-8 py-16">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight">
              The Challenge
            </h2>

            <div className="mt-8 space-y-5 text-lg leading-8 text-zinc-700">
              <p>
                After an acquisition, the company needed to migrate existing
                EDI integrations into a new environment while continuing to
                support active integrations.
              </p>

              <p>
                Because of my Implementation experience, my manager asked how I
                would organize the migration. I suggested using a Kanban board
                and assigning one person to focus on the project rather than
                spreading the work across the team.
              </p>

              <p>
                I spent a weekend reviewing the process, looking for ways to
                organize the work and automate repetitive tasks. I brought my
                approach to my manager, and she agreed to move forward with it.
                I was then pulled from my daily tasks to focus on the migration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW I APPROACHED THE WORK
      ========================================================= */}
      <section className="bg-zinc-50">
        <div className="mx-auto max-w-6xl px-8 py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight">
              How I Approached the Work
            </h2>

            <p className="mt-4 text-lg leading-8 text-zinc-600">
              I organized the work around four areas: tracking progress,
              reducing repetitive work, testing integrations, and coordinating
              the people involved.
            </p>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 md:grid-cols-2">
            {/* ORGANIZE */}
            <div className="bg-white p-7">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                Organize
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Keep the work visible
              </h3>

              <p className="mt-3 leading-7 text-zinc-600">
                I tracked progress using spreadsheets, formulas, and charts and
                shared updates with the project team and stakeholders.
                Reporting became more frequent as we moved closer to
                completion.
              </p>
            </div>

            {/* AUTOMATE */}
            <div className="bg-white p-7">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                Automate
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Reduce repetitive work
              </h3>

              <p className="mt-3 leading-7 text-zinc-600">
                I reused and modified existing macro code for communication,
                data preparation, and file creation. I also created macros that
                used data I had already collected to prepare files for the
                integration process.
              </p>
            </div>

            {/* TEST */}
            <div className="bg-white p-7">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                Test
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Handle more troubleshooting directly
              </h3>

              <p className="mt-3 leading-7 text-zinc-600">
                I worked with team members to understand troubleshooting,
                tested connections with partners, worked through configuration
                issues, and confirmed integrations were working as expected
                before production moves.
              </p>
            </div>

            {/* COORDINATE */}
            <div className="bg-white p-7">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                Coordinate
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Keep the project moving
              </h3>

              <p className="mt-3 leading-7 text-zinc-600">
                I used Jira to track dependencies across the project team and
                stakeholders. I trained additional resources as they joined the
                project and coordinated production moves and follow-up support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          RESULT & TAKEAWAYS
      ========================================================= */}
      <section className="border-y border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-8 py-16">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight">
              The Result & Takeaways
            </h2>

            <p className="mt-6 text-xl leading-8 text-zinc-700">
              The migration was completed approximately{" "}
              <strong>18 months ahead of the original timeline</strong>,
              moving integrations representing more than{" "}
              <strong>90% of active EDI traffic</strong> into the new
              environment.
            </p>

            <p className="mt-5 text-lg leading-8 text-zinc-600">
              I documented the process throughout the project so the work could
              be repeated by others. After the migration, I met with my manager
              to review what worked and what we would change for future
              projects.
            </p>
          </div>

          {/* TAKEAWAYS */}
          <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
            <div className="border-t border-zinc-300 pt-6">
              <h3 className="text-xl font-bold">
                Sometimes the process needs to change
              </h3>

              <p className="mt-3 leading-7 text-zinc-700">
                When work isn't moving, the answer isn't always more people or
                more effort. Sometimes the process itself needs to change.
              </p>
            </div>

            <div className="border-t border-zinc-300 pt-6">
              <h3 className="text-xl font-bold">
                Helping the team matters to me
              </h3>

              <p className="mt-3 leading-7 text-zinc-700">
                One of the things I enjoyed most was taking on work I could
                handle so other team members had more time for work that needed
                their expertise.
              </p>
            </div>

            <div className="border-t border-zinc-300 pt-6">
              <h3 className="text-xl font-bold">
                Automation should have a purpose
              </h3>

              <p className="mt-3 leading-7 text-zinc-700">
                Automation became another way to help the team by reducing
                repetitive work and giving people more time for other
                priorities.
              </p>
            </div>

            <div className="border-t border-zinc-300 pt-6">
              <h3 className="text-xl font-bold">
                Understand the whole process
              </h3>

              <p className="mt-3 leading-7 text-zinc-700">
                I learned to look beyond individual tasks and understand how the
                pieces fit together, where I could help, and how process and
                technology could make the work easier.
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
                "EDI Integration",
                "Implementation",
                "Process Improvement",
                "Automation",
                "Excel",
                "VBA / Macros",
                "Jira",
                "Testing",
                "Troubleshooting",
                "Project Coordination",
                "Stakeholder Communication",
                "Training",
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