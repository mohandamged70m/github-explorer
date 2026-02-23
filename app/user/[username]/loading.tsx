import Navbar from "@/components/Navbar";

export default function Loading() {
    return (
        <div className="relative min-h-screen bg-[#030712] text-slate-50 selection:bg-blue-500/30 overflow-hidden font-sans pb-32">
            <Navbar />

            {/* Premium Background Effects */}
            <div className="fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-slate-800/20 rounded-full blur-[120px] pointer-events-none opacity-50" />

            <main className="relative z-10 max-w-6xl mx-auto px-6 pt-24 animate-pulse">
                {/* Back Button Skeleton */}
                <div className="h-10 w-36 bg-slate-800/80 rounded-xl mb-8" />

                {/* Profile Card Skeleton */}
                <div className="bg-[#0f172a]/80 border border-slate-800 rounded-3xl p-8 md:p-12 mb-12">
                    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                        {/* Avatar */}
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-slate-800/80 shrink-0" />

                        {/* Info */}
                        <div className="flex-1 w-full">
                            <div className="h-12 w-64 bg-slate-800/80 rounded-xl mb-4" />
                            <div className="h-6 w-32 bg-slate-800/80 rounded-lg mb-8" />

                            <div className="space-y-3 mb-8">
                                <div className="h-5 w-full max-w-2xl bg-slate-800/80 rounded-lg" />
                                <div className="h-5 w-3/4 max-w-lg bg-slate-800/80 rounded-lg" />
                            </div>

                            {/* Stats */}
                            <div className="flex gap-4">
                                <div className="h-10 w-32 bg-slate-800/80 rounded-xl" />
                                <div className="h-10 w-32 bg-slate-800/80 rounded-xl" />
                                <div className="h-10 w-32 bg-slate-800/80 rounded-xl" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Repositories Skeleton */}
                <div className="h-8 w-64 bg-slate-800/80 rounded-xl mb-8" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="bg-[#0f172a]/60 border border-slate-800 rounded-2xl p-6 h-48">
                            <div className="h-6 w-48 bg-slate-800/80 rounded-lg mb-4" />
                            <div className="space-y-2 mb-8">
                                <div className="h-4 w-full bg-slate-800/50 rounded-md" />
                                <div className="h-4 w-2/3 bg-slate-800/50 rounded-md" />
                            </div>
                            <div className="flex gap-4 mt-auto">
                                <div className="h-6 w-20 bg-slate-800/80 rounded-md" />
                                <div className="h-6 w-16 bg-slate-800/80 rounded-md" />
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
