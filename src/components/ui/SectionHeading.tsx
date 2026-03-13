interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    gradient?: boolean;
}

export default function SectionHeading({
    title,
    subtitle,
    gradient = true,
}: SectionHeadingProps) {
    return (
        <div className="mb-12">
            <h2
                className={`text-3xl sm:text-4xl font-bold mb-4 ${gradient ? "gradient-text" : "text-surface-100"
                    }`}
            >
                {title}
            </h2>
            {subtitle && (
                <p className="text-surface-400 text-lg max-w-2xl">{subtitle}</p>
            )}
        </div>
    );
}
