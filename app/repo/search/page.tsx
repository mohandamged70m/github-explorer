import { searchGithubRepos } from "@/lib/github";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import RepoList from "@/components/RepoList";

export default async function RepoSearchPage({
    searchParams,
}: {
    searchParams: Promise<{ q: string }>;
}) {
    const { q } = await searchParams;

    if (!q) {
        return (
            <div className="min-h-screen bg-[#030712] text-slate-50 flex items-center justify-center">
                <Navbar />
                <div className="text-center">
                    <h2 className="text-2xl font-bold">No search query provided</h2>
                    <Link href="/repo" className="text-blue-400 hover:underline mt-4 inline-block">Go back to Repo Viewer</Link>
                </div>
            </div>
        );
    }

    const repos = await searchGithubRepos(q);

    return (
        <div className="relative min-h-screen bg-[#030712] text-slate-50 selection:bg-blue-500/30 overflow-hidden font-sans pb-32">
            <Navbar />

            {/* Premium Background Effects */}
            <div className="fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none opacity-50" />

            <main className="relative z-10 max-w-6xl mx-auto px-6 pt-32">
                {/* Back Button */}
                <Link
                    href="/repo"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 transition-all text-sm font-medium text-slate-300 hover:text-white mb-8 group backdrop-blur-md"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Repo Search
                </Link>

                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 flex items-center gap-4 text-white">
                        <Search className="w-10 h-10 text-blue-500" />
                        Search Results for "{q}"
                    </h1>
                    <p className="text-slate-400 text-lg">
                        Found {repos.length} top repositories matching your query.
                    </p>
                </div>

                <RepoList initialRepos={repos} />
            </main>
        </div>
    );
}
