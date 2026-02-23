import { GithubUser, GithubRepo } from "./types";

const getAuthHeaders = (): Record<string, string> => {
    const token = process.env.GITHUB_TOKEN;
    if (!token) return {};
    return {
        Authorization: `Bearer ${token}`,
    };
};

export async function getGithubUser(username: string): Promise<GithubUser | null> {
    try {
        const res = await fetch(`https://api.github.com/users/${username}`, {
            headers: {
                Accept: "application/vnd.github.v3+json",
                ...getAuthHeaders(),
            },
            next: { revalidate: 3600 },
        });

        if (!res.ok) {
            if (res.status === 404) return null;
            throw new Error(`GitHub API error: ${res.status}`);
        }

        return await res.json();
    } catch (error) {
        console.error("Error fetching GitHub user:", error);
        return null;
    }
}

export async function getGithubRepos(username: string): Promise<GithubRepo[]> {
    try {
        const res = await fetch(
            `https://api.github.com/users/${username}/repos?sort=updated&per_page=10`,
            {
                headers: {
                    Accept: "application/vnd.github.v3+json",
                    ...getAuthHeaders(),
                },
                next: { revalidate: 3600 },
            }
        );

        if (!res.ok) {
            if (res.status === 404) return [];
            throw new Error(`GitHub API error: ${res.status}`);
        }

        return await res.json();
    } catch (error) {
        console.error("Error fetching GitHub repos:", error);
        return [];
    }
}

export async function searchGithubRepos(query: string): Promise<GithubRepo[]> {
    try {
        const res = await fetch(
            `https://api.github.com/search/repositories?q=${encodeURIComponent(query)}&sort=stars&order=desc&per_page=20`,
            {
                headers: {
                    Accept: "application/vnd.github.v3+json",
                    ...getAuthHeaders(),
                },
                next: { revalidate: 3600 },
            }
        );

        if (!res.ok) {
            throw new Error(`GitHub API error: ${res.status}`);
        }

        const data = await res.json();
        return data.items || [];
    } catch (error) {
        console.error("Error searching GitHub repos:", error);
        return [];
    }
}
