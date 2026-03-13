import { getGitHubRepos, languageColors } from "@/lib/github";
import { siteConfig } from "@/data/siteConfig";
import { FiStar, FiExternalLink } from "react-icons/fi";

export default async function GitHubRepos() {
    const repos = await getGitHubRepos(siteConfig.githubUsername, 6);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {repos.map((repo) => (
                <a
                    key={repo.name}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card p-5 flex flex-col transition-all duration-300 hover:border-primary-500/30 hover:-translate-y-0.5 group"
                >
                    <div className="flex items-start justify-between mb-2">
                        <h3 className="text-sm font-semibold text-surface-200 group-hover:text-primary-400 transition-colors truncate">
                            {repo.name}
                        </h3>
                        <FiExternalLink
                            size={14}
                            className="text-surface-600 group-hover:text-primary-400 transition-colors shrink-0 ml-2"
                        />
                    </div>

                    <p className="text-xs text-surface-500 leading-relaxed mb-3 line-clamp-2 flex-grow">
                        {repo.description || "No description"}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-surface-500">
                        {repo.language && (
                            <span className="flex items-center gap-1.5">
                                <span
                                    className="w-2.5 h-2.5 rounded-full"
                                    style={{
                                        backgroundColor:
                                            languageColors[repo.language] || "#6e7681",
                                    }}
                                />
                                {repo.language}
                            </span>
                        )}
                        <span className="flex items-center gap-1">
                            <FiStar size={12} />
                            {repo.stargazers_count}
                        </span>
                    </div>
                </a>
            ))}
        </div>
    );
}
