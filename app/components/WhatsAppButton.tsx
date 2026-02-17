'use client';

import Image from 'next/image';

export default function WhatsAppButton() {
    const phoneNumber = "94762225555";
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-[9999] group transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Contact us on WhatsApp"
        >
            <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-[var(--primary)] rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>

                <div className="relative bg-[var(--primary)] p-3 rounded-full shadow-[0_2px_8px_rgba(47,133,90,0.35)] hover:shadow-[0_2px_12px_rgba(47,133,90,0.4)] border border-white/20 backdrop-blur-sm transition-all duration-300 group-hover:bg-[var(--primary-hover)]">
                    <Image
                        src="/whatsapp.png"
                        alt="WhatsApp"
                        width={32}
                        height={32}
                        className="w-8 h-8"
                    />
                </div>

                {/* Tooltip */}
                <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1 bg-white text-gray-800 text-sm font-medium rounded-lg shadow-xl opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap">
                    Chat with us
                    <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-white rotate-45"></div>
                </div>
            </div>
        </a>
    );
}
