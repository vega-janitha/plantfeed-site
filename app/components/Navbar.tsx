'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full bg-white border-b border-[var(--border)] shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
            <div className="container-custom flex h-[4.25rem] min-h-[4.25rem] items-center justify-between gap-8">
                {/* Left: Navigation Links (desktop) / Menu button (mobile) */}
                <div className="hidden md:flex items-center gap-8">
                    <a
                        href="#features"
                        onClick={(e) => {
                            e.preventDefault();
                            const element = document.getElementById('features');
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        className="text-[15px] font-medium text-[#333] hover:text-[var(--primary)] transition-colors"
                    >
                        Features
                    </a>
                    <a
                        href="#app"
                        onClick={(e) => {
                            e.preventDefault();
                            const element = document.getElementById('app');
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        className="text-[15px] font-medium text-[#333] hover:text-[var(--primary)] transition-colors"
                    >
                        App
                    </a>
                    <a
                        href="#specs"
                        onClick={(e) => {
                            e.preventDefault();
                            const element = document.getElementById('specs');
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        className="text-[15px] font-medium text-[#333] hover:text-[var(--primary)] transition-colors"
                    >
                        Specs
                    </a>
                </div>

                {/* Mobile Hamburger Menu Button */}
                <button
                    type="button"
                    onClick={() => setMenuOpen((o) => !o)}
                    className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 hover:opacity-70 transition-opacity"
                    aria-expanded={menuOpen}
                    aria-label="Toggle menu"
                >
                    <span
                        className={`w-6 h-0.5 bg-[#333] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""
                            }`}
                    />
                    <span
                        className={`w-6 h-0.5 bg-[#333] transition-all duration-300 ${menuOpen ? "opacity-0" : ""
                            }`}
                    />
                    <span
                        className={`w-6 h-0.5 bg-[#333] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""
                            }`}
                    />
                </button>

                {/* Center: Logo */}
                <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="flex items-center gap-2 cursor-pointer"
                    >
                        <Image
                            src="/logo.svg"
                            alt="PlantFEED Logo"
                            width={106}
                            height={64}
                            className="h-9 w-auto"
                        />
                    </a>
                </div>

                {/* Right: Action */}
                <div className="flex items-center gap-6">
                    <a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault();
                            const element = document.getElementById('contact');
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-[var(--primary)] px-3 py-1.5 md:px-5 md:py-2.5 text-[13px] md:text-[15px] font-medium text-white shadow-[0_2px_8px_rgba(47,133,90,0.35)] hover:bg-[var(--primary-hover)] hover:shadow-[0_2px_12px_rgba(47,133,90,0.4)] transition-all duration-200 cursor-pointer"
                    >
                        <span className="hidden sm:inline">Contact Us</span>
                        {/* Mobile Phone Icon */}
                        <svg
                            className="w-8 h-4 sm:hidden"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                        </svg>
                        <svg
                            className="w-3.5 h-3.5 md:w-4 md:h-4 hidden sm:inline"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                        </svg>
                    </a>
                </div>
            </div>
            {/* Mobile menu panel */}
            <div
                className={`md:hidden border-t border-[var(--border)] bg-white overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="py-4 px-4 flex flex-col gap-3">
                    <a
                        href="#features"
                        className="text-[15px] font-medium text-[#333] hover:text-[var(--primary)] py-1 transition-colors"
                        onClick={(e) => {
                            e.preventDefault();
                            setMenuOpen(false);
                            const element = document.getElementById('features');
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                    >
                        Features
                    </a>
                    <a
                        href="#app"
                        className="text-[15px] font-medium text-[#333] hover:text-[var(--primary)] py-1 transition-colors"
                        onClick={(e) => {
                            e.preventDefault();
                            setMenuOpen(false);
                            const element = document.getElementById('app');
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                    >
                        App
                    </a>
                    <a
                        href="#specs"
                        className="text-[15px] font-medium text-[#333] hover:text-[var(--primary)] py-1 transition-colors"
                        onClick={(e) => {
                            e.preventDefault();
                            setMenuOpen(false);
                            const element = document.getElementById('specs');
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                    >
                        Specs
                    </a>
                </div>
            </div>
        </nav>
    );
}
