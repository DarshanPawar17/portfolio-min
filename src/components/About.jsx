import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 relative">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left Side - Text Context */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2"
                    >
                        <span className="text-primary font-semibold tracking-wide mb-3 block text-sm">About Me</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                            Full-Stack Developer & <br />Data Enthusiast
                        </h2>

                        <p className="text-textMuted mb-6 leading-relaxed text-lg">
                            Hi, I'm Darshan Pawar, a passionate Full-Stack Developer specializing in MERN, Next.js, and REST APIs. Currently pursuing my BTech in Information Technology at IIIT Sonepat (CGPA: 8.09), I combine solid software engineering principles with top-tier problem-solving abilities.
                        </p>

                        <p className="text-textMuted mb-8 leading-relaxed text-lg">
                            Beyond building production-ready web applications, I have a deep passion for Data Structures and Algorithms. With over 500+ problems solved across platforms and a Top 15% global ranking on LeetCode, I bring highly optimized, scalable solutions to complex backend architectures.
                        </p>

                        <button className="bg-primary hover:bg-primaryDark text-textDark px-8 py-3.5 rounded-xl font-bold transition-all duration-300 text-lg mt-4">
                            Learn More
                        </button>
                    </motion.div>

                    {/* Right Side - Image/Illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="relative">
                            {/* Decorative background element behind image */}
                            <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full transform -translate-x-4 translate-y-4 -z-10"></div>

                            <motion.div
                                animate={{
                                    y: [0, -25, 0],
                                    rotateZ: [0, 2, 0],
                                    rotateX: [0, 15, 0],
                                    rotateY: [0, 15, 0]
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                style={{ perspective: 1000, transformStyle: "preserve-3d" }}
                                className="p-2 rounded-2xl overflow-hidden aspect-[4/5] object-cover relative shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                            >
                                <img
                                    src="/abstract_about.png"
                                    alt="Abstract Server Stack"
                                    className="w-full h-full object-cover rounded-tl-xl rounded-bl-xl rounded-br-xl rounded-tr-[80px]"
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
