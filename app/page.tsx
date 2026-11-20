import Link from "next/link";
import { Roboto } from "next/font/google";

const responsibilities = [
  {
    "responsibility": "Process Discovery",
    "description": "Analyzed and documented existing workflows, dependencies, and areas of inefficiency.",
    "projects": [
      {
        "title": "EDI Operations Process Analysis & Workflow Optimization",
        "href": "/work/edi-operations#current-future-state"
      },
      {
        "title": "Automating an EDI Onboarding Workflow",
        "href": "/work/edi-onboarding#workflow-documentation"
      },
      {
        "title": "EDI Shared Inbox Consolidation",
        "href": "/work/shared-inbox#project-overview"
      }
    ]
  },
  {
    "responsibility": "Requirements Gathering",
    "description": "Identified business rules, data needs, decision points, and technical requirements.",
    "projects": [
      {
        "title": "Automating an EDI Onboarding Workflow",
        "href": "/work/edi-onboarding#requirements"
      },
      {
        "title": "EDI Shared Inbox Consolidation",
        "href": "/work/shared-inbox#coordinating-change"
      }
    ]
  },
  {
    "responsibility": "Solution Design",
    "description": "Collaborated on practical approaches to technical constraints and redesigned workflows.",
    "projects": [
      {
        "title": "Automating an EDI Onboarding Workflow",
        "href": "/work/edi-onboarding#supporting-build"
      },
      {
        "title": "EDI Operations Process Analysis & Workflow Optimization",
        "href": "/work/edi-operations#current-future-state"
      },
      {
        "title": "EDI Shared Inbox Consolidation",
        "href": "/work/shared-inbox#shared-workflow"
      }
    ]
  },
  {
    "responsibility": "Data Analysis",
    "description": "Used data queries, operational records, and reporting tools to investigate issues and support decisions.",
    "projects": [
      {
        "title": "Automating an EDI Onboarding Workflow",
        "href": "/work/edi-onboarding#sql-queries"
      },
      {
        "title": "EDI Operations Process Analysis & Workflow Optimization",
        "href": "/work/edi-operations#backlog-analysis"
      },
      {
        "title": "EDI Shared Inbox Consolidation",
        "href": "/work/shared-inbox#measuring-work"
      }
    ]
  },
  {
    "responsibility": "Development Collaboration",
    "description": "Worked directly with technical teams to clarify requirements, resolve gaps, and support implementation.",
    "projects": [
      {
        "title": "Automating an EDI Onboarding Workflow",
        "href": "/work/edi-onboarding#supporting-build"
      },
      {
        "title": "EDI Shared Inbox Consolidation",
        "href": "/work/shared-inbox#coordinating-change"
      }
    ]
  },
  {
    "responsibility": "Workflow Automation",
    "description": "Reduced repetitive steps through automation, reusable tools, and process changes.",
    "projects": [
      {
        "title": "Automating an EDI Onboarding Workflow",
        "href": "/work/edi-onboarding#workflow-change"
      },
      {
        "title": "EDI Operations Process Analysis & Workflow Optimization",
        "href": "/work/edi-operations#vba-automation"
      },
      {
        "title": "EDI Integration Migration After an Acquisition",
        "href": "/work/edi-migration#automating-tasks"
      }
    ]
  },
  {
    "responsibility": "Testing & Validation",
    "description": "Verified data, configurations, and workflow results against expected business outcomes.",
    "projects": [
      {
        "title": "Automating an EDI Onboarding Workflow",
        "href": "/work/edi-onboarding#testing-validation"
      },
      {
        "title": "EDI Integration Migration After an Acquisition",
        "href": "/work/edi-migration#integration-testing"
      },
      {
        "title": "EDI Operations Process Analysis & Workflow Optimization",
        "href": "/work/edi-operations#backlog-analysis"
      }
    ]
  },
  {
    "responsibility": "Implementation Planning",
    "description": "Organized project activities, tracked dependencies, and coordinated production readiness.",
    "projects": [
      {
        "title": "EDI Integration Migration After an Acquisition",
        "href": "/work/edi-migration#project-coordination"
      },
      {
        "title": "Automating an EDI Onboarding Workflow",
        "href": "/work/edi-onboarding#implementation-prep"
      }
    ]
  },
  {
    "responsibility": "Stakeholder Coordination",
    "description": "Connected business teams, technical teams, and partners to keep work moving.",
    "projects": [
      {
        "title": "EDI Integration Migration After an Acquisition",
        "href": "/work/edi-migration#project-coordination"
      },
      {
        "title": "EDI Shared Inbox Consolidation",
        "href": "/work/shared-inbox#coordinating-change"
      }
    ]
  },
  {
    "responsibility": "Reporting & Monitoring",
    "description": "Built tracking and reporting to make progress, backlogs, and operational performance visible.",
    "projects": [
      {
        "title": "EDI Operations Process Analysis & Workflow Optimization",
        "href": "/work/edi-operations#jira-reporting"
      },
      {
        "title": "EDI Integration Migration After an Acquisition",
        "href": "/work/edi-migration#progress-tracking"
      }
    ]
  },
  {
    "responsibility": "Documentation & Training",
    "description": "Created reusable process guidance and helped teams adopt updated workflows.",
    "projects": [
      {
        "title": "EDI Shared Inbox Consolidation",
        "href": "/work/shared-inbox#team-adoption"
      },
      {
        "title": "Automating an EDI Onboarding Workflow",
        "href": "/work/edi-onboarding#workflow-documentation"
      },
      {
        "title": "EDI Integration Migration After an Acquisition",
        "href": "/work/edi-migration#project-coordination"
      }
    ]
  }
];



const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function Home() {
  return (
    <main className={`${roboto.className} bg-black text-white`}>

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center px-8 py-16">
        <div className="w-full">

          {/* HERO CONTENT + CASE STUDIES */}
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start">

            {/* LEFT SIDE */}
            <div className="max-w-4xl">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
                Implementation • Integration • Automation
              </p>

              <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
                April Smith
              </h1>

              <h2 className="mt-6 max-w-3xl text-3xl font-semibold leading-tight text-zinc-200 sm:text-4xl">
                I turn complex operational processes into clear, scalable
                technology solutions.
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
                I translate business needs into requirements, workflows, and
                solutions technical teams can build and users can adopt.
              </p>

              {/* CONTACT LINKS */}
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-zinc-300">
                <a
                  href="/April_D_Smith_Resume_2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-sky-400"
                >
                  Resume
                </a>

                <a
                  href="https://www.linkedin.com/in/april-d-smith-5230aa46/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-sky-400"
                >
                  LinkedIn
                </a>

                <a
                  href="mailto:aprilsmith4026@gmail.com"
                  className="transition hover:text-sky-400"
                >
                  Email
                </a>
              </div>
            </div>

            {/* RIGHT SIDE — CASE STUDIES */}
            <aside className="lg:mt-16">
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
              <Link
                href="/work/edi-operations"
                className="text-base font-normal leading-6 text-sky-400 transition hover:text-sky-300"
              >
                EDI Operations Process Analysis &amp; Workflow Optimization
              </Link>
              <Link
                href="/work/shared-inbox"
                className="text-base font-normal leading-6 text-sky-400 transition hover:text-sky-300"
              >
                EDI Shared Inbox Consolidation
              </Link>
              </div>
            </aside>


          </div>

          {/* NEXT SECTION */}
          <div className="mt-12">
            <a
              href="#selected-work"
              className="text-sm font-medium text-white transition hover:text-sky-400"
            >
              View Selected Work ↓
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          SELECTED WORK
      ========================================================= */}
      <section
        id="selected-work"
        className="bg-zinc-50 text-zinc-950"
      >
        <div className="mx-auto w-full max-w-6xl px-8 py-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
            Selected Work
          </p>

          <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Turning operational complexity into solutions that work.
          </h2>

          {/* PROJECTS */}
          <div className="mt-8 grid items-start gap-6 lg:grid-cols-2">

            {/* MIGRATION PROJECT */}
            <article className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                Integration Migration
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                EDI Integration Migration After an Acquisition
              </h3>

              <p className="mt-4 text-lg leading-7 text-zinc-600">
                Organizing, automating, and coordinating an EDI migration from
                planning through production.
              </p>

              {/* METRICS */}
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-blue-50 p-4">
                  <p className="text-4xl font-bold text-blue-700">
                    18 months
                  </p>

                  <p className="mt-1 font-medium text-zinc-700">
                    Ahead of the original timeline
                  </p>
                </div>

                <div className="rounded-2xl bg-zinc-100 p-5">
                  <p className="text-4xl font-bold text-zinc-800">
                    90%+
                  </p>

                  <p className="mt-1 font-medium text-zinc-700">
                    Of active EDI traffic migrated
                  </p>
                </div>
              </div>

              {/* CASE STUDY LINK */}
              <div className="mt-4">
                <Link
                  href="/work/edi-migration"
                  className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 transition hover:text-blue-900"
                >
                  Read case study
                </Link>
              </div>
            </article>

            {/* ONBOARDING PROJECT */}
            <article className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                Workflow Automation
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                Automating an EDI Onboarding Workflow
              </h3>

              <p className="mt-4 text-lg leading-7 text-zinc-600">
                Translating operational knowledge, decision points, and
                exceptions into requirements developers could use to build
                automation rapidly.
              </p>

              {/* METRICS */}
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-blue-50 p-4">
                  <p className="text-4xl font-bold text-blue-700">
                    100%
                  </p>

                  <p className="mt-1 font-medium text-zinc-700">
                    Onboarding initiation automated
                  </p>
                </div>

                <div className="rounded-2xl bg-emerald-50 p-5">
                  <p className="text-4xl font-bold text-emerald-700">
                    ~15 min
                  </p>

                  <p className="mt-1 font-medium text-zinc-700">
                    Manual work saved per request
                  </p>
                </div>
              </div>

              {/* CASE STUDY LINK */}
              <div className="mt-4">
                <Link
                  href="/work/edi-onboarding"
                  className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 transition hover:text-blue-900"
                >
                  Read case study
                </Link>
              </div>
            </article>
            {/* EDI OPERATIONS PROCESS ANALYSIS */}
            <article className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                Process Analysis &amp; Optimization
              </p>
              <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                EDI Operations Process Analysis &amp; Workflow Optimization
              </h3>
              <p className="mt-4 text-lg leading-7 text-zinc-600">
                Mapping current and future workflows, reducing manual work, and validating Jira backlog data against B2B activity.
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-blue-50 p-4">
                  <p className="text-4xl font-bold text-blue-700">50%</p>
                  <p className="mt-1 font-medium text-zinc-700">Less time for one manual task</p>
                </div>
                <div className="rounded-2xl bg-zinc-100 p-5">
                  <p className="text-4xl font-bold text-zinc-800">1,100+</p>
                  <p className="mt-1 font-medium text-zinc-700">Tickets analyzed</p>
                </div>
              </div>
              <div className="mt-4">
                <Link href="/work/edi-operations" className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 transition hover:text-blue-900">
                  Read case study
                </Link>
              </div>
            </article>
            {/* SHARED INBOX PROJECT */}
            <article className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                Process Improvement
              </p>
              <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                EDI Shared Inbox Consolidation
              </h3>
              <p className="mt-4 text-lg leading-7 text-zinc-600">
                Coordinating with IT to replace a long-established email workflow, reduce duplicate work, and give the team a shared view of completed messages.
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-blue-50 p-4">
                  <p className="text-4xl font-bold text-blue-700">5</p>
                  <p className="mt-1 font-medium text-zinc-700">Individual inboxes replaced</p>
                </div>
                <div className="rounded-2xl bg-zinc-100 p-5">
                  <p className="text-4xl font-bold text-zinc-800">850k+</p>
                  <p className="mt-1 font-medium text-zinc-700">Estimated annual email actions in the old workflow</p>
                </div>
              </div>
              <div className="mt-4">
                <Link href="/work/shared-inbox" className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 transition hover:text-blue-900">
                  Read case study
                </Link>
              </div>
            </article>
          </div>

          {/* NEXT SECTION */}
          <div className="mt-10">
            <a
              href="#responsibilities-projects"
              className="text-sm font-medium text-zinc-950 transition hover:text-blue-700"
            >
              Responsibilities & Projects ↓
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          RESPONSIBILITIES & PROJECTS
      ========================================================= */}
      <section id="responsibilities-projects" className="bg-black text-white">
        <div className="mx-auto w-full max-w-6xl px-8 py-16 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
            Responsibilities &amp; Projects
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Experience you can explore.
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
            Select a project to see where I applied each responsibility.
          </p>

          {/* Three columns on desktop, stacked responsibility groups on mobile. */}
          <div className="mt-10 border-b border-zinc-800">
            <div className="hidden grid-cols-12 gap-6 border-b border-zinc-600 pb-4 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-400 md:grid">
              <div className="col-span-3">Project Responsibility</div>
              <div className="col-span-5">What I Actually Did</div>
              <div className="col-span-4">Projects</div>
            </div>
            {responsibilities.map(({ responsibility, description, projects }) => (
              <div
                key={responsibility}
                className="grid gap-3 border-t border-zinc-800 py-6 first:border-t-0 md:grid-cols-12 md:gap-6 md:py-7"
              >
                <h3 className="text-base font-semibold leading-6 text-white md:col-span-3">
                  {responsibility}
                </h3>
                <p className="text-sm leading-6 text-zinc-300 md:col-span-5">
                  {description}
                </p>
                <div className="flex flex-col items-start gap-2 md:col-span-4">
                  {projects.map(({ title, href }) => (
                    <Link
                      key={href}
                      href={href}
                      className="text-sm leading-6 text-sky-400 underline-offset-4 transition hover:text-sky-300 hover:underline focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                    >
                      {title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="border-t border-zinc-800 bg-black text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-8 py-10 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <p className="font-bold">
              April Smith
            </p>

            <p className="mt-1 text-sm text-zinc-300">
              Implementation • Integration • Automation
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-zinc-300">
            <a
              href="/April_D_Smith_Resume_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-sky-400"
            >
              Resume
            </a>

            <a
              href="https://www.linkedin.com/in/april-d-smith-5230aa46/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-sky-400"
            >
              LinkedIn
            </a>

            <a
              href="mailto:aprilsmith4026@gmail.com"
              className="transition hover:text-sky-400"
            >
              Email
            </a>
          </div>

        </div>
      </footer>
    </main>
  );
}