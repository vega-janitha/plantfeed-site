import Image from "next/image";

export default function AppDisplay() {
    return (
        <section id="app" className="section-padding bg-white overflow-hidden">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
                    <div>
                        <span className="text-[var(--primary)] font-bold tracking-wider uppercase mb-2 block text-xs md:text-sm">
                            PlantFEED App
                        </span>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--foreground)] mb-6 md:mb-8">
                            Complete Control at Your Fingertips
                        </h2>

                        <div className="space-y-6 md:space-y-8">
                            <div className="flex gap-3 md:gap-4">
                                <div className="bg-[var(--primary-light)] p-2.5 md:p-3 rounded-lg h-fit">
                                    <svg className="w-5 h-5 md:w-6 md:h-6 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                                <div>
                                    <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">Scheduling</h3>
                                    <p className="text-sm md:text-base text-[var(--muted)] text-justify">Set precise watering and fertilizing schedules.</p>
                                </div>
                            </div>

                            <div className="flex gap-3 md:gap-4">
                                <div className="bg-[var(--primary-light)] p-2.5 md:p-3 rounded-lg h-fit">
                                    <svg className="w-5 h-5 md:w-6 md:h-6 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11" /></svg>
                                </div>
                                <div>
                                    <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">Manual Control</h3>
                                    <p className="text-sm md:text-base text-[var(--muted)] text-justify">Trigger watering instantly from anywhere.</p>
                                </div>
                            </div>

                            <div className="flex gap-3 md:gap-4">
                                <div className="bg-[var(--primary-light)] p-2.5 md:p-3 rounded-lg h-fit">
                                    <svg className="w-5 h-5 md:w-6 md:h-6 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" /></svg>
                                </div>
                                <div>
                                    <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">Growth Tracking</h3>
                                    <p className="text-sm md:text-base text-[var(--muted)] text-justify">Monitor plant health and progress over time.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        {/* Phone Mockup Background Blob - Shifted to the extreme left for maximum asymmetrical balance */}
                        <div className="absolute top-1/2 left-[5%] -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[350px] md:h-[350px] bg-[var(--primary-light)] rounded-full blur-3xl opacity-50 z-0"></div>

                        {/* Decorative Side Image - Made even bigger and adjusted position */}
                        <div className="absolute -right-20 md:-right-64 top-1/2 -translate-y-1/2 w-64 h-64 md:w-[500px] md:h-[500px] z-0 hidden sm:block">
                            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white rotate-[10deg] opacity-70 hover:rotate-0 hover:opacity-100 transition-all duration-700">
                                <Image
                                    src="/image_11.png"
                                    alt="Planting seeds"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        <div className="relative z-10 flex justify-center">
                            <div className="relative w-[250px] h-[573px] md:w-[300px] md:h-[688px] bg-black rounded-[2.5rem] md:rounded-[3rem] border-[6px] md:border-8 border-gray-900 shadow-2xl overflow-hidden transition-transform duration-500 hover:scale-[1.02]">
                                <Image
                                    src="/mobile_view.png"
                                    alt="PlantFEED App Interface"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
