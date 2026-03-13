import { siteConfig } from "@/data/siteConfig";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-surface-800/50 bg-surface-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Left */}
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold text-xs">
                                {siteConfig.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")
                                    .slice(0, 2)}
                            </div>
                            <span className="text-surface-300 text-sm font-medium">
                                {siteConfig.name}
                            </span>
                        </div>
                        <p className="text-surface-500 text-xs">
                            © {currentYear} All rights reserved.
                        </p>
                    </div>

                    {/* Center */}
                    <p className="text-surface-600 text-xs">
                        Built with Next.js · Styled with TailwindCSS · Deployed with Docker
                    </p>

                    {/* Social links */}
                    <div className="flex items-center gap-4">
                        <a
                            href={siteConfig.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-surface-500 hover:text-primary-400 transition-colors"
                            aria-label="GitHub"
                        >
                            <FiGithub size={18} />
                        </a>
                        <a
                            href={siteConfig.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-surface-500 hover:text-primary-400 transition-colors"
                            aria-label="LinkedIn"
                        >
                            <FiLinkedin size={18} />
                        </a>
                        <a
                            href={`mailto:${siteConfig.email}`}
                            className="text-surface-500 hover:text-primary-400 transition-colors"
                            aria-label="Email"
                        >
                            <FiMail size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
