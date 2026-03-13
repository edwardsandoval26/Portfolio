import { siteConfig } from "@/data/siteConfig";
import SkillCategory from "@/components/ui/SkillCategory";
import SectionHeading from "@/components/ui/SectionHeading";
import {
    FiCpu,
    FiDatabase,
    FiServer,
    FiCode,
} from "react-icons/fi";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Skills",
    description: "Technical skills and tools across machine learning, data engineering, MLOps, and software engineering.",
};

const categoryIcons: Record<string, React.ReactNode> = {
    "Machine Learning": <FiCpu size={20} />,
    "Data Engineering": <FiDatabase size={20} />,
    MLOps: <FiServer size={20} />,
    "Software Engineering": <FiCode size={20} />,
};

export default function SkillsPage() {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <SectionHeading
                title="Skills & Tech Stack"
                subtitle="Tools and technologies I use to build, deploy, and maintain production ML systems."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(siteConfig.skills).map(([category, skills]) => (
                    <SkillCategory
                        key={category}
                        category={category}
                        skills={skills}
                        icon={categoryIcons[category]}
                    />
                ))}
            </div>
        </div>
    );
}
