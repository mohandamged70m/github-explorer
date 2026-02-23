"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, BookOpen, ArrowRight, Activity } from "lucide-react";

export default function RepoViewerSection() {
    const [query, setQuery] = useState("");
    const router = useRouter();

    return (
        <div className="relative min-h-screen bg-[#030712] text-slate-50 selection:bg-amber-500/30 overflow-hidden font-sans border-t border-slate-800/50">
            {/* Premium Background Effects */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-amber-600/10 rounded-full blur-[120px] pointer-events-none opacity-60" />

            <div className="relative z-10 flex flex-col items-center justify-center px-6 pt-32 pb-40 max-w-7xl mx-auto h-full min-h-[calc(100vh-80px)]">

                {/* Hero Content */}
                <section className="flex flex-col items-center text-center gap-6 mb-16 w-full max-w-3xl">
                    {/* Badge */}
                    <div className="group relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1e293b]/50 border border-slate-700/50 backdrop-blur-md cursor-pointer hover:bg-[#1e293b]/80 transition-all duration-300">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <Activity className="w-4 h-4 text-amber-400 relative z-10" />
                        <span className="text-sm font-medium text-slate-300 relative z-10 group-hover:text-white transition-colors duration-300">Repository Intelligence</span>
                    </div>

                    {/* Typography */}
                    <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-[1.05]">
                        Analyze <span className="text-transparent bg-clip-text bg-gradient-to-br from-amber-400 via-orange-400 to-red-500">Codebases</span>
                        <br /> Instantly.
                    </h1>

                    <p className="max-w-xl text-slate-400 text-lg leading-relaxed mt-2">
                        Enter any keyword or repository name to instantly search GitHub for open source projects. Filter by language, sort by stars, and uncover top-tier codebases.
                    </p>

                    {/* Glowing Search Bar */}
                    <div className="w-full max-w-2xl mt-8 relative group">
                        <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl blur-md opacity-25 group-focus-within:opacity-50 transition duration-500" />
                        <form onSubmit={(e) => { e.preventDefault(); if (query.trim()) router.push(`/repo/search?q=${encodeURIComponent(query)}`); }} className="relative flex items-center bg-[#0f172a] rounded-2xl border border-slate-700/80 p-2 overflow-hidden shadow-2xl backdrop-blur-xl">
                            <BookOpen className="ml-5 w-6 h-6 text-slate-500 group-focus-within:text-amber-400 transition-colors duration-300" />
                            <input
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search for repositories (e.g., react, next.js)..."
                                className="w-full bg-transparent px-5 py-4 outline-none text-lg text-white placeholder-slate-500"
                            />
                            <button type="submit" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-amber-500/25 active:scale-95 flex items-center gap-2 mr-1">
                                Search
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </section>

            </div>
        </div>
    );
}
