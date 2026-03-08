import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

/* ── Particle sphere ─────────────────────────────────── */
function ParticleSphere() {
    const ref = useRef();
    const count = 4000;

    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            // distribute uniformly on a sphere shell + slight depth variance
            const r = 4 + (Math.random() - 0.5) * 2;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            pos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
            pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            pos[i * 3 + 2] = r * Math.cos(phi);
        }
        return pos;
    }, []);

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        ref.current.rotation.x = t * 0.04;
        ref.current.rotation.y = t * 0.07;
    });

    return (
        <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color="#ff1a1a"
                size={0.022}
                sizeAttenuation
                depthWrite={false}
                opacity={0.75}
            />
        </Points>
    );
}

/* ── Inner ring ──────────────────────────────────────── */
function Ring({ radius, tube, color, opacity, speedX, speedZ, initialRot }) {
    const ref = useRef();

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        ref.current.rotation.x = initialRot.x + t * speedX;
        ref.current.rotation.z = initialRot.z + t * speedZ;
    });

    return (
        <mesh ref={ref}>
            <torusGeometry args={[radius, tube, 16, 200]} />
            <meshBasicMaterial color={color} transparent opacity={opacity} />
        </mesh>
    );
}

/* ── Floating icosahedron (wireframe) ────────────────── */
function WireIco() {
    const ref = useRef();

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        ref.current.rotation.x = t * 0.15;
        ref.current.rotation.y = t * 0.25;
    });

    return (
        <mesh ref={ref}>
            <icosahedronGeometry args={[1.4, 1]} />
            <meshBasicMaterial color="#ff1a1a" wireframe transparent opacity={0.25} />
        </mesh>
    );
}

/* ── Ambient data dots (random small cloud) ──────────── */
function DataCloud() {
    const ref = useRef();
    const count = 800;

    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3]     = (Math.random() - 0.5) * 14;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 14;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 14;
        }
        return pos;
    }, []);

    useFrame(({ clock }) => {
        ref.current.rotation.y = clock.getElapsedTime() * 0.02;
    });

    return (
        <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color="#ffffff"
                size={0.012}
                sizeAttenuation
                depthWrite={false}
                opacity={0.2}
            />
        </Points>
    );
}

/* ── Scene export (Canvas wrapper) ──────────────────── */
export default function Scene3D() {
    return (
        <Canvas
            camera={{ position: [0, 0, 11], fov: 55 }}
            style={{ background: 'transparent' }}
            gl={{ antialias: true, alpha: true }}
        >
            <DataCloud />
            <ParticleSphere />
            <WireIco />
            <Ring radius={3.2}  tube={0.018} color="#ff1a1a" opacity={0.35} speedX={0.25} speedZ={0.18} initialRot={{ x: 0, z: 0 }} />
            <Ring radius={5.0}  tube={0.012} color="#ff1a1a" opacity={0.2}  speedX={0.12} speedZ={0.28} initialRot={{ x: 1, z: 0.5 }} />
            <Ring radius={6.5}  tube={0.008} color="#ff6b6b" opacity={0.12} speedX={0.08} speedZ={0.15} initialRot={{ x: 0.5, z: 1 }} />
        </Canvas>
    );
}
