'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const formData = new FormData(e.currentTarget);
            formData.append("access_key", process.env.NEXT_PUBLIC_FORM_ACCESS_KEY!);

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (response.ok) {
                setIsSubmitted(true);
            } else {
                alert("Error: " + data.message);
            }
        } catch {
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full">
            {/* Hero Banner — matches site Hero style */}
            <section className="relative w-full min-h-[280px] sm:min-h-[320px] flex items-center bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/contact-hero-bg.png"
                        alt="Contact PlantFEED"
                        fill
                        className="object-cover opacity-50"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
                </div>
                <div className="container-custom relative z-10 text-white py-12 sm:py-16">
                    <p className="text-[var(--primary-light)] font-semibold tracking-wide uppercase mb-3 text-xs md:text-sm">
                        Vega Innovations
                    </p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-3 sm:mb-4">
                        Get in touch with<br />
                        <span className="text-[var(--primary)]">our team.</span>
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-lg">
                        Have questions about PlantFEED? We&apos;d love to hear from you.
                        Send us a message and we&apos;ll get back to you as soon as possible.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="section-padding bg-[var(--card)]">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-stretch">

                        {/* Left: Company Information */}
                        <div className="flex flex-col gap-6 sm:gap-8">
                            <div>
                                <span className="text-[var(--accent)] font-bold tracking-wider uppercase mb-2 block text-xs sm:text-sm">
                                    Company Information
                                </span>
                                <h2 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-3">
                                    We&apos;re here to help
                                </h2>
                                <p className="text-[var(--muted)] text-base">
                                    Reach out through any of the channels below or fill in the form and we&apos;ll respond promptly.
                                </p>

                                {/* Sales support list */}
                                <div className="mt-5">
                                    <p className="text-sm font-bold text-[var(--foreground)] mb-3">How our team can help you</p>
                                    <ul className="space-y-2.5">
                                        {[
                                            "Get personalized recommendations based on your garden or growing setup",
                                            "Book product walkthroughs and live demos before you decide",
                                            "Receive clear pricing guidance and package options for your needs",
                                            "Discuss delivery timelines, installation support, and onboarding",
                                        ].map((item) => (
                                            <li key={item} className="flex items-start gap-2.5">
                                                <svg className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span className="text-sm text-[var(--muted)]">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Contact detail cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                {/* Phone */}
                                <div className="rounded-2xl sm:rounded-xl border border-emerald-100 sm:border-[var(--border)] ring-1 ring-emerald-100/70 sm:ring-0 bg-gradient-to-r from-emerald-50/90 to-white sm:bg-white p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow flex gap-3 sm:gap-4 items-start">
                                    <div className="w-10 h-10 sm:w-10 sm:h-10 rounded-full sm:rounded-lg bg-emerald-100 sm:bg-[var(--primary-light)] flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-[11px] sm:text-xs font-semibold text-[#5f6b7a] sm:text-[var(--muted)] uppercase tracking-[0.14em] sm:tracking-wider mb-1">Phone</p>
                                        <a href="tel:+94762225555" className="text-base sm:text-sm font-semibold text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
                                            +94 76 222 5555
                                        </a>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="rounded-2xl sm:rounded-xl border border-emerald-100 sm:border-[var(--border)] ring-1 ring-emerald-100/70 sm:ring-0 bg-gradient-to-r from-emerald-50/90 to-white sm:bg-white p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow flex gap-3 sm:gap-4 items-start">
                                    <div className="w-10 h-10 sm:w-10 sm:h-10 rounded-full sm:rounded-lg bg-emerald-100 sm:bg-[var(--primary-light)] flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-[11px] sm:text-xs font-semibold text-[#5f6b7a] sm:text-[var(--muted)] uppercase tracking-[0.14em] sm:tracking-wider mb-1">Address</p>
                                        <a
                                            href="https://www.google.com/maps/search/?api=1&query=Trace+Expert+City+AC19+Colombo+01000"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-base sm:text-sm font-semibold text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
                                        >
                                            Trace Expert City, AC19,<br />Colombo 01000
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Right: Contact Form */}
                        <div className="bg-white rounded-xl border border-[var(--border)] shadow-sm p-5 sm:p-8 h-full flex flex-col">
                            {isSubmitted ? (
                                <div className="flex flex-col items-center justify-center py-10 sm:py-12 text-center gap-4 animate-[fade-in_0.5s_ease-out]">
                                    <div className="w-16 h-16 rounded-full bg-[var(--primary-light)] flex items-center justify-center">
                                        <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-[var(--foreground)]">Message Sent!</h3>
                                    <p className="text-[var(--muted)] text-sm max-w-xs">
                                        Thank you for reaching out. We&apos;ll get back to you as soon as possible.
                                    </p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="text-sm font-semibold text-[var(--primary)] hover:text-[var(--primary-hover)] transition-colors mt-2"
                                    >
                                        Send another message →
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                    <div>
                                        <h2 className="text-xl font-bold text-[var(--foreground)] mb-1">Send us a message</h2>
                                        <p className="text-sm text-[var(--muted)]">Fill in the form below and we&apos;ll be in touch shortly.</p>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="flex flex-col gap-1.5">
                                            <label htmlFor="name" className="text-sm font-semibold text-[var(--foreground)]">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                placeholder="Your Name"
                                                className="w-full px-4 py-2.5 text-sm text-[var(--foreground)] rounded-lg border border-[var(--border)] bg-[var(--card)] focus:bg-white focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)] focus:ring-opacity-20 outline-none transition-all"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1.5">
                                            <label htmlFor="email" className="text-sm font-semibold text-[var(--foreground)]">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                placeholder="Your Email Address"
                                                className="w-full px-4 py-2.5 text-sm text-[var(--foreground)] rounded-lg border border-[var(--border)] bg-[var(--card)] focus:bg-white focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)] focus:ring-opacity-20 outline-none transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-1.5">
                                        <label htmlFor="subject" className="text-sm font-semibold text-[var(--foreground)]">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            required
                                            placeholder="How can we help you?"
                                            className="w-full px-4 py-2.5 text-sm text-[var(--foreground)] rounded-lg border border-[var(--border)] bg-[var(--card)] focus:bg-white focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)] focus:ring-opacity-20 outline-none transition-all"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-1.5">
                                        <label htmlFor="message" className="text-sm font-semibold text-[var(--foreground)]">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={5}
                                            required
                                            placeholder="Write your message here..."
                                            className="w-full px-4 py-2.5 text-sm text-[var(--foreground)] rounded-lg border border-[var(--border)] bg-[var(--card)] focus:bg-white focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)] focus:ring-opacity-20 outline-none transition-all resize-y"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="btn-primary text-white hover:text-white flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed w-full sm:w-auto"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                                </svg>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>

                    {/* Google Maps */}
                    <div className="mt-10 sm:mt-12 lg:mt-16">
                        <div className="mb-6 text-center">
                            <h2 className="h2-title text-[var(--foreground)] mb-3">Find Us</h2>
                            <p className="text-[var(--muted)] text-base sm:text-lg">Visit us at our office in Colombo, Sri Lanka.</p>
                        </div>
                        <div className="rounded-xl overflow-hidden border border-[var(--border)] shadow-sm">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.6767192071343!2d79.86099899999999!3d6.92919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25957b0ad1599%3A0xd167ac13eea7707a!2sVega%20Innovations!5e0!3m2!1sen!2slk!4v1776834101074!5m2!1sen!2slk"
                                width="100%"
                                height="420"
                                className="h-[280px] sm:h-[360px] md:h-[420px]"
                                style={{ border: 0, display: 'block' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Vega Innovations Location"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
