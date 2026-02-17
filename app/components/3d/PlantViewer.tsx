"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, Center } from "@react-three/drei";
import { Suspense } from "react";
import PlantModel from "./PlantModel";

export default function PlantViewer({ isVisible = true }: { isVisible?: boolean }) {
    if (!isVisible) {
        return <div className="absolute inset-0 w-full h-full bg-gray-100" aria-hidden />;
    }

    return (
        <div className="absolute inset-0 w-full h-full">
            <Canvas
                dpr={[1, 1.5]}
                camera={{ fov: 40, position: [0, 0, 5] }}
                gl={{
                    antialias: true,
                    powerPreference: "low-power",
                    alpha: false,
                }}
                onCreated={({ gl }) => gl.setClearColor("#ffffff")}
                frameloop="always"
            >
                <Suspense fallback={null}>
                    <Stage
                        environment="city"
                        intensity={0.6}
                        adjustCamera={false}
                        shadows={false}
                    >
                        <Center>
                            <PlantModel scale={3} />
                        </Center>
                    </Stage>
                </Suspense>
                <OrbitControls
                    autoRotate
                    autoRotateSpeed={0.5}
                    makeDefault
                    target={[0, 0, 0]}
                    minDistance={1}
                    maxDistance={15}
                    enableDamping
                    dampingFactor={0.05}
                />
            </Canvas>
        </div>
    );
}

