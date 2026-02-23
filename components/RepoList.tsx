"use client";

import { useState, useMemo } from "react";
import { GithubRepo } from "@/lib/types";
import { Search, BookOpen, Star, GitFork, ArrowDownAZ, ArrowUpZA, Clock, HelpCircle } from "lucide-react";

type SortField = 'stars' | 'forks' | 'updated' | 'issues';
type SortOrder = 'desc' | 'asc';

export default function RepoList({ initialRepos }: { initialRepos: GithubRepo[] }) {
    const [sortField, setSortField] = useState<SortField>('stars');
    const [sortOrder, setSortOrder] = useState<SortOrder>('desc');

    const sortedRepos = useMemo(() => {
        let result = [...initialRepos];

        result.sort((a, b) => {
            let valA: number | Date;
            let valB: number | Date;

            switch (sortField) {
                case 'stars':
                    valA = a.stargazers_count;
                    valB = b.stargazers_count;
                    break;
                case 'forks':
                    valA = a.forks_count;
                    valB = b.forks_count;
                    break;
                case 'updated':
                    valA = new Date(a.updated_at).getTime();
                    valB = new Date(b.updated_at).getTime();
                    break;
                case 'issues':
                    valA = a.open_issues_count;
                    valB = b.open_issues_count;
                    break;
                default:
                    valA = a.stargazers_count;
                    valB = b.stargazers_count;
            }

            if (valA < valB) return sortOrder === 'asc' ? -1 : 1;
            if (valA > valB) return sortOrder === 'asc' ? 1 : -1;
            return 0;
        });

        return result;
    }, [initialRepos, sortField, sortOrder]);

    return (
        <>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-2 sm:gap-3">
                    <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
                    Latest Repositories
                </h2>

                {/* Controls */}
                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto mt-4 md:mt-0">
                    {/* Sort Controls */}
                    <div className="flex items-center gap-2 bg-[#0f172a] rounded-lg border border-slate-700/80 p-1 shadow-lg backdrop-blur-xl">
                        <select
                            value={sortField}
                            onChange={(e) => setSortField(e.target.value as SortField)}
                            className="bg-transparent text-sm text-slate-300 outline-none px-3 py-1.5 cursor-pointer hover:text-white transition-colors appearance-none"
                        >
                            <option value="stars" className="bg-[#0f172a]">Stars</option>
                            <option value="forks" className="bg-[#0f172a]">Forks</option>
                            <option value="updated" className="bg-[#0f172a]">Recently Updated</option>
                            <option value="issues" className="bg-[#0f172a]">Help Wanted (Issues)</option>
                        </select>
                        <div className="w-px h-6 bg-slate-700/80 mx-1"></div>
                        <button
                            onClick={() => setSortOrder(prev => prev === 'desc' ? 'asc' : 'desc')}
                            className="p-1.5 rounded-md hover:bg-slate-800 text-slate-400 hover:text-white transition-colors flex items-center justify-center min-w-[32px]"
                            title={sortOrder === 'desc' ? "Descending" : "Ascending"}
                        >
                            {sortOrder === 'desc' ? <ArrowDownAZ className="w-4 h-4" /> : <ArrowUpZA className="w-4 h-4" />}
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sortedRepos.map((repo) => (
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

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0 text-xs font-medium text-slate-500 mt-auto pt-4 border-t border-slate-800/50">
                            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                                {repo.language && (
                                    <span className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-slate-800/50 border border-slate-700/50 text-slate-300">
                                        <span className="w-2 h-2 rounded-full bg-blue-400" />
                                        {repo.language}
                                    </span>
                                )}
                                <span className="flex items-center gap-1.5 hover:text-amber-400 transition-colors" title="Stars">
                                    <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                    {repo.stargazers_count}
                                </span>
                                <span className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors" title="Forks">
                                    <GitFork className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                    {repo.forks_count}
                                </span>
                                {repo.open_issues_count > 0 && (
                                    <span className="flex items-center gap-1.5 hover:text-rose-400 transition-colors" title="Open Issues">
                                        <HelpCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                        {repo.open_issues_count}
                                    </span>
                                )}
                            </div>
                            <span className="flex items-center gap-1.5 text-slate-600 sm:text-right" title="Last Updated">
                                <Clock className="w-3 h-3" />
                                {new Date(repo.updated_at).toLocaleDateString()}
                            </span>
                        </div>
                    </a>
                ))}
            </div>

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
