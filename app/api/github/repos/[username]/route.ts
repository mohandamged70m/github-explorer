import { NextResponse } from "next/server";
import { getGithubRepos } from "@/lib/github";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ username: string }> }
) {
    try {
        const { username } = await params;
        const repos = await getGithubRepos(username);

        return NextResponse.json(repos);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
