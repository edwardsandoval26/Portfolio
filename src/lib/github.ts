import { GitHubRepo } from "./types";

export async function getGitHubRepos(
    username: string,
    count: number = 6
): Promise<GitHubRepo[]> {
    if (!username || username === "your-username") {
        return getPlaceholderRepos();
    }

    try {
        const headers: Record<string, string> = {
            Accept: "application/vnd.github.v3+json",
        };

        const token = process.env.GITHUB_TOKEN;
        if (token) {
            headers.Authorization = `Bearer ${token}`;
        }

        const res = await fetch(
            `https://api.github.com/users/${username}/repos?sort=updated&per_page=${count}&type=owner`,
            {
                headers,
                next: { revalidate: 3600 },
            }
        );

        if (!res.ok) {
            console.error(`GitHub API error: ${res.status}`);
            return getPlaceholderRepos();
        }

        const repos: GitHubRepo[] = await res.json();
        return repos.filter((r) => !r.fork).slice(0, count);
    } catch (error) {
        console.error("Failed to fetch GitHub repos:", error);
        return getPlaceholderRepos();
    }
}

function getPlaceholderRepos(): GitHubRepo[] {
    return [
        {
            name: "fraud-detection-system",
            description:
                "End-to-end fraud detection pipeline with real-time scoring API",
            html_url: "#",
            stargazers_count: 142,
            language: "Python",
            topics: ["machine-learning", "fraud-detection", "fastapi"],
            updated_at: "2024-12-01T00:00:00Z",
            fork: false,
        },
        {
            name: "transformer-fine-tuning",
            description:
                "Fine-tuning framework for domain-specific language models",
            html_url: "#",
            stargazers_count: 89,
            language: "Python",
            topics: ["nlp", "transformers", "pytorch"],
            updated_at: "2024-11-15T00:00:00Z",
            fork: false,
        },
        {
            name: "ml-pipeline-template",
            description:
                "Production-ready ML pipeline template with CI/CD and monitoring",
            html_url: "#",
            stargazers_count: 256,
            language: "Python",
            topics: ["mlops", "docker", "kubernetes"],
            updated_at: "2024-10-20T00:00:00Z",
            fork: false,
        },
        {
            name: "image-segmentation-api",
            description:
                "REST API for real-time image segmentation using U-Net architecture",
            html_url: "#",
            stargazers_count: 67,
            language: "Python",
            topics: ["computer-vision", "deep-learning", "fastapi"],
            updated_at: "2024-09-10T00:00:00Z",
            fork: false,
        },
        {
            name: "feature-store",
            description:
                "Lightweight feature store for real-time and batch ML serving",
            html_url: "#",
            stargazers_count: 198,
            language: "Python",
            topics: ["feature-store", "mlops", "redis"],
            updated_at: "2024-08-05T00:00:00Z",
            fork: false,
        },
        {
            name: "time-series-forecaster",
            description:
                "Multi-horizon forecasting with attention-based neural networks",
            html_url: "#",
            stargazers_count: 113,
            language: "Python",
            topics: ["time-series", "deep-learning", "forecasting"],
            updated_at: "2024-07-20T00:00:00Z",
            fork: false,
        },
    ];
}

export const languageColors: Record<string, string> = {
    Python: "#3572A5",
    TypeScript: "#3178C6",
    JavaScript: "#F1E05A",
    Jupyter: "#F37626",
    Rust: "#DEA584",
    Go: "#00ADD8",
    Shell: "#89E051",
    Dockerfile: "#384D54",
    R: "#198CE7",
    Julia: "#A270BA",
    Scala: "#C22D40",
    Java: "#B07219",
    "C++": "#F34B7D",
};
