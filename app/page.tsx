"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { Search, Sparkles, User, ArrowRight, BookOpen, Code2 } from "lucide-react";

export default function Home() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-50 selection:bg-blue-500/30 overflow-hidden font-sans">
      <Navbar />

      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none opacity-60" />

      <main className="relative z-10 flex flex-col items-center px-6 pt-24 pb-32 max-w-7xl mx-auto">

        {/* Hero Section */}
        <section className="flex flex-col items-center text-center gap-8 mb-40 w-full max-w-4xl">
          {/* Badge */}
          <div className="group relative inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#1e293b]/50 border border-slate-700/50 backdrop-blur-md cursor-pointer hover:bg-[#1e293b]/80 transition-all duration-300">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Sparkles className="w-4 h-4 text-blue-400 relative z-10" />
            <span className="text-sm font-medium text-slate-300 relative z-10 group-hover:text-white transition-colors duration-300">Discover Github Intelligence</span>
          </div>

          {/* Typography */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-[1.05]">
            Uncover The <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-500">
              Open Source
            </span> World.
          </h1>

          <p className="max-w-2xl text-slate-400 text-lg sm:text-xl leading-relaxed mt-2">
            Your personal compass for Github. Instantly analyze developer profiles, explore repository metrics, and track contribution histories in an expertly crafted interface.
          </p>

          {/* Glowing Search Bar */}
          <div className="w-full mt-8 relative group">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-lg opacity-30 group-focus-within:opacity-60 transition duration-500" />
            <form onSubmit={(e) => { e.preventDefault(); if (username.trim()) router.push(`/user/${username}`); }} className="relative flex flex-col sm:flex-row items-center bg-[#0f172a] rounded-2xl sm:rounded-full border border-slate-700/80 p-2 overflow-hidden shadow-2xl backdrop-blur-xl gap-2 sm:gap-0">
              <div className="flex items-center w-full relative">
                <Search className="absolute left-4 w-5 h-5 sm:w-6 sm:h-6 text-slate-500 group-focus-within:text-blue-400 transition-colors duration-300" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter a Github username..."
                  className="w-full bg-transparent pl-12 pr-4 py-3 sm:py-4 outline-none text-base sm:text-lg text-white placeholder-slate-500 rounded-xl sm:rounded-none"
                />
              </div>
              <button type="submit" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 sm:py-4 rounded-xl sm:rounded-full font-bold transition-all shadow-lg hover:shadow-blue-500/25 active:scale-95 flex items-center justify-center gap-2">
                Explore
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </section>

        {/* How to Use Section (Elevated) */}
        <section className="w-full relative">
          <div className="text-center mb-20 relative z-10">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">How It Works</h2>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto">Master Github Explorer in three effortless steps.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 relative z-10">
            {/* Elegant Path Line for Desktop */}
            <div className="hidden lg:block absolute top-[100px] left-[20%] right-[20%] h-[1px] bg-gradient-to-r from-transparent via-slate-600 to-transparent" />

            {/* Step 1 */}
            <div className="group relative flex flex-col items-start bg-[#0f172a]/80 backdrop-blur-lg border border-slate-800 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-500 hover:border-blue-500/30">
              <div className="absolute top-0 right-0 p-8 text-8xl font-black text-slate-800/30 group-hover:text-blue-500/10 transition-colors duration-500 select-none">1</div>
              <div className="w-16 h-16 bg-[#1e293b] border border-slate-700 rounded-2xl flex items-center justify-center mb-8 relative z-10 group-hover:bg-blue-500/10 group-hover:border-blue-500/50 transition-colors duration-500">
                <Search className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">Search Any User</h3>
              <p className="text-slate-400 leading-relaxed relative z-10">
                Type in any Github handle. We instantly query the highly robust Github API to fetch real-time public developer data.
              </p>
            </div>

            {/* Step 2 */}
            <div className="group relative flex flex-col items-start bg-[#0f172a]/80 backdrop-blur-lg border border-slate-800 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-500 hover:border-purple-500/30 lg:mt-8">
              <div className="absolute top-0 right-0 p-8 text-8xl font-black text-slate-800/30 group-hover:text-purple-500/10 transition-colors duration-500 select-none">2</div>
              <div className="w-16 h-16 bg-[#1e293b] border border-slate-700 rounded-2xl flex items-center justify-center mb-8 relative z-10 group-hover:bg-purple-500/10 group-hover:border-purple-500/50 transition-colors duration-500">
                <User className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">Analyze Profile</h3>
              <p className="text-slate-400 leading-relaxed relative z-10">
                Dive deep into an interactive dashboard showing network stats, follower metrics, and overall account activity.
              </p>
            </div>

            {/* Step 3 */}
            <div className="group relative flex flex-col items-start bg-[#0f172a]/80 backdrop-blur-lg border border-slate-800 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-500 hover:border-amber-500/30 lg:mt-16">
              <div className="absolute top-0 right-0 p-8 text-8xl font-black text-slate-800/30 group-hover:text-amber-500/10 transition-colors duration-500 select-none">3</div>
              <div className="w-16 h-16 bg-[#1e293b] border border-slate-700 rounded-2xl flex items-center justify-center mb-8 relative z-10 group-hover:bg-amber-500/10 group-hover:border-amber-500/50 transition-colors duration-500">
                <Code2 className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">Explore Code</h3>
              <p className="text-slate-400 leading-relaxed relative z-10">
                Browse through all repositories with a clean UI. Quickly identify primary languages, top-starred projects, and forks.
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="w-full border-t border-slate-800/50 py-12 text-center text-slate-500 text-sm mt-32 relative z-10 bg-[#030712]/50 backdrop-blur-sm">
        <p>&copy; 2026 Github Explorer. Designed for the builders.</p>
      </footer>
    </div>
  );
}
