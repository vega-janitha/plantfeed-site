"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useProgress } from "@react-three/drei";

const PlantViewer = dynamic(() => import("./3d/PlantViewer"), {
    ssr: false,
    loading: () => (
        <div className="flex items-center justify-center w-full h-full min-h-[400px] md:min-h-[500px] bg-gray-50 rounded-2xl">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--primary)]"></div>
        </div>
    ),
});

function ModelLoadingOverlay({
    onLoaded,
}: {
    onLoaded: () => void;
}) {
    const { progress, active } = useProgress();

    useEffect(() => {
        if (!active && progress >= 99) {
            onLoaded();
        }
    }, [active, progress, onLoaded]);

    const displayProgress = Math.round(Math.min(100, progress));

    return (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white/95 backdrop-blur-sm">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-4 border-[var(--primary-light)] border-t-[var(--primary)] animate-spin mb-8" />
            <p className="text-[var(--foreground)] font-semibold text-lg md:text-xl mb-1">
                Loading model...
            </p>
            <p className="text-[var(--primary)] font-bold text-3xl md:text-4xl mb-6 tabular-nums transition-all duration-150">
                {displayProgress}%
            </p>
            <div className="w-full max-w-xs h-2.5 bg-[var(--primary-light)] rounded-full overflow-hidden">
                <div
                    className="h-full bg-[var(--primary)] rounded-full transition-all duration-300 ease-out"
                    style={{ width: `${displayProgress}%` }}
                />
            </div>
        </div>
    );
}

export default function PlantShowcase() {
    const [isInteracting, setIsInteracting] = useState(false);
    const [isModelLoaded, setIsModelLoaded] = useState(false);

    return (
        <section className="section-padding bg-gray-50 overflow-hidden">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
                        See It In Action
                    </h2>
                    <p className="text-[var(--muted)] max-w-2xl mx-auto">
                        Explore our smart plant monitoring system in 3D. Rotate and zoom to
                        see every detail.
                    </p>
                </div>

                <div className="relative w-full max-w-5xl mx-auto bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden aspect-[4/3] min-h-[350px] md:min-h-[500px]">
                    {!isInteracting ? (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 z-10 p-4">
                            <div className="absolute inset-0 rounded-xl overflow-hidden">
                                <Image
                                    src="/image_07.webp"
                                    alt="3D Plant Model Preview"
                                    fill
                                    className="object-cover opacity-60 blur-sm"
                                />
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/10">
                                    <button
                                        onClick={() => setIsInteracting(true)}
                                        className="bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-bold py-4 px-10 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 flex items-center gap-3 z-20 text-sm md:text-base mb-2"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 md:h-6 md:w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        Experience Interactive 3D
                                    </button>
                                    <p className="text-white text-xs md:text-sm font-medium drop-shadow-md">Click to load and interact</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="absolute inset-0 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]">
                                <PlantViewer />
                            </div>
                            {!isModelLoaded && (
                                <ModelLoadingOverlay onLoaded={() => setIsModelLoaded(true)} />
                            )}
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}
