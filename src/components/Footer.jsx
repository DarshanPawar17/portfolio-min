import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="border-t border-white/10 bg-background py-16">
            <div className="container mx-auto px-6 text-center">
                <div className="flex justify-center items-center gap-6 mb-8">
                    <a href="https://github.com/DarshanPawar17" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300">
                        <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/darshan-jagdish-pawar-9b9701298" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300">
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:pawardarshan987@gmail.com" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300">
                        <Mail size={20} />
                    </a>
                </div>

                <p className="text-textMuted text-sm">
                    © {new Date().getFullYear()} Darshan Pawar. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
