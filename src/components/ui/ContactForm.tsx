"use client";

import { useState } from "react";
import { FiSend, FiCheck } from "react-icons/fi";

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Template: Integrate with your backend, Formspree, or EmailJS
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
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

            <button
                type="submit"
                disabled={submitted}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white text-sm font-medium rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {submitted ? (
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
