export default function Features() {
    const features = [
        {
            title: "Automated Watering & Fertilizer",
            description: "Delivers the exact amount of water and fertilizer according to your schedule.",
            icon: (
                <svg className="w-12 h-12 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
        {
            title: "Nutrient Dosing Control",
            description: "Mixes nutrients to the ideal ratio every time for optimal plant health.",
            icon: (
                <svg className="w-12 h-12 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            ),
        },
        {
            title: "Mobile App Control",
            description: "Control the machine from anywhere in the world via the PlantFEED app.",
            icon: (
                <svg className="w-12 h-12 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            ),
        },
        {
            title: "No Wi-Fi? No Problem",
            description: "Choose either Wi-Fi or GSM connectivity for reliable operation.",
            icon: (
                <svg className="w-12 h-12 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414" />
                </svg>
            ),
        },
    ];

    return (
        <section id="features" className="section-padding bg-[var(--card)]">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="h2-title text-[var(--foreground)] mb-4">Feature Overview</h2>
                    <p className="max-w-2xl mx-auto text-lg text-[var(--muted)] text-justify md:text-center">
                        Discover how each feature of PlantFEED works together to make plant care effortless, efficient, and effective.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-[var(--border)]">
                            <div className="mb-6">{feature.icon}</div>
                            <h3 className="text-xl font-bold text-[var(--foreground)] mb-3">{feature.title}</h3>
                            <p className="text-[var(--muted)] text-justify">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
