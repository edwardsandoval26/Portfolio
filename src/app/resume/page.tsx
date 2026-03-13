import { siteConfig } from "@/data/siteConfig";
import SectionHeading from "@/components/ui/SectionHeading";
import TimelineItem from "@/components/ui/TimelineItem";
import Tag from "@/components/ui/Tag";
import { FiDownload, FiExternalLink } from "react-icons/fi";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Resume",
    description: "Professional experience, education, publications, and downloadable CV.",
};

export default function ResumePage() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
                <SectionHeading
                    title="Resume"
                    subtitle="Professional experience, education, and publications."
                />
                <a
                    href={siteConfig.resumePdf}
                    download
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-600 hover:bg-primary-500 text-white text-sm font-medium rounded-xl transition-all shrink-0"
                >
                    <FiDownload size={16} />
                    Download PDF
                </a>
            </div>

            {/* Experience */}
            <section className="mb-16">
                <h2 className="text-xl font-semibold text-surface-200 mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary-500" />
                    Experience
                </h2>
                <div>
                    {siteConfig.experience.map((item) => (
                        <TimelineItem
                            key={item.role + item.company}
                            title={item.role}
                            subtitle={item.company}
                            period={item.period}
                            description={item.description}
                            technologies={item.technologies}
                        />
                    ))}
                </div>
            </section>

            {/* Education */}
            <section className="mb-16">
                <h2 className="text-xl font-semibold text-surface-200 mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary-500" />
                    Education
                </h2>
                <div>
                    {siteConfig.education.map((item) => (
                        <TimelineItem
                            key={item.degree}
                            title={item.degree}
                            subtitle={item.school}
                            period={item.period}
                            description={item.details}
                        />
                    ))}
                </div>
            </section>

            {/* Publications */}
            {siteConfig.publications.length > 0 && (
                <section>
                    <h2 className="text-xl font-semibold text-surface-200 mb-6 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary-500" />
                        Publications
                    </h2>
                    <div className="space-y-4">
                        {siteConfig.publications.map((pub) => (
                            <a
                                key={pub.title}
                                href={pub.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass-card p-5 flex items-start justify-between gap-4 group hover:border-primary-500/30 transition-all block"
                            >
                                <div>
                                    <h3 className="text-sm font-medium text-surface-200 group-hover:text-primary-400 transition-colors mb-1">
                                        {pub.title}
                                    </h3>
                                    <p className="text-xs text-surface-500">{pub.venue}</p>
                                </div>
                                <FiExternalLink
                                    size={14}
                                    className="text-surface-600 group-hover:text-primary-400 transition-colors shrink-0 mt-0.5"
                                />
                            </a>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}
