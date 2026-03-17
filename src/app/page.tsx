import { Suspense } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { getStats } from "@/lib/stats";
import StatsCounter from "@/components/ui/StatsCounter";
import GitHubRepos from "@/components/ui/GitHubRepos";
import SectionHeading from "@/components/ui/SectionHeading";
import {
    FiGithub,
    FiLinkedin,
    FiMail,
    FiDownload,
    FiArrowRight,
} from "react-icons/fi";

export default function HomePage() {
    const stats = getStats();
    return (
        <div className="relative">
            {/* ── Hero Section ── */}
            <section className="relative min-h-[90vh] flex items-center">
                {/* Ambient background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="max-w-3xl">
                        {/* Status badge */}
                        <div className="animate-fade-in-up mb-6">
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-500/10 border border-primary-500/20 rounded-full text-sm text-primary-300">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                                </span>
                                Open to opportunities
                            </span>
                        </div>

                        {/* Name & Title */}
                        <h1 className="animate-fade-in-up text-4xl sm:text-5xl lg:text-6xl font-bold text-surface-100 mb-4 leading-tight">
                            {siteConfig.name}
                        </h1>
                        <h2 className="animate-fade-in-up-delay-1 text-xl sm:text-2xl lg:text-3xl font-semibold gradient-text mb-6">
                            {siteConfig.title} / {siteConfig.subtitle}
                        </h2>

                        {/* Description */}
                        <p className="animate-fade-in-up-delay-2 text-lg text-surface-400 leading-relaxed mb-8 max-w-2xl">
                            {siteConfig.description}
                        </p>

                        {/* CTA Buttons */}
                        <div className="animate-fade-in-up-delay-3 flex flex-wrap gap-4 mb-10">
                            <Link
                                href="/projects"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white text-sm font-medium rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-primary-500/20"
                            >
                                View Projects
                                <FiArrowRight size={16} />
                            </Link>
                            <a
                                href={siteConfig.resumePdf}
                                download
                                className="inline-flex items-center gap-2 px-6 py-3 bg-surface-800/60 hover:bg-surface-700/60 text-surface-200 text-sm font-medium rounded-xl border border-surface-700/30 transition-all duration-200"
                            >
                                <FiDownload size={16} />
                                Download CV
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="animate-fade-in-up-delay-3 flex items-center gap-4">
                            <a
                                href={siteConfig.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface-800/50 border border-surface-700/30 text-surface-400 hover:text-primary-400 hover:border-primary-500/30 transition-all"
                                aria-label="GitHub"
                            >
                                <FiGithub size={18} />
                            </a>
                            <a
                                href={siteConfig.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface-800/50 border border-surface-700/30 text-surface-400 hover:text-primary-400 hover:border-primary-500/30 transition-all"
                                aria-label="LinkedIn"
                            >
                                <FiLinkedin size={18} />
                            </a>
                            <a
                                href={`mailto:${siteConfig.email}`}
                                className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface-800/50 border border-surface-700/30 text-surface-400 hover:text-primary-400 hover:border-primary-500/30 transition-all"
                                aria-label="Email"
                            >
                                <FiMail size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Tech Tags ── */}
            <section className="py-12 border-y border-surface-800/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-3">
                        {siteConfig.techTags.map((tag, i) => (
                            <span
                                key={tag}
                                className="px-4 py-2 text-sm bg-surface-800/40 text-surface-300 rounded-full border border-surface-700/30 hover:border-primary-500/30 hover:text-primary-300 transition-all duration-300 tag-shimmer"
                                style={{ animationDelay: `${i * 0.1}s` }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Stats ── */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="glass-card p-8 sm:p-12">
                        <div className="grid grid-cols-3 gap-8">
                            <StatsCounter
                                value={stats.projects}
                                label="Projects"
                            />
                            <StatsCounter
                                value={stats.technologies}
                                label="Technologies"
                            />
                            <StatsCounter
                                value={stats.publications}
                                label="Publications"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── GitHub Repos ── */}
            <section className="py-20 border-t border-surface-800/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        title="Recent Repositories"
                        subtitle="Latest open-source work and contributions"
                    />
                    <Suspense
                        fallback={
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[...Array(4)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="glass-card p-5 h-32 animate-pulse"
                                    />
                                ))}
                            </div>
                        }
                    >
                        <GitHubRepos />
                    </Suspense>
                </div>
            </section>
        </div>
    );
}
