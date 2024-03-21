'use client';
import React, { useEffect, useRef } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { OrbitControls, Outlines} from  "@react-three/drei";
import { color, useMotionValue, useSpring } from 'framer-motion';
import { motion } from 'framer-motion-3d'


export default function index() {

    return (
        <div className="h-full">
            <div className="h-[100%]">
            <Canvas style={{ height: "100%" }}>
                <OrbitControls enableZoom={false} enablePan={false}/>
                <ambientLight intensity={1}/>
                <directionalLight position={[2, 1, 1]}/>
                <Outlines></Outlines>
                <Cube/>
            </Canvas>
            </div>
        </div>
    )
}

function Cube() {

    const options = {damping: 20}
    const mouse = {
    x: useSpring(useMotionValue(0), options),
    y: useSpring(useMotionValue(0), options)

    }

    // const manageMouseMove = (e) => {
    //     const { innerWidth, innerHeight } = window;
    //     const { clientX, clientY } = e;
    //     const multiplier = 0.5;
    //     const x = (-0.5 + clientX / innerWidth) * multiplier;
    //     const y = (-0.5 + clientY / innerHeight) * multiplier;
    //     mouse.x.set(x)
    //     mouse.y.set(y)

    // }

    const manageMouseMove = (e) => {
        const { innerWidth, innerHeight } = window;
        const { clientX, clientY } = e;
        const multiplier = 0.5;
        const x = (-0.5 + clientX / innerWidth) * multiplier;
        const y = (-0.5 + clientY / innerHeight) * multiplier;

    }

    useEffect( () => {
    window.addEventListener('mousemove', manageMouseMove)
    return () => window.removeEventListener('mousemove', manageMouseMove)
    }, [])

    const mesh = useRef(null);

    useFrame((state, delta) => {
        mesh.current.rotation.x += delta * 0.15
        mesh.current.rotation.y += delta * 0.15
        mesh.current.rotation.z += delta * 0.15
    })

    // const texture_1 = useLoader(TextureLoader, '/images/developerbox.png')

    return (
        <motion.mesh ref={mesh} rotation-x={mouse.y} rotation-y={mouse.x}>
            <boxGeometry args={[2.5, 2.5, 2.5]}/>
            <meshStandardMaterial color="#22C55E" />
            {/* <meshStandardMaterial map={texture_1} /> */}
        </motion.mesh>
    )
}