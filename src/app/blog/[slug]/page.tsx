import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getContentBySlug, getAllSlugs } from "@/lib/mdx";
import { BlogFrontmatter } from "@/lib/types";
import mdxComponents from "@/components/mdx/MdxComponents";
import Tag from "@/components/ui/Tag";
import { FiArrowLeft, FiCalendar, FiClock } from "react-icons/fi";
import Link from "next/link";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import type { Metadata } from "next";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return getAllSlugs("blog").map((slug) => ({ slug }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
    const { slug } = await props.params;
    try {
        const { frontmatter } = getContentBySlug<BlogFrontmatter>("blog", slug);
        return {
            title: frontmatter.title,
            description: frontmatter.description,
        };
    } catch {
        return { title: "Post Not Found" };
    }
}

export default async function BlogPostPage(props: PageProps) {
    const { slug } = await props.params;

    let frontmatter: BlogFrontmatter;
    let content: string;

    try {
        const result = getContentBySlug<BlogFrontmatter>("blog", slug);
        frontmatter = result.frontmatter;
        content = result.content;
    } catch {
        notFound();
    }

    return (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            {/* Back link */}
            <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-surface-500 hover:text-primary-400 transition-colors mb-8"
            >
                <FiArrowLeft size={14} />
                Back to Blog
            </Link>

            {/* Header */}
            <header className="mb-10">
                <h1 className="text-3xl sm:text-4xl font-bold text-surface-100 mb-4 leading-tight">
                    {frontmatter.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-sm text-surface-500 mb-6">
                    <span className="flex items-center gap-1.5">
                        <FiCalendar size={14} />
                        {new Date(frontmatter.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </span>
                    {frontmatter.readingTime && (
                        <span className="flex items-center gap-1.5">
                            <FiClock size={14} />
                            {frontmatter.readingTime}
                        </span>
                    )}
                </div>

                <div className="flex flex-wrap gap-2">
                    {frontmatter.tags.map((tag) => (
                        <Tag key={tag} label={tag} variant="outline" />
                    ))}
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
