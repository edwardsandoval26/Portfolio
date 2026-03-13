interface TimelineItemProps {
    title: string;
    subtitle: string;
    period: string;
    description?: string;
    technologies?: string[];
}

export default function TimelineItem({
    title,
    subtitle,
    period,
    description,
    technologies,
}: TimelineItemProps) {
    return (
        <div className="relative pl-8 pb-8 last:pb-0 group">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-surface-700/50 group-last:bg-gradient-to-b group-last:from-surface-700/50 group-last:to-transparent" />

            {/* Timeline dot */}
            <div className="absolute left-0 top-1.5 w-2 h-2 -translate-x-[3.5px] rounded-full bg-primary-500 ring-4 ring-surface-950" />

            {/* Content */}
            <div className="glass-card p-5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h3 className="text-base font-semibold text-surface-100">{title}</h3>
                    <span className="text-xs text-primary-400 font-medium bg-primary-500/10 px-2.5 py-1 rounded-full w-fit">
                        {period}
                    </span>
                </div>
                <p className="text-sm text-surface-400 mb-2">{subtitle}</p>
                {description && (
                    <p className="text-sm text-surface-500 leading-relaxed mb-3">
                        {description}
                    </p>
                )}
                {technologies && technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                        {technologies.map((tech) => (
                            <span
                                key={tech}
                                className="px-2 py-0.5 text-xs bg-surface-800/60 text-surface-400 rounded border border-surface-700/30"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
