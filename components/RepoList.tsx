"use client";

import { useState } from "react";
import { GithubRepo } from "@/lib/types";
import { Search, BookOpen, Star, GitFork } from "lucide-react";

export default function RepoList({ initialRepos }: { initialRepos: GithubRepo[] }) {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredRepos = initialRepos.filter((repo) =>
        repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (repo.description?.toLowerCase() || "").includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <h2 className="text-3xl font-bold flex items-center gap-3">
                    <BookOpen className="w-8 h-8 text-blue-400" />
                    Latest Repositories
                </h2>

                {/* Filter Input */}
                <div className="relative group w-full md:w-80">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-20 group-focus-within:opacity-50 transition duration-500" />
                    <div className="relative flex items-center bg-[#0f172a] rounded-lg border border-slate-700/80 p-2 overflow-hidden shadow-lg backdrop-blur-xl">
                        <Search className="ml-3 w-4 h-4 text-slate-500 group-focus-within:text-blue-400 transition-colors duration-300" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Filter repositories..."
                            className="w-full bg-transparent px-3 py-2 outline-none text-sm text-white placeholder-slate-500"
                        />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredRepos.map((repo) => (
                    <a
                        key={repo.id}
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex flex-col bg-[#0f172a]/60 backdrop-blur-lg border border-slate-800 rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 hover:border-blue-500/30 hover:shadow-[0_8px_30px_rgb(59,130,246,0.12)]"
                    >
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors truncate">
                            {repo.name}
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1 line-clamp-2">
                            {repo.description || "No description provided."}
                        </p>

                        <div className="flex items-center justify-between text-xs font-medium text-slate-500 mt-auto pt-4 border-t border-slate-800/50">
                            <div className="flex items-center gap-4">
                                {repo.language && (
                                    <span className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-slate-800/50 border border-slate-700/50 text-slate-300">
                                        <span className="w-2 h-2 rounded-full bg-blue-400" />
                                        {repo.language}
                                    </span>
                                )}
                                <span className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
                                    <Star className="w-4 h-4" />
                                    {repo.stargazers_count}
                                </span>
                                <span className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
                                    <GitFork className="w-4 h-4" />
                                    {repo.forks_count}
                                </span>
                            </div>
                            <span className="text-slate-600">
                                {new Date(repo.updated_at).toLocaleDateString()}
                            </span>
                        </div>
                    </a>
                ))}
            </div>

            {initialRepos.length > 0 && filteredRepos.length === 0 && (
                <div className="text-center py-20 bg-[#0f172a]/40 rounded-3xl border border-slate-800/50 mt-6">
                    <Search className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-slate-300 mb-2">No matches found</h3>
                    <p className="text-slate-500">Try adjusting your filter criteria.</p>
                </div>
            )}

            {initialRepos.length === 0 && (
                <div className="text-center py-20 bg-[#0f172a]/40 rounded-3xl border border-slate-800/50">
                    <BookOpen className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-slate-300 mb-2">No Repositories Found</h3>
                    <p className="text-slate-500">This user hasn't created any public repositories yet.</p>
                </div>
            )}
        </>
    );
}
