import Link from "next/link";
import Image from "next/image";
import { BrandLogo } from "../../components/BrandLogo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LettersBeyond — InkFusionLabs",
  description: "A web tool that helps people write personalised letters using guided prompts. Built by InkFusionLabs.",
};

export default function LettersBeyondPage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 text-amber-400 text-sm rounded-full mb-6">
              <span aria-hidden="true">✉️</span>
              Web app
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              LettersBeyond
            </h1>
            <p className="text-xl text-gray-300">
              A web tool that helps people write personalised letters using guided prompts.
            </p>
          </header>

          {/* Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
            <p className="text-gray-300 leading-relaxed">
              LettersBeyond is a focused writing space for the messages that matter most. It helps you turn unfinished
              drafts and unsent notes into thoughtful letters you&apos;re glad you finally wrote.
            </p>
          </section>

          {/* The problem */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">The problem</h2>
            <p className="text-gray-300 leading-relaxed">
              When you need to say something important, a blank page can feel intimidating. You know what you want to say,
              but everything you write sounds either too formal, too casual, or not quite honest enough. It&apos;s easy to
              put it off, send something short, or say nothing at all.
            </p>
          </section>

          {/* The solution */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">The solution</h2>
            <p className="text-gray-300 leading-relaxed">
              LettersBeyond gives you gentle structure when you need it most. Instead of facing an empty box, you answer
              a few calm, human questions about the person you&apos;re writing to and why. From those reflections, the app
              creates a full first draft that sounds like you &mdash; something you can adjust, cut back, or build on until
              it feels exactly right.
            </p>
          </section>

          {/* Key features */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Key features</h2>
            <div className="grid md:grid-cols-2 gap-4 text-gray-300">
              <div className="p-4 rounded-xl bg-gray-900/60 border border-gray-700/60">
                <h3 className="font-semibold text-white mb-1">Guided prompts, not templates</h3>
                <p className="text-sm text-gray-400">
                  Short, simple questions draw out your memories, feelings, and reasons for writing, instead of dropping you
                  into a pre-written script.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-gray-900/60 border border-gray-700/60">
                <h3 className="font-semibold text-white mb-1">Personalised drafts</h3>
                <p className="text-sm text-gray-400">
                  Your answers are shaped into a full letter that sounds warm and natural, ready for you to edit into your
                  own voice.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-gray-900/60 border border-gray-700/60">
                <h3 className="font-semibold text-white mb-1">Calm writing environment</h3>
                <p className="text-sm text-gray-400">
                  A quiet interface with no clutter, designed to help you stay with your thoughts and the person you&apos;re
                  writing to.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-gray-900/60 border border-gray-700/60">
                <h3 className="font-semibold text-white mb-1">Space to reread and refine</h3>
                <p className="text-sm text-gray-400">
                  Take your time, make small edits, and come back to your letter until you&apos;re happy to put your name
                  to it.
                </p>
              </div>
            </div>
          </section>

          {/* Screenshots */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Screenshots</h2>
            <div className="space-y-4">
              <div className="aspect-video rounded-2xl overflow-hidden border border-amber-500/20 bg-gray-900/60 relative">
                <Image
                  src="/assets/new_lb.png"
                  alt="LettersBeyond app interface"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>
            </div>
          </section>

          {/* Who it's for */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Who it&apos;s for</h2>
            <p className="text-gray-300 leading-relaxed">
              LettersBeyond is for anyone who wants to go beyond a quick message &mdash; whether you&apos;re saying thank
              you, I&apos;m sorry, I miss you, I love you, or simply that someone matters more than they realise.
            </p>
          </section>

          {/* Outcome-style closing */}
          <section className="pt-8 border-t border-gray-700/50">
            <h2 className="text-2xl font-bold text-white mb-4">Start your letter</h2>
            <p className="text-gray-300 leading-relaxed">
              There&apos;s probably at least one person you&apos;ve been meaning to write to. LettersBeyond makes it a
              little easier to finally do it &mdash; with words that feel honest, thoughtful, and genuinely yours.
            </p>
          </section>

          <section className="pt-8 border-t border-gray-700/50 flex flex-wrap gap-4">
            <a
              href="https://www.lettersbeyond.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-red-700 transition-all"
            >
              Visit LettersBeyond
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
