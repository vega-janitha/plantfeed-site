export default function Sustainability() {
    const items = [
        {
            title: "Resource Efficiency",
            description: "Uses water, nutrients, and energy efficiently to reduce waste while maximizing plant health.",
            icon: "🌱"
        },
        {
            title: "Electricity Conservation",
            description: "Delivers water slowly and directly to plant roots, reducing pump energy.",
            icon: "⚡"
        },
        {
            title: "Soil Health",
            description: "Soil becomes nutrient-enriched in home gardens.",
            icon: "🌿"
        },
        {
            title: "Water Conservation",
            description: "Drip irrigation systems minimize water use up to 60%.",
            icon: "💧"
        }
    ];

    return (
        <section className="section-padding bg-[var(--primary)] text-white">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="h2-title mb-4">Promoting Sustainable Gardening</h2>
                    <p className="max-w-2xl mx-auto text-lg text-white/80 text-justify md:text-center">
                        PlantFEED isn&apos;t just about convenience; it&apos;s about growing responsibly.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {items.map((item, index) => (
                        <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
                            <div className="text-4xl mb-4">{item.icon}</div>
                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-white/80 text-justify">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
