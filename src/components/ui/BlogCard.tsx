import Link from "next/link";
import Image from "next/image";
import Tag from "./Tag";

interface BlogCardProps {
    slug: string;
    title: string;
    description: string;
    date: string;
    tags: string[];
    image?: string;
    readingTime?: string;
}

export default function BlogCard({
    slug,
    title,
    description,
    date,
    tags,
    image,
    readingTime,
}: BlogCardProps) {
    return (
        <Link href={`/blog/${slug}`} className="group block">
            <article className="glass-card overflow-hidden transition-all duration-300 hover:border-primary-500/30 hover:-translate-y-1">
                <div className="flex flex-col sm:flex-row">
                    {/* Thumbnail */}
                    {image && (
                        <div className="relative w-full sm:w-56 h-40 sm:h-auto shrink-0 overflow-hidden bg-surface-800/50">
                            <Image
                                src={image}
                                alt={title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 640px) 100vw, 224px"
                            />
                        </div>
                    )}

                    <div className="p-6 flex flex-col flex-grow">
                        {/* Meta */}
                        <div className="flex items-center gap-3 text-xs text-surface-500 mb-3">
                            <time dateTime={date}>
                                {new Date(date).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </time>
                            {readingTime && (
                                <>
                                    <span className="w-1 h-1 rounded-full bg-surface-600" />
                                    <span>{readingTime}</span>
                                </>
                            )}
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-semibold text-surface-100 group-hover:text-primary-400 transition-colors mb-2">
                            {title}
                        </h3>

                        {/* Description */}
                        <p className="text-surface-400 text-sm leading-relaxed mb-4 line-clamp-2">
                            {description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 mt-auto">
                            {tags.slice(0, 3).map((tag) => (
                                <Tag key={tag} label={tag} size="sm" variant="outline" />
                            ))}
                        </div>
                    </div>
                </div>
            </article>
        </Link>
    );
}
