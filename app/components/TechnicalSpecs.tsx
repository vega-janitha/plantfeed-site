export default function TechnicalSpecs() {
    return (
        <section id="specs" className="section-padding bg-white border-t border-[var(--border)]">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="h2-title text-[var(--foreground)] mb-4">Technical Specifications</h2>
                    <p className="max-w-2xl mx-auto text-lg text-[var(--muted)] text-justify md:text-center">
                        Built for performance and reliability.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto bg-[var(--card)] rounded-xl overflow-hidden shadow-sm border border-[var(--border)]">
                    <table className="w-full text-left border-collapse">
                        <tbody className="divide-y divide-[var(--border)]">
                            <tr className="flex">
                                <th className="p-3 sm:p-4 sm:pl-8 font-semibold text-[var(--foreground)] w-2/5 sm:w-1/3 bg-gray-50 text-sm sm:text-base border-r border-[var(--border)]">Product Name</th>
                                <td className="p-3 sm:p-4 sm:pr-8 text-[var(--muted)] flex-1 text-sm sm:text-base">PlantFEED</td>
                            </tr>
                            <tr className="flex">
                                <th className="p-3 sm:p-4 sm:pl-8 font-semibold text-[var(--foreground)] w-2/5 sm:w-1/3 bg-gray-50 text-sm sm:text-base border-r border-[var(--border)]">Model Name</th>
                                <td className="p-3 sm:p-4 sm:pr-8 text-[var(--muted)] flex-1 text-sm sm:text-base">PlantFEED-Home (VG25001P)</td>
                            </tr>
                            <tr className="flex">
                                <th className="p-3 sm:p-4 sm:pl-8 font-semibold text-[var(--foreground)] w-2/5 sm:w-1/3 bg-gray-50 text-sm sm:text-base border-r border-[var(--border)]">Dimensions</th>
                                <td className="p-3 sm:p-4 sm:pr-8 text-[var(--muted)] flex-1 text-sm sm:text-base">
                                    Main Unit: 560 × 360 × 120 mm<br />
                                    With 40L external bucket: 560 × 360 × 420 mm
                                </td>
                            </tr>
                            <tr className="flex">
                                <th className="p-3 sm:p-4 sm:pl-8 font-semibold text-[var(--foreground)] w-2/5 sm:w-1/3 bg-gray-50 text-sm sm:text-base border-r border-[var(--border)]">Power</th>
                                <td className="p-3 sm:p-4 sm:pr-8 text-[var(--muted)] flex-1 text-sm sm:text-base">
                                    Source: 230V 50Hz<br />
                                    Operating: 65W max<br />
                                    Idle: &lt;5W
                                </td>
                            </tr>
                            <tr className="flex">
                                <th className="p-3 sm:p-4 sm:pl-8 font-semibold text-[var(--foreground)] w-2/5 sm:w-1/3 bg-gray-50 text-sm sm:text-base border-r border-[var(--border)]">Connectivity</th>
                                <td className="p-3 sm:p-4 sm:pr-8 text-[var(--muted)] flex-1 text-sm sm:text-base">2.4 GHz Wi-Fi</td>
                            </tr>
                            <tr className="flex">
                                <th className="p-3 sm:p-4 sm:pl-8 font-semibold text-[var(--foreground)] w-2/5 sm:w-1/3 bg-gray-50 text-sm sm:text-base border-r border-[var(--border)]">Operation Modes</th>
                                <td className="p-3 sm:p-4 sm:pr-8 text-[var(--muted)] flex-1 text-sm sm:text-base text-justify">Scheduled automation (App), Manual control (App/Buttons)</td>
                            </tr>
                            <tr className="flex">
                                <th className="p-3 sm:p-4 sm:pl-8 font-semibold text-[var(--foreground)] w-2/5 sm:w-1/3 bg-gray-50 text-sm sm:text-base border-r border-[var(--border)]">Capacity</th>
                                <td className="p-3 sm:p-4 sm:pr-8 text-[var(--muted)] flex-1 text-sm sm:text-base">
                                    Dripping ends support: 100<br />
                                    Fertilizer flow rate: 100 ml/min
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
