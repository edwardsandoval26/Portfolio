export interface ProjectFrontmatter {
    title: string;
    description: string;
    date: string;
    tags: string[];
    image?: string;
    github?: string;
    demo?: string;
    featured?: boolean;
}

export interface CaseStudyFrontmatter extends ProjectFrontmatter {
    infrastructure?: string[];
    outcome?: string;
}

export interface BlogFrontmatter {
    title: string;
    description: string;
    date: string;
    tags: string[];
    readingTime?: string;
    featured?: boolean;
}

export interface ContentItem<T> {
    slug: string;
    frontmatter: T;
    content: string;
}

export interface GitHubRepo {
    name: string;
    description: string | null;
    html_url: string;
    stargazers_count: number;
    language: string | null;
    topics: string[];
    updated_at: string;
    fork: boolean;
}
