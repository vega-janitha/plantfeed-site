'use client';

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer id="contact" className="bg-[var(--foreground)] text-white py-12 border-t border-[var(--border)]">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div className="flex flex-col gap-4">
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className="flex items-center gap-2 w-fit cursor-pointer"
                        >
                            <Image
                                src="/logo.svg"
                                alt="PlantFEED Logo"
                                width={40}
                                height={40}
                                className="h-10 w-auto brightness-0 invert"
                            />
                            {/* <span className="text-xl font-bold">PlantFEED</span> */}
                        </a>
                        <p className="text-gray-400 text-sm max-w-xs text-justify">
                            Smarter gardening solutions for a greener future. Effortless nutrition and hydration for your plants.
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-lg font-semibold text-white">Contact Us</h3>
                        <div className="flex flex-col gap-3 text-gray-300">
                            <a
                                href="tel:+94762225555"
                                className="flex items-center gap-2 hover:text-[var(--primary)] transition-colors w-fit group"
                            >
                                <img
                                    src="https://img.icons8.com/ios-filled/50/FFFFFF/phone.png"
                                    alt="Phone"
                                    className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity"
                                />
                                <span>+94 76 222 5555</span>
                            </a>
                            <a
                                href="https://www.facebook.com/share/1G7qjR3AYv/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:text-[var(--primary)] transition-colors w-fit group"
                            >
                                <img
                                    src="https://img.icons8.com/ios-filled/50/FFFFFF/facebook-new.png"
                                    alt="Facebook"
                                    className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity"
                                />
                                <span>PlantFEED</span>
                            </a>
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=Trace+Expert+City+AC19+Colombo+01000"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:text-[var(--primary)] transition-colors w-fit group"
                            >
                                <img
                                    src="https://img.icons8.com/ios-filled/50/FFFFFF/marker.png"
                                    alt="Location"
                                    className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity"
                                />
                                <span className="text-sm">Trace Expert City, AC19, <br />Colombo 01000</span>
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                        <div className="flex flex-col gap-2">
                            <Link href="#features" className="text-gray-400 hover:text-white transition-colors">Features</Link>
                            <Link href="#app" className="text-gray-400 hover:text-white transition-colors">App</Link>
                            <Link href="#specs" className="text-gray-400 hover:text-white transition-colors">Specifications</Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} PlantFEED. All rights reserved.
                    </p>
                    <div className="text-sm text-gray-500">
                        Made in Sri Lanka
                    </div>
                </div>
            </div>
        </footer>
    );
}
