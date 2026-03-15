import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const Background = () => {
    return (
        <div className="fixed inset-0 z-[-50] pointer-events-none bg-[#030014]">
            {/* 3D Starfield Background */}
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
                <pointLight position={[-10, 0, -5]} intensity={2} color="#8b5cf6" />
                <pointLight position={[10, -5, 0]} intensity={2} color="#10b981" />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0.5} fade speed={1} />
            </Canvas>

            {/* Glowing Orbs for ambiance */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
            
            {/* Vignette & Grain Overlay for Premium Feel */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030014_100%)] opacity-80 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        </div>
    );
};

export default Background;
