import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative w-full min-h-[500px] md:min-h-[600px] lg:h-screen flex items-center bg-gray-900 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/image_01.jpeg" // Using the image showing app + garden
                    alt="PlantFEED Smart Gardening"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
            </div>

            <div className="container-custom relative z-10 text-white py-12 md:py-0">
                <div className="max-w-2xl">
                    <p className="text-[var(--primary-light)] font-semibold tracking-wide uppercase mb-3 md:mb-4 text-xs md:text-sm">
                        Innovations in Smart Gardening
                    </p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
                        Smart control for <br />
                        <span className="text-[var(--primary)]">smarter growth.</span>
                    </h1>
                    <p className="text-base md:text-lg lg:text-xl text-gray-200 mb-6 md:mb-8 max-w-lg text-justify">
                        PlantFEED is an automated plant-feeding device that delivers the perfect balance of water and nutrients to your plants, effortlessly.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                        <Link href="#features" className="btn-primary text-white hover:text-white text-center">
                            Explore Features
                        </Link>
                        <Link href="#contact" className="px-6 py-3 rounded-md border border-white text-white font-medium hover:bg-white/10 transition-colors text-center">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
