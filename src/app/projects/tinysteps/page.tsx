import Link from "next/link";
import Image from "next/image";
import { BrandLogo } from "../../components/BrandLogo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TinySteps — InkFusionLabs",
  description: "A digital platform for NICU dads to track progress, reflect, and stay connected. Built by InkFusionLabs.",
};

export default function TinyStepsPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#0b1220_0%,#0a0f1a_100%)] text-white font-sans relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(229,9,20,0.06),transparent_50%)]" />

      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0b1220]/95 backdrop-blur-md border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <BrandLogo variant="nav" />
          <Link href="/#work" className="text-sm font-medium text-gray-300 hover:text-red-400 transition-colors">
            ← Back to our work
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
              A digital platform for NICU dads to track progress, reflect, and stay connected.
            </p>
          </header>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
            <p className="text-gray-300 leading-relaxed">
              TinySteps helps NICU dads track progress, reflect, and stay connected. It focuses on small steps and
              reflection, with a calm, focused experience designed for a difficult journey.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Key features</h2>
            <div className="grid md:grid-cols-2 gap-4 text-gray-300">
              <div className="p-4 rounded-xl bg-gray-900/60 border border-gray-700/60">
                <h3 className="font-semibold text-white mb-1">Progress that feels manageable</h3>
                <p className="text-sm text-gray-400">
                  Log the small, important moments so you can see how far you&apos;ve come, even on the hardest days.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-gray-900/60 border border-gray-700/60">
                <h3 className="font-semibold text-white mb-1">Space to process emotions</h3>
                <p className="text-sm text-gray-400">
                  Gentle prompts help you check in with how you&apos;re really doing, without turning it into homework.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-gray-900/60 border border-gray-700/60">
                <h3 className="font-semibold text-white mb-1">Calm, focused design</h3>
                <p className="text-sm text-gray-400">
                  A quiet interface made for late nights, long waits, and everything in between.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-gray-900/60 border border-gray-700/60">
                <h3 className="font-semibold text-white mb-1">Built from lived experience</h3>
                <p className="text-sm text-gray-400">
                  Created by someone who&apos;s been through NICU, with details that reflect real life on the ward.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Screenshots</h2>
            <div className="space-y-4">
              <div className="aspect-video rounded-2xl overflow-hidden border border-emerald-500/20 bg-gray-900/60 relative">
                <Image
                  src="/TinySteps.icon/Assets/AppIcon_1024x1024.png"
                  alt="TinySteps NICU Dads app interface"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-3">
              This is for the dads no one checks on.
            </h2>
            <div className="max-w-2xl space-y-4">
              <p className="text-gray-300 leading-relaxed">
                When your baby is in NICU, everyone asks how mum is doing — but rarely how you are. You&apos;re expected
                to stay strong, hold it together, and just get on with it.
              </p>
              <p className="text-gray-300 leading-relaxed">
                But the truth is, it&apos;s overwhelming, confusing, and isolating.
              </p>
              <p className="text-gray-300 leading-relaxed">
                TinySteps was built to give dads something they actually need: clear guidance, emotional support, and a
                way to take things one small step at a time.
              </p>
              <a
                href="https://tinystepsnicudads.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-red-300 transition-colors"
              >
                Read more →
              </a>
            </div>
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
              ← Back to our work
            </Link>
            <a
              href="mailto:contact@inkfusionlabs.co.uk?subject=Free%20website%20review"
              className="inline-flex items-center gap-2 px-6 py-3 text-gray-400 font-medium hover:text-red-400 transition-colors"
            >
              Get a free website review
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
