"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Tag from "./Tag";
import { FiGithub, FiExternalLink } from "react-icons/fi";

interface ProjectCardProps {
    slug: string;
    title: string;
    description: string;
    tags: string[];
    image?: string;
    github?: string;
    demo?: string;
    basePath?: string;
}

export default function ProjectCard({
    slug,
    title,
    description,
    tags,
    image,
    github,
    demo,
    basePath = "/projects",
}: ProjectCardProps) {
    const router = useRouter();

    return (
        <article
            role="link"
            tabIndex={0}
            onClick={() => router.push(`${basePath}/${slug}`)}
            onKeyDown={(e) => {
                if (e.key === "Enter") router.push(`${basePath}/${slug}`);
            }}
            className="glass-card overflow-hidden h-full flex flex-col transition-all duration-300 hover:border-primary-500/30 hover:shadow-lg hover:shadow-primary-500/5 hover:-translate-y-1 cursor-pointer group"
        >
            {/* Thumbnail */}
            {image && (
                <div className="relative w-full h-48 overflow-hidden bg-surface-800/50">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-900/60 to-transparent" />
                </div>
            )}

            <div className="p-6 flex flex-col flex-grow">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-semibold text-surface-100 group-hover:text-primary-400 transition-colors line-clamp-2">
                        {title}
                    </h3>
                    <div className="flex items-center gap-2 ml-4 shrink-0">
                        {github && (
                            <a
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="text-surface-500 hover:text-primary-400 transition-colors"
                                aria-label="GitHub repository"
                            >
                                <FiGithub size={16} />
                            </a>
                        )}
                        {demo && (
                            <a
                                href={demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="text-surface-500 hover:text-primary-400 transition-colors"
                                aria-label="Live demo"
                            >
                                <FiExternalLink size={16} />
                            </a>
                        )}
                    </div>
                </div>

                {/* Description */}
                <p className="text-surface-400 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                    {description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                    {tags.slice(0, 4).map((tag) => (
                        <Tag key={tag} label={tag} size="sm" />
                    ))}
                    {tags.length > 4 && (
                        <span className="text-surface-500 text-xs self-center">
                            +{tags.length - 4}
                        </span>
                    )}
                </div>
            </div>
        </article>
    );
}
