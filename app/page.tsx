import Link from "next/link";
import { Roboto } from "next/font/google";

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
          </div>

          {/* NEXT SECTION */}
          <div className="mt-10">
            <a
              href="#how-i-work"
              className="text-sm font-medium text-zinc-950 transition hover:text-blue-700"
            >
              How I Work ↓
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW I WORK
      ========================================================= */}
      <section
        id="how-i-work"
        className="flex min-h-screen items-center bg-black text-white"
      >
        <div className="mx-auto w-full max-w-6xl px-8 py-12">

          {/* SECTION INTRO */}
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
            How I Work
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            I turn what I learn into knowledge other people can use.
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
            When the answer is not already documented, I work through the
            product or process until I understand it, capture what I learn,
            and turn that knowledge into something others can use.
          </p>

          {/* FOUR-STEP GRID */}
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {/* DISCOVER */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
              <h3 className="text-xl font-bold">
                Discover
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                I start with the information available. When documentation is
                incomplete, I test, validate, and retrace the process until I
                understand how it actually works.
              </p>
            </div>

            {/* DOCUMENT */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
              <h3 className="text-xl font-bold">
                Document
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                I capture what I learn as I go, building reusable process
                documentation, workflows, and SOPs so the knowledge is
                available when it is needed again.
              </p>
            </div>

            {/* TRANSLATE */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
              <h3 className="text-xl font-bold">
                Translate
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                I adapt that knowledge for technical teams, managers,
                stakeholders, and end users so each audience has the context
                they need to move forward.
              </p>
            </div>

            {/* ENABLE */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
              <h3 className="text-xl font-bold">
                Enable
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                I reuse that knowledge to support implementation,
                troubleshooting, questions, and training so others can
                successfully use and support the solution.
              </p>
            </div>
          </div>

          {/* BACKGROUND */}
          <div className="mt-12 border-t border-zinc-800 pt-8">
            <p className="max-w-4xl text-xl leading-8 text-zinc-300">
              My background spans implementation, integration, EDI operations,
              workflow analysis, and automation. I&apos;m at my best when a
              problem crosses the line between business operations and
              technology and someone needs to make the pieces fit.
            </p>
          </div>

          {/* CASE STUDY LINKS */}
          <div className="mt-12 border-t border-zinc-800 pt-8">
            <p className="text-xl font-bold text-white">
              Case Studies
            </p>

            <div className="mt-4 flex flex-col gap-2">
              <Link
                href="/work/edi-migration"
                className="text-lg font-normal leading-7 text-sky-400 transition hover:text-sky-300"
              >
                EDI Integration Migration After an Acquisition
              </Link>

              <Link
                href="/work/edi-onboarding"
                className="text-lg font-normal leading-7 text-sky-400 transition hover:text-sky-300"
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