import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen relative flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Image Setup like Rafid Template */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-20 opacity-30"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80')" }}
            ></div>
            <div className="absolute inset-0 bg-background/80 -z-10"></div>

            <div className="container mx-auto px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <span className="text-primary font-semibold text-xl tracking-wide mb-4 block">
                        Hi, I'm Darshan
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                        A Full-Stack Developer & <br />Backend Specialist
                    </h1>
                    <p className="text-base md:text-lg text-textMuted mb-10 max-w-2xl mx-auto leading-relaxed">
                        I help you to create a professional pixel-perfect, and fully responsive website to get more sales, leads and boost your business. (Specialized in robust backend APIs).
                    </p>

                    <div className="flex items-center justify-center gap-4">
                        <button
                            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-primary hover:bg-primaryDark text-textDark px-8 py-3.5 rounded-xl font-bold transition-all duration-300 text-lg"
                        >
                            View Portfolio
                        </button>
                        <a
                            href="https://drive.google.com/file/d/1SXTIXESER9A3giSz0imLbXZ4PeiFw1f6/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-transparent border border-white/20 hover:bg-white/5 text-white px-8 py-3.5 rounded-xl font-bold transition-all duration-300 text-lg"
                        >
                            Download Resume
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
