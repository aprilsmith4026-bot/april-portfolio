import Link from "next/link";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });
const studies = [
  { href: "/work/edi-migration", title: "EDI Integration Migration After an Acquisition" },
  { href: "/work/edi-onboarding", title: "Automating an EDI Onboarding Workflow" },
  { href: "/work/edi-operations", title: "EDI Operations Process Analysis & Workflow Optimization" },
  { href: "/work/shared-inbox", title: "EDI Shared Inbox Consolidation" },
];
const lessons = [
  ["Longstanding doesn't mean efficient", "I was surprised that the team had worked this way for so long. Looking at the process as a whole helped me see how much time was going into the same emails."],
  ["Measure the problem", "Counting one month's messages gave me a way to show the scale of the problem rather than simply saying the team received too many notifications."],
  ["Simple changes can have technical dependencies", "A shared mailbox sounds straightforward, but IT had to account for a legacy configuration before we could make the transition."],
  ["Make it usable for the team", "Writing the SOP and demonstrating the process mattered. The change needed to work in people's daily routines, not just in the technical configuration."],
];
export default function SharedInboxCaseStudy() {
  return (
    <main className={`${roboto.className} min-h-screen bg-white text-zinc-950`}>
      <header className="bg-black text-white">
        <div className="mx-auto max-w-6xl px-8 py-12 sm:py-16">
          <Link href="/#selected-work" className="text-sm font-medium text-zinc-400 transition hover:text-white">← Back to Selected Work</Link>
          <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-400">Case Study</p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">EDI Shared Inbox Consolidation</h1>
              <p className="mt-5 max-w-3xl text-xl leading-8 text-zinc-300">
                Replacing a long-established email workflow so the team could spend less time handling duplicates and better track shared work.
              </p>
            </div>
            <aside className="lg:mt-10">
              <p className="text-xl font-bold">Case Studies</p>
              <div className="mt-4 flex flex-col gap-2">
                {studies.map(s => <Link key={s.href} href={s.href} className="text-base font-normal leading-6 text-sky-400 transition hover:text-sky-300">{s.title}</Link>)}
              </div>
            </aside>
          </div>
          <div className="mt-12 grid gap-6 border-t border-zinc-800 pt-8 sm:grid-cols-3">
            <div><p className="text-3xl font-bold">5</p><p className="mt-2 text-sm text-zinc-400">People receiving the same group emails</p></div>
            <div><p className="text-3xl font-bold">850,000+</p><p className="mt-2 text-sm text-zinc-400">Estimated annual email-handling actions before consolidation</p></div>
            <div><p className="text-3xl font-bold">One inbox</p><p className="mt-2 text-sm text-zinc-400">Shared workflow with a Completed folder</p></div>
          </div>
        </div>
      </header>
      <section className="border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-8 py-16">
          <h2 className="text-3xl font-bold tracking-tight" id="project-overview">Project Overview</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <h3 className="text-lg font-bold text-blue-700">The problem</h3>
              <p className="mt-4 text-lg leading-8 text-zinc-700">A group email setup that had been in place for approximately 20 years delivered the same automated notices, errors, and group emails to five personal inboxes, including the manager's. We all had to deal with copies of the same messages, even when we weren't covering group email that day.</p>
              <p className="mt-4 text-lg leading-8 text-zinc-700">There was also no central way to see whether someone had replied. Sometimes two people worked on the same issue because they did not know it had been handled. We depended on each other to copy the team on replies.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-700">My role</h3>
              <p className="mt-4 text-lg leading-8 text-zinc-700">I recognized the inefficiency, measured the email volume, presented the idea to my manager, coordinated the requirements and transition with IT, organized the new mailbox, wrote an SOP, and demonstrated the workflow to the team.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-zinc-50">
        <div className="mx-auto max-w-6xl px-8 py-16">
          <h2 className="text-3xl font-bold tracking-tight" id="measuring-work">Measuring the Existing Work</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">I moved one month's automated messages from my personal inbox into a separate folder and marked them all unread so Outlook displayed a count. I multiplied that count by the five people who received the same messages, then by twelve to estimate annual volume.</p>
          <div className="mt-10 rounded-2xl border border-zinc-200 bg-white p-7">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">Baseline estimate</p>
            <p className="mt-3 text-4xl font-bold">850,000+ <span className="text-xl font-medium text-zinc-600">email actions per year</span></p>
            <p className="mt-3 max-w-3xl leading-7 text-zinc-600">This estimated how many copies the team collectively had to handle under the old setup. It was based on a one-month sample, not a time study or a verified dollar-savings calculation.</p>
          </div>
        </div>
      </section>
      <section className="border-y border-zinc-200">
        <div className="mx-auto max-w-6xl px-8 py-16">
          <h2 className="text-3xl font-bold tracking-tight" id="coordinating-change">Coordinating the Change</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-700">I presented the proposal to my manager and received approval. Then I explained the existing delivery setup to IT and provided the list of people who needed access.</p>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-700">The legacy address could not simply be converted into a shared mailbox. IT removed the team from the old distribution approach, left the original address with one designated person, and connected it to a new address that differed by one letter. IT handled the configuration so both addresses could continue to work.</p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ["Approval", "Presented the problem and proposed approach to my manager."],
              ["IT requirements", "Explained how the old email delivery worked and identified who needed access."],
              ["Transition", "Coordinated the operational change while IT configured the mailbox and addresses."],
            ].map(([heading,detail]) => (
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
          <h2 className="text-3xl font-bold tracking-tight" id="shared-workflow">A Shared Workflow</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">I created folders and rules to move automated messages away from the inbox so employees could focus on messages that needed attention. When an email was handled, it went into a Completed folder where everyone could see its status.</p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 bg-white p-7">
              <h3 className="text-xl font-bold">Before</h3>
              <ul className="mt-5 list-disc space-y-3 pl-5 leading-7 text-zinc-700">
                <li>Identical group emails in five personal inboxes</li>
                <li>Manual review and deletion of duplicate notifications</li>
                <li>Separate replies and no shared completed status</li>
                <li>Reliance on coworkers remembering to copy others</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-7">
              <h3 className="text-xl font-bold text-blue-700">After</h3>
              <ul className="mt-5 list-disc space-y-3 pl-5 leading-7 text-zinc-700">
                <li>Group messages delivered to a shared mailbox</li>
                <li>Rules and folders separating automated notifications</li>
                <li>Completed messages moved to a shared folder</li>
                <li>Employees checking group mail during assigned coverage days</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="border-y border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-8 py-16">
          <h2 className="text-3xl font-bold tracking-tight" id="team-adoption">Documentation &amp; Team Adoption</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-700">I wrote an SOP and demonstrated the new setup to the team. I showed everyone how to add the shared inbox in desktop Outlook and how to access it on the web.</p>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-700">The team continued using the shared inbox as its regular process. Each of us had assigned days to cover group email. When we weren't covering it, those emails no longer arrived in our personal inboxes, and we could focus on our other work.</p>
        </div>
      </section>
      <section className="bg-zinc-50">
        <div className="mx-auto max-w-6xl px-8 py-16">
          <h2 className="text-3xl font-bold tracking-tight">Results &amp; Impact</h2>
          <div className="mt-10 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {[
              ["Removed duplicate delivery", "Group notifications stopped going to five personal inboxes. Routine system messages were handled in one shared location."],
              ["Reduced overlapping effort", "Everyone could see whether a message had been handled by checking the shared Completed folder instead of relying on copied replies."],
              ["Protected time outside coverage", "Employees no longer had to sort through group email in their personal inboxes on days they weren't assigned to cover it."],
              ["Established a lasting process", "The shared inbox remained the team's regular workflow, supported by a written SOP and a team demonstration."],
            ].map(([heading,detail]) => (
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
            {lessons.map(([heading,detail]) => (
              <div key={heading} className="border-t border-zinc-300 pt-6">
                <h3 className="text-xl font-bold">{heading}</h3>
                <p className="mt-3 leading-7 text-zinc-700">{detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 border-t border-zinc-200 pt-10">
            <h3 className="text-xl font-bold">Skills used</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Current-State Analysis", "Workflow Design", "Requirements", "IT Coordination", "Stakeholder Communication", "Outlook", "Email Rules", "Data Analysis", "SOPs", "Training", "Change Adoption"].map(skill => <span key={skill} className="rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm text-zinc-700">{skill}</span>)}
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
              {studies.map(s => <Link key={s.href} href={s.href} className="text-base font-normal leading-6 text-blue-700 transition hover:text-blue-900">{s.title}</Link>)}
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
