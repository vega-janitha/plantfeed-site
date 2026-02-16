"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Stage, Center } from "@react-three/drei";
import { Suspense } from "react";
import PlantModel from "./PlantModel";

export default function PlantViewer() {
    return (
        <div className="absolute inset-0 w-full h-full">
            <Canvas dpr={[1, 2]} camera={{ fov: 40, position: [0, 0, 5] }} gl={{ antialias: true }}>
                <Suspense fallback={null}>
                    <Stage environment="city" intensity={0.6} adjustCamera={1.2} shadows={false}>
                        <Center precision={0.5}>
                            <PlantModel />
                        </Center>
                    </Stage>
                </Suspense>
                <OrbitControls
                    autoRotate
                    autoRotateSpeed={0.5}
                    makeDefault
                    minDistance={1}
                    maxDistance={15}
                    enableDamping
                    dampingFactor={0.05}
                />
            </Canvas>
        </div>
    );
}
