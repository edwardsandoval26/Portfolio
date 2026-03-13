import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getContentBySlug, getAllSlugs } from "@/lib/mdx";
import { CaseStudyFrontmatter } from "@/lib/types";
import mdxComponents from "@/components/mdx/MdxComponents";
import Tag from "@/components/ui/Tag";
import { FiGithub, FiExternalLink, FiArrowLeft } from "react-icons/fi";
import Link from "next/link";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import type { Metadata } from "next";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return getAllSlugs("case-studies").map((slug) => ({ slug }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
    const { slug } = await props.params;
    try {
        const { frontmatter } = getContentBySlug<CaseStudyFrontmatter>(
            "case-studies",
            slug
        );
        return {
            title: frontmatter.title,
            description: frontmatter.description,
        };
    } catch {
        return { title: "Case Study Not Found" };
    }
}

export default async function CaseStudyPage(props: PageProps) {
    const { slug } = await props.params;

    let frontmatter: CaseStudyFrontmatter;
    let content: string;

    try {
        const result = getContentBySlug<CaseStudyFrontmatter>(
            "case-studies",
            slug
        );
        frontmatter = result.frontmatter;
        content = result.content;
    } catch {
        notFound();
    }

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            {/* Back link */}
            <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-sm text-surface-500 hover:text-primary-400 transition-colors mb-8"
            >
                <FiArrowLeft size={14} />
                Back to Case Studies
            </Link>

            {/* Header */}
            <header className="mb-10">
                <h1 className="text-3xl sm:text-4xl font-bold text-surface-100 mb-4">
                    {frontmatter.title}
                </h1>
                <p className="text-lg text-surface-400 mb-6">
                    {frontmatter.description}
                </p>

                <div className="flex flex-wrap items-center gap-3 mb-6">
                    {frontmatter.tags.map((tag) => (
                        <Tag key={tag} label={tag} />
                    ))}
                </div>

                {frontmatter.infrastructure && (
                    <div className="glass-card p-4 mb-6">
                        <h3 className="text-sm font-medium text-surface-300 mb-2">
                            Infrastructure
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {frontmatter.infrastructure.map((item) => (
                                <Tag key={item} label={item} variant="outline" />
                            ))}
                        </div>
                    </div>
                )}

                <div className="flex items-center gap-4">
                    {frontmatter.github && (
                        <a
                            href={frontmatter.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-surface-800/60 hover:bg-surface-700/60 text-surface-300 text-sm rounded-lg border border-surface-700/30 transition-colors"
                        >
                            <FiGithub size={16} />
                            View Code
                        </a>
                    )}
                    {frontmatter.demo && (
                        <a
                            href={frontmatter.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-500 text-white text-sm rounded-lg transition-colors"
                        >
                            <FiExternalLink size={16} />
                            Live Demo
                        </a>
                    )}
                </div>
            </header>

            <hr className="border-surface-800/50 mb-10" />

            {/* MDX Content */}
            <article className="prose-custom">
                <MDXRemote
                    source={content}
                    components={mdxComponents}
                    options={{
                        mdxOptions: {
                            remarkPlugins: [remarkGfm],
                            rehypePlugins: [rehypeSlug, rehypeHighlight],
                        },
                    }}
                />
            </article>
        </div>
    );
}
