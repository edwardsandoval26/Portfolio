interface TagProps {
    label: string;
    size?: "sm" | "md";
    variant?: "default" | "outline";
}

export default function Tag({
    label,
    size = "sm",
    variant = "default",
}: TagProps) {
    const sizeClasses = size === "sm" ? "px-2.5 py-1 text-xs" : "px-3 py-1.5 text-sm";
    const variantClasses =
        variant === "default"
            ? "bg-primary-500/10 text-primary-300 border-primary-500/20"
            : "bg-transparent text-surface-400 border-surface-600";

    return (
        <span
            className={`inline-flex items-center rounded-full border font-medium transition-colors hover:bg-primary-500/20 hover:text-primary-200 ${sizeClasses} ${variantClasses}`}
        >
            {label}
        </span>
    );
}
