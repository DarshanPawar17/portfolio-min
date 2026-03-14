import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = ['Home', 'About', 'Resume', 'Portfolio', 'Specialties'];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-bold flex items-center gap-2">
                    <span className="text-primary italic">✦</span>
                    <span>Darshan.</span>
                </div>

                {/* Desktop Links - Pill Shape wrapper */}
                <div className="hidden md:flex items-center space-x-1 bg-card/60 rounded-full px-6 py-2 border border-white/5 backdrop-blur-sm">
                    {navLinks.map((link) => (
                        link === 'Resume' ? (
                            <a
                                key={link}
                                href="https://drive.google.com/file/d/1SXTIXESER9A3giSz0imLbXZ4PeiFw1f6/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 text-sm text-textMuted hover:text-white transition-colors duration-200"
                            >
                                {link}
                            </a>
                        ) : (
                            <a
                                key={link}
                                href={`#${link.toLowerCase()}`}
                                className="px-4 py-2 text-sm text-textMuted hover:text-white transition-colors duration-200"
                            >
                                {link}
                            </a>
                        )
                    ))}
                </div>

                {/* CTA Button */}
                <button
                    onClick={() => window.location.href = 'mailto:pawardarshan987@gmail.com'}
                    className="hidden md:block bg-primary hover:bg-primaryDark text-textDark px-6 py-2.5 rounded-xl font-bold transition-all duration-300 shadow-none"
                >
                    Hire Me
                </button>
            </div>
        </motion.nav>
    );
};

export default Navbar;
