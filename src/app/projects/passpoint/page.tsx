import Link from "next/link";
import Image from "next/image";
import { BrandLogo } from "../../components/BrandLogo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PassPoint — Café Management System — InkFusionLabs",
  description:
    "A real-time café management system for tickets, staff roles, and day-to-day operations. Built by InkFusionLabs.",
};

export default function PassPointPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#0b1220_0%,#0a0f1a_100%)] text-white font-sans relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(229,9,20,0.06),transparent_50%)]" />

      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0b1220]/95 backdrop-blur-md border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <BrandLogo variant="nav" />
          <Link
            href="/#work"
            className="text-sm font-medium text-gray-300 hover:text-red-400 transition-colors"
          >
            ← Back to our work
          </Link>
        </div>
      </nav>

      <main className="relative z-10 pt-32 pb-16 px-4 max-w-4xl mx-auto">
        <article>
          {/* Hero */}
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/20 text-red-400 text-sm rounded-full mb-6">
              <span aria-hidden="true">☕️</span>
              Café management system
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              PassPoint — Café Management System
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              A real-time system built to streamline café operations, from order flow to kitchen coordination.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/passpoint"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-red-700 transition-all"
              >
                View system
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </header>

          {/* Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
            <p className="text-gray-300 leading-relaxed">
              PassPoint is a full-stack café and venue management platform designed to handle tickets, staff roles, and
              real-time operations. It brings together ordering, preparation, and service so the team can see what&apos;s
              happening at a glance.
            </p>
          </section>

          {/* The problem */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">The problem</h2>
            <p className="text-gray-300 leading-relaxed">
              Many cafés rely on a mix of paper tickets, ad‑hoc calls to the kitchen, and EPOS screens that don&apos;t tell the
              whole story. During busy periods this leads to orders backing up, drinks and food going out of sync, and staff
              guessing what should be worked on next.
            </p>
          </section>

          {/* The solution */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">The solution</h2>
            <p className="text-gray-300 leading-relaxed">
              PassPoint introduces a clear, real-time workflow with dedicated interfaces for baristas and kitchen staff, plus
              an admin layer for full control. Tickets move through defined states, staff see exactly what&apos;s waiting and
              what&apos;s in progress, and managers can adjust roles, menus, and configuration without touching the code.
            </p>
          </section>

          {/* Key features */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Key features</h2>
            <div className="grid md:grid-cols-2 gap-4 text-gray-300">
              <div className="p-4 rounded-xl bg-gray-900/60 border border-gray-700/60">
                <h3 className="font-semibold text-white mb-1">Real-time ticket updates</h3>
                <p className="text-sm text-gray-400">
                  Orders move through clear states so everyone can see what&apos;s just come in, what&apos;s being made, and what&apos;s ready.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-gray-900/60 border border-gray-700/60">
                <h3 className="font-semibold text-white mb-1">Barista and kitchen dashboards</h3>
                <p className="text-sm text-gray-400">
                  Dedicated screens tailored to each station, focused on the information and actions they need most.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-gray-900/60 border border-gray-700/60">
                <h3 className="font-semibold text-white mb-1">Role-based staff access</h3>
                <p className="text-sm text-gray-400">
                  Staff accounts with roles and permissions so people only see the parts of the system relevant to their job.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-gray-900/60 border border-gray-700/60">
                <h3 className="font-semibold text-white mb-1">Admin control panel</h3>
                <p className="text-sm text-gray-400">
                  An admin view for configuring stations, managing users, and reviewing how the system is being used day to day.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-gray-900/60 border border-gray-700/60 md:col-span-2">
                <h3 className="font-semibold text-white mb-1">EPOS integration capability</h3>
                <p className="text-sm text-gray-400">
                  Designed with space for integrating with existing EPOS systems so orders can flow in automatically.
                </p>
              </div>
            </div>
          </section>

          {/* Screenshots */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Screenshots</h2>
            <div className="space-y-4">
              <div className="aspect-video rounded-2xl overflow-hidden border border-red-500/20 bg-gray-900/60 relative">
                <Image
                  src="/PassPoint.png"
                  alt="PassPoint barista dashboard"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>
              {/* Additional screenshots can be added here when available */}
            </div>
          </section>

          {/* Tech stack */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Tech stack</h2>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">—</span>
                Next.js
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">—</span>
                Firebase Authentication
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">—</span>
                Supabase (PostgreSQL + Realtime)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">—</span>
                TypeScript
              </li>
            </ul>
          </section>

          {/* Outcome */}
          <section className="pt-8 border-t border-gray-700/50">
            <h2 className="text-2xl font-bold text-white mb-4">Outcome</h2>
            <p className="text-gray-300 leading-relaxed">
              PassPoint is in active use in a live café environment. Staff have better visibility over orders, delays are
              reduced, and the handoff between barista and kitchen runs more smoothly.
            </p>
          </section>
        </article>
      </main>

      <footer className="text-center py-8 text-gray-400 text-sm">
        <span>&copy; {new Date().getFullYear()} InkFusionLabs</span>
      </footer>
    </div>
  );
}

