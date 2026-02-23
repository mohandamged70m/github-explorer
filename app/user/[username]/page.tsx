import { getGithubUser, getGithubRepos } from "@/lib/github";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Users, Star, GitFork, BookOpen, MapPin, Link as LinkIcon, Twitter, Building2, Search } from "lucide-react";
import Navbar from "@/components/Navbar";

// We need this to be a client component to handle the filter state
import RepoList from "@/components/RepoList";

export default async function UserProfilePage({
    params,
}: {
    params: Promise<{ username: string }>;
}) {
    const { username } = await params;

    // Fetch data in parallel
    const [user, repos] = await Promise.all([
        getGithubUser(username),
        getGithubRepos(username),
    ]);

    if (!user) {
        notFound();
    }

    return (
        <div className="relative min-h-screen bg-[#030712] text-slate-50 selection:bg-blue-500/30 overflow-hidden font-sans pb-32">
            <Navbar />

            {/* Premium Background Effects */}
            <div className="fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none opacity-50" />

            <main className="relative z-10 max-w-6xl mx-auto px-6 pt-24">
                {/* Back Button */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 transition-all text-sm font-medium text-slate-300 hover:text-white mb-8 group backdrop-blur-md"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Search
                </Link>

                {/* Profile Card */}
                <div className="bg-[#0f172a]/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl mb-12 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center relative z-10">
                        {/* Avatar */}
                        <div className="relative shrink-0">
                            <div className="absolute -inset-1 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-3xl blur-md opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                            <img
                                src={user.avatar_url}
                                alt={`${user.login}'s avatar`}
                                className="w-32 h-32 md:w-40 md:h-40 rounded-2xl border border-slate-700/80 relative z-10 object-cover bg-slate-800"
                            />
                        </div>

                        {/* Info */}
                        <div className="flex-1 overflow-hidden">
                            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-2 truncate">
                                {user.name || user.login}
                            </h1>
                            <a
                                href={user.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xl text-blue-400 hover:text-blue-300 transition-colors font-medium flex items-center gap-2 mb-6 w-fit"
                            >
                                @{user.login}
                            </a>

                            {user.bio && (
                                <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mb-6">
                                    {user.bio}
                                </p>
                            )}

                            {/* Stats */}
                            <div className="flex flex-wrap gap-4 md:gap-8">
                                <div className="flex items-center gap-2 text-slate-400 bg-slate-800/50 px-4 py-2 rounded-xl border border-slate-700/50">
                                    <Users className="w-5 h-5 text-blue-400" />
                                    <span className="font-semibold text-white">{user.followers}</span> followers
                                </div>
                                <div className="flex items-center gap-2 text-slate-400 bg-slate-800/50 px-4 py-2 rounded-xl border border-slate-700/50">
                                    <Users className="w-5 h-5 text-purple-400" />
                                    <span className="font-semibold text-white">{user.following}</span> following
                                </div>
                                <div className="flex items-center gap-2 text-slate-400 bg-slate-800/50 px-4 py-2 rounded-xl border border-slate-700/50">
                                    <BookOpen className="w-5 h-5 text-emerald-400" />
                                    <span className="font-semibold text-white">{user.public_repos}</span> repos
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-800/50 relative z-10 w-full">
                        {user.location && (
                            <div className="flex items-center gap-3 text-slate-400">
                                <MapPin className="w-5 h-5 shrink-0" />
                                <span className="truncate">{user.location}</span>
                            </div>
                        )}
                        {user.company && (
                            <div className="flex items-center gap-3 text-slate-400">
                                <Building2 className="w-5 h-5 shrink-0" />
                                <span className="truncate">{user.company}</span>
                            </div>
                        )}
                        {user.blog && (
                            <div className="flex items-center gap-3 text-slate-400">
                                <LinkIcon className="w-5 h-5 shrink-0" />
                                <a href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors truncate">
                                    {user.blog}
                                </a>
                            </div>
                        )}
                        {user.twitter_username && (
                            <div className="flex items-center gap-3 text-slate-400">
                                <Twitter className="w-5 h-5 shrink-0" />
                                <a href={`https://twitter.com/${user.twitter_username}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors truncate">
                                    @{user.twitter_username}
                                </a>
                            </div>
                        )}
                    </div>
                </div>

                <RepoList initialRepos={repos} />
            </main>
        </div>
    );
}
