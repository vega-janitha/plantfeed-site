"use client";

import { useGLTF } from "@react-three/drei";
import type React from "react";
import { useRef } from "react";
import { Group } from "three";

export default function PlantModel(props: React.ComponentProps<"group">) {
    const group = useRef<Group>(null);
    // Ensure the path matches where the file is located in the public folder
    const { scene } = useGLTF("/plant_feed.glb");

    return (
        <group ref={group} {...props} dispose={null}>
            <primitive object={scene} />
        </group>
    );
}

useGLTF.preload("/plant_feed.glb");
