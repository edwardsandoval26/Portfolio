import { getAllContent } from "@/lib/mdx";
import { CaseStudyFrontmatter } from "@/lib/types";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Case Studies",
    description:
        "Deep technical case studies of end-to-end ML systems, covering architecture, infrastructure, and lessons learned.",
};

export default function CaseStudiesPage() {
    const caseStudies = getAllContent<CaseStudyFrontmatter>("case-studies");

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <SectionHeading
                title="Case Studies"
                subtitle="Deep technical explorations of end-to-end ML systems — architecture, infrastructure, scalability, and lessons learned."
            />

            {caseStudies.length === 0 ? (
                <div className="glass-card p-12 text-center">
                    <p className="text-surface-400">
                        Case studies coming soon. Add MDX files to{" "}
                        <code className="text-primary-300">src/content/case-studies/</code>{" "}
                        to get started.
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-6">
                    {caseStudies.map((study) => (
                        <ProjectCard
                            key={study.slug}
                            slug={study.slug}
                            title={study.frontmatter.title}
                            description={study.frontmatter.description}
                            tags={study.frontmatter.tags}
                            github={study.frontmatter.github}
                            basePath="/case-studies"
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
