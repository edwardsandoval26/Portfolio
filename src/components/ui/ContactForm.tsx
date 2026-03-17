"use client";

import { useState } from "react";
import { FiSend, FiCheck } from "react-icons/fi";

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            subject: formData.get("subject"),
            message: formData.get("message"),
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const result = await response.json();
                throw new Error(result.error || "Failed to send message");
            }

            setSubmitted(true);
            (e.target as HTMLFormElement).reset();
            setTimeout(() => setSubmitted(false), 5000);
        } catch (err) {
            setError(err instanceof Error ? err.message : "An error occurred");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                    <label
                        htmlFor="name"
                        className="block text-sm text-surface-300 mb-2"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-surface-800/50 border border-surface-700/30 rounded-xl text-surface-200 text-sm placeholder-surface-600 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-colors"
                        placeholder="Your name"
                    />
                </div>
                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm text-surface-300 mb-2"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-surface-800/50 border border-surface-700/30 rounded-xl text-surface-200 text-sm placeholder-surface-600 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-colors"
                        placeholder="your.email@example.com"
                    />
                </div>
            </div>

            <div>
                <label
                    htmlFor="subject"
                    className="block text-sm text-surface-300 mb-2"
                >
                    Subject
                </label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-surface-800/50 border border-surface-700/30 rounded-xl text-surface-200 text-sm placeholder-surface-600 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-colors"
                    placeholder="What would you like to discuss?"
                />
            </div>

            <div>
                <label
                    htmlFor="message"
                    className="block text-sm text-surface-300 mb-2"
                >
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-surface-800/50 border border-surface-700/30 rounded-xl text-surface-200 text-sm placeholder-surface-600 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-colors resize-none"
                    placeholder="Your message..."
                />
            </div>

            {error && (
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                    {error}
                </div>
            )}

            <button
                type="submit"
                disabled={submitted || isLoading}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white text-sm font-medium rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isLoading ? (
                    <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                    </>
                ) : submitted ? (
                    <>
                        <FiCheck size={16} />
                        Sent!
                    </>
                ) : (
                    <>
                        <FiSend size={16} />
                        Send Message
                    </>
                )}
            </button>
        </form>
    );
}
