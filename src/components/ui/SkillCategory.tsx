interface SkillCategoryProps {
    category: string;
    skills: string[];
    icon?: React.ReactNode;
}

export default function SkillCategory({
    category,
    skills,
    icon,
}: SkillCategoryProps) {
    return (
        <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-5">
                {icon && (
                    <div className="w-10 h-10 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400">
                        {icon}
                    </div>
                )}
                <h3 className="text-lg font-semibold text-surface-100">{category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <span
                        key={skill}
                        className="px-3 py-1.5 text-sm bg-surface-800/60 text-surface-300 rounded-lg border border-surface-700/30 hover:border-primary-500/30 hover:text-primary-300 transition-colors"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}
