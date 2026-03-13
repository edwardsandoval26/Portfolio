import { siteConfig } from "@/data/siteConfig";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/ui/ContactForm";
import { FiGithub, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact",
    description: "Get in touch — collaboration, opportunities, or just to say hello.",
};

export default function ContactPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <SectionHeading
                title="Get in Touch"
                subtitle="Have a project in mind, want to collaborate, or just want to say hello? I'd love to hear from you."
            />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                {/* Contact Info */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="glass-card p-6 space-y-5">
                        <a
                            href={`mailto:${siteConfig.email}`}
                            className="flex items-center gap-4 group"
                        >
                            <div className="w-10 h-10 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400 group-hover:bg-primary-500/20 transition-colors">
                                <FiMail size={18} />
                            </div>
                            <div>
                                <p className="text-xs text-surface-500">Email</p>
                                <p className="text-sm text-surface-200 group-hover:text-primary-400 transition-colors">
                                    {siteConfig.email}
                                </p>
                            </div>
                        </a>

                        <a
                            href={siteConfig.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 group"
                        >
                            <div className="w-10 h-10 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400 group-hover:bg-primary-500/20 transition-colors">
                                <FiGithub size={18} />
                            </div>
                            <div>
                                <p className="text-xs text-surface-500">GitHub</p>
                                <p className="text-sm text-surface-200 group-hover:text-primary-400 transition-colors">
                                    {siteConfig.githubUsername}
                                </p>
                            </div>
                        </a>

                        <a
                            href={siteConfig.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 group"
                        >
                            <div className="w-10 h-10 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400 group-hover:bg-primary-500/20 transition-colors">
                                <FiLinkedin size={18} />
                            </div>
                            <div>
                                <p className="text-xs text-surface-500">LinkedIn</p>
                                <p className="text-sm text-surface-200 group-hover:text-primary-400 transition-colors">
                                    Connect on LinkedIn
                                </p>
                            </div>
                        </a>

                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-surface-800/60 border border-surface-700/30 flex items-center justify-center text-surface-500">
                                <FiMapPin size={18} />
                            </div>
                            <div>
                                <p className="text-xs text-surface-500">Location</p>
                                <p className="text-sm text-surface-300">Remote / Worldwide</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-3">
                    <div className="glass-card p-6">
                        <h3 className="text-lg font-semibold text-surface-200 mb-5">
                            Send a Message
                        </h3>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
