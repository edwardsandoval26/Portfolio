import { getAllContent } from "@/lib/mdx";
import { BlogFrontmatter } from "@/lib/types";
import BlogCard from "@/components/ui/BlogCard";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog",
    description:
        "Technical articles on machine learning, model optimization, deployment pipelines, and research explanations.",
};

export default function BlogPage() {
    const posts = getAllContent<BlogFrontmatter>("blog");

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <SectionHeading
                title="Technical Blog"
                subtitle="Deep dives into ML experiments, model optimization, deployment strategies, and research papers."
            />

            {posts.length === 0 ? (
                <div className="glass-card p-12 text-center">
                    <p className="text-surface-400">
                        Blog posts coming soon. Add MDX files to{" "}
                        <code className="text-primary-300">src/content/blog/</code> to get
                        started.
                    </p>
                </div>
            ) : (
                <div className="space-y-4">
                    {posts.map((post) => (
                        <BlogCard
                            key={post.slug}
                            slug={post.slug}
                            title={post.frontmatter.title}
                            description={post.frontmatter.description}
                            date={post.frontmatter.date}
                            tags={post.frontmatter.tags}
                            image={post.frontmatter.image}
                            readingTime={post.frontmatter.readingTime}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
