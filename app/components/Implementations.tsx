import Image from "next/image";

export default function Implementations() {
    const uses = [
        "Cultivations (indoor/outdoor)",
        "Bonsai plants",
        "Landscaped Garden",
        "Hanging plants & planters",
        "Kitchen gardens",
        "Vertical gardens",
        "Balcony Gardens",
        "Live walls & green walls",
        "Terrace & rooftop gardens",
        "Greenhouses & poly tunnels",
        "Office plant decorations",
    ];

    return (
        <section className="section-padding bg-[var(--card)]">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Visual */}
                    <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src="/image_06.webp" // Using a nice product/greenery shot
                            alt="PlantFEED implementations"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                            <p className="text-white text-2xl font-bold">Perfect for any environment</p>
                        </div>
                    </div>

                    {/* List */}
                    <div>
                        <h2 className="h2-title text-[var(--foreground)] mb-8">
                            Versatile Implementations
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {uses.map((use, index) => (
                                <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-[var(--border)]">
                                    <span className="text-[var(--primary)]">●</span>
                                    <span className="font-medium text-[var(--foreground)]">{use}</span>
                                </div>
                            ))}
                            <div className="flex items-center gap-3 p-3 bg-[var(--primary-light)] rounded-lg shadow-sm border border-transparent">
                                <span className="text-[var(--primary)] font-bold">+</span>
                                <span className="font-bold text-[var(--primary)]">and many more...</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
