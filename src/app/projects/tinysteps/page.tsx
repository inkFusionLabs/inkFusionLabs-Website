import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TinySteps — InkFusionLabs",
  description: "A supportive digital platform designed to help NICU dads track progress, reflect, and stay connected during an intense and emotional journey.",
};

export default function TinyStepsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white font-sans relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(229,9,20,0.1),transparent_50%)]" />

      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-700/50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-white">InkFusionLabs</span>
          </Link>
          <Link href="/#work" className="text-sm font-medium text-gray-300 hover:text-red-400 transition-colors">
            ← Back to work
          </Link>
        </div>
      </nav>

      <main className="relative z-10 pt-32 pb-16 px-4 max-w-4xl mx-auto">
        <article>
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 text-emerald-400 text-sm rounded-full mb-6">
              <span aria-hidden="true">🌱</span>
              Mobile app
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              TinySteps
            </h1>
            <p className="text-xl text-gray-300">
              A supportive digital platform designed to help NICU dads track progress, reflect, and stay connected during an intense and emotional journey.
            </p>
          </header>

          {/* Visual placeholder - TODO: Replace with real screenshots */}
          <section className="mb-12">
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-emerald-900/40 to-emerald-800/20 border border-emerald-500/20 flex items-center justify-center">
              <span className="text-6xl" aria-hidden="true">🌱</span>
            </div>
            <p className="text-center text-sm text-gray-500 mt-3">App interface placeholder — add real screenshots here</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              TinySteps is a purpose-driven digital platform created to support fathers navigating life with a baby in neonatal intensive care. 
              The product focuses on emotional grounding, progress tracking, and reflection — helping users focus on small, meaningful steps during an overwhelming time.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Designed with empathy and clarity at its core, TinySteps prioritises simplicity, calm visual design, and ease of use. 
              The experience encourages reflection and consistency without adding pressure, providing a gentle digital companion for parents when it matters most.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Key features</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">—</span>
                Progress tracking and emotional reflection
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">—</span>
                Calm, focused design for a difficult journey
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">—</span>
                Small, meaningful steps without added pressure
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">—</span>
                Stay connected and grounded during NICU stays
              </li>
            </ul>
          </section>

          <section className="pt-8 border-t border-gray-700/50 flex flex-wrap gap-4">
            <a
              href="https://tinystepsnicudads.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-red-700 transition-all"
            >
              Visit TinySteps
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-600 text-gray-300 font-semibold rounded-xl hover:border-red-500 hover:text-red-400 transition-all"
            >
              ← Back to work
            </Link>
            <a
              href="mailto:John.Constable@inkfusionlabs.co.uk"
              className="inline-flex items-center gap-2 px-6 py-3 text-gray-400 font-medium hover:text-red-400 transition-colors"
            >
              Get in touch
            </a>
          </section>
        </article>
      </main>

      <footer className="text-center py-8 text-gray-400 text-sm">
        <span>&copy; {new Date().getFullYear()} InkFusionLabs</span>
      </footer>
    </div>
  );
}
