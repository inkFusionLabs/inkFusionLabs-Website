"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight mb-4 text-red-600">inkFusionLabs</h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-200">
          We are a software company passionate about building innovative, high-quality apps for web, mobile, and beyond.
        </p>
      </header>
      <section className="mb-16 text-center">
        <h2 className="text-2xl font-bold mb-2 text-red-500">What We Do</h2>
        <p className="max-w-xl mx-auto text-gray-300">
          From idea to launch, we design, develop, and deliver custom software solutions that empower businesses and delight users. Our expertise spans full-stack web development, mobile apps, and cloud services.
        </p>
      </section>
      <footer className="mt-auto text-red-700 text-sm">
        &copy; {new Date().getFullYear()} inkFusionLabs. All rights reserved.
      </footer>
    </main>
  );
}
