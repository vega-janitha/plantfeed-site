import Image from "next/image";

export default function ProblemSolution() {
    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                {/* Problem */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-24">
                    <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src="/image_12.webp"
                            alt="Planting seeds"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--foreground)] mb-4 md:mb-6">
                            Have you ever dreamed of a garden surrounded by vibrant greenery?
                        </h2>
                        <div className="space-y-3 md:space-y-4 text-base md:text-lg text-[var(--muted)] text-justify">
                            <p>
                                But do you often forget to water and fertilize them properly?
                            </p>
                            <p>
                                Do you love seeing your plants bloom and bear fruit, but struggle to keep up with regular watering and fertilizing?
                            </p>
                            <p>
                                Busy schedules, travel, and everyday distractions often lead to missed routines, leaving even well-loved plants stressed and undernourished.
                            </p>
                            <p className="font-semibold text-[var(--primary)]">
                                Keeping plants healthy shouldn't require constant attention or reminders anymore!
                            </p>
                        </div>
                    </div>
                </div>

                {/* Solution */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <span className="text-[var(--accent)] font-bold tracking-wider uppercase mb-2 block text-xs md:text-sm">The Solution is Here</span>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--foreground)] mb-4 md:mb-6">
                            Meet PlantFEED
                        </h2>
                        <div className="space-y-3 md:space-y-4 text-base md:text-lg text-[var(--muted)] text-justify">
                            <p>
                                PlantFEED is an automated plant-feeding device designed for home gardens, indoor plantations, greenhouses, and outdoor environments.
                            </p>
                            <p>
                                It delivers the perfect balance of water and nutrients to your plants at the right time, all with <strong>zero hassle</strong>.
                            </p>
                            <ul className="space-y-2 mt-4">
                                <li className="flex items-start gap-3">
                                    <span className="text-[var(--primary)] text-xl flex-shrink-0">✓</span>
                                    <span>Connected to drip irrigation for efficiency.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[var(--primary)] text-xl flex-shrink-0">✓</span>
                                    <span>Fully autonomous operation.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[var(--primary)] text-xl flex-shrink-0">✓</span>
                                    <span>Override/Trigger via mobile app at any time.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-xl order-1 lg:order-2">
                        <Image
                            src="/image_03.webp" // Rooftop garden as the result
                            alt="Thriving rooftop garden"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
