import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, Stars, MeshDistortMaterial, RoundedBox, TorusKnot } from '@react-three/drei';
import { Code2, Database, Terminal } from 'lucide-react';

const FloatingShapes = () => {
    return (
        <>
            <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
                <TorusKnot position={[-4, 2, -5]} scale={0.5}>
                    <MeshDistortMaterial color="#8b5cf6" speed={2} distort={0.2} roughness={0.1} metalness={0.8} />
                </TorusKnot>
            </Float>
            <Float speed={2} rotationIntensity={2} floatIntensity={1.5}>
                <RoundedBox args={[1, 1, 1]} position={[4, -1, -3]} scale={0.8} radius={0.2}>
                    <meshStandardMaterial color="#10b981" roughness={0.1} metalness={0.8} />
                </RoundedBox>
            </Float>
            <Float speed={1.2} rotationIntensity={1} floatIntensity={2}>
                <mesh position={[-3, -3, -4]} scale={0.6}>
                    <octahedronGeometry args={[1, 0]} />
                    <MeshDistortMaterial color="#f43f5e" speed={1.5} distort={0.1} roughness={0.2} metalness={0.7} />
                </mesh>
            </Float>
            <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
                <mesh position={[3, 3, -6]} scale={0.7}>
                    <icosahedronGeometry args={[1, 0]} />
                    <meshStandardMaterial color="#0ea5e9" roughness={0.2} metalness={0.9} wireframe />
                </mesh>
            </Float>
        </>
    );
};

const Hero = () => {
    return (
        <section id="home" className="min-h-screen relative flex items-center justify-center pt-20 overflow-hidden bg-transparent z-10">
            {/* 3D Floating Shapes Foreground Focus */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
                    <FloatingShapes />
                </Canvas>
            </div>

            <div className="container mx-auto px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1, type: "spring", bounce: 0.4 }}
                    className="max-w-5xl mx-auto backdrop-blur-md bg-[#0f0826]/40 p-10 md:p-16 rounded-[40px] border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative overflow-hidden group"
                >
                    {/* Inner glowing border effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(139,92,246,0.2)]"
                    >
                        <Terminal size={16} className="text-emerald-400" />
                        <span className="text-white/80 font-mono text-sm uppercase tracking-[0.2em] font-bold">
                            Welcome to my universe
                        </span>
                    </motion.div>

                    <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-black text-white mb-6 leading-[1.1] tracking-tighter drop-shadow-2xl">
                        Hi, I'm <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-300 to-emerald-400 filter drop-shadow-[0_0_30px_rgba(169,154,248,0.4)]">Darshan Pawar</span>
                    </h1>

                    <h2 className="text-2xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-10 max-w-3xl mx-auto tracking-tight">
                        A Full-Stack Developer & Backend Specialist
                    </h2>

                    <p className="text-lg md:text-xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
                        I engineer production-ready, highly scalable web applications using the MERN stack. Armed with strong CS fundamentals and a relentless passion for Data Structures & Algorithms.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button
                            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                            className="w-full sm:w-auto bg-gradient-to-r from-primary to-indigo-600 hover:from-primaryDark hover:to-indigo-700 text-white px-10 py-5 rounded-full font-bold transition-all duration-300 text-xl shadow-[0_0_40px_rgba(139,92,246,0.6)] hover:shadow-[0_0_60px_rgba(139,92,246,0.9)] hover:-translate-y-1 flex items-center justify-center gap-3 group/btn border border-white/10"
                        >
                            <Code2 size={24} className="group-hover/btn:rotate-12 transition-transform" />
                            View Portfolio
                        </button>
                        <a
                            href="https://drive.google.com/file/d/1SXTIXESER9A3giSz0imLbXZ4PeiFw1f6/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-300 rounded-full border border-white/20 hover:border-emerald-400/80 hover:bg-emerald-400/10 hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] hover:-translate-y-1 gap-3 overflow-hidden group/link text-xl backdrop-blur-md"
                        >
                            <Database size={24} className="group-hover/link:text-emerald-400 transition-colors" />
                            <span className="relative z-10">Download Resume</span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
