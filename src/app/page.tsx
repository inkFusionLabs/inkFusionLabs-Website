"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-inkblack via-gray-900 to-dark-900 text-white font-sans relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(229,9,20,0.1),transparent_50%)]"></div>
      
      {/* Particle effects */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900/90 backdrop-blur-md border-b border-gray-700/50" : "bg-transparent"
      }`}>
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white">InkFusionLabs</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {["home", "about", "freelancing", "projects", "skills", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-all duration-300 hover:text-red-400 ${
                    activeSection === section ? "text-red-400" : "text-gray-300"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
            <div className="md:hidden">
              <button className="text-gray-300 hover:text-red-400 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header id="home" className="flex flex-col items-center pt-32 pb-12 px-4 animate-fade-in">
          <div className="relative group mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl shadow-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-105 group-hover:shadow-red-500/25 card-hover">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight gradient-text mb-4 animate-slide-up">
            InkFusionLabs
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide text-center max-w-2xl animate-slide-up [animation-delay:200ms]">
            Crafting innovative tech solutions with precision and passion • Available for freelance projects
          </p>
          
          <div className="flex items-center gap-2 mt-6 text-gray-400 animate-slide-up [animation-delay:400ms]">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse-slow"></div>
            <span className="text-sm font-medium">Solo Creator • Modern Solutions</span>
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse-slow [animation-delay:1s]"></div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-slide-up [animation-delay:600ms]">
            <button 
              onClick={() => scrollToSection("freelancing")}
              className="px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-500/25 card-hover"
            >
              Hire Me
            </button>
            <button 
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 border border-gray-600 text-gray-300 font-semibold rounded-xl hover:border-red-500 hover:text-red-400 transition-all duration-300 card-hover"
            >
              View Projects
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center gap-12 w-full max-w-6xl mx-auto px-4 pb-16">
          {/* About Section */}
          <section id="about" className="w-full animate-slide-up [animation-delay:800ms]">
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 shadow-2xl hover:shadow-red-500/10 transition-all duration-500 card-hover">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-white">About</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    InkFusionLabs is a one-person tech company dedicated to building modern, impactful applications. 
                    With a passion for innovation and a focus on quality, every project is crafted to solve real-world 
                    problems and push the boundaries of technology.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    We believe in creating solutions that not only work flawlessly but also delight users with their 
                    elegance and efficiency. From concept to deployment, every detail is carefully considered to ensure 
                    the highest quality results.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-gray-700/50 rounded-xl card-hover">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Quality First</h3>
                      <p className="text-sm text-gray-400">Every project meets the highest standards</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-700/50 rounded-xl card-hover">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Innovation Driven</h3>
                      <p className="text-sm text-gray-400">Pushing boundaries with cutting-edge tech</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-700/50 rounded-xl card-hover">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Personal Touch</h3>
                      <p className="text-sm text-gray-400">Direct collaboration and attention to detail</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Freelancing Section */}
          <section id="freelancing" className="w-full animate-slide-up [animation-delay:1000ms]">
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 shadow-2xl hover:shadow-red-500/10 transition-all duration-500 card-hover">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h8a2 2 0 012 2z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-white">Freelancing Services</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Available for Hire</h3>
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    I&apos;m currently accepting new freelance projects and collaborations. Whether you need a complete web application, 
                    automation tools, or technical consulting, I&apos;m here to help bring your ideas to life.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-gray-700/50 rounded-xl card-hover">
                      <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Quick Turnaround</h4>
                        <p className="text-sm text-gray-400">Fast delivery without compromising quality</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-gray-700/50 rounded-xl card-hover">
                      <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Quality Guaranteed</h4>
                        <p className="text-sm text-gray-400">Thorough testing and documentation</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-gray-700/50 rounded-xl card-hover">
                      <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Ongoing Support</h4>
                        <p className="text-sm text-gray-400">Post-launch maintenance and updates</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Services & Pricing</h3>
                  <div className="space-y-4">
                    <div className="p-6 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-2xl border border-gray-600/50 card-hover">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-white">Web Development</h4>
                        <span className="text-red-400 font-semibold">£60-120/hr</span>
                      </div>
                      <p className="text-sm text-gray-300 mb-3">Custom web applications, e-commerce sites, and modern UI/UX</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded">React</span>
                        <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded">Next.js</span>
                        <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded">TypeScript</span>
                      </div>
                    </div>
                    
                    <div className="p-6 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-2xl border border-gray-600/50 card-hover">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-white">Automation & Scripts</h4>
                        <span className="text-red-400 font-semibold">£50-100/hr</span>
                      </div>
                      <p className="text-sm text-gray-300 mb-3">Process automation, data processing, and workflow optimization</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded">Python</span>
                        <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded">Node.js</span>
                        <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded">AWS</span>
                      </div>
                    </div>
                    
                    <div className="p-6 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-2xl border border-gray-600/50 card-hover">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-white">Technical Consulting</h4>
                        <span className="text-red-400 font-semibold">£80-160/hr</span>
                      </div>
                      <p className="text-sm text-gray-300 mb-3">Architecture review, code optimization, and technical guidance</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded">Architecture</span>
                        <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded">Optimization</span>
                        <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded">Strategy</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <a 
                  href="mailto:John.Constable@inkfusionlabs.co.uk?subject=Freelance Project Inquiry" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-500/25 card-hover"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Start Your Project
                </a>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="w-full animate-slide-up [animation-delay:1200ms]">
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 shadow-2xl hover:shadow-red-500/10 transition-all duration-500 card-hover">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-white">Skills & Technologies</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white mb-4">Frontend</h3>
                  <div className="space-y-3">
                    {["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"].map((skill) => (
                      <div key={skill} className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700/70 transition-colors card-hover">
                        <span className="text-gray-200">{skill}</span>
                        <div className="w-16 h-2 bg-gray-600 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full skill-bar" style={{ width: `${Math.random() * 40 + 60}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white mb-4">Backend</h3>
                  <div className="space-y-3">
                    {["Node.js", "Python", "PostgreSQL", "MongoDB", "AWS"].map((skill) => (
                      <div key={skill} className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700/70 transition-colors card-hover">
                        <span className="text-gray-200">{skill}</span>
                        <div className="w-16 h-2 bg-gray-600 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full skill-bar" style={{ width: `${Math.random() * 40 + 60}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white mb-4">Tools</h3>
                  <div className="space-y-3">
                    {["Git", "Docker", "Figma", "Vercel", "Firebase"].map((skill) => (
                      <div key={skill} className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700/70 transition-colors card-hover">
                        <span className="text-gray-200">{skill}</span>
                        <div className="w-16 h-2 bg-gray-600 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full skill-bar" style={{ width: `${Math.random() * 40 + 60}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="w-full animate-slide-up [animation-delay:1400ms]">
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 shadow-2xl hover:shadow-red-500/10 transition-all duration-500 card-hover">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-white">Projects</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-700/50 to-gray-800/50 p-6 hover:from-gray-700/70 hover:to-gray-800/70 transition-all duration-300 card-hover">
                  <div className="absolute top-4 right-4 w-3 h-3 bg-red-500 rounded-full"></div>
                  <h3 className="text-xl font-semibold text-white mb-3">Custom Web Applications</h3>
                  <p className="text-gray-300 text-sm mb-4">Tailored solutions for businesses and individuals</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded">React</span>
                    <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded">Node.js</span>
                    <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded">TypeScript</span>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-700/50 to-gray-800/50 p-6 hover:from-gray-700/70 hover:to-gray-800/70 transition-all duration-300 card-hover">
                  <div className="absolute top-4 right-4 w-3 h-3 bg-red-500 rounded-full"></div>
                  <h3 className="text-xl font-semibold text-white mb-3">Automation Tools</h3>
                  <p className="text-gray-300 text-sm mb-4">Streamlining workflows and processes</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded">Python</span>
                    <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded">AWS</span>
                    <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded">Docker</span>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-700/50 to-gray-800/50 p-6 hover:from-gray-700/70 hover:to-gray-800/70 transition-all duration-300 card-hover">
                  <div className="absolute top-4 right-4 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <h3 className="text-xl font-semibold text-white mb-3">AI-Powered Solutions</h3>
                  <p className="text-gray-300 text-sm mb-4">Intelligent applications and systems</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded">Machine Learning</span>
                    <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded">OpenAI</span>
                    <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded">TensorFlow</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="w-full animate-slide-up [animation-delay:1600ms]">
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 shadow-2xl hover:shadow-red-500/10 transition-all duration-500 card-hover">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-white">What Clients Say</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-gray-700/50 rounded-2xl card-hover">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">J</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">John Smith</h4>
                      <p className="text-sm text-gray-400">CEO, TechStart</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">&ldquo;InkFusionLabs delivered an exceptional web application that exceeded our expectations. The attention to detail and modern design approach made all the difference.&rdquo;</p>
                </div>
                <div className="p-6 bg-gray-700/50 rounded-2xl card-hover">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">S</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Sarah Johnson</h4>
                      <p className="text-sm text-gray-400">Founder, InnovateCorp</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">&ldquo;The automation tools developed by InkFusionLabs have revolutionized our workflow. The quality and reliability are outstanding.&rdquo;</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="w-full animate-slide-up [animation-delay:1800ms]">
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 shadow-2xl hover:shadow-red-500/10 transition-all duration-500 card-hover">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-white">Get In Touch</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    Ready to collaborate or learn more about our innovative solutions? 
                    Let&apos;s discuss how we can bring your ideas to life with cutting-edge technology.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Email</h3>
                        <p className="text-gray-400">John.Constable@inkfusionlabs.co.uk</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Location</h3>
                        <p className="text-gray-400">Remote • Worldwide</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Response Time</h3>
                        <p className="text-gray-400">Within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <a 
                    href="mailto:John.Constable@inkfusionlabs.co.uk" 
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-500/25 card-hover"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Start a Project
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="text-center py-8 text-gray-400 text-sm animate-slide-up [animation-delay:2000ms]">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-1 h-1 bg-red-500 rounded-full"></div>
            <span>&copy; {new Date().getFullYear()} InkFusionLabs</span>
            <div className="w-1 h-1 bg-red-500 rounded-full"></div>
          </div>
          <p className="text-xs text-gray-500">Crafting the future, one line of code at a time</p>
        </footer>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
        aria-label="Scroll to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
}
