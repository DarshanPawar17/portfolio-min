import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Float, Stars, ContactShadows, Environment } from '@react-three/drei';

// A super cool 3D F1 Car model that the user can drag around
const F1Car = () => {
    // Load the GLTF model
    const { scene } = useGLTF('/f1_car.glb');

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <primitive
                object={scene}
                scale={150}
                position={[0, -1, 0]}
                rotation={[0, -Math.PI / 4, 0]}
            />
        </Float>
    );
};

const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px] -z-10 animate-pulse delay-1000"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left Side - Text Context (More vibrant and animated) */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-primary font-bold tracking-[0.2em] mb-4 block text-sm uppercase drop-shadow-[0_0_10px_rgba(169,154,248,0.5)]">
                                About Me
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-primary mb-8 leading-tight drop-shadow-md">
                                Full-Stack Developer & <br />Data Enthusiast
                            </h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-white/5 backdrop-blur-md border-l-4 border-primary p-6 md:p-8 rounded-r-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:bg-white/10 transition-colors duration-500 mb-6"
                        >
                            <p className="text-white/90 leading-relaxed text-lg">
                                Hi, I'm Darshan Pawar, a passionate Full-Stack Developer specializing in MERN, Next.js, and REST APIs. Currently pursuing my BTech in Information Technology at IIIT Sonepat (CGPA: 8.09), I combine solid software engineering principles with top-tier problem-solving abilities.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="bg-white/5 backdrop-blur-md border-l-4 border-blue-400 p-6 md:p-8 rounded-r-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:bg-white/10 transition-colors duration-500 mb-8"
                        >
                            <p className="text-white/90 leading-relaxed text-lg">
                                Beyond building scalable web applications, I have a deep passion for Data Structures and Algorithms. With over 500+ problems solved across platforms and a Top 15% global ranking on LeetCode, I excel at applying core CS fundamentals—like OS, DBMS, and Computer Networks—to optimize complex backend architectures.
                            </p>
                        </motion.div>

                        <motion.button
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-gradient-to-r from-primary to-indigo-600 hover:from-primaryDark hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-bold shadow-[0_0_20px_rgba(169,154,248,0.4)] hover:shadow-[0_0_40px_rgba(169,154,248,0.6)] transition-all duration-300 text-lg group"
                        >
                            <span className="group-hover:text-white transition-colors">See My Work</span>
                        </motion.button>
                    </div>

                    {/* Right Side - Interactive 3D Model */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, type: "spring" }}
                        className="w-full lg:w-1/2 h-[500px] lg:h-[600px] relative group cursor-grab active:cursor-grabbing rounded-3xl overflow-hidden bg-card/20 border border-white/5 shadow-2xl backdrop-blur-sm"
                    >
                        {/* Text overlay hint */}
                        <div className="absolute top-6 w-full text-center z-20 pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="bg-black/50 text-white text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full backdrop-blur-md border border-white/10 shadow-[0_0_15px_rgba(169,154,248,0.3)]">
                                Drag to Rotate 3D Object
                            </span>
                        </div>

                        {/* Interactive Canvas */}
                        <div className="absolute inset-0 z-10 block">
                            <Canvas camera={{ position: [0, 2, 8], fov: 45 }}>
                                <ambientLight intensity={0.5} />
                                <directionalLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" castShadow />
                                <pointLight position={[-10, -10, -10]} intensity={2} color="#A99AF8" />
                                <Environment preset="city" />
                                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                                <F1Car />
                                <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={10} blur={2} far={4} />
                                <OrbitControls
                                    enableZoom={false}
                                    autoRotate
                                    autoRotateSpeed={2}
                                    maxPolarAngle={Math.PI / 2 + 0.1}
                                    minPolarAngle={Math.PI / 3}
                                />
                            </Canvas>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
