import Link from 'next/link'
import { SearchX, ArrowLeft } from 'lucide-react'
import Navbar from "@/components/Navbar"

export default function NotFound() {
    return (
        <div className="relative min-h-screen bg-[#030712] text-slate-50 selection:bg-blue-500/30 overflow-hidden font-sans pb-32">
            <Navbar />

            {/* Premium Background Effects */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:32px_32px]" />
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none opacity-50" />

            <main className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
                <div className="w-24 h-24 bg-red-500/10 border border-red-500/20 rounded-3xl flex items-center justify-center mb-8">
                    <SearchX className="w-12 h-12 text-red-400" />
                </div>

                <h1 className="text-6xl font-black tracking-tight mb-4">404</h1>
                <h2 className="text-2xl font-bold text-slate-300 mb-4">User Not Found</h2>
                <p className="text-slate-400 max-w-md mb-8 leading-relaxed">
                    We couldn't find the GitHub user you were looking for. They might not exist, or the username was typed incorrectly.
                </p>

                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-lg hover:shadow-blue-500/25 active:scale-95 group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Search
                </Link>
            </main>
        </div>
    )
}
