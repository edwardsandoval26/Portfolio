import Link from "next/link";
import Tag from "./Tag";

interface BlogCardProps {
    slug: string;
    title: string;
    description: string;
    date: string;
    tags: string[];
    readingTime?: string;
}

export default function BlogCard({
    slug,
    title,
    description,
    date,
    tags,
    readingTime,
}: BlogCardProps) {
    return (
        <Link href={`/blog/${slug}`} className="group block">
            <article className="glass-card p-6 transition-all duration-300 hover:border-primary-500/30 hover:-translate-y-1">
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
                <div className="flex flex-wrap gap-1.5">
                    {tags.slice(0, 3).map((tag) => (
                        <Tag key={tag} label={tag} size="sm" variant="outline" />
                    ))}
                </div>
            </article>
        </Link>
    );
}
