"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Github, LayoutDashboard, Code2 } from "lucide-react";

export default function Navbar() {
    const pathname = usePathname();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5 bg-[#030712]/50 backdrop-blur-md">
            <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">

                {/* Logo Area */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300">
                        <Github className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                        Github Explorer
                    </h1>
                </Link>

                {/* Navigation Links */}
                <nav className="flex items-center gap-2">
                    <Link href="/profile">
                        <Button
                            variant="ghost"
                            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${pathname === '/profile' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'text-slate-300 hover:text-white hover:bg-white/5'}`}
                        >
                            <LayoutDashboard className="w-4 h-4" />
                            <span className="font-medium">Profile Viewer</span>
                        </Button>
                    </Link>

                    <Link href="/repo">
                        <Button
                            variant="ghost"
                            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${pathname === '/repo' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' : 'text-slate-300 hover:text-white hover:bg-white/5'}`}
                        >
                            <Code2 className="w-4 h-4" />
                            <span className="font-medium">Repo Viewer</span>
                        </Button>
                    </Link>
                </nav>

            </div>
        </header>
    );
}
