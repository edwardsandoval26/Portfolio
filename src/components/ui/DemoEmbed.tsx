interface DemoEmbedProps {
    src: string;
    title: string;
    height?: string;
}

export default function DemoEmbed({
    src,
    title,
    height = "500px",
}: DemoEmbedProps) {
    return (
        <div className="glass-card overflow-hidden">
            <div className="px-4 py-3 border-b border-surface-700/30 flex items-center gap-2">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <span className="text-xs text-surface-500 ml-2">{title}</span>
            </div>
            <iframe
                src={src}
                title={title}
                style={{ height }}
                className="w-full border-0 bg-white"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms"
            />
        </div>
    );
}
