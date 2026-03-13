import { getAllContent } from "@/lib/mdx";
import { ProjectFrontmatter } from "@/lib/types";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects",
    description:
        "Machine learning projects showcasing end-to-end model development, deployment, and engineering best practices.",
};

export default function ProjectsPage() {
    const projects = getAllContent<ProjectFrontmatter>("projects");

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <SectionHeading
                title="Projects"
                subtitle="End-to-end machine learning projects with real-world impact — from problem definition to production deployment."
            />

            {projects.length === 0 ? (
                <div className="glass-card p-12 text-center">
                    <p className="text-surface-400">
                        Projects coming soon. Add MDX files to{" "}
                        <code className="text-primary-300">src/content/projects/</code> to
                        get started.
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.slug}
                            slug={project.slug}
                            title={project.frontmatter.title}
                            description={project.frontmatter.description}
                            tags={project.frontmatter.tags}
                            image={project.frontmatter.image}
                            github={project.frontmatter.github}
                            demo={project.frontmatter.demo}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
