import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-inkblack via-gray-900 to-dark-900 text-white font-sans relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(229,9,20,0.1),transparent_50%)]"></div>
      
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="flex flex-col items-center pt-16 pb-12 px-4 animate-fade-in">
          <div className="relative group">
            <Image
              src="/logo.jpg"
              alt="InkFusionLabs logo"
              width={280}
              height={160}
              className="rounded-2xl shadow-2xl mb-8 transition-all duration-500 group-hover:scale-105 group-hover:shadow-red-500/25"
              priority
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 mb-4 animate-slide-up">
            InkFusionLabs
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide text-center max-w-2xl animate-slide-up [animation-delay:200ms]">
            Crafting innovative tech solutions with precision and passion
          </p>
          
          <div className="flex items-center gap-2 mt-6 text-gray-400 animate-slide-up [animation-delay:400ms]">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse-slow"></div>
            <span className="text-sm font-medium">Solo Creator • Modern Solutions</span>
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse-slow [animation-delay:1s]"></div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center gap-8 w-full max-w-4xl mx-auto px-4 pb-16">
          {/* About Section */}
          <section className="w-full animate-slide-up [animation-delay:600ms]">
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 shadow-2xl hover:shadow-red-500/10 transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-white">About</h2>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                InkFusionLabs is a one-person tech company dedicated to building modern, impactful applications. 
                With a passion for innovation and a focus on quality, every project is crafted to solve real-world 
                problems and push the boundaries of technology. We believe in creating solutions that not only work 
                flawlessly but also delight users with their elegance and efficiency.
              </p>
            </div>
          </section>

          {/* Projects Section */}
          <section className="w-full animate-slide-up [animation-delay:800ms]">
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 shadow-2xl hover:shadow-red-500/10 transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-white">Projects</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-gray-700/50 rounded-xl hover:bg-gray-700/70 transition-colors">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-gray-200 font-medium">Custom Web Applications</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-700/50 rounded-xl hover:bg-gray-700/70 transition-colors">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-gray-200 font-medium">Automation Tools</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-gray-700/50 rounded-xl hover:bg-gray-700/70 transition-colors">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-gray-200 font-medium">AI-Powered Solutions</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-700/50 rounded-xl hover:bg-gray-700/70 transition-colors">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-200 font-medium">More Coming Soon...</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="w-full animate-slide-up [animation-delay:1000ms]">
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 shadow-2xl hover:shadow-red-500/10 transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-white">Get In Touch</h2>
              </div>
              <div className="text-center">
                <p className="text-lg text-gray-300 mb-6">
                  Ready to collaborate or learn more about our innovative solutions?
                </p>
                <a 
                  href="mailto:hello@inkfusionlabs.com" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-500/25"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  hello@inkfusionlabs.com
                </a>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="text-center py-8 text-gray-400 text-sm animate-slide-up [animation-delay:1200ms]">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-1 h-1 bg-red-500 rounded-full"></div>
            <span>&copy; {new Date().getFullYear()} InkFusionLabs</span>
            <div className="w-1 h-1 bg-red-500 rounded-full"></div>
          </div>
          <p className="text-xs text-gray-500">Crafting the future, one line of code at a time</p>
        </footer>
      </div>
    </div>
  );
}
